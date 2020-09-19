/**
 * # authReducer.js
 *
 * The reducer for all the actions from the various log states
 */
import * as Types from '@app/types'

/**
 * ## Imports
 * The InitialState for auth
 * fieldValidation for validating the fields
 * formValidation for setting the form's valid flag
 */
const initialState: IListContainerTasks = {
  updatedPhotoModel: null,
  usersPhotosDict: {}
}

/**
 * ## authReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export function listContainerReducer(state = initialState, action) {
  switch (action.type) {
    /**
     * ### Requests start
     * set the form to fetching and clear any errors
     */
    case Types.fetch.LIST_VIEW_LOADED_BY_TYPE:
    case Types.fetch.LIST_VIEW_LOADED_FOR_ALL_USERS:
    case Types.fetch.LIST_VIEW_LOADED_FOR_PHOTOS_LIST: {
      const { list, listId, limit, totalCount, listPhotosDict, orderedUsers } = action.payload

      const nextTask = {
        updatedPhotoModel: null,
        usersPhotosDict:
          action.type === Types.fetch.LIST_VIEW_LOADED_FOR_PHOTOS_LIST ||
          action.type === Types.fetch.LIST_VIEW_LOADED_FOR_ALL_USERS
            ? listPhotosDict // Here, dict containers users photo urls.
            : state.usersPhotosDict // Using the last state's dict.
      }
      nextTask[listId] = {
        id: listId,
        ready: true,
        totalCount,
        limit,
        results: list,
        listPhotosDict,
        orderedUsers
      }
      return nextTask
    }

    case Types.fetch.LIST_VIEW_UPDATED_FOR_OWN_PHOTO: {
      const updatedPhotoModel: IParseModelPhotos = action.payload
      return Object.assign({}, state, {
        updatedPhotoModel
      })
    }
  }
  /**
   * ## Default
   */
  return state
}
