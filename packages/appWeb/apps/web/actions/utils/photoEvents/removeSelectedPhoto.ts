import { ParseObjects } from '@appModels/index' //from '@app/library' //  '@app/models'
import { RecorderUtils } from '@appDatabase/index' //'@app/library' //  '@app/database'
import * as Types from '@app/types'

export class RemoveSelectedPhoto {
  /**
   * http:   //docs.parseplatform.org/js/guide/#objects
   * @param photo
   * @returns {Promise.<*[]>}
   * @private
   */

  async remove(photo: IParseModelPhotos) {
    // step1: get online photo instance.
    const onlinePhoto = await ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_PHOTOS).get(
      photo.id
    )

    onlinePhoto.destroy({
      useMasterKey: true
    })

    // step2: update the recorder
    await RecorderUtils.updateParseRecorderFlagStatus(
      Types.model.PARSE_PHOTOS,
      onlinePhoto,
      Types.flagState.PARSE_OBJECT_FLAG_REMOVED
    )
  }

  end() {
    return {
      type: Types.editModelAction.SAVE_MODEL_REQUEST
    }
  }
}
