import { DatabaseHelper } from '../../helper'
import * as Types from '@app/types'
import { ParseObjects } from '@appModels/index'

export class Reviews {
  static async setOnlineParseInstance(
    onlineParseObject: IParseObject,
    parseModel: IParseModelReviews
  ) {
    // Basic Fields
    // Attributes
    onlineParseObject.set('rate', parseModel.rate)
    onlineParseObject.set('body', parseModel.body)
    onlineParseObject.set('reviewType', parseModel.reviewType)

    // step2: Review's creator, the logged user submitted the photo.
    await DatabaseHelper.setCreatorForWeb({
      parseModel,
      onlineParseObject
    })

    // step3: set the relation by review type.(For 'restaurant','event','recipe').(for web).
    await DatabaseHelper.setRelationFieldForWeb({
      objectSchemaName: Types.model.PARSE_RESTAURANTS,
      localRealmModelObject: parseModel.restaurant,
      onlineParseObject
    })
    await DatabaseHelper.setRelationFieldForWeb({
      objectSchemaName: Types.model.PARSE_EVENTS,
      localRealmModelObject: parseModel.event,
      onlineParseObject
    })
    await DatabaseHelper.setRelationFieldForWeb({
      objectSchemaName: Types.model.PARSE_RECIPES,
      localRealmModelObject: parseModel.recipe,
      onlineParseObject
    })
  }
}
