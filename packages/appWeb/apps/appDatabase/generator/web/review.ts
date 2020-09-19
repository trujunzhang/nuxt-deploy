import { Flags, PeopleInEvent, UniqueIdHelper } from '@app/library' // from '@appLibs/index'
import { AppConstants } from '@app/types'

import { ParseModels, ParseObjects } from '@appModels/index'

import { generateRelativeObjects } from './utils/webGeneratorUtils'

export function generateNewReviewParseObject(
  params: INewParseObjectGeneratorGenerateNewReviewParseObjectParams
): IParseModelReviews {
  const { currentUser, forItem, objectSchemaName, rate, body } = params
  const reviewType = AppConstants.realmTypes[objectSchemaName]
  const relativeObject = generateRelativeObjects({
    forParseInstance: forItem,
    reviewType
  })
  return {
    id: UniqueIdHelper.getUUID(),
    uniqueId: UniqueIdHelper.getUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    syncPostedAt: new Date(),
    flag: Flags.normalState,
    creator: currentUser,
    // Base
    // Attributes
    rate,
    body,
    reviewType,
    // Relation
    ...relativeObject
  }
}
