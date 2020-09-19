import { ParseFirstObjectHelper } from '../../helper'
import * as Types from '@app/types'
import { ParseObjects } from '@appModels/index'

import { PriceHelper } from '@app/library' // from '@appLibs/index'

export class Recipes {
  static async setOnlineParseInstance(
    onlineParseObject: IParseObject,
    parseModel: IParseModelRecipes
  ) {
    // Basic Fields
    // Attributes
    onlineParseObject.set('displayName', parseModel.displayName)
    onlineParseObject.set('price', PriceHelper.fixPriceAsString(parseModel.price))

    // relation
    const onlineRestaurantInstance = ParseObjects.getInstanceWithoutData(
      Types.model.PARSE_RESTAURANTS,
      parseModel.restaurant.id
    )
    onlineParseObject.set('restaurant', onlineRestaurantInstance)

    // step2: Recipe's creator, the logged user submitted the photo.
    const onlineCreatorInstance: IParseObjectWithNull = await ParseFirstObjectHelper.getOnlineUsrParseInstanceFromParseUserObject(
      parseModel.creator
    )
    onlineParseObject.set('creator', onlineCreatorInstance)
  }
}
