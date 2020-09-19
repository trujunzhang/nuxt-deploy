import * as Types from '@app/types'
import { DatabaseHelper, ParseFirstObjectHelper } from '../../helper'
import { UniqueIdHelper } from '@app/library' // from '@appLibs/index'

export class Reviews {
  static async updateOnlineParseObject(
    onlineParseObject: IParseObject,
    localRealmModelObject: IRealmModelReviews
  ) {
    // Basic Fields
    // Attributes
    onlineParseObject.set('rate', localRealmModelObject.rate)
    onlineParseObject.set('body', localRealmModelObject.body)
    onlineParseObject.set('reviewType', localRealmModelObject.reviewType)

    // step2: Review's creator, the logged user submitted the photo.
    await DatabaseHelper.setCreatorForMobile({
      onlineParseObject,
      localRealmModelObject
    })

    // Pointer(3)
    const onlineRestaurantInstance: IParseObjectWithNull = await ParseFirstObjectHelper.getFirstOnlineParseInstanceByUniqueId(
      {
        objectSchemaName: Types.model.PARSE_RESTAURANTS,
        terms: {
          singleUniqueId: UniqueIdHelper.getUniqueIdForReview({
            objectSchemaName: Types.model.PARSE_RESTAURANTS,
            localRealmModelObject
          })
        }
      }
    )
    onlineParseObject.set('restaurant', onlineRestaurantInstance)
    const onlineEventInstance: IParseObjectWithNull = await ParseFirstObjectHelper.getFirstOnlineParseInstanceByUniqueId(
      {
        objectSchemaName: Types.model.PARSE_EVENTS,
        terms: {
          singleUniqueId: UniqueIdHelper.getUniqueIdForReview({
            objectSchemaName: Types.model.PARSE_EVENTS,
            localRealmModelObject
          })
        }
      }
    )
    onlineParseObject.set('event', onlineEventInstance)
    const onlineRecipeInstance: IParseObjectWithNull = await ParseFirstObjectHelper.getFirstOnlineParseInstanceByUniqueId(
      {
        objectSchemaName: Types.model.PARSE_RECIPES,
        terms: {
          singleUniqueId: UniqueIdHelper.getUniqueIdForReview({
            objectSchemaName: Types.model.PARSE_RECIPES,
            localRealmModelObject
          })
        }
      }
    )
    onlineParseObject.set('recipe', onlineRecipeInstance)
  }
}
