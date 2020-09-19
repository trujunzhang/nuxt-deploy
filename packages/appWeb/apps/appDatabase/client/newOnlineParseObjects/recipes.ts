import * as Types from '@app/types'
import { DatabaseHelper, ParseFirstObjectHelper } from '../../helper'

export class Recipes {
  static async createOnlineParseInstance(
    onlineParseObject: IParseObject,
    localRealmModelObject: IRealmModelRecipes
  ) {
    // Basic Fields
    // Attributes
    onlineParseObject.set('displayName', localRealmModelObject.displayName)
    onlineParseObject.set('price', localRealmModelObject.price)

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

    // step2: Recipe's creator, the logged user submitted the photo.
    await DatabaseHelper.setCreatorForMobile({
      onlineParseObject,
      localRealmModelObject
    })
  }
}
