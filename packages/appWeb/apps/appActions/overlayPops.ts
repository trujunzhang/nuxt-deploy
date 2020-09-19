import * as Types from '@app/types'

export function pushNewPhotosAsSingle(photoId: string, hashCode: string) {
  return {
    type: Types.photosOverlay.PUSH_PHOTOS_AS_SINGLE,
    payload: {
      photoId,
      hashCode
    }
  }
}

export function dismissAllOverlayPhotos() {
  return {
    type: Types.photosOverlay.DISMISS_ALL_PHOTOS
  }
}
