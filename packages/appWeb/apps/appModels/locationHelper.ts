import { ParseObjects } from './parseObjects'

import { StatusConstants } from '@app/types'

export class LocationHelper {
  static getDefaultGeoPoint(): IParseGeoPoint {
    return ParseObjects.ParseGeoLocation.newEmptyGeoLocation()
  }

  static fixLocation(location: IParseGeoPointWithNull) {
    if (!!location) {
      return {
        latitude: location.latitude,
        longitude: location.longitude
      }
    }
    return StatusConstants.emptyLocation
  }
}
