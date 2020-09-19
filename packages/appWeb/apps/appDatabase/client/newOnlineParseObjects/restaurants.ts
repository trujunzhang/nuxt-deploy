import { ParseObjects } from '@appModels/index'

import { DatabaseHelper } from '../../helper'

export class Restaurants {
  static async createOnlineParseInstance(
    onlineParseObject: IParseObject,
    localRealmModelObject: IRealmModelRestaurants
  ) {
    // Basic Fields
    // Attributes
    onlineParseObject.set('displayName', localRealmModelObject.displayName)
    ParseObjects.appendGeoLocation(onlineParseObject, localRealmModelObject, 'geoLocation')

    // step2: Restaurant's creator, the logged user submitted the photo.
    await DatabaseHelper.setCreatorForMobile({
      onlineParseObject,
      localRealmModelObject
    })
  }
}
