import { BaseDefine } from '../baseDefine'

const cloudEmailTemplateSubjects = {
  // userEmailTemplates:
  passwordResetEmail: 'Forgot Your Password on IEATTA?',
  // userProfileEmailTemplates:
  invite_friends: 'Invite: join the IEATTA!'
}

// https://codeburst.io/accessing-the-mailchimp-api-with-a-proxy-server-and-a-static-react-app-part-1-dd07329f1155
export class SendEmails extends BaseDefine {
  async handler(request) {
    const templateName = request.params.templateName
    const toEmail = request.params.toEmail
    const variables = request.params.variables
    const subject = cloudEmailTemplateSubjects[templateName]
    const fromEmail = 'IEATTA <trujunzhang@gmail.com>'
    // Get access to Parse Server's cache
    const { AppCache } = require('parse-server/lib/cache')
    // Get a reference to the SendGridAdapter
    // NOTE: It's best to do this inside the Parse.Cloud.define(...) method body and not at the top of your file with your other imports. This gives Parse Server time to boot, setup cloud code and the email adapter.
    const SendGridAdapter = AppCache.get('YJ60VCiTAD01YOA3LJtHQlhaLjxiHSsv4mkxKvVM').userController
      .adapter
    // Invoke the send method with an options object

    const promise = SendGridAdapter.send({
      templateName,
      // Optional override of your configuration's subject
      subject,
      fromAddress: fromEmail,
      // Optional override of the adapter's fromAddress
      recipient: toEmail,
      variables,
      // {{alert}} will be compiled to 'New posts'
      // variables: {alert: 'New posts'},// {{alert}} will be compiled to 'New posts'
      // Additional message fields can be included with the "extra" option
      // See https://nodemailer.com/extras/mailcomposer/#e-mail-message-fields for an overview of what can be included
      extra: {
        attachments: [],
        replyTo: 'reply-to-address'
      }
    })

    return await promise
      .then((result) => {
        return 'Sent email successfully!'
      })
      .catch((eror) => {
        if (!!eror) {
          throw new Error('Sent email failure!')
        }
      })
  }
}
