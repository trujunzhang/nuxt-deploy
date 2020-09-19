import { ParseObjects } from '@appModels/index'

import { ParseFirstObjectHelper } from '../../helper'

export class Restaurants {
  static async setOnlineParseInstance(
    onlineParseObject: IParseObject,
    parseModel: IParseModelRestaurants
  ) {
    // Basic Fields
    // Attributes
    onlineParseObject.set('displayName', parseModel.displayName)
    onlineParseObject.set('geoLocation', parseModel.geoLocation)
    // Extend google address information.
    onlineParseObject.set('address', parseModel.address)
    onlineParseObject.set('street_number', parseModel.street_number)
    onlineParseObject.set('route', parseModel.route)
    onlineParseObject.set('locality', parseModel.locality)
    onlineParseObject.set('sublocality', parseModel.sublocality)
    onlineParseObject.set('country', parseModel.country)
    onlineParseObject.set('postal_code', parseModel.postal_code)
    onlineParseObject.set('administrative_area', parseModel.administrative_area)

    // step2: Restaurant's creator, the logged user submitted the photo.
    const onlineCreatorInstance: IParseObjectWithNull = await ParseFirstObjectHelper.getOnlineUsrParseInstanceFromParseUserObject(
      parseModel.creator
    )
    onlineParseObject.set('creator', onlineCreatorInstance)
  }
}
