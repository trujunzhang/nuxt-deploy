import { AppConstants, StatusConstants } from '@app/types'
import { ParseFirstObjectHelper } from './parseFirstObjectHelper'

export class DatabaseHelper {
  /**
   * For mobile and web.
   */
  static setCommonOnlineParseObject(params: IDatabaseHelperSetCommonOnlineParseObjectParams) {
    const { onlineParseObject, savedModel } = params
    onlineParseObject.set('flag', StatusConstants.FLAGS.FLAGS_STATUS_SUBMITTED)
    onlineParseObject.set('uniqueId', savedModel.uniqueId)
    onlineParseObject.set('syncPostedAt', savedModel.syncPostedAt)
  }

  // ==========================
  // For web
  // ==========================
  static async setRelationFieldForWeb(params: IDatabaseHelperSetRelationFieldForWebParams) {
    const { localRealmModelObject, objectSchemaName } = params
    const onlineRelationInstance = (await ParseFirstObjectHelper.getFirstOnlineParseInstance({
      objectSchemaName,
      localRealmModelObject
    })) as IParseObjectWithNull
    const fieldName = AppConstants.realmTypes[objectSchemaName]
    if (!!onlineRelationInstance) {
      params.onlineParseObject.set(fieldName, onlineRelationInstance)
    }
  }

  // ==========================
  // For mobile
  // ==========================
  static async setCreatorForMobile(params: IDatabaseHelperSetCreatorForMobileParams) {
    const { onlineParseObject, localRealmModelObject, fieldName = 'creator' } = params
    const { creator } = localRealmModelObject
    if (creator === undefined || !creator || creator.objectId === '') {
      return null
    }

    const onlineCreatorInstance: IParseObjectWithNull = await ParseFirstObjectHelper.getFirstOnlineUsrParseInstance(
      creator.objectId
    )
    onlineParseObject.set(fieldName, onlineCreatorInstance)
  }

  // ==========================
  // For web
  // ==========================
  static async setCreatorForWeb(params: IDatabaseHelperSetCreatorForWebParams) {
    const { onlineParseObject, parseModel, fieldName = 'creator' } = params
    const { creator } = parseModel
    if (creator === undefined || !creator) {
      return null
    }

    const onlineCreatorInstance: IParseObjectWithNull = await ParseFirstObjectHelper.getOnlineUsrParseInstanceFromParseUserObject(
      parseModel.creator
    )

    if (!!onlineCreatorInstance) {
      // If instance exist, set it for Parse object.
      onlineParseObject.set(fieldName, onlineCreatorInstance)
    }
  }
}
