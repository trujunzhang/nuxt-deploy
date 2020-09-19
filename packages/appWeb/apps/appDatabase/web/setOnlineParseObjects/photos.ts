import { ParseObjects } from '@appModels/index'

import * as Types from '@app/types'
import { ParseFirstObjectHelper } from '../../helper'

export class Photos {
  static async setOnlineParseInstance(
    onlineParseObject: IParseObject,
    parseModel: IParseModelPhotos
  ) {
    // Basic Fields
    onlineParseObject.set('photoType', parseModel.photoType)

    // Photo images.
    onlineParseObject.set('thumbnailUrl', parseModel.thumbnailUrl)
    onlineParseObject.set('originalUrl', parseModel.originalUrl)

    // step2: Photo's creator, the logged user submitted the photo.
    const onlineCreatorInstance: IParseObjectWithNull = await ParseFirstObjectHelper.getOnlineUsrParseInstanceFromParseUserObject(
      parseModel.creator
    )
    onlineParseObject.set('creator', onlineCreatorInstance)

    // step3: set the relation by photo type.(For 'restaurant','recipe','user').(for web).
    const onlineRestaurantInstance = (await ParseFirstObjectHelper.getFirstOnlineParseInstance({
      objectSchemaName: Types.model.PARSE_RESTAURANTS,
      localRealmModelObject: parseModel.restaurant
    })) as IParseObjectWithNull
    onlineParseObject.set('restaurant', onlineRestaurantInstance)
    const onlineEventInstance = (await ParseFirstObjectHelper.getFirstOnlineParseInstance({
      objectSchemaName: Types.model.PARSE_EVENTS,
      localRealmModelObject: parseModel.event
    })) as IParseObjectWithNull
    onlineParseObject.set('event', onlineEventInstance)
    const onlineRecipeInstance = (await ParseFirstObjectHelper.getFirstOnlineParseInstance({
      objectSchemaName: Types.model.PARSE_RECIPES,
      localRealmModelObject: parseModel.recipe
    })) as IParseObjectWithNull
    onlineParseObject.set('recipe', onlineRecipeInstance)
    const onlineUserInstance = (await ParseFirstObjectHelper.getFirstOnlineParseInstance({
      objectSchemaName: Types.model.PARSE_USERS,
      localRealmModelObject: parseModel.user
    })) as IParseObjectWithNull
    onlineParseObject.set('user', onlineUserInstance)
  }
}
