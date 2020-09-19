import { ParseObjects } from '@appModels/index'

import * as Types from '@app/types'

import { ParseSingleHelper } from '@appParameters/index'

export class ParseFirstObjectHelper {
  /**
   *  Get the first online user parse instance.
   *
   * @param userId
   */
  static async getFirstOnlineUsrParseInstance(
    userId?: string | null
  ): Promise<IParseObjectWithNull> {
    if (userId === undefined || userId === '') {
      return null
    }
    const firstObjectWithNull = await ParseObjects.getQueryByObjectSchemaName(
      Types.model.PARSE_USERS
    )
      .equalTo('objectId', userId)
      .first()
    return firstObjectWithNull as IParseObjectWithNull
  }

  static async getOnlineUsrParseInstanceFromParseUserObject(
    parseUserObject?: ParseModelUsersWithNull
  ): Promise<IParseObjectWithNull> {
    if (parseUserObject !== undefined && !!parseUserObject) {
      return ParseFirstObjectHelper.getFirstOnlineUsrParseInstance(parseUserObject.id)
    }
    return null
  }

  /**
   *  Get the first online parse instance.
   *
   * @param params
   */
  static async getFirstOnlineParseInstanceByTerms(
    params: IGetFirstOnlineParseInstanceByTermsParams
  ): Promise<IParseObjectWithNull> {
    const { query, terms } = params
    const firstObjectWithNull = await ParseSingleHelper.getParseSingleParameters(
      query,
      terms
    ).first({
      useMasterKey: true
    })

    return firstObjectWithNull as IParseObjectWithNull
  }

  /**
   *  Get the first online parse instance.
   *
   * @param params
   */
  static async getFirstOnlineParseInstanceByUniqueId(
    params: IGetFirstOnlineParseInstanceByUniqueIdParams
  ): Promise<IParseObjectWithNull> {
    const { objectSchemaName, terms } = params
    const query = ParseObjects.getQueryByObjectSchemaName(objectSchemaName)
    const firstObjectWithNull = await ParseSingleHelper.getParseSingleParameters(
      query,
      terms
    ).first()

    return firstObjectWithNull as IParseObjectWithNull
  }

  /**
   *  Get the first online parse instance.
   *
   * @param params
   */
  static async getFirstOnlineParseInstance(
    params: IGetFirstOnlineParseInstanceParams
  ): Promise<IParseObjectWithNull> {
    const { objectSchemaName, localRealmModelObject } = params
    if (
      !localRealmModelObject ||
      !localRealmModelObject.uniqueId ||
      localRealmModelObject.uniqueId === ''
    ) {
      return null
    }

    return await ParseFirstObjectHelper.getFirstOnlineParseInstanceByUniqueId({
      objectSchemaName,
      terms: {
        singleUniqueId: localRealmModelObject.uniqueId
      }
    })
  }
}
