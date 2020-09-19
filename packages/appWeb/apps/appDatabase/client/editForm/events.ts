import * as Types from '@app/types'
import { MomentUtils } from '@app/tools'

export class Events {
  static getParams(editModel) {
    const { originModel, editModelType } = editModel.form

    const displayName = editModel.form.fields.displayName
    const want = editModel.form.fields.eventWhat
    const start: string = editModel.form.fields.start
    const end: string = editModel.form.fields.end

    const model: IRealmModelEvents = {
      // commonProperties
      objectId: originModel.objectId,
      uniqueId: originModel.uniqueId,
      createdAt: originModel.createdAt,
      updatedAt: originModel.updatedAt,
      syncPostedAt: originModel.syncPostedAt,
      flag: originModel.flag,
      // Attributes
      displayName,
      want,
      start: MomentUtils.convertToEventDate(start),
      end: MomentUtils.convertToEventDate(end),
      // points
      restaurant: originModel.restaurant,
      restaurantUniqueId: originModel.restaurantUniqueId,
      // Model's creator
      creator: originModel.creator
    }

    const object: IRealmSaverWriteLocalRealmObjectParams = {
      objectSchemaName: Types.model.PARSE_EVENTS,
      editModelType,
      model
    }
    return object
  }
}
