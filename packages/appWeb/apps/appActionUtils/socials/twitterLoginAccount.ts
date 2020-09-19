import { StatusConstants } from '@app/types'

import { ParseModels, ParseObjects } from '@appModels/index'

import { ParseLoginUtils } from '@appParse/index'

import * as Types from '@app/types'

export class TwitterLoginAccount {
  static async getUserProfileViaTwitter(profile: any) {
    const {
      twitterId,
      username,
      displayName,
      email,
      myAuthData
    } = ParseLoginUtils.adjustTwitterProfile(profile)

    const twitterUser: IParseUser = (await ParseObjects.ParseUsers.connectTwitter(
      myAuthData,
      null
    )) as any
    let lastUserProfile: IParseModelUsers =
      !!twitterUser && (ParseModels.fromParseUsers(twitterUser) as any)
    const isFirstSignUp: boolean = ParseLoginUtils.isFirstSignUp(lastUserProfile)
    if (isFirstSignUp === true) {
      const signedUser: IParseUser = twitterUser
      signedUser.set('twitter_id', twitterId)
      signedUser.set('twitterHandle', username)
      ParseObjects.ParseUsers.setUserLoginType(signedUser, StatusConstants.USERS.TYPE_TWITTER)
      let errorMsg = null
      const savePromise = await signedUser
        .save(
          Object.assign(ParseLoginUtils.getDefaultUserProperty(username, displayName, email), {
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
        await ParseLoginUtils.destroyUser(twitterUser)
        return {
          type: Types.loggedStatus.PARSE_LOGGED_FAILURE,
          message: errorMsg
        }
      } else {
        lastUserProfile = ParseModels.parseFromParseUsers(signedUser)
      }
    }
    return {
      type: Types.loggedStatus.PARSE_LOGGED_IN,
      model: lastUserProfile
    }
  }

  static async connectViaTwitter(profile: any, user: any) {
    const { myAuthData } = ParseLoginUtils.adjustTwitterProfile(profile)

    const twitterUser: IParseUser | any = await ParseObjects.ParseUsers.connectTwitter(
      myAuthData,
      user.id
    )
    const lastUserProfile: IParseModelUsers =
      !!twitterUser && (ParseModels.fromParseUsers(twitterUser) as any)
    return {
      type: Types.loggedStatus.PARSE_CONNECTED_DONE,
      model: lastUserProfile
    }
  }

  static async disconnectViaTwitter({ id }) {
    const twitterUser: IParseUser | any = await ParseObjects.ParseUsers.connectTwitter(null, id)
    const lastUserProfile: IParseModelUsers =
      !!twitterUser && (ParseModels.fromParseUsers(twitterUser) as any)
    return {
      type: Types.loggedStatus.PARSE_DISCONNECTED_DONE,
      model: lastUserProfile
    }
  }
}
