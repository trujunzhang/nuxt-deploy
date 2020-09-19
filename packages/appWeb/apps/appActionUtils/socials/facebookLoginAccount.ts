import { StatusConstants } from '@app/types'

import { ParseModels, ParseObjects } from '@appModels/index'

import { ParseLoginUtils } from '@appParse/index'

import * as Types from '@app/types'

export class FacebookLoginAccount {
  static async getUserProfileViaFacebook(profile: any) {
    const { facebookId, name, email, myAuthData } = ParseLoginUtils.adjustFacebookProfile(profile)

    const facebookUser: IParseUser = (await ParseObjects.ParseUsers.connectFacebook(
      myAuthData,
      null
    )) as any

    let lastUserProfile = !!facebookUser && ParseModels.fromParseUsers(facebookUser)
    const isFirstSignUp = ParseLoginUtils.isFirstSignUp(lastUserProfile as any)
    if (isFirstSignUp === true) {
      const signedUser: IParseUser = facebookUser
      signedUser.set('facebook_id', facebookId)
      ParseObjects.ParseUsers.setUserLoginType(signedUser, StatusConstants.USERS.TYPE_FACEBOOK)
      let errorMsg = null
      await signedUser
        .save(
          Object.assign(ParseLoginUtils.getDefaultUserProperty(name, name, email), {
            emailAlreadyVerified: true
          })
        )
        // tslint:disable-next-line:no-empty
        .then(
          () => { },
          (err) => {
            errorMsg = err.message
          }
        )
      if (!!errorMsg) {
        await ParseLoginUtils.destroyUser(facebookUser)
        return {
          type: Types.loggedStatus.PARSE_LOGGED_FAILURE,
          message: errorMsg
        }
      } else {
        lastUserProfile = ParseModels.fromParseUsers(signedUser)
      }
    }
    return {
      type: Types.loggedStatus.PARSE_LOGGED_IN,
      model: lastUserProfile
    }
  }

  static async connectViaFacebook(profile: any, user: any) {
    const { myAuthData } = ParseLoginUtils.adjustFacebookProfile(profile)

    const facebookUser: IParseUser | any = await ParseObjects.ParseUsers.connectFacebook(
      myAuthData,
      user.id
    )

    const lastUserProfile: IParseModelUsers =
      !!facebookUser && (ParseModels.fromParseUsers(facebookUser) as any)
    return {
      type: Types.loggedStatus.PARSE_CONNECTED_DONE,
      model: lastUserProfile
    }
  }

  static async disconnectViaFacebook({ id }) {
    const facebookUser: IParseUser | any = await ParseObjects.ParseUsers.connectFacebook(null, id)
    const lastUserProfile: IParseModelUsers =
      !!facebookUser && (ParseModels.fromParseUsers(facebookUser) as any)
    return {
      type: Types.loggedStatus.PARSE_DISCONNECTED_DONE,
      model: lastUserProfile
    }
  }
}
