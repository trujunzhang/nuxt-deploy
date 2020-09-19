import { Router } from '@web/server/routes'
import { Photos } from '@app/library' //  '@app/libs'
import { ParseHrefFromRouterHelper, PhotosScrollHelper } from '@appUtils/index'
import * as Types from '@app/types'

export class PhotoBrowser {
  static shouldUpdatePhotoItem(params: IPhotoBrowserShouldUpdatePhotoItemParams) {
    const { photosOverlay, photo, photoInfo } = params
    const { ownedUserPhoto } = photosOverlay
    if (!!ownedUserPhoto) {
      if (ownedUserPhoto.id === photo.id) {
        const lastUserId = photoInfo.overlay.user.userId
        if (!!ownedUserPhoto.creator) {
          if (ownedUserPhoto.creator.id !== lastUserId) {
            return true
          }
        }
      }
    }
    return false
  }

  static getNavBarModel(params: IPhotoBrowserGetNavBarModelParams): PhotoNavBarModelWithNull {
    const { router, photosOverlay, photoBrowserType, newSelectedPhotoId = null } = params
    const { photoIds } = PhotoBrowser.__parsePhoto({
      router,
      photosOverlay,
      photoBrowserType
    })

    if (photoIds.length === 0) {
      return null
    }

    let photoIndex: number

    if (!!newSelectedPhotoId) {
      photoIndex = photoIds.indexOf(newSelectedPhotoId)
    } else {
      photoIndex = PhotoBrowser.getPhotoIndex({
        router,
        photosOverlay,
        photoBrowserType
      })
    }

    const { photosForPage, forObject } = photosOverlay
    const photoId = photoIds[photoIndex]
    const currentPhoto: ParseModelPhotoWithNull = photosForPage[photoId]

    const photoSource = Photos.getOriginalUrl(currentPhoto)

    const photoAlt = `Photo of ${forObject.displayName}`

    const photosLength = photoIds.length
    const hasPreIcon = photoIndex > 0
    const hasNextIcon = photoIndex < photosLength - 1

    const detailedLink = new ParseHrefFromRouterHelper(router as IWebAppRouterProps).getHref().end()

    const selectedPhotoInfo: ISelectedPhotoInfo = {
      ...PhotosScrollHelper.getPhotoInfoAboutUser(currentPhoto),
      currentPhoto,
      photoId,
      photoCreatedAtFormat: Photos.toSelectedPhotoCreatedAtString(currentPhoto.createdAt)
    }

    return {
      photoIndex,
      photosLength,
      hasPreIcon,
      hasNextIcon,
      photoSource,
      photoAlt,
      detailedLink,
      selectedPhotoInfo
    }
  }

  static onPreIconClick(params: IPhotoBrowserOnIconClickParams) {
    const { pushNewPhotosAsSingleAction, router, photosOverlay, photoBrowserType } = params
    const { photoId } = PhotoBrowser.__parsePhoto({
      router,
      photosOverlay,
      photoBrowserType
    })
    const newPhotoId = PhotoBrowser.__getNewPhotoId({ router, photosOverlay, photoBrowserType }, -1)
    if (photoBrowserType === Types.common.PHOTO_BROWSER_TYPE_FOR_POPUP) {
      pushNewPhotosAsSingleAction(newPhotoId, '')
    }
    PhotoBrowser.__updateRoute({ router, photosOverlay, photoBrowserType }, photoId, newPhotoId)
    return newPhotoId
  }

  static onNextIconClick(params: IPhotoBrowserOnIconClickParams) {
    const { pushNewPhotosAsSingleAction, router, photosOverlay, photoBrowserType } = params
    const { photoId } = PhotoBrowser.__parsePhoto({
      router,
      photosOverlay,
      photoBrowserType
    })
    const newPhotoId = PhotoBrowser.__getNewPhotoId({ router, photosOverlay, photoBrowserType }, +1)
    if (photoBrowserType === Types.common.PHOTO_BROWSER_TYPE_FOR_POPUP) {
      pushNewPhotosAsSingleAction(newPhotoId, '')
    }
    PhotoBrowser.__updateRoute({ router, photosOverlay, photoBrowserType }, photoId, newPhotoId)
    return newPhotoId
  }

  static havePreIcon(params: IPhotoBrowserBaseParams) {
    const { router, photosOverlay, photoBrowserType } = params
    const { photoId, firstId } = PhotoBrowser.__parsePhoto({
      router,
      photosOverlay,
      photoBrowserType
    })
    return photoId !== firstId
  }

  static haveNextIcon(params: IPhotoBrowserBaseParams) {
    const { router, photosOverlay, photoBrowserType } = params
    const { photoId, lastId } = PhotoBrowser.__parsePhoto({
      router,
      photosOverlay,
      photoBrowserType
    })
    return photoId !== lastId
  }

  static getPhotoIndex({ router, photosOverlay, photoBrowserType }) {
    const { photoId, photoIds } = PhotoBrowser.__parsePhoto({
      router,
      photosOverlay,
      photoBrowserType
    })
    return photoIds.indexOf(photoId)
  }

  static getTotalPhotosLength(params: IPhotoBrowserBaseParams) {
    const { router, photosOverlay, photoBrowserType } = params
    const { photoId, photoIds } = PhotoBrowser.__parsePhoto({
      router,
      photosOverlay,
      photoBrowserType
    })
    return photoIds.length
  }

  static getCurrentForObject({ photosOverlay }) {
    return photosOverlay.forObject
  }

  static getCurrentPhoto(params: IPhotoBrowserBaseParams) {
    const { router, photosOverlay, photoBrowserType } = params
    const { photosForPage } = photosOverlay
    const photoId = PhotoBrowser.__parsePhotoId({
      router,
      photosOverlay,
      photoBrowserType
    })
    return photosForPage[photoId]
  }

  private static __parsePhotoId(params: IPhotoBrowserBaseParams) {
    const { router, photosOverlay, photoBrowserType } = params
    switch (photoBrowserType) {
      case Types.common.PHOTO_BROWSER_TYPE_FOR_POPUP: {
        const { currentPhoto } = photosOverlay
        if (!!currentPhoto) {
          return currentPhoto.photoId
        }
        return null
      }
      case Types.common.PHOTO_BROWSER_TYPE_FOR_SINGLE_PAGE: {
        return PhotoBrowser.__parsePhotoSelectFromRouter({ router })
      }
    }
    return null
  }

  private static __parsePhoto(params: IPhotoBrowserBaseParams) {
    const { router, photosOverlay, photoBrowserType } = params
    const { photosForPage } = photosOverlay
    const photoId = PhotoBrowser.__parsePhotoId({
      router,
      photosOverlay,
      photoBrowserType
    })
    const photoIds = Object.keys(photosForPage)
    const firstId = photoIds.length > 0 ? photoIds[0] : ''
    const lastId = photoIds.length > 0 ? photoIds[photoIds.length - 1] : ''
    return {
      photoId,
      photoIds,
      firstId,
      lastId
    }
  }

  private static __parsePhotoSelectFromRouter({ router }) {
    const { query } = router
    if (!!query && !!query.select) {
      return query.select
    }
    return null
  }

  private static __getNewPhotoId(params: IPhotoBrowserBaseParams, pos) {
    const { router, photosOverlay, photoBrowserType } = params
    const { photoId, photoIds } = PhotoBrowser.__parsePhoto({
      router,
      photosOverlay,
      photoBrowserType
    })
    const newPhotoId =
      photoIds[
        PhotoBrowser.getPhotoIndex({
          router,
          photosOverlay,
          photoBrowserType
        }) + pos
      ]
    return newPhotoId
  }

  private static __updateRoute(params: IPhotoBrowserBaseParams, photoId, newPhotoId) {
    const { router, photosOverlay, photoBrowserType } = params
    const as = (router as any).asPath.replace(photoId, newPhotoId)
    if (photoBrowserType === Types.common.PHOTO_BROWSER_TYPE_FOR_POPUP) {
      // console.log('as: ', as)
      Router.push(
        {
          pathname: router.pathname,
          query: router.query
        },
        as,
        {
          shallow: true
        }
      )
    } else {
      Router.pushRoute(as)
    }
  }
}
