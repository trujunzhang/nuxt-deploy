import { Flags, PeopleInEvent, UniqueIdHelper } from '@app/library' // from '@appLibs/index'
import { AppConstants } from '@app/types'

import { ParseModels, ParseObjects } from '@appModels/index'

function getRelationModelForPhoto(
  params: INewParseObjectGeneratorGenerateNewPhotoParseObjectParams
) {
  const { modelType, forObject } = params
  const relations = {
    restaurant: null,
    event: null,
    recipe: null,
    user: null
  }

  relations[modelType] = forObject
  // If the photo for recipe.
  // Here, also set recipe's restaurant for the photo.
  if (modelType === 'recipe') {
    relations.restaurant = forObject.restaurant
  }

  return relations
}

/**
 * So important to upload photo for Recipe,
 * Because must save recipe and it's restaurant together.
 *
 * @param modelType
 * @param forObject
 * @param currentUser
 * @returns model - type of 'IRealmModelPhotos'.
 */
export function generateNewParsePhotoObject(
  params: INewParseObjectGeneratorGenerateNewPhotoParseObjectParams
): IParseModelPhotos {
  const { modelType, forObject, currentUser } = params

  const newModel: IParseModelPhotos = {
    // base
    id: UniqueIdHelper.getUUID(),
    uniqueId: UniqueIdHelper.getUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    syncPostedAt: new Date(),
    flag: Flags.normalState,
    creator: currentUser,
    // properties
    // 1. normal
    originalUrl: '',
    thumbnailUrl: '',
    photoType: modelType,
    // Pointer
    ...getRelationModelForPhoto(params)
  }
  return newModel
}
