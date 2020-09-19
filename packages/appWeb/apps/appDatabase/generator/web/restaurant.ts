import { Flags, PeopleInEvent, UniqueIdHelper } from '@app/library' // from '@appLibs/index'
import { AppConstants } from '@app/types'

import { LocationHelper, ParseModels, ParseObjects } from '@appModels/index'

export function generateNewRestaurantParseObject(
  params: INewParseObjectGeneratorGenerateNewRestaurantParseObjectParams
): IParseModelRestaurants {
  const { currentUser } = params
  return {
    id: UniqueIdHelper.getUUID(),
    uniqueId: UniqueIdHelper.getUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    syncPostedAt: new Date(),
    flag: Flags.normalState,
    creator: currentUser,
    // Base
    displayName: '',
    // Attributes
    geoLocation: LocationHelper.getDefaultGeoPoint(),
    // Google address
    address: '',
    street_number: '',
    route: '',
    locality: '',
    sublocality: '',
    country: '',
    postal_code: '',
    administrative_area: ''
  }
}
