import * as Types from '@app/types'
import { AppConstants } from '@app/types'

import { ParseObjects } from '@appModels/index'

import { ParseFirstObjectHelper } from '../../helper'

export class ParseObjectsUtils {
  static async getOnlineRecorderInstance(
    params: IParseObjectsUtilsGetOnlineRecorderInstanceParams
  ) {
    const { recordType, onlineParseInstance } = params
    if (!!onlineParseInstance) {
      // Exist
      return await ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_RECORDS)
        .equalTo(recordType, onlineParseInstance)
        .first()
    }
    return null
  }

  /**
   *
   * set the relation by photo type.(For 'restaurant','recipe','user').
   *
   * @param localRecorder
   * @param onlineParseObject
   */
  static async setOnlineParsePhotoRelationByUniqueId(
    params: IParseObjectsUtilsSetOnlineParsePhotoRelationByUniqueIdParams
  ) {
    const { localRealmModelObject, onlineParseObject } = params
    // tslint:disable-next-line:variable-name
    const _photoType = localRealmModelObject.photoType
    const { objectSchemaName } = AppConstants.realmObjects[_photoType]

    // Step1: get online relation parse object instance by 'UniqueId'.
    //
    // Important(for mobile):
    //
    // Because if the local instance is new created, and do not update,
    // It's objectId is not the same as it's online 'id'.
    //
    // So must use 'uniqueId' to get it.
    // tslint:disable-next-line:variable-name
    const _realmRelationInstance = localRealmModelObject[_photoType]
    // tslint:disable-next-line:variable-name
    const _onlineRelationInstance = await ParseFirstObjectHelper.getFirstOnlineParseInstance({
      objectSchemaName,
      localRealmModelObject: _realmRelationInstance
    })

    // Step2: set photo's relation online instance.
    onlineParseObject.set(_photoType, _onlineRelationInstance)
  }
}
