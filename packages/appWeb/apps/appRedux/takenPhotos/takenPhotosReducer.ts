import { ReducerTakenPhotosHelper } from './utils'

import * as Types from '@app/types'

import { TakenPhotosList } from './takenPhotosInitialState'

const initialState = TakenPhotosList([])

/**
 * ## takenPhotosReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export function takenPhotosReducer(state = initialState, action: any) {
  switch (action.type) {
    case Types.takePhotos.TAKEN_PHOTOS_LIST_SAVED: {
      const payload: IWriteTakenPhotosPayload = action.payload
      const result = ReducerTakenPhotosHelper.pushSingleComment(payload, state)
      return result
    }
    case Types.takePhotos.TAKEN_PHOTOS_LIST_RESET: {
      return new TakenPhotosList([])
    }
  }
  /**
   * ## Default
   */
  return state
}
