/**
 * # authActions.js
 *
 */
import * as Types from '@app/types'

/**
 * ## State actions
 * controls which form is displayed to the user
 */
export function toggleEditModelType(params: IEditModelActionsToggleEditModelTypeParams) {
  return {
    type: Types.editModel.EDIT_MODEL_TOGGLE_TYPE,
    payload: params
  }
}

/**
 * ## onAuthFormFieldChange
 * Set the payload so the reducer can work on it
 */
export function onEditModelFormFieldChange(
  params: IEditModelActionsOnEditModelFormFieldChangeParams
) {
  return {
    type: Types.editModel.ON_EDIT_MODEL_FORM_FIELD_CHANGE,
    payload: params
  }
}

/**
 * ## onAuthFormFieldChange
 * Set the payload so the reducer can work on it
 */
export function onRestaurantFormAddressFieldChange(restaurant) {
  return {
    type: Types.editModel.ON_RESTAURANT_MODEL_FORM_ADDRESS_FIELD_CHANGE,
    payload: {
      restaurant
    }
  }
}
export function onRestaurantFormAddressFieldSuccess() {
  return {
    type: Types.editModel.ON_RESTAURANT_MODEL_FORM_ADDRESS_FIELD_SUCCESS
  }
}

export function updateModelRequest() {
  return {
    type: Types.editModelAction.UPDATE_MODEL_REQUEST
  }
}

export function enableEditModelEventAction() {
  return {
    type: Types.editModelAction.ENABLE_MODEL_EVENT_ACTION
  }
}

export function updateCurrentRequestRecipeId(recipeUniqueId) {
  return {
    type: Types.editModelAction.UPDATE_MODEL_REQUEST_FOR_RECIPE_ID,
    payload: {
      recipeUniqueId
    }
  }
}

export function updateModelSuccess() {
  return {
    type: Types.editModelAction.UPDATE_MODEL_SUCCESS
  }
}

export function updateModelFailure(error): IUpdateModelFailureAction {
  return {
    type: Types.editModelAction.UPDATE_MODEL_FAILURE,
    payload: error
  }
}
