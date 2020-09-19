import * as Types from '@app/types'

import { ParseObjects } from '@appModels/index'
import { ParseFirstObjectHelper } from '../../helper'

export class PeopleInEvents {
  static async setOnlineParseInstance(
    onlineParseObject: IParseObject,
    parseModel: IParseModelPeopleInEvent
  ) {
    // Basic Fields
    // Attributes
    // step2: Review's creator, the logged user submitted the photo.
    const onlineCreatorInstance: IParseObjectWithNull = await ParseFirstObjectHelper.getOnlineUsrParseInstanceFromParseUserObject(
      parseModel.creator
    )
    onlineParseObject.set('creator', onlineCreatorInstance)
    // Pointer
    // Restaurant
    const onlineRestaurantInstance = ParseObjects.getInstanceWithoutData(
      Types.model.PARSE_RESTAURANTS,
      parseModel.restaurant.id
    )
    onlineParseObject.set('restaurant', onlineRestaurantInstance)
    // Event
    const onlineEventInstance = ParseObjects.getInstanceWithoutData(
      Types.model.PARSE_EVENTS,
      parseModel.event.id
    )
    onlineParseObject.set('event', onlineEventInstance)
    // User
    const onlineUserInstance = ParseObjects.getInstanceWithoutData(
      Types.model.PARSE_USERS,
      parseModel.user.id
    )
    onlineParseObject.set('user', onlineUserInstance)
    onlineParseObject.set('creator', onlineUserInstance)
    // Recipes Array
    const recipes: IParseObject[] = parseModel.recipes.map((recipe: IParseModelRecipes) => {
      return ParseObjects.getInstanceWithoutData(Types.model.PARSE_RECIPES, recipe.id)
    })
    onlineParseObject.set('recipes', recipes)
  }
}
