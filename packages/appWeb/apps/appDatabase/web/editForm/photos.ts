import * as Types from '@app/types'

export class Photos {
  static getParams(editModel) {
    const { originModel, editModelType } = editModel.form as IEditModelPhotosStateForm

    const model: any = {}

    const object: IWriteWebParseObjectParams = {
      objectSchemaName: Types.model.PARSE_PHOTOS,
      editModelType,
      model
    }
    return object
  }
}
