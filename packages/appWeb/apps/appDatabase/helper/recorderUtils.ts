import * as Types from '@app/types'
import { AppConstants, StatusConstants } from '@app/types'

import { ParseObjects } from '@appModels/index'

export class RecorderUtils {
  /**
   *
   * @param objectSchemaName
   * @param parseInstance: It is a parse object instance.
   * @returns {Promise.<void>}
   */
  static async updateParseRecorder(objectSchemaName: string, parseInstance) {
    const recordType = AppConstants.realmTypes[objectSchemaName]
    let recorder: any = await ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_RECORDS)
      .equalTo(recordType, parseInstance)
      .first()
    if (!!recorder) {
    } else {
      recorder = ParseObjects.createParseInstance(Types.model.PARSE_RECORDS)
      // Two fields('recordType' and 'flag').
      recorder.set('recordType', recordType)
      recorder.set(
        'flag',
        StatusConstants.parseObjectFlags[Types.flagState.PARSE_OBJECT_FLAG_NORMAL]
      )
      recorder.set(recordType, parseInstance) // For (web app)
    }
    await RecorderUtils._save_recorder(recorder)
  }

  static async _save_recorder(recorder) {
    // ==Important(web)==
    // After saved recorder, the 'updatedAt' column will be updated automatically.
    // So that new 'updatedAt' will notify the mobile app to update their local database.
    await recorder.save()
  }

  static async updateParseRecorderFlagStatus(
    objectSchemaName,
    parseInstance,
    newFlagType = Types.flagState.PARSE_OBJECT_FLAG_NORMAL
  ) {
    const recordType = AppConstants.realmTypes[objectSchemaName]
    const recorder = await ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_RECORDS)
      .equalTo(recordType, parseInstance)
      .first()
    if (!!recorder) {
      recorder.set('flag', StatusConstants.parseObjectFlags[newFlagType])
      recorder.set('removedObjectUniqueId', parseInstance.get('uniqueId'))
    } else {
      throw new Error(`The recorder that recorded the ${objectSchemaName} had been removed!`)
    }
    await RecorderUtils._save_recorder(recorder)
  }

  static async saveNewRecorderAsParseInstance(recordType, onlineParseObjectInstance) {
    const recorder: any = ParseObjects.createParseInstance(Types.model.PARSE_RECORDS)

    recorder.set('recordType', recordType)
    recorder.set('flag', StatusConstants.parseObjectFlags[Types.flagState.PARSE_OBJECT_FLAG_NORMAL])

    recorder.set(recordType, onlineParseObjectInstance)

    await recorder.save()
  }
}
