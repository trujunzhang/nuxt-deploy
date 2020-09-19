import { Flags, PeopleInEvent, UniqueIdHelper } from '@app/library' // from '@appLibs/index'
import { AppConstants } from '@app/types'

import { ParseModels, ParseObjects } from '@appModels/index'

export function getRelativeModel(
  modelType,
  objectSchemaName: string,
  parseRelationInstance
): IParseModelRelative {
  const currentPhotoType = AppConstants.realmTypes[objectSchemaName]
  return currentPhotoType === modelType
    ? {
      id: parseRelationInstance.id,
      uniqueId: parseRelationInstance.uniqueId
    }
    : {
      id: '',
      uniqueId: ''
    }
}
/**
 * Relative objects.
 *
 * @param forParseInstance
 * @param reviewType
 */
export function generateRelativeObjects(forParseInstance, reviewType) {
  const defaultRelativeObject = {
    restaurant: null,
    event: null,
    recipe: null
  }
  defaultRelativeObject[reviewType] = forParseInstance
  return defaultRelativeObject
}
