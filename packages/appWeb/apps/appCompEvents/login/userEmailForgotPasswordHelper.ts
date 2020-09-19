import { ReducerHelper } from '@app/library' // from '@appLibs/index

export class UserEmailForgotPasswordHelper {
  private onFailureHook(helperParams: IUserEmailForgotPasswordHelperParams, errorMessage: any) {
    const { authModel, actions, onForgotPasswordSuccessHook } = helperParams
    actions.showLoginAlert({
      message: errorMessage,
      type: 'error'
    })
  }
  private onSuccessHook(helperParams: IUserEmailForgotPasswordHelperParams) {
    const { authModel, actions, onForgotPasswordSuccessHook } = helperParams
    actions.showLoginAlert({
      message: 'Sent reset password email successfully!',
      type: 'success'
    })
    actions.loginSuccess()
    onForgotPasswordSuccessHook()
  }
  async forgotPassword(helperParams: IUserEmailForgotPasswordHelperParams) {
    const { authModel, actions, onForgotPasswordSuccessHook } = helperParams
    const params: IForgotPasswordParameter = ReducerHelper.getForgotPasswordParameter({
      authModel
    })
    const { email: usernameOrEmail } = params
    if (usernameOrEmail.indexOf('@') === -1) {
      actions.showLoginAlert({
        type: 'error',
        message: 'Invalid email'
      })
      return
    }
    let errorMessage = null
    actions.loginRequest()
    try {
      // TODO: DJZHANG(25/12/2018)
      // await CommonHelper.forgotPasswordSendEmail(params)
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
