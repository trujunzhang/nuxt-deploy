import * as SetOnlineParseObjects from './setOnlineParseObjects'

import { AppConstants } from '@app/types'

import { DatabaseHelper } from '../helper'

/**
 * Class WebParseDatabaseUtils:
 *  This class that support for all data methods.
 *
 */
export class WebParseDatabaseUtils {
  /**
   * Only for Push to Server.
   * New online parse object, then set properties for it.
   *
   * @param params
   */
  static async newOnlineParseInstance(params: IWebParseDatabaseUtilsNewOnlineParseInstanceParams) {
    const { onlineParseObject, objectSchemaName, parseModel } = params

    DatabaseHelper.setCommonOnlineParseObject({
      onlineParseObject,
      savedModel: parseModel
    })

    const modelObjectType = AppConstants.realmObjectTypes[objectSchemaName]
    const instance = SetOnlineParseObjects[modelObjectType]
    await instance.setOnlineParseInstance(onlineParseObject, parseModel)
  }

  /**
   * Only for Push to Server.
   * The fetched online parse object, then update properties for it.
   *
   * Update the online parse object:
   *  1. only update the attribute fields.
   *  2. no need to update their Relation fields.
   *
   * @param params
   */
  static async updateOnlineParseInstance(
    params: IWebParseDatabaseUtilsUpdateOnlineParseInstanceParams
  ) {
    const { onlineParseObject, objectSchemaName, parseModel } = params

    DatabaseHelper.setCommonOnlineParseObject({
      onlineParseObject,
      savedModel: parseModel
    })

    const modelObjectType = AppConstants.realmObjectTypes[objectSchemaName]
    const instance = SetOnlineParseObjects[modelObjectType]
    await instance.setOnlineParseInstance(onlineParseObject, parseModel)
  }
}
