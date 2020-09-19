import * as Types from '@app/types'

import {
  LoadParseObjectsAfterHook,
  LoadPhotosListAfterHook,
  PhotosListForSingleModel
} from '@web/actions/utils'

export class AfterFetchHookHelper {
  private extendProps: any = {}

  private afterFetchHookType: string
  constructor(afterFetchHookType: string) {
    this.afterFetchHookType = afterFetchHookType
  }

  async getPropertiesAfterFetch(params: IAfterFetchHookHelperGetPropertiesAfterFetchParams) {
    switch (this.afterFetchHookType) {
      case Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_LIST: {
        // For F8ImagesSlideShowView in the left of a list item.
        const instance = new LoadPhotosListAfterHook()
        await instance.loadPhotosList(params)
        this.extendProps = instance.end()
        break
      }
      case Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_IN_BROWSER: {
        this.extendProps = await LoadParseObjectsAfterHook.loadPhotosListForPhotoBrowser(params)
        break
      }
      case Types.afterFetch.FETCH_HOOK_FOR_PHOTOS_IN_SINGLE_MODEL: {
        const instane = new PhotosListForSingleModel()
        await instane.loadPhotosListForSingleModel(params)
        this.extendProps = instane.end()
        break
      }
    }
  }

  end() {
    return this.extendProps
  }
}
