import { Flags, PeopleInEvent, UniqueIdHelper } from '@app/library' // from '@appLibs/index'
import { AppConstants } from '@app/types'

import { ParseModels, ParseObjects } from '@appModels/index'

export function generateRelativeObjects(
  params: INewParseObjectGeneratorGenerateRelativeObjectsParams
) {
  const { forParseInstance, reviewType } = params
  const defaultRelativeObject = {
    restaurant: null,
    event: null,
    recipe: null
  }
  defaultRelativeObject[reviewType] = forParseInstance
  return defaultRelativeObject
}

export function getRelativeModel(
  params: INewParseObjectGeneratorGetRelativeModelParams
): IParseModelRelative {
  const { modelType, objectSchemaName, parseRelationInstance } = params
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
