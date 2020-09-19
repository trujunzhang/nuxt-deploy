import { ParseModels, ParseObjects } from '@appModels/index' //from '@app/library' //  '@app/models'
import { RecorderUtils } from '@appDatabase/index' //'@app/library' //  '@app/database'
import * as Types from '@app/types'

export class OwnPhotoAnotherUser {
  private updatedPhotoModel: IParseModelPhotos | null = null

  async change(params: IOwnPhotoAnotherUserChangeParams) {
    const { photoId, selectedUserId } = params
    // step1: get online photo instance.
    const onlinePhoto = await ParseObjects.getQueryByObjectSchemaName(Types.model.PARSE_PHOTOS).get(
      photoId
    )
    const creator = ParseObjects.getInstanceWithoutData(Types.model.PARSE_USERS, selectedUserId)

    onlinePhoto.set('creator', creator)
    // step2: update user.
    await onlinePhoto.save()
    // step3: save it's recorder.
    await RecorderUtils.updateParseRecorder(Types.model.PARSE_PHOTOS, onlinePhoto)

    this.updatedPhotoModel = ParseModels.fromParsePhoto(onlinePhoto)
  }

  end() {
    return {
      type: Types.fetch.LIST_VIEW_UPDATED_FOR_OWN_PHOTO,
      payload: this.updatedPhotoModel
    }
  }
}
