import { SendEmails } from './sendEmails'

import { ParseObjects } from '@appModels/index'

import * as Types from '@app/types'

export class CommonHelper {
  static getClouldObject(methodType: string, params: any) {
    let methodName = ''
    let extendProps = {}
    const item: any = ParseObjects.parseCloudMethodNames[methodType]
    if (typeof item === 'object') {
      methodName = item.name
      extendProps = item.props
    } else {
      methodName = item
    }

    return {
      methodName,
      parameters: {
        ...params,
        ...extendProps
      }
    }
  }

  static async invokeCloudMethod(methodType: string, params: any) {
    const cloudObject: any = this.getClouldObject(methodType, params)
    return await ParseObjects.ParseCloud.run(cloudObject.methodName, cloudObject.parameters)
  }

  static async sendEmailByType(templateType: string, toEmail: any, params: any) {
    const sendEmails = new SendEmails(toEmail)
    await sendEmails.send(templateType, params)
  }

  static async forgotPasswordSendEmail(usernameOrEmail: string) {
    await this.sendEmailByType(Types.template.EMAILS_TEMPLATE_FOR_FORGOT_USER, usernameOrEmail, {})
  }
}
