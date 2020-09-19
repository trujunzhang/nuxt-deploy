import { defaultEditModelFormRecord, EditFormRecord } from './editModelInitialState'

import { fieldValidation } from '@app/types'
import {
  formValidation,
  WriteModelDoneHelper,
  RestaurantAddresHelper,
  UpdateModelSuccessHelper,
  ToggleEditModelHelper
} from './utils'

import * as Types from '@app/types'

const initialState = new EditFormRecord(defaultEditModelFormRecord)

/**
 * ## editModelReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export function editModelReducer(state = initialState, action) {
  // console.log('editModelReducer: action type,', action.type)

  let nextState: any
  switch (action.type) {
    case Types.editModel.EDIT_MODEL_TOGGLE_TYPE: {
      // console.log('toggle edit model: ', action.payload)

      return ToggleEditModelHelper.toggle(state, action.payload)
    }

    case Types.editModel.ON_EDIT_MODEL_FORM_FIELD_CHANGE: {
      const payload: IEditModelActionsOnEditModelFormFieldChangeParams = action.payload
      const { field, value, ignoreValidation } = payload

      // console.log('change edit field: ', payload)

      nextState = state.setIn(['form', 'fields', field], value).setIn(['form', 'error'], null)
      if (ignoreValidation) {
        return nextState
      }
      return formValidation(fieldValidation(nextState, action))
    }

    case Types.editModelAction.WRITE_MODEL_DONE: {
      const writePayload: IWriteOnlineParseObjectsPayload = action.payload

      nextState = new WriteModelDoneHelper().onWriteModelDoneHook(state, writePayload)
      return nextState
    }

    case Types.editModel.ON_RESTAURANT_MODEL_FORM_ADDRESS_FIELD_CHANGE: {
      const { restaurant } = action.payload
      nextState = RestaurantAddresHelper.updateRestaurantAddress(state, restaurant)
      return nextState
    }

    case Types.editModel.ON_RESTAURANT_MODEL_FORM_ADDRESS_FIELD_SUCCESS: {
      return state.setIn(['form', 'isFetching'], false).setIn(['form', 'isValid'], true)
    }

    case Types.editModelAction.ENABLE_MODEL_EVENT_ACTION: {
      return state
        .setIn(['form', 'isFetching'], false)
        .setIn(['form', 'error'], null)
        .setIn(['form', 'isValid'], true)
    }

    case Types.editModelAction.UPDATE_MODEL_REQUEST: {
      return state.setIn(['form', 'isFetching'], true).setIn(['form', 'error'], null)
    }

    case Types.editModelAction.UPDATE_MODEL_REQUEST_FOR_RECIPE_ID: {
      return state
        .setIn(['form', 'isFetching'], true)
        .setIn(['form', 'currentRequestRecipeId'], action.payload.recipeUniqueId)
    }
    case Types.fetch.LIST_VIEW_LOADED_BY_TYPE: {
      return state
        .setIn(['form', 'isFetching'], false)
        .setIn(['form', 'currentRequestRecipeId'], '')
    }

    case Types.editModelAction.UPDATE_MODEL_SUCCESS: {
      nextState = new UpdateModelSuccessHelper().onUpdateModelSuccessHook(state)
      return nextState
    }

    case Types.editModelAction.UPDATE_MODEL_FAILURE: {
      return state.setIn(['form', 'isFetching'], false).setIn(['form', 'error'], action.payload)
    }
  }

  return state
}
