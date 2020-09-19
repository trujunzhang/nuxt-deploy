import { NodeRandTokenUtils as RandToken } from '@app/tools'
import { AppConstants } from '@app/types'

import { ParseObjects } from '@appModels/index'

import { ParseLoginUtils, ParseUtils } from '@appParse/index'

import * as Types from '@app/types'

class SendEmailsUtils {
  static async getOnlineParseInstanceByType(templateType: string, toEmail: string, params: any) {
    let onlineParseInstance: IParseObjectWithNull = null
    switch (templateType) {
      case Types.template.EMAILS_TEMPLATE_VERIFY_SIGN_UP_USER:
      case Types.template.EMAILS_TEMPLATE_VERIFY_REMOVE_USER:
      case Types.template.EMAILS_TEMPLATE_ARTICLE_APPROVED:
        onlineParseInstance = await ParseObjects.getQueryByObjectSchemaName(
          Types.model.PARSE_USERS
        ).get(params.userId)
        break
      case Types.template.EMAILS_TEMPLATE_FOR_FORGOT_USER:
        onlineParseInstance = (await ParseUtils.getUsersParameters({
          email: toEmail
        }).first()) as any
        break
      default:
        break
    }
    return onlineParseInstance
  }
}

export class SendEmails {
  private token: string
  private nextToEmail: string
  private toEmail: string

  constructor(toEmail: string) {
    // Generating the token.
    this.token = RandToken.generate(32)
    // this.token = RandTokenUtils.secret(25)

    this.toEmail = toEmail
    this.nextToEmail = toEmail
  }

  getEmailExtendProperties(templateType: string, onlineParseInstance: any) {
    let extendProps = {}
    switch (templateType) {
      case Types.template.EMAILS_TEMPLATE_VERIFY_SIGN_UP_USER:
      case Types.template.EMAILS_TEMPLATE_VERIFY_REMOVE_USER:
        extendProps = {
          displayName: onlineParseInstance.get('displayName') || '',
          userSlug: onlineParseInstance.get('slug') || ''
        }
        break
      case Types.template.EMAILS_TEMPLATE_FOR_FORGOT_USER:
        extendProps = {
          verifyEmail: this.toEmail,
          displayName: onlineParseInstance.get('displayName') || '',
          userSlug: onlineParseInstance.get('slug') || ''
        }
        break
      case Types.template.EMAILS_TEMPLATE_ARTICLE_APPROVED:
        this.nextToEmail = onlineParseInstance.get('email') || ''
        extendProps = {
          userSlug: onlineParseInstance.get('slug') || '',
          displayName: onlineParseInstance.get('displayName') || ''
        }
        break
      default:
        break
    }

    return extendProps
  }

  getEmailProperties(templateType: string, params: any, onlineParseInstance: IParseObject) {
    const extendProps: any = this.getEmailExtendProperties(templateType, onlineParseInstance)
    return {
      templateName: ParseObjects.cloudEmailTemplateNames[templateType],
      toEmail: this.nextToEmail,
      variables: {
        ...params,
        ...extendProps,
        token: this.token,
        homepage: AppConstants.ieattaWeb
      }
    }
  }

  async afterSendHook(templateType: string, onlineParseInstance: IParseObject) {
    switch (templateType) {
      case Types.template.EMAILS_TEMPLATE_VERIFY_SIGN_UP_USER:
        ParseLoginUtils.setUserSignUpToken(onlineParseInstance as IParseUser, this.token)
        break
      case Types.template.EMAILS_TEMPLATE_VERIFY_REMOVE_USER:
        ParseLoginUtils.setUserDeletionToken(onlineParseInstance as IParseUser, this.token)
        break
      case Types.template.EMAILS_TEMPLATE_FOR_FORGOT_USER:
        ParseLoginUtils.setUserResetPasswordToken(onlineParseInstance as IParseUser, this.token)
        break
      default:
        break
    }
  }

  async send(templateType: string, params: any) {
    // Step1: get Online Parse Object.
    const onlineParseInstance: IParseObjectWithNull = await SendEmailsUtils.getOnlineParseInstanceByType(
      templateType,
      this.toEmail,
      params
    )

    if (!onlineParseInstance) {
      throw new Error('Not found user via email!')
    }

    // Step2: get the all properties before sending the email.
    const emailDefaultProperty = this.getEmailProperties(templateType, params, onlineParseInstance)

    // Step3: sending the email.
    if (!!onlineParseInstance) {
      await ParseObjects.ParseCloud.run('sendEmails', emailDefaultProperty)
    }

    // Step4: After sending it, save related fields to the online Parse Object.
    await this.afterSendHook(templateType, onlineParseInstance)

    if (!!onlineParseInstance) {
      await onlineParseInstance.save(null, {
        useMasterKey: true
      })
    }
  }
}
