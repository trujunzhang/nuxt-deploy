import { Flags, PeopleInEvent, UniqueIdHelper } from '@app/library' // from '@appLibs/index'
import { AppConstants } from '@app/types'

import { ParseModels, ParseObjects } from '@appModels/index'

/**
 * Generate for new Recipe as Realm object.
 *
 * @param params
 */

export function generateNewRecipeRealmObject(
  params: IGenerateNewRecipeRealmObjectParams
): IRealmModelRecipes {
  const { restaurant, realmUser } = params
  const model: IRealmModelRecipes = {
    // base
    objectId: UniqueIdHelper.getUUID(),
    uniqueId: UniqueIdHelper.getUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    syncPostedAt: new Date(),
    flag: Flags.normalState,
    // common
    creator: realmUser,
    // Attributes
    displayName: '',
    price: '0',
    // Pointer
    restaurant,
    restaurantUniqueId: restaurant.uniqueId
  }
  return model
}
