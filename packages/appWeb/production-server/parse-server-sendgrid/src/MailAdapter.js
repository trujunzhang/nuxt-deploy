"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  Mail Adapter prototype
  A MailAdapter should implement at least sendMail()
 */
class MailAdapter {
    constructor(options) {
        this.options = options;
    }
    /*
     * A method for sending mail
     * @param options would have the parameters
     * - to: the recipient
     * - text: the raw text of the message
     * - subject: the subject of the email
     */
    sendMail(options) { }
    sendVerificationEmail({ link, appName, user }) { }
    sendPasswordResetEmail({ link, appName, user }) { }
}
exports.MailAdapter = MailAdapter;
