import { ReducerHelper } from '@app/library' // from '@appLibs/index
import { FacebookLoginAccount, TwitterLoginAccount } from '@appActionUtils/index'

import * as Types from '@app/types'

export class UserSocialConnectHelper {
  private onFailureHook(
    helperParams: IUserSocialConnectHelperConnectSocialParams,
    errorMessage: any
  ) {
    const { showAlertMessageAction } = helperParams
    showAlertMessageAction({
      type: Types.alertType.ALERT_TYPE_ERROR,
      text: errorMessage
    })
  }
  private onSuccessHook(helperParams: IUserSocialConnectHelperConnectSocialParams) {
    const { actions } = helperParams
    actions.loginSuccess()
  }

  async loginViaSocialAuth(helperParams: IUserSocialConnectHelperLoginViaSocialAuthParams) {
    const {
      buttonType,
      profile,
      actions,
      checkedLoggedStatusAction,
      onSignInAfterHook
    } = helperParams
    // let errorMessage = null
    let socialCallback: any = null
    actions.loginRequest()
    switch (buttonType) {
      case Types.social.SOCIAL_BUTTON_TYPE_FACEBOOK:
        socialCallback = await FacebookLoginAccount.getUserProfileViaFacebook(profile)
        break
      case Types.social.SOCIAL_BUTTON_TYPE_TWITTER:
        socialCallback = await TwitterLoginAccount.getUserProfileViaTwitter(profile)
        break
    }
    if (!!socialCallback) {
      switch (socialCallback.type) {
        case Types.loggedStatus.PARSE_LOGGED_IN:
          checkedLoggedStatusAction(socialCallback.model)
          onSignInAfterHook()
          // if (hasInvalidePathname(router)) {
          //     Router.pushRoute('/').then(() => window.scrollTo(0, 0))
          // }
          break
        case Types.loggedStatus.PARSE_LOGGED_FAILURE:
          actions.showLoginAlert({
            message: socialCallback.message,
            type: 'error'
          })
          break
      }
    }
    actions.loginSuccess()
  }

  async connectSocial(helperParams: IUserSocialConnectHelperConnectSocialParams) {
    const {
      buttonType,
      profile,
      connectedUser,
      actions,
      onConnectedAfterHook,
      showAlertMessageAction
    } = helperParams

    let errorMessage = null
    actions.loginRequest()
    const connectionAction =
      buttonType === Types.social.SOCIAL_BUTTON_TYPE_TWITTER
        ? TwitterLoginAccount.connectViaTwitter
        : FacebookLoginAccount.connectViaFacebook
    try {
      const result = await connectionAction(profile, connectedUser)
      switch (result.type) {
        case Types.loggedStatus.PARSE_CONNECTED_DONE:
          onConnectedAfterHook(buttonType, result.model)
          break
      }
    } catch (e) {
      const message = e.message || e
      if (message !== 'Timed out' && message !== 'Canceled by user') {
        errorMessage = message
      }
    } finally {
      if (!!errorMessage) {
        this.onFailureHook(helperParams, errorMessage)
      } else {
        this.onSuccessHook(helperParams)
      }
    }
  }
}
