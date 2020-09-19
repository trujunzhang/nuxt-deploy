import { Flags, PeopleInEvent, UniqueIdHelper } from '@app/library' // from '@appLibs/index'
import * as Types from '@app/types'
import { AppConstants } from '@app/types'

import { ParseModels, ParseObjects } from '@appModels/index'

export function generateNewPeopleInEventParseObject(
  params: INewParseObjectGeneratorGenerateNewPeopleInEventParseObjectParams
): IParseModelPeopleInEvent {
  const { selectedUserId, restaurant, event, newOrderedRecipeIdsAsString, recipes } = params
  const onlineUserInstance: IParseUser = ParseObjects.getInstanceWithoutData(
    Types.model.PARSE_USERS,
    selectedUserId
  )
  const userProfile: IParseModelUsers = ParseModels.parseFromParseUsers(onlineUserInstance)
  return {
    id: UniqueIdHelper.getUUID(),
    uniqueId: PeopleInEvent.generateParseObjectUniqueId(event.uniqueId, selectedUserId),
    createdAt: new Date(),
    updatedAt: new Date(),
    syncPostedAt: new Date(),
    flag: Flags.normalState,
    creator: userProfile,
    // Base
    // Attributes
    // Pointer
    restaurant,
    event,
    user: userProfile,
    recipes,
    recipeUniqueIds: newOrderedRecipeIdsAsString
  }
}
