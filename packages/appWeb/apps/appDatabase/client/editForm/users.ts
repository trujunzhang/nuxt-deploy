import * as Types from '@app/types'

export class Users {
  static getParams(editModel): IRealmSaverWriteLocalRealmObjectParams {
    const { originalModel, editModelType } = editModel.form

    const model: any = {}
    const object: IRealmSaverWriteLocalRealmObjectParams = {
      objectSchemaName: Types.model.PARSE_USERS,
      editModelType,
      model
    }
    return object
  }
}
