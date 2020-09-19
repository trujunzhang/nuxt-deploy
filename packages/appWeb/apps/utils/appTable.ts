import * as Types from '@app/types'

export class AppTable {
  /**
   * AppTable.showLoginUI(this.props, true, true)
   *
   * @param {any} showAppOverlayAction
   * @param {boolean} showCloseIcon
   * @param {boolean} isSignIn
   */
  static showLoginUI({ showAppOverlayAction }, showCloseIcon = true, isSignIn = true) {
    const object = {
      showCloseIcon,
      formType: isSignIn ? Types.login.LOGIN_FORM_TYPE_LOGIN : Types.login.LOGIN_FORM_TYPE_REGISTER
    }
    const model: IOverlayModel = {
      overLayType: Types.popup.OVERLAY_TYPE_LOGIN_UI,
      object,
      position: {
        left: -1,
        top: -1,
        width: -1,
        height: -1
      }
    }
    showAppOverlayAction(model)
  }
}
