import { MomentUtils } from '@app/tools'

import { ParseModelsHelper } from '@app/types'
export class SyncPostedAtHelper {
  static updateRealmSyncPostedAt(params: ISyncPostedAtHelperUpdateRealmSyncPostedAtParams) {
    const { instance, newDate } = params
    instance.syncPostedAt = newDate
  }

  static updateParseSyncPostedAt(params: ISyncPostedAtHelperUpdateParseSyncPostedAtParams) {
    const { instance, newDate } = params
    instance.set('syncPostedAt ', newDate)
  }

  private static isBefore(params: ISyncPostedAtHelperNeedUpdateLocalRealmObjectParams): boolean {
    const { lastRealmObject, recordedParseModel } = params
    const serverSyncPostedAt = recordedParseModel.syncPostedAt
    const localSyncPostedAt = lastRealmObject.syncPostedAt

    const result = MomentUtils.isBefore(localSyncPostedAt, serverSyncPostedAt)
    return result
  }

  private static isAfter(params: ISyncPostedAtHelperNeedUpdateOnlineParseObjectParams): boolean {
    const { localRealmModelObject, onlineParseObject } = params
    const serverSyncPostedAt = ParseModelsHelper.getSyncPostedAt(onlineParseObject)
    const localSyncPostedAt = localRealmModelObject.syncPostedAt

    const result = MomentUtils.isAfter(localSyncPostedAt, serverSyncPostedAt)
    return result
  }

  /**
   *  Chech whether need update local realm object.
   *    If the local syncPostedAt is before than the server syncPostedAt,
   *    Then need to update the local realm objects.
   * @param lastRealmObject
   * @param recordedParseModel
   */
  static needUpdateLocalRealmObject(params: ISyncPostedAtHelperNeedUpdateLocalRealmObjectParams) {
    const needUpdateLocal = SyncPostedAtHelper.isBefore(params)
    return needUpdateLocal
  }

  // If the local syncPostedAt is after than the server syncPostedAt,
  // Then need to update the online parse objects.
  static needUpdateOnlineParseObject(params: ISyncPostedAtHelperNeedUpdateOnlineParseObjectParams) {
    const needUpdateOnline = SyncPostedAtHelper.isAfter(params)
    return needUpdateOnline
  }
}
