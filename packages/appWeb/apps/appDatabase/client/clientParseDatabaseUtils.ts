import * as UpdateOnlineParseObjects from './updateOnlineParseObjects'
import * as NewOnlineParseObjects from './newOnlineParseObjects'

import { AppConstants } from '@app/types'

import { DatabaseHelper } from '../helper'

/**
 * Class ClientParseDatabaseUtils:
 *  This class that support for all data methods for mobile apps.
 *
 */
export class ClientParseDatabaseUtils {
  /**
   * Only for Push to Server.
   * New online parse object, then set properties for it.
   *
   * @param params
   */
  static async newOnlineParseInstance(
    params: IClientParseDatabaseUtilsNewOnlineParseInstanceParams
  ) {
    const { onlineParseObject, objectSchemaName, localRealmModelObject } = params

    DatabaseHelper.setCommonOnlineParseObject({
      onlineParseObject,
      savedModel: localRealmModelObject
    })

    const modelObjectType = AppConstants.realmObjectTypes[objectSchemaName]
    const instance = NewOnlineParseObjects[modelObjectType]
    await instance.createOnlineParseInstance(onlineParseObject, localRealmModelObject)
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
    params: IClientParseDatabaseUtilsUpdateOnlineParseInstanceParams
  ) {
    const { onlineParseObject, objectSchemaName, localRealmModelObject } = params

    DatabaseHelper.setCommonOnlineParseObject({
      onlineParseObject,
      savedModel: localRealmModelObject
    })

    const modelObjectType = AppConstants.realmObjectTypes[objectSchemaName]
    const instance = UpdateOnlineParseObjects[modelObjectType]
    await instance.updateOnlineParseObject(onlineParseObject, localRealmModelObject)
  }
}
