import * as Types from '@app/types'

import { ParseObjects } from '@appModels/index' //from '@app/library' //  '@app/models'
import { RecorderUtils, WebParseDatabaseUtils } from '@appDatabase/index' //'@app/library' //  '@app/database'
import { UploadFileHelper } from '@appParse/index' // '@app/library' //  '@app/parse'

export class UploadSinglePhoto {
  private newPhotoInstance: IParseModelPhotos
  private result: CloudinaryCloudReturnResultWithNull = null

  constructor(newPhotoInstance: IParseModelPhotos) {
    this.newPhotoInstance = newPhotoInstance
  }

  async upload(localUploadFile: ILocalUploadFile) {
    // Step1: upload the uploaded local photo stream.
    this.result = await UploadFileHelper.getUploadImageUrl(localUploadFile)

    // Step2: Save photo and it's record.
    await this.savePhoto()
  }

  private fixParsePhotoObject(): IParseModelPhotos {
    if (!!this.result) {
      return Object.assign({}, this.newPhotoInstance, {
        thumbnailUrl: this.result.thumbnailUrl,
        originalUrl: this.result.originalUrl
      })
    }

    return this.newPhotoInstance
  }

  private async savePhoto() {
    if (!!this.result) {
      const onlinePhotoParseObject: IParseObject = ParseObjects.createParseInstance(
        Types.model.PARSE_PHOTOS
      )

      // step1: generate photo.
      const fixedParsePhotoModel = this.fixParsePhotoObject()
      await WebParseDatabaseUtils.newOnlineParseInstance({
        objectSchemaName: Types.model.PARSE_PHOTOS,
        onlineParseObject: onlinePhotoParseObject,
        parseModel: fixedParsePhotoModel
      })

      // step2: save photo.
      await onlinePhotoParseObject.save()

      // step3: update the recorder
      await RecorderUtils.updateParseRecorder(Types.model.PARSE_PHOTOS, onlinePhotoParseObject)
    } else {
      throw new Error(' Upload image failure!')
    }
  }

  end() {
    return {
      type: Types.editModelAction.SAVE_MODEL_REQUEST
    }
  }
}
