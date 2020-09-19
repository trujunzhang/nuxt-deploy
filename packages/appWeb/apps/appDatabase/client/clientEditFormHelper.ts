import { AppConstants } from '@app/types'
import * as EditForm from './editForm'

import { ReducerHelper } from '@app/library' // from '@appLibs/index

export class ClientEditFormHelper {
  static getParams(params: IEditFormHelperGetParamsParams): IRealmSaverWriteLocalRealmObjectParams {
    const { editModel, objectSchemaName } = params
    const modelObjectType = AppConstants.realmObjectTypes[objectSchemaName]
    return EditForm[modelObjectType].getParams(editModel)
  }

  static getPageId(params: IEditFormHelperGetPageIdParams): string {
    const { editModel } = params
    return ReducerHelper.getUniqueIdFromEditModel({ editModel })
  }
}
