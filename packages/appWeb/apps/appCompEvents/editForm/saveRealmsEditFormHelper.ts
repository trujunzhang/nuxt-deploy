import { ReducerHelper } from '@app/library' // from '@appLibs/index'

import * as Types from '@app/types'

import { timeout } from '@appActions/index'

export class SaveRealmsEditFormHelper {
  private onFailureHook(helperParams: ISaveRealmsEditFormHelperParams, errorMessage: any) {
    const { showAlertMessageAction } = helperParams

    showAlertMessageAction({
      type: Types.alertType.ALERT_TYPE_ERROR,
      text: errorMessage
    })
  }

  private onSuccessHook(helperParams: ISaveRealmsEditFormHelperParams) {
    const {
      editModel,
      objectSchemaName,
      showAlertMessageAction,
      refreshRealmObjectsPageAction,
      actions,
      writeRealmParams,
      onSaveRealmModelAfterHook
    } = helperParams
    // Step1: Get saved realm model uniqueId.
    const savedRealmModelUniqueId = ReducerHelper.getUniqueIdFromEditModel({ editModel })

    // Step2: Invoke the save after hook.
    const savedRealmModel = ReducerHelper.getOriginModelFromEditModel({ editModel })
    onSaveRealmModelAfterHook(savedRealmModel)

    // Stp3: Notify the save success.
    actions.updateModelSuccess()
    const refreshObject: IRefreshPageObject = {
      refreshId: new Date(),
      pageId: savedRealmModelUniqueId,
      objectSchemaName,
      editModelType: writeRealmParams.editModelType,
      refreshType: Types.pagesRefresh.PAGES_REFRESH_EDIT_MODEL
    }
    refreshRealmObjectsPageAction(refreshObject)
    showAlertMessageAction({
      type: Types.alertType.ALERT_TYPE_SUCCESS,
      text: 'Saved successfully!'
    })
  }

  async saveRealmModel(helperParams: ISaveRealmsEditFormHelperParams) {
    const { writeEditModelAction, actions, writeRealmParams } = helperParams

    actions.updateModelRequest()
    let errorMessage = null

    try {
      await Promise.race([writeEditModelAction(writeRealmParams), timeout(15000)])
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
