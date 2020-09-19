import { AppLinks, PhotoBrowserSelectionHelper } from '@appUtils/index'
import { CreatorHelper, Photos } from '@app/library' //  '@app/libs'
import { AppConstants } from '@app/types'

export class PhotosScrollHelper {
  private static getSinglePhotoItem(
    params: IPhotosScrollHelperGetSinglePhotoItemParams
  ): IPhotoBrowserItem {
    const { photo, objectSchemaName, forObject, router } = params
    return {
      photoId: photo.id,
      linkObject: PhotoBrowserSelectionHelper.getPhotosBrowserSelectionLink({
        photo,
        objectSchemaName,
        forObject,
        router
      }),
      imageUrl: Photos.getPhotoThumbnailUrl(photo)
    }
  }

  static getPhotoInfoAboutUser(photo: IParseModelPhotos): IPhotoBrowserUserItem {
    const user: IParseModelUsers = CreatorHelper.fixCreatorForParseModel(photo)
    return {
      userId: user.id,
      displayName: user.displayName,
      imageUrl: '',
      userProfileUrl: AppLinks.getLoggedUserMenuLink(user)
    }
  }

  static getSinglePhotoItemInfo(
    params: IPhotosScrollHelperGetSinglePhotoItemInfoParams
  ): IPhotoBrowserItemInfo {
    const { photo, router } = params
    const user: IParseModelUsers = CreatorHelper.fixCreatorForParseModel(photo)
    const { photoType } = photo
    const { objectSchemaName } = AppConstants.realmObjects[photoType]
    const photoObject: IParseModelPhotos = photo[photoType]
    return {
      ...PhotosScrollHelper.getSinglePhotoItem({
        photo,
        objectSchemaName,
        forObject: photoObject,
        router
      }),
      overlay: {
        id: photo.id,
        creator: user,
        title: user.displayName,
        linkUrl: AppLinks.geDetailedModelLinkByObjectSchemaName(objectSchemaName, photoObject),
        user: PhotosScrollHelper.getPhotoInfoAboutUser(photo)
      }
    }
  }

  static generateHeaderRightPhotoObject(
    params: IPhotosScrollHelperGenerateHeaderRightPhotoObjectParams
  ): IPhotoBrowserObject {
    const { objectSchemaName, forObject, photosListTask, router } = params
    const photos = photosListTask.results
    const photoLength = photos.length
    if (photoLength >= 6) {
      return {
        photosWallModel: true,
        total: photoLength,
        photos: [
          PhotosScrollHelper.getSinglePhotoItemInfo({ photo: photos[0], router }),
          PhotosScrollHelper.getSinglePhotoItemInfo({ photo: photos[1], router })
        ],
        photosWall: [
          PhotosScrollHelper.getSinglePhotoItem({
            photo: photos[2],
            objectSchemaName,
            forObject,
            router
          }),
          PhotosScrollHelper.getSinglePhotoItem({
            photo: photos[3],
            objectSchemaName,
            forObject,
            router
          }),
          PhotosScrollHelper.getSinglePhotoItem({
            photo: photos[4],
            objectSchemaName,
            forObject,
            router
          }),
          PhotosScrollHelper.getSinglePhotoItem({
            photo: photos[5],
            objectSchemaName,
            forObject,
            router
          })
        ]
      }
    } else {
      const nextPhotos = photos.map((item: IParseModelPhotos, index: number) => {
        return PhotosScrollHelper.getSinglePhotoItemInfo({ photo: item, router })
      })
      return {
        photosWallModel: false,
        total: photoLength,
        photos: nextPhotos,
        photosWall: []
      }
    }
  }

  /**
   * July 29, 2017
   * @returns {{createdAtFormat: string}}
   */
  // static generateSelectedPhotoInfo({
  //   router,
  //   photosOverlay,
  //   photoBrowserType
  // }): ISelectedPhotoInfo {
  //   const currentPhoto = PhotoBrowser.getCurrentPhoto({
  //     router,
  //     photosOverlay,
  //     photoBrowserType
  //   })
  //   return {
  //     ...PhotosScrollHelper.getPhotoInfoAboutUser(currentPhoto),
  //     currentPhoto,
  //     photoId: currentPhoto.id,
  //     photoCreatedAtFormat: Photos.toSelectedPhotoCreatedAtString(currentPhoto.createdAt)
  //   }
  // }

  static generateScrollPhotoIndex(
    params: IPhotosScrollHelperGenerateScrollPhotoIndexParams
  ): IPhotoScrollModelObject {
    const { photoModelObject, action, lastIndex } = params
    const currentIndex = lastIndex + action
    const { total } = photoModelObject
    const showPhotosIndex: number[] = []
    for (let i = 0; i < 3; i++) {
      if (currentIndex + i < total) {
        showPhotosIndex.push(currentIndex + i)
      }
    }
    return {
      haveLeftIcon: currentIndex > 0,
      haveRightIcon: currentIndex + showPhotosIndex.length < total,
      currentIndex,
      showPhotosIndex
    }
  }
}
