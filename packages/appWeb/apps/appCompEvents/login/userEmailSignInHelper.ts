import { ReducerHelper } from '@app/library' // from '@appLibs/index

import * as Types from '@app/types'
import { loginByParseUser } from '@appActions/index'

export class UserEmailSignInHelper {
  private onFailureHook(helperParams: IUserEmailSignInHelperParams, errorMessage: any) {
    const { actions } = helperParams
    actions.showLoginAlert({
      message: errorMessage,
      type: 'error'
    })
  }
  private onSuccessHook(helperParams: IUserEmailSignInHelperParams) {
    const { actions, onLoginSuccessHook } = helperParams
    onLoginSuccessHook()
    actions.loginSuccess()
  }

  async signIn(helperParams: IUserEmailSignInHelperParams) {
    const { authModel, actions, checkedLoggedStatusAction, onSignInHook } = helperParams
    const params = ReducerHelper.getSignInParameter({ authModel })
    let errorMessage = null
    actions.loginRequest()
    try {
      const callBackObject: ILoginLoginByParseUserAction = await loginByParseUser(params)
      switch (callBackObject.type) {
        case Types.loggedStatus.PARSE_LOGGED_IN: {
          checkedLoggedStatusAction(callBackObject.model)
          onSignInHook()
          break
        }
        default: {
          // Failure, show the form state.
          actions.setFormState(callBackObject.type, (callBackObject.model as any).id)
          break
        }
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
