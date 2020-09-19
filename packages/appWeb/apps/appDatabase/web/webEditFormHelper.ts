import { AppConstants } from '@app/types'
import * as EditForm from './editForm'

export class WebEditFormHelper {
  static getParams(params: IEditFormHelperGetParamsParams): IWriteWebParseObjectParams {
    const { editModel, objectSchemaName } = params
    const modelObjectType = AppConstants.realmObjectTypes[objectSchemaName]
    return EditForm[modelObjectType].getParams(editModel)
  }

  static getPageId(params: IEditFormHelperGetPageIdParams): string {
    const { editModel } = params
    const { originModel } = editModel.form
    return originModel.uniqueId
  }
}
