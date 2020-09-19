"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mustache = require('mustache');
const co = require('co');
const fs = require('fs');
const MailAdapter_1 = require("./MailAdapter");
const sendgrid = require('@sendgrid/mail');
const ERRORS = {
    missing_configuration: 'SendGridAdapter requires configuration.',
    missing_mailgun_settings: 'SendGridAdapter requires valid API Key, domain and fromAddress.',
    bad_template_config: 'SendGridAdapter templates are not properly configured.',
    invalid_callback: 'SendGridAdapter template callback is not a function.',
    invalid_template_name: 'Invalid options object: missing templateName'
};
/**
 * https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail
 *
 * Like 'parse-server-mailgun'.
 * https://github.com/sebsylvester/parse-server-mailgun.git
 *
 * MailAdapter implementation used by the Parse Server to send
 * password reset and email verification emails though SendGrid
 * @classnpm install --save-dev babel-preset-es2015-node
 */
class SendGridAdapter extends MailAdapter_1.MailAdapter {
    constructor(options) {
        if (!options) {
            throw new Error(ERRORS.missing_configuration);
        }
        super(options);
        const { apiKey, fromAddress } = options;
        if (!apiKey || !fromAddress) {
            throw new Error(ERRORS.missing_mailgun_settings);
        }
        const { templates } = options;
        if (!templates || Object.keys(templates).length === 0) {
            throw new Error(ERRORS.bad_template_config);
        }
        for (const name in templates) {
            const { subject, pathPlainText, callback } = templates[name];
            if (typeof subject !== 'string' || typeof pathPlainText !== 'string') {
                throw new Error(ERRORS.bad_template_config);
            }
            if (callback && typeof callback !== 'function') {
                throw new Error(ERRORS.invalid_callback);
            }
        }
        sendgrid.setApiKey(apiKey);
        this.fromAddress = fromAddress;
        this.templates = templates;
        this.cache = {};
    }
    /**
     * Method to send MIME emails via SendGrid
     * @param {Object} options
     * @returns {Promise}
     */
    _sendMail(options) {
        let templateVars;
        let message;
        const selectedTemplate = {};
        const templateName = (selectedTemplate.name = options.templateName);
        if (!templateName) {
            throw new Error(ERRORS.invalid_template_name);
        }
        const template = (selectedTemplate.config = this.templates[templateName]);
        if (!template) {
            throw new Error(`Could not find template with name ${templateName}`);
        }
        // The adapter is used directly by the user's code instead via Parse Server
        if (options.direct) {
            const { subject, fromAddress, recipient, variables, extra } = options;
            if (!recipient) {
                throw new Error(`Cannot send email with template ${templateName} without a recipient`);
            }
            templateVars = variables || {};
            message = Object.assign({
                from: fromAddress || this.fromAddress,
                to: recipient,
                subject: subject || template.subject
            }, extra || {});
        }
        else {
            const { link, appName, user } = options;
            const { callback } = template;
            let userVars;
            if (callback && typeof callback === 'function') {
                userVars = callback(user);
                userVars = this._validateUserVars(userVars);
            }
            templateVars = Object.assign({
                link,
                appName,
                username: user.get('username'),
                email: user.get('email')
            }, userVars);
            message = {
                from: this.fromAddress,
                to: user.get('email'),
                subject: template.subject
            };
        }
        const args = { templateVars, message, selectedTemplate };
        return co(this._mailGenerator.bind(this, args)).catch((e) => console.error(e));
    }
    /**
     * Generator function that handles that handles all the async operations:
     * template loading, MIME string building and email sending.
     */
    *_mailGenerator(args) {
        // let compiled
        const { config: template, name: templateName } = args.selectedTemplate;
        const { message, templateVars } = args;
        const pathPlainText = template.pathPlainText;
        const pathHtml = template.pathHtml;
        const cachedTemplate = (this.cache[templateName] = this.cache[templateName] || {});
        // Load plain-text version
        // tslint:disable-next-line:no-string-literal
        if (!cachedTemplate['text']) {
            let plainTextEmail = yield this._loadEmailTemplate(pathPlainText);
            plainTextEmail = plainTextEmail.toString('utf8');
            // tslint:disable-next-line:no-string-literal
            cachedTemplate['text'] = plainTextEmail;
        }
        // Compile plain-text template
        // tslint:disable-next-line:no-string-literal
        message.text = Mustache.render(cachedTemplate['text'], templateVars);
        // Load html version if available
        if (pathHtml) {
            // tslint:disable-next-line:no-string-literal
            if (!cachedTemplate['html']) {
                const htmlEmail = yield this._loadEmailTemplate(pathHtml);
                // tslint:disable-next-line:no-string-literal
                cachedTemplate['html'] = htmlEmail.toString('utf8');
            }
            // Add processed HTML to the message object
            // tslint:disable-next-line:no-string-literal
            message.html = Mustache.render(cachedTemplate['html'], templateVars);
        }
        // Assemble payload object for SendGrid.
        const payload = {
            to: message.to,
            from: message.from,
            fromname: 'politil.com',
            subject: message.subject,
            // html: mimeString.toString('utf8')
            html: message.html
        };
        return new Promise((resolve, reject) => {
            sendgrid
                .send(payload)
                .then((result) => {
                resolve(result);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * sendMail wrapper to send an email with password reset link
     * The options object would have the parameters link, appName, user
     * @param {Object} options
     * @returns {Promise}
     */
    sendPasswordResetEmail({ link, appName, user }) {
        return this._sendMail({
            templateName: 'passwordResetEmail',
            link,
            appName,
            user
        });
    }
    /**
     * sendMail wrapper to send an email with an account verification link
     * The options object would have the parameters link, appName, user
     * @param {Object} options
     * @returns {Promise}
     */
    sendVerificationEmail({ link, appName, user }) {
        return this._sendMail({
            templateName: 'verificationEmail',
            link,
            appName,
            user
        });
    }
    /**
     * sendMail wrapper to send general purpose emails
     * The options object would have the parameters:
     * - templateName: name of template to be used
     * - subject: overrides the default value
     * - fromAddress: overrides the default from address
     * - recipient: email's recipient
     * - variables: An object whose property names represent template variables,
     *              and whose values will replace the template variable placeholders
     * @param {Object} options
     * @returns {Promise}
     */
    send({ templateName, subject, fromAddress, recipient, variables, extra }) {
        return this._sendMail({
            templateName,
            subject,
            fromAddress,
            recipient,
            variables,
            extra,
            direct: true
        });
    }
    /**
     * Simple Promise wrapper to asynchronously fetch the contents of a template.
     * @param {String} path
     * @returns {Promise}
     */
    // tslint:disable-next-line:no-shadowed-variable
    _loadEmailTemplate(path) {
        return new Promise((resolve, reject) => {
            fs.readFile(path, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
    /**
     * Validator for user provided template variables
     * @param {Object} userVars
     * @returns {Object}
     */
    _validateUserVars(userVars) {
        const validUserVars = userVars && userVars.constructor === Object;
        // Fall back to an empty object if the callback did not return an Object instance
        return validUserVars ? userVars : {};
    }
}
exports.SendGridAdapter = SendGridAdapter;
