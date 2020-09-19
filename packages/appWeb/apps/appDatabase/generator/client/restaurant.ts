import { Flags, PeopleInEvent, UniqueIdHelper } from '@app/library' // from '@appLibs/index'

import { AppConstants, StatusConstants } from '@app/types'
import { ParseModels, ParseObjects } from '@appModels/index'

/**
 * Generate for new restaurant as Realm object.
 *
 * @param params
 */

export function generateNewRestaurantRealmObject(
  params: IGenerateNewRestaurantRealmObjectParams
): IRealmModelRestaurants {
  const { realmUser, getCurrentLocation } = params
  const location: IAppGeoRegionWithNull = getCurrentLocation() || StatusConstants.emptyLocation
  const model: IRealmModelRestaurants = {
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
    displayName: '',
    // Google address
    address: '',
    geoHash: '',
    // Location
    latitude: location.latitude,
    longitude: location.longitude
  }
  return model
}
