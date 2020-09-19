import { Flags, PeopleInEvent, UniqueIdHelper } from '@app/library' // from '@appLibs/index'
import { AppConstants, StatusConstants } from '@app/types'

import * as Types from '@app/types'
import { ParseModels, ParseObjects } from '@appModels/index'

import { generateRelativeObjects, getRelativeModel } from './utils/clientGeneratorUtils'
/**
 * So important to upload photo for Recipe,
 * Because must save recipe and it's restaurant together.
 *
 * @param modelType
 * @param forObject
 * @param currentUser
 * @returns model - type of 'IRealmModelPhotos'.
 */
/**
 * So important to upload photo for Recipe,
 * Because must save recipe and it's restaurant together.
 *
 * @param params
 * @returns model - type of 'IRealmModelPhotos'.
 */

export function generateNewRealmPhotoObject(
  params: IGenerateNewRealmPhotoObjectParams
): IRealmModelPhotos {
  const { modelType, forObject, realmUser, getCurrentLocation } = params

  let restaurantPointer: any = getRelativeModel(modelType, Types.model.PARSE_RESTAURANTS, forObject)
  if (modelType === 'recipe') {
    restaurantPointer = getRelativeModel(
      'restaurant',
      Types.model.PARSE_RESTAURANTS,
      forObject.restaurant
    )
  }
  const recipePointer: any = getRelativeModel(modelType, Types.model.PARSE_RECIPES, forObject)

  const location: IAppGeoRegionWithNull = getCurrentLocation() || StatusConstants.emptyLocation
  const newModel: IRealmModelPhotos = {
    // base
    // base
    objectId: UniqueIdHelper.getUUID(),
    uniqueId: UniqueIdHelper.getUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    syncPostedAt: new Date(),
    flag: Flags.normalState,
    // common
    creator: realmUser,
    // properties
    // 1. normal
    originalUrl: '',
    thumbnailUrl: '',
    photoType: modelType,
    // 2. photos
    forObjectUniqueId: forObject.id,
    // Pointer
    restaurant: restaurantPointer,
    recipe: recipePointer
    // Location
    // latitude: location.latitude,
    // longitude: location.longitude
  }
  return newModel
}
