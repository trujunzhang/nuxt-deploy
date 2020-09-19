import { Flags, PeopleInEvent, UniqueIdHelper } from '@app/library' // from '@appLibs/index'
import { AppConstants } from '@app/types'

import { ParseModels, ParseObjects } from '@appModels/index'

import { generateRelativeObjects } from './utils/clientGeneratorUtils'

/**
 * Generate for new Review as Realm object.
 *
 * @param params
 *
 */

export function generateNewReviewRealmObject(
  params: IGenerateNewReviewRealmObjectParams
): IRealmModelReviews {
  const { realmUser, forReviewItem, objectSchemaName, reviewRating } = params
  const reviewType = AppConstants.realmTypes[objectSchemaName]
  const relativeObject = generateRelativeObjects(forReviewItem, reviewType)

  const model: IRealmModelReviews = {
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
    rate: reviewRating,
    body: '',
    reviewType,
    // Pointer
    // Relation
    ...relativeObject
  }

  return model
}
