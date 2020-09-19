import { Photos } from '@app/library' //  '@app/libs'

declare interface IImagesSlideShowViewHelperAdjustPhotoUrlParams {
  listPhotosDict?: IListPhotosDict<string>
  parseId: string
}
declare interface IImagesSlideShowViewHelperGenerateSlideShowObjectParams {
  listPhotosDict?: IListPhotosDict<string>
  objectSchemaName: string
  forObject: any
}


export class ImagesSlideShowViewHelper {
  private static adjustPhotoUrl(params: IImagesSlideShowViewHelperAdjustPhotoUrlParams) {
    const { listPhotosDict, parseId } = params
    let photoUrl = ''

    if (listPhotosDict !== undefined && !!listPhotosDict) {
      if (Object.keys(listPhotosDict).indexOf(parseId) !== -1) {
        photoUrl = listPhotosDict[parseId]
      }
    }

    return photoUrl
  }

  /**
   * Format:
   * {
   *   emptyList: true|false
   *   imageArray:[]
   *   placeholder: string
   * }
   * @param props
   */
  static generateSlideShowObject(
    params: IImagesSlideShowViewHelperGenerateSlideShowObjectParams
  ): ISlideShowObject {
    const { listPhotosDict, objectSchemaName, forObject } = params
    const photoUrl = ImagesSlideShowViewHelper.adjustPhotoUrl({
      listPhotosDict,
      parseId: forObject.id
    })
    const slideObject = {
      emptyList: photoUrl === '',
      photoUrl,
      placeholder: Photos.config.placeHolderSmallImage[objectSchemaName]
    }
    return slideObject
  }
}
