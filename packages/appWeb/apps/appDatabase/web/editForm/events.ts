import * as Types from '@app/types'
import { MomentUtils } from '@app/tools'

export class Events {
  static getParams(editModel) {
    const { originModel, editModelType } = editModel.form as IEditModelEventsStateForm

    const displayName = editModel.form.fields.displayName
    const want = editModel.form.fields.eventWhat
    const start: string = editModel.form.fields.start
    const end: string = editModel.form.fields.end

    const model: IParseModelEvents = {
      // commonProperties
      id: originModel.id,
      uniqueId: originModel.uniqueId,
      createdAt: originModel.createdAt,
      updatedAt: originModel.updatedAt,
      syncPostedAt: originModel.syncPostedAt,
      flag: originModel.flag,
      // Attributes
      displayName,
      slug: '',
      want,
      start: MomentUtils.convertToEventDate(start),
      end: MomentUtils.convertToEventDate(end),
      // point
      restaurant: originModel.restaurant,
      // Model's creator
      creator: originModel.creator
    }

    const object: IWriteWebParseObjectParams = {
      objectSchemaName: Types.model.PARSE_EVENTS,
      editModelType,
      model
    }
    return object
  }
}
