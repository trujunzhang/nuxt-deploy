import * as Types from '@app/types'

import { AppConstants } from '@app/types'
import { timeout } from '@appActions/index'

export class SaveParseEditFormHelper {
  private onFailureHook(helperParams: ISaveParseEditFormHelperParams, errorMessage: any) {
    const { showAlertMessageAction } = helperParams
    showAlertMessageAction({
      type: Types.alertType.ALERT_TYPE_ERROR,
      text: errorMessage
    })
  }

  private onSuccessHook(helperParams: ISaveParseEditFormHelperParams) {
    const { showAlertMessageAction, actions, objectSchemaName, onSaveParseModelHook } = helperParams
    const editModelType = AppConstants.realmTypes[objectSchemaName]

    // Step1: Invoke the after hook for the event.
    onSaveParseModelHook()

    // Step2: Show alert message.
    showAlertMessageAction({
      type: Types.alertType.ALERT_TYPE_SUCCESS,
      text: `Saved the ${editModelType} successfully!`
    })

    // Step3: Update the reducer model.
    actions.updateModelSuccess()
  }

  async saveParseModel(helperParams: ISaveParseEditFormHelperParams) {
    const { writeOnlineParseObjectAction, actions, writeParseParams } = helperParams

    actions.updateModelRequest()
    let errorMessage: any = null
    try {
      await Promise.race([writeOnlineParseObjectAction(writeParseParams), timeout(15000)])
    } catch (e) {
      actions.updateModelFailure(e)
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
