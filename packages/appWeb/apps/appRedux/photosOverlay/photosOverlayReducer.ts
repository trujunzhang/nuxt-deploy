import { UnderscoreUtils } from '@app/tools'
import * as Types from '@app/types'

import { PhotoOverlayStateRecord } from './photosOverlayInitialState'
import { UpdatePhotosOverlay } from './utils'

const initialState = new PhotoOverlayStateRecord()

export function photosOverlayReducer(state = initialState, action: any = {}) {
  const payload = action.payload || {
    photoId: '',
    hashCode: ''
  }
  switch (action.type) {
    case Types.common.OVERLAY_LOADED_MODEL_PAGE: {
      const loadedPayload = payload as IFetchedParseModel
      return Object.assign({}, state, {
        forObject: loadedPayload.model
      })
    }
    case Types.fetch.LIST_VIEW_LOADED_FOR_PHOTOS_LIST: {
      const { list, listId, limit, totalCount } = action.payload
      const mapResult = UnderscoreUtils.mapJoin({
        list,
        predicate: (item: any) => {
          return [item.id, item]
        }
      })
      const photosForPage: IListPhotosDict<
        IParseModelPhotos
      > = UnderscoreUtils.convertArrayToObject(mapResult)
      return Object.assign({}, state, {
        photosForPage
      })
    }
    case Types.photosOverlay.PUSH_PHOTOS_AS_SINGLE: {
      const { photoId, hashCode } = payload
      return Object.assign({}, state, {
        ownedUserPhoto: null,
        currentPhoto: {
          photoId
        }
      })
    }
    case Types.photosOverlay.DISMISS_ALL_PHOTOS: {
      return Object.assign({}, state, {
        currentPhoto: null,
        overlayPhotos: {}
      })
    }
    case Types.photosOverlay.BACKWARD_ONE_PHOTOS: {
      return Object.assign({}, state, {})
    }
    case Types.photosOverlay.FORWARD_ONE_PHOTOS: {
      return Object.assign({}, state, {})
    }

    case Types.fetch.LIST_VIEW_UPDATED_FOR_OWN_PHOTO: {
      const updatedPhotoModel: IParseModelPhotos = action.payload
      const ownedUserPhoto = UpdatePhotosOverlay.update(state, updatedPhotoModel)
      return Object.assign({}, state, ownedUserPhoto)
    }
  }
  return state
}
