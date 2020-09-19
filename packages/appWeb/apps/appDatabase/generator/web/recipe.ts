import { Flags, PeopleInEvent, UniqueIdHelper } from '@app/library' // from '@appLibs/index'
import { AppConstants } from '@app/types'

import { ParseModels, ParseObjects } from '@appModels/index'

export function generateNewRecipeParseObject(
  params: INewParseObjectGeneratorGenerateNewRecipeParseObjectParams
): IParseModelRecipes {
  const { currentUser, restaurant } = params
  return {
    id: UniqueIdHelper.getUUID(),
    uniqueId: UniqueIdHelper.getUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    syncPostedAt: new Date(),
    flag: Flags.normalState,
    creator: currentUser,
    // Base
    displayName: '',
    price: '0',
    restaurant
  }
}
