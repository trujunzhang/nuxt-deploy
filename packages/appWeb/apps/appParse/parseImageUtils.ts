import { ParseObjects } from '@appModels/index'

import { UploadFileHelper } from './uploadFileHelper'

export class ParseImageUtils {
  static async uploadImageForArticle(
    onlinePostInstance: IParseObject,
    localRecorder: IWriteParseObjectUploadImageModel
  ) {
    const result: any = await UploadFileHelper.getUploadImageUrl(
      localRecorder.localUploadFile,
      'thumbnail'
    )
    if (!!result) {
      onlinePostInstance.set('cloudinaryId', result.cloudinaryId)
      onlinePostInstance.set('cloudinaryUrls', [
        {
          name: 'small',
          url: result.thumbnailUrl
        }
      ])
      await onlinePostInstance.save()
    } else {
      throw new Error('Update image failure!')
    }
  }

  static async uploadImageForUser(
    onlineUserInstance: IParseUser,
    localRecorder: IWriteParseObjectUploadImageModel
  ) {
    const result: any = await UploadFileHelper.getUploadImageUrl(
      localRecorder.localUploadFile,
      'cover'
    )
    if (!!result) {
      onlineUserInstance.set('coverId', result.cloudinaryId)
      onlineUserInstance.set('coverUrls', [
        {
          name: 'small',
          url: result.thumbnailUrl
        }
      ])
      await ParseObjects.ParseUsers.saveWithMasterKey(onlineUserInstance)
    } else {
      throw new Error('Update image failure!')
    }
  }
}
