import { ParseUtils } from '@appParse/index'

import { ParseModels, ParseObjects } from '@appModels/index'

import * as Types from '@app/types'

export class LoginByParseUser {
  private userProfile: ParseModelUsersWithNull = null

  private async adjustUserLoggedName(usernameOrEmail: string) {
    let userLoggedName: string = usernameOrEmail
    if (usernameOrEmail.indexOf('@') !== -1) {
      const onlineUser: IParseUserWithNull = (await ParseUtils.getUsersParameters({
        email: usernameOrEmail
      }).first()) as IParseUserWithNull
      if (!!onlineUser) {
        userLoggedName = onlineUser.get('username')
      }
    }
    return userLoggedName
  }

  private async tryLogin(userLoggedName: string, password: string) {
    const user: IParseUser = ParseObjects.createParseInstance(Types.model.PARSE_USERS) as IParseUser

    user.set('username', userLoggedName)
    user.set('password', password)

    await user.logIn()

    const userProfile: IParseModelUsers = ParseModels.parseFromParseUsers(user)
    return userProfile
  }

  async login(usernameOrEmail: string, password: string) {
    // Step1: adjust username, if 'usernameOrEmail' is email.
    const userLoggedName: string = await this.adjustUserLoggedName(usernameOrEmail)

    // Step2: try to login
    this.userProfile = await this.tryLogin(userLoggedName, password)

    // Step3: if email did not be verified.
    if (this.userProfile.emailVerified === false) {
      await ParseObjects.ParseUsers.userLogOut()
    }
  }

  end(): ILoginLoginByParseUserAction {
    if (!!this.userProfile && this.userProfile.emailVerified === false) {
      return {
        type: Types.authAction.LOGIN_PANEL_FORM_RESEND_VERIFICATION,
        model: this.userProfile
      }
    }
    return {
      type: Types.loggedStatus.PARSE_LOGGED_IN,
      model: this.userProfile
    }
  }
}
