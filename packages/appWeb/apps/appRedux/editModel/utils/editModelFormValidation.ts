/**
 * # authFormValidation.js
 *
 */

import * as Types from '@app/types'

import { ValidateModelHelper } from './validateModelHelper'

/**
 * ## formValidation
 * @param {Object} state - the Redux state object
 */
export function formValidation(state) {
  const originModel = state.form.originModel
  let validate = false
  switch (state.form.state) {
    /**
     * ### Logout has no fields, so always valid
     */
    case Types.menuMore.MENU_ITEM_ADD_OR_EDIT_RESTAURANT:
      if (state.form.fields.displayName !== '' && !state.form.fields.displayNameHasError) {
        return state.setIn(['form', 'isValid'], true)
      } else {
        return state.setIn(['form', 'isValid'], false)
      }
    case Types.menuMore.MENU_ITEM_ADD_OR_EDIT_EVENT:
      validate = ValidateModelHelper.validateModelForEvent(state, originModel)
      return state.setIn(['form', 'isValid'], validate)
    case Types.menuMore.MENU_ITEM_ADD_OR_EDIT_RECIPE:
      validate = ValidateModelHelper.validateModelForRecipe(state, originModel)
      return state.setIn(['form', 'isValid'], validate)
    case Types.menuMore.MENU_ITEM_ADD_OR_EDIT_REVIEW:
      if (
        state.form.fields.reviewBody !== '' &&
        state.form.fields.reviewRating !== 0 &&
        !state.form.fields.reviewBodyHasError
      ) {
        return state.setIn(['form', 'isValid'], true)
      } else {
        return state.setIn(['form', 'isValid'], false)
      }
    case Types.menuMore.MENU_ITEM_ADD_OR_EDIT_USER:
      if (state.form.fields.displayName !== '' && !state.form.fields.displayNameHasError) {
        return state.setIn(['form', 'isValid'], true)
      } else {
        return state.setIn(['form', 'isValid'], false)
      }
  }
  return state
}
