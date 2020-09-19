import { AppConstants } from '@app/types'
import * as Types from '@app/types'

const uuidV1 = require('uuid/v1')

export class UniqueIdHelper {
  static getUUID() {
    return uuidV1()
  }

  /**
   * Get the object's uniqueId from it's parent.
   *
   * @param objectSchemaName
   * @param parentObject
   */
  static getUniqueIdFromParentModel(params: IUniqueIdHelperGetUniqueIdFromParentModelParams) {
    const { objectSchemaName, parentObject } = params
    const fieldType = AppConstants.realmTypes[objectSchemaName]
    if (!parentObject) {
      return ''
    }
    const relativeObject = parentObject[fieldType]
    if (!relativeObject) {
      return ''
    }
    const uniqueId = relativeObject.uniqueId || ''
    return uniqueId
  }

  static getUniqueIdForReview(params: IUniqueIdHelperGetUniqueIdForReviewParams) {
    const { objectSchemaName, localRealmModelObject } = params

    const currentReviewType = AppConstants.realmTypes[objectSchemaName]
    const { reviewType, forObjectUniqueId } = localRealmModelObject

    if (currentReviewType === reviewType) {
      if (forObjectUniqueId !== undefined && forObjectUniqueId !== '') {
        return forObjectUniqueId
      }
    }

    return ''
  }

  static getUniqueIdByPhotoType(
    parseModelPhoto: IParseModelPhotos | IRealmModelPhotos,
    photoType: string
  ): string {
    const { objectSchemaName } = AppConstants.realmObjects[photoType]
    // Sometime, if not found the photo's related model.
    // Create new 'uniqueId'.
    if (!parseModelPhoto[photoType]) {
      return UniqueIdHelper.getUUID()
    }
    switch (objectSchemaName) {
      case Types.model.PARSE_RESTAURANTS:
        return (parseModelPhoto.restaurant as any).uniqueId
      case Types.model.PARSE_RECIPES:
        return (parseModelPhoto.recipe as any).uniqueId
      case Types.model.PARSE_USERS:
        return (parseModelPhoto.user as any).uniqueId
    }
    return ''
  }
}
