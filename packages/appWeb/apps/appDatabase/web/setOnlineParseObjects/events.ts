import * as Types from '@app/types'
import { ParseFirstObjectHelper } from '../../helper'

export class Events {
  static async setOnlineParseInstance(
    onlineParseObject: IParseObject,
    parseModel: IParseModelEvents
  ) {
    // Basic Fields
    // Attributes
    onlineParseObject.set('displayName', parseModel.displayName)
    onlineParseObject.set('start', new Date(parseModel.start))
    onlineParseObject.set('end', new Date(parseModel.end))
    onlineParseObject.set('want', parseModel.want)

    // relation
    // 1. restaurant
    const onlineRestaurantInstance = (await ParseFirstObjectHelper.getFirstOnlineParseInstance({
      objectSchemaName: Types.model.PARSE_RESTAURANTS,
      localRealmModelObject: parseModel.restaurant
    })) as IParseObjectWithNull
    onlineParseObject.set('restaurant', onlineRestaurantInstance)

    // step2: Event's creator, the logged user submitted the photo.
    const onlineCreatorInstance: IParseObjectWithNull = await ParseFirstObjectHelper.getOnlineUsrParseInstanceFromParseUserObject(
      parseModel.creator
    )
    onlineParseObject.set('creator', onlineCreatorInstance)
  }
}
