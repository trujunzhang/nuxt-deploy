import * as Types from '@app/types'

/**
 * Only for client app.
 */
export function resetTakenPhotos() {
  return {
    type: Types.takePhotos.TAKEN_PHOTOS_LIST_RESET
  }
}
