import { Flags, PeopleInEvent, UniqueIdHelper } from '@app/library' // from '@appLibs/index'

export function generateNewEventParseObject(
  params: INewParseObjectGeneratorGenerateNewEventParseObjectParams
): IParseModelEvents {
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
    slug: '',
    want: '',
    start: new Date(),
    end: new Date(),
    restaurant
  }
}
