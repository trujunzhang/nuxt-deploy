import { ParseModels, ParseObjects } from '@appModels/index'

import { ParseLoginUtils } from '@appParse/index'

import { StatusConstants } from '@app/types'

import { CommonHelper } from '../commonHelper'

import * as Types from '@app/types'

export class SignUpWithEmailPassword {
  private userProfile: ParseModelUsersWithNull = null
  private needEmailVerification: boolean
  private email: string

  constructor(email: string, needEmailVerification: boolean) {
    this.email = email
    this.needEmailVerification = needEmailVerification
  }

  async signUpHook(onlineUserObject: IParseUser) {
    if (this.needEmailVerification) {
      const userModel: ParseModelUsersWithNull = ParseModels.fromParseUsers(onlineUserObject)
      if (!!userModel) {
        await CommonHelper.sendEmailByType(
          Types.template.EMAILS_TEMPLATE_VERIFY_SIGN_UP_USER,
          this.email,
          {
            userId: userModel.id,
            displayName: userModel.displayName,
            userSlug: userModel.slug
          }
        )
      } else {
        throw new Error('Sign up Failure!')
      }
    }
  }

  async signUp(username: string, password: string) {
    const user: IParseUser = ParseObjects.createParseInstance(Types.model.PARSE_USERS) as IParseUser
    user.set('password', password)
    ParseObjects.ParseUsers.setUserLoginType(user, StatusConstants.USERS.TYPE_EMAIL)

    // deploy-check(used)
    await user.signUp(
      ParseLoginUtils.getDefaultUserProperty(
        username,
        username,
        this.email,
        this.needEmailVerification
      )
    )

    await this.signUpHook(user)

    // After signed up successfully, Parse.js already created 'session'.
    // So need to set 'logOut'.
    await ParseObjects.ParseUsers.userLogOut()

    this.userProfile = ParseModels.fromParseUsers(user)
  }

  end() {
    return {
      type: Types.authModel.SIGN_UP_DONE,
      payload: this.userProfile
    }
  }
}
