import { ReducerHelper } from '@app/library' // from '@appLibs/index

import { timeout } from '@appActions/index'
import * as Types from '@app/types'

export class UserEmailSignUpHelper {
  private onFailureHook(helperParams: IUserEmailSignUpHelperParams, errorMessage: any) {
    const { actions } = helperParams
    actions.showLoginAlert({
      message: errorMessage,
      type: 'error'
    })
  }
  private onSuccessHook(helperParams: IUserEmailSignUpHelperParams) {
    const { actions, onSignSuccessHook } = helperParams
    onSignSuccessHook()
    actions.signupSuccess()
  }
  async signUp(helperParams: IUserEmailSignUpHelperParams) {
    const { authModel, actions, needEmailVerification, signUpWithPasswordAction } = helperParams

    const params: ISignUpParameter = ReducerHelper.getSignUpParameter(
      { authModel },
      needEmailVerification
    )
    let errorMessage = null
    actions.signupRequest()
    try {
      await Promise.race([signUpWithPasswordAction(params), timeout(35000)])
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
