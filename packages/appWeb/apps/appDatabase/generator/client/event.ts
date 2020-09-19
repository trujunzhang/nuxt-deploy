import { Flags, PeopleInEvent, UniqueIdHelper } from '@app/library' // from '@appLibs/index'
import { AppConstants } from '@app/types'

import { ParseModels, ParseObjects } from '@appModels/index'

/**
 *  Generate for new event as Realm object.
 *
 * @param params
 */

export function generateNewEventRealmObject(
  params: IGenerateNewEventRealmObjectParams
): IRealmModelEvents {
  const { restaurant, realmUser } = params
  const model: IRealmModelEvents = {
    // base
    objectId: UniqueIdHelper.getUUID(),
    uniqueId: UniqueIdHelper.getUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    syncPostedAt: new Date(),
    flag: Flags.normalState,
    // common
    creator: realmUser,
    // properties
    start: new Date(),
    end: new Date(),
    displayName: '',
    want: '',
    restaurant,
    restaurantUniqueId: restaurant.uniqueId
  }
  return model
}
