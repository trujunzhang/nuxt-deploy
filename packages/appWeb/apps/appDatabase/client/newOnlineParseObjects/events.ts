import * as Types from '@app/types'
import { DatabaseHelper, ParseFirstObjectHelper } from '../../helper'

export class Events {
  static async createOnlineParseInstance(
    onlineParseObject: IParseObject,
    localRealmModelObject: IRealmModelEvents
  ) {
    // Basic Fields
    // Attributes
    onlineParseObject.set('displayName', localRealmModelObject.displayName)
    onlineParseObject.set('start', new Date(localRealmModelObject.start))
    onlineParseObject.set('end', new Date(localRealmModelObject.end))
    onlineParseObject.set('want', localRealmModelObject.want)

    // relation
    const onlineRestaurantInstance = await ParseFirstObjectHelper.getFirstOnlineParseInstanceByUniqueId(
      {
        objectSchemaName: Types.model.PARSE_RESTAURANTS,
        terms: {
          singleUniqueId: localRealmModelObject.restaurantUniqueId
        }
      }
    )
    onlineParseObject.set('restaurant', onlineRestaurantInstance)

    // step2: Event's creator, the logged user submitted the photo.
    await DatabaseHelper.setCreatorForMobile({
      onlineParseObject,
      localRealmModelObject
    })
  }
}
