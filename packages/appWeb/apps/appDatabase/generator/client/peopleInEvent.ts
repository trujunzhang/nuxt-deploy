import { Flags, PeopleInEvent, UniqueIdHelper } from '@app/library' // from '@appLibs/index'
import * as Types from '@app/types'
import { AppConstants } from '@app/types'

import { ParseModels, ParseObjects } from '@appModels/index'

/**
 * Generate for new PeopleInEvent as Realm object.
 *
 * @param params
 */

export function generateNewPeopleInEventRealmObject(
  params: IGenerateNewPeopleInEventRealmObjectParams
): IRealmModelPeopleInEvents {
  const { restaurant, event, user } = params
  const model: IRealmModelPeopleInEvents = {
    // base
    objectId: UniqueIdHelper.getUUID(),
    uniqueId: PeopleInEvent.generateParseObjectUniqueId(event.uniqueId, user.objectId),
    createdAt: new Date(),
    updatedAt: new Date(),
    syncPostedAt: new Date(),
    flag: Flags.normalState,
    // common
    creator: null,
    // Attributes
    // Pointer
    restaurant,
    event,
    user,
    // PointIds
    restaurantUniqueId: restaurant.uniqueId,
    eventUniqueId: event.uniqueId,
    userId: user.objectId,

    // Recipes, join with ';'
    recipeUniqueIds: ''
  }
  return model
}
