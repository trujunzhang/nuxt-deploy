import * as Types from '@app/types'

export class Users {
  static getParams(editModel): IWriteWebParseObjectParams {
    const { originModel, editModelType } = editModel.form as IEditModelUsersStateForm

    const model: any = {}
    const object: IWriteWebParseObjectParams = {
      objectSchemaName: Types.model.PARSE_USERS,
      editModelType,
      model
    }
    return object
  }
}
