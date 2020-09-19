import { ParseObjects } from '@appModels/index'

import * as Types from '@app/types'

import { twitterConfig } from '@app/types'
import { MomentUtils, SlugifyUtils } from '@app/tools'

export class ParseLoginUtils {
  // "Account already exists for this email address."
  static async destroyUser(lastUser: any) {
    await ParseObjects.ParseUsers.userLogOut()
    const onlineUser: IParseUser = (await ParseObjects.getQueryByObjectSchemaName(
      Types.model.PARSE_USERS
    ).get(lastUser.id)) as IParseUser
    await ParseObjects.ParseUsers.destroyWithMasterKey(onlineUser)
  }

  static adjustFacebookProfile(profile: any): IFacebookProfile {
    const facebookId: string = profile.id
    const { name, email, accessToken, expiresIn } = profile
    // Create the authData object
    const myAuthData: any = {
      id: facebookId,
      screen_name: name,
      access_token: accessToken,
      expiration_date: new Date(expiresIn * 1000 + new Date().getTime()).toJSON()
    }
    return {
      facebookId,
      name,
      email,
      myAuthData
    }
  }

  static adjustTwitterProfile(profile: any): ITwitterProfile {
    const twitterId: string = profile.id
    const { username, displayName, oauth_token, oauth_token_secret } = profile
    const emails: any = profile.emails
    const email = (emails.length > 0 && emails[0].value) || ''
    // Create the authData object
    // Screen name is profile's username.
    const myAuthData: any = {
      id: twitterId,
      screen_name: username,
      auth_token: oauth_token,
      auth_token_secret: oauth_token_secret,
      consumer_key: twitterConfig.consumerKey,
      consumer_secret: twitterConfig.consumerSecret
    }
    return {
      twitterId,
      username,
      displayName,
      email,
      myAuthData
    }
  }

  static checkIsSystemAdmin(displayName: string, email: string) {
    return false
  }

  static getDefaultUserProperty(
    username: string,
    displayName: string,
    email: string,
    needEmailVerification: boolean = true
  ) {
    const isAdmin: boolean = ParseLoginUtils.checkIsSystemAdmin(displayName, email)
    return {
      // Common
      username,
      displayName,
      slug: SlugifyUtils.toSlugifyString(username),
      email,
      // Admin
      isAdmin,
      // Clients aren't allowed to manually update email verification.
      emailAlreadyVerified: needEmailVerification === true ? false : true,
      //
      bio: '',
      notifications_posts: false,
      notifications_comments: true,
      notifications_replies: true,
      coverId: '',
      coverUrls: [],
      isSubscribed: false
    }
  }

  static getValidTokenDate(): Date {
    return MomentUtils.getValidTokenDate(2)
  }

  static setUserSignUpToken(onlineUser: IParseUser, token: string) {
    onlineUser.set('sign_up_email_verify_token', token)
    onlineUser.set('sign_up_email_verify_token_expires_at', ParseLoginUtils.getValidTokenDate())
  }

  static setUserDeletionToken(onlineUser: IParseUser, token: string) {
    onlineUser.set('deletion_email_verify_token', token)
    onlineUser.set('deletion_email_verify_token_expires_at', ParseLoginUtils.getValidTokenDate())
  }

  static setUserResetPasswordToken(onlineUser: IParseUser, token: string) {
    onlineUser.set('reset_email_verify_token', token)
    onlineUser.set('reset_email_verify_token_expires_at', ParseLoginUtils.getValidTokenDate())
  }

  static isFirstSignUp(userProfile: IParseModelUsers): boolean {
    if (typeof userProfile === 'undefined') {
      return true
    }
    return typeof userProfile.emailVerified === 'undefined' || userProfile.emailVerified === false
  }
}
