import * as Types from '@app/types'

import { timeout } from '@appActions/index'

export class SaveRealmsTakenPhotoHelper {
  private onFailureHook(helperParams: ISaveRealmsTakenPhotoHelperParams, errorMessage: any) {
    const { showAlertMessageAction } = helperParams
    showAlertMessageAction({
      type: Types.alertType.ALERT_TYPE_ERROR,
      text: errorMessage
    })
  }

  private onSuccessHook(helperParams: ISaveRealmsTakenPhotoHelperParams) {
    const { onSaveRealmPhotolAfterHook } = helperParams

    onSaveRealmPhotolAfterHook()
  }

  async saveRealmPhoto(helperParams: ISaveRealmsTakenPhotoHelperParams) {
    const {
      saveTakenPhotoAction,
      newPhotoInstance,
      image,
      iOSVersion,
      needUpdateListPhotoId
    } = helperParams
    const object: ISaveTakenPhotosParams = {
      newPhotoInstance,
      image,
      iOSVersion,
      needUpdateListPhotoId
    }
    let errorMessage = null
    try {
      await Promise.race([saveTakenPhotoAction(object), timeout(15000)])
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
