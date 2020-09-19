import * as Types from '@app/types'
import { DatabaseHelper, ParseArrayObjectsHelper, ParseFirstObjectHelper } from '../../helper'

export class PeopleInEvents {
  static async createOnlineParseInstance(
    onlineParseObject: IParseObject,
    localRealmModelObject: IRealmModelPeopleInEvents
  ) {
    // Basic Fields
    // Attributes
    // Recipes
    const onlineRecipes: IParseObject[] = await ParseArrayObjectsHelper.getRecipesParseObjectsForPeopleInEvent(
      localRealmModelObject.recipeUniqueIds
    )
    onlineParseObject.set('recipes', onlineRecipes)
    // step2: Review's creator, the logged user submitted the photo.
    await DatabaseHelper.setCreatorForMobile({
      onlineParseObject,
      localRealmModelObject
    })
    // Pointer
    const onlineRestaurantInstance: IParseObjectWithNull = await ParseFirstObjectHelper.getFirstOnlineParseInstanceByUniqueId(
      {
        objectSchemaName: Types.model.PARSE_RESTAURANTS,
        terms: {
          singleUniqueId: localRealmModelObject.restaurantUniqueId
        }
      }
    )
    onlineParseObject.set('restaurant', onlineRestaurantInstance)
    const onlineEventInstance: IParseObjectWithNull = await ParseFirstObjectHelper.getFirstOnlineParseInstanceByUniqueId(
      {
        objectSchemaName: Types.model.PARSE_EVENTS,
        terms: {
          singleUniqueId: localRealmModelObject.eventUniqueId
        }
      }
    )
    onlineParseObject.set('event', onlineEventInstance)

    // step3: User
    const onlineUserInstance: IParseObjectWithNull = await ParseFirstObjectHelper.getFirstOnlineUsrParseInstance(
      localRealmModelObject.userId
    )
    onlineParseObject.set('user', onlineUserInstance)
  }
}
