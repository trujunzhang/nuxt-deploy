import * as Types from '@app/types'

export class Photos {
  static getParams(editModel) {
    const { originModel, editModelType } = editModel.form

    const model: any = {}

    const object: IRealmSaverWriteLocalRealmObjectParams = {
      objectSchemaName: Types.model.PARSE_PHOTOS,
      editModelType,
      model
    }
    return object
  }
}
