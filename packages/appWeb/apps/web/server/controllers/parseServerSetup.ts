import * as Express from 'express'

import { twitterConfig } from '@app/types'

import { SendGridAdapter } from '../parse-server-sendgrid/src'
import { IServerHelper } from '@app/tools'

// Parse Server
const ParseServer = require('parse-server').ParseServer

export class ParseServerSetup {
  private serverHelper: IServerHelper

  constructor(serverHelper: IServerHelper) {
    this.serverHelper = serverHelper
  }

  setup(server: Express.Application) {
    const parseServerConfig = this.getParseServerConfigure()
    const api = new ParseServer(parseServerConfig)
    // Serve the Parse API on the /parse URL prefix
    const mountPath = process.env.PARSE_MOUNT || '/parse'
    server.use(mountPath, api)
  }

  private generateEmailTemplates() {
    const resolve = (path: string) => {
      return this.serverHelper.resolve(path)
    }

    const userEmailTemplates = {
      passwordResetEmail: {
        subject: 'Forgot Your Password on IEATTA?',
        pathPlainText: resolve('email-templates/resetPassUser.txt'),
        pathHtml: resolve('email-templates/resetPassUser.html'),
        callback: (user) => {
          return {
            username: user.get('username')
          }
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
          }
        }
        // Now you can use {{firstName}} in your templates
      },
      verifyRemoveUser: {
        subject: 'Verify Your Request for Account Deletion',
        pathPlainText: resolve('email-templates/verifyRemoveUser.txt'),
        pathHtml: resolve('email-templates/verifyRemoveUser.html')
      }
    }

    const userProfileEmailTemplates = {
      invite_friends: {
        subject: 'Invite: join the IEATTA!',
        pathPlainText: resolve('email-templates/invite_friends.txt'),
        pathHtml: resolve('email-templates/invite_friends.html')
      }
    }

    return {
      ...userEmailTemplates,
      ...userProfileEmailTemplates
    }
  }

  private getEmailAdapter() {
    return new SendGridAdapter({
      // The address that your emails come from
      fromAddress: 'trujunzhang@gmail.com',
      // Your API key from sendgrid.com
      apiKey: process.env.SENDGRID_API_KEY,
      // The template section
      templates: this.generateEmailTemplates()
    })
  }

  private getParseServerConfigure() {
    const databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI
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
    }
    const parseConfig = {
      publicServerURL: process.env.PUBLIC_SERVER_URL,
      databaseURI: databaseUri,
      serverURL: process.env.SERVER_URL
    }
    const config: any = {
      auth: {
        twitter: {
          consumer_key: twitterConfig.consumerKey,
          consumer_secret: twitterConfig.consumerSecret // REQUIRED
        } // From what I can see in the src, no options needed
      },
      logLevel: 'VERBOSE',
      ...commonConfigure,
      ...parseConfig
    }
    return config
  }
}
