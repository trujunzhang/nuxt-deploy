import * as Types from '@app/types'
import { AppConstants } from '@app/types'
import { UnderscoreUtils } from '@app/tools'
import { ParseObjects } from '@appModels/index' //from '@app/library' //  '@app/models'

export class LoadParseObjectsAfterHook {
  static async loadPhotosListForPhotoBrowser(
    params: IAfterFetchHookHelperGetPropertiesAfterFetchParams
  ) {
    const { terms, listTask, list } = params

    const creatorIds: string[] = UnderscoreUtils.getObjectFieldArray({
      list,
      objectPropertyName: 'creator.id'
    })

    const photoRelations: IPhotoRelations = creatorIds.map((id: string) => {
      return {
        id,
        photoType: AppConstants.realmTypes[Types.model.PARSE_USERS]
      }
    })
    const extendProps: any = {}
    extendProps.listPhotosDict = await ParseObjects.ParseCloud.getListPhotosDict({
      photoRelations
    })
    return extendProps
  }
}
