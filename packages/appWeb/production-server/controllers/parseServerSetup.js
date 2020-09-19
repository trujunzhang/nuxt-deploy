"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@app/types");
const src_1 = require("../parse-server-sendgrid/src");
// Parse Server
const ParseServer = require('parse-server').ParseServer;
class ParseServerSetup {
    constructor(serverHelper) {
        this.serverHelper = serverHelper;
    }
    setup(server) {
        const parseServerConfig = this.getParseServerConfigure();
        const api = new ParseServer(parseServerConfig);
        // Serve the Parse API on the /parse URL prefix
        const mountPath = process.env.PARSE_MOUNT || '/parse';
        server.use(mountPath, api);
    }
    generateEmailTemplates() {
        const resolve = (path) => {
            return this.serverHelper.resolve(path);
        };
        const userEmailTemplates = {
            passwordResetEmail: {
                subject: 'Forgot Your Password on IEATTA?',
                pathPlainText: resolve('email-templates/resetPassUser.txt'),
                pathHtml: resolve('email-templates/resetPassUser.html'),
                callback: (user) => {
                    return {
                        username: user.get('username')
                    };
                }
                // Now you can use {{firstName}} in your templates
            },
            verificationEmail: {
                subject: 'Verify Your Email for IEATTA.com',
                pathPlainText: resolve('email-templates/verification_email.txt'),
                pathHtml: resolve('email-templates/verification_email.html'),
                callback: (user) => {
                    return {
                        username: user.get('username'),
                        homepage: 'https://ieatta.com',
                        token: user.get('_email_verify_token')
                    };
                }
                // Now you can use {{firstName}} in your templates
            },
            verifyRemoveUser: {
                subject: 'Verify Your Request for Account Deletion',
                pathPlainText: resolve('email-templates/verifyRemoveUser.txt'),
                pathHtml: resolve('email-templates/verifyRemoveUser.html')
            }
        };
        const userProfileEmailTemplates = {
            invite_friends: {
                subject: 'Invite: join the IEATTA!',
                pathPlainText: resolve('email-templates/invite_friends.txt'),
                pathHtml: resolve('email-templates/invite_friends.html')
            }
        };
        return Object.assign(Object.assign({}, userEmailTemplates), userProfileEmailTemplates);
    }
    getEmailAdapter() {
        return new src_1.SendGridAdapter({
            // The address that your emails come from
            fromAddress: 'trujunzhang@gmail.com',
            // Your API key from sendgrid.com
            apiKey: process.env.SENDGRID_API_KEY,
            // The template section
            templates: this.generateEmailTemplates()
        });
    }
    getParseServerConfigure() {
        const databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;
        const commonConfigure = {
            appName: 'IEATTA',
            appId: 'YJ60VCiTAD01YOA3LJtHQlhaLjxiHSsv4mkxKvVM',
            clientKey: 'QMGWgF0PPgsFQsgwlKoDurVX65ZG5O0ifzdAtZ0D',
            restAPIKey: 'gQTEnIKaDWgZ4UiUZGQqN7qkkvtMCOobQEIb1kYy',
            javascriptKey: '3S9VZj8y9g0Tj1WS64dl19eDJrEVpvckG7uhcXIi',
            masterKey: '87rxX8J0JwaaPSBxY9DdKJEqWXByqE7sShRsX4vg',
            cloud: process.env.CLOUD_CODE_MAIN || this.serverHelper.getCloudPath(),
            liveQuery: {
                classNames: []
            },
            verifyUserEmails: false,
            emailAdapter: this.getEmailAdapter()
        };
        const parseConfig = {
            publicServerURL: process.env.PUBLIC_SERVER_URL,
            databaseURI: databaseUri,
            serverURL: process.env.SERVER_URL
        };
        const config = Object.assign(Object.assign({ auth: {
                twitter: {
                    consumer_key: types_1.twitterConfig.consumerKey,
                    consumer_secret: types_1.twitterConfig.consumerSecret // REQUIRED
                } // From what I can see in the src, no options needed
            }, logLevel: 'VERBOSE' }, commonConfigure), parseConfig);
        return config;
    }
}
exports.ParseServerSetup = ParseServerSetup;
