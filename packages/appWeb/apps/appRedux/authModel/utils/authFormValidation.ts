import * as Types from '@app/types'

/**
 * ## formValidation
 * @param {Object} state - the Redux state object
 */
export function formValidation(state) {
  switch (state.form.state) {
    /**
     * ### Logout has no fields, so always valid
     */
    case Types.authModel.LOGOUT:
      return state.setIn(['form', 'isValid'], true)
    /**
     * ### Registration has 4 fields
     */
    case Types.menuMore.MENU_ITEM_LOGGED_USER_INVITE:
      if (
        !state.form.fields.emailHasError &&
        !state.form.fields.email1HasError &&
        !state.form.fields.email2HasError
      ) {
        return state.setIn(['form', 'isValid'], true)
      } else {
        return state.setIn(['form', 'isValid'], false)
      }
    case Types.authModel.PAGE_FORM_TYPE_REGISTER:
      if (
        state.form.fields.username !== '' &&
        state.form.fields.email !== '' &&
        state.form.fields.password !== '' &&
        state.form.fields.passwordAgain !== '' &&
        !state.form.fields.usernameHasError &&
        !state.form.fields.emailHasError &&
        !state.form.fields.passwordHasError &&
        !state.form.fields.passwordAgainHasError
      ) {
        return state.setIn(['form', 'isValid'], true)
      } else {
        return state.setIn(['form', 'isValid'], false)
      }
    /**
     * ### Login has 2 fields
     */
    case Types.authModel.PAGE_FORM_TYPE_LOGIN:
      if (
        state.form.fields.username !== '' &&
        state.form.fields.password !== '' &&
        !state.form.fields.usernameHasError &&
        !state.form.fields.passwordHasError
      ) {
        return state.setIn(['form', 'isValid'], true)
      } else {
        return state.setIn(['form', 'isValid'], false)
      }
    /**
     * ### Reset password has 1 field
     */
    case Types.authModel.PAGE_FORM_TYPE_FORGOT_PASSWORD:
      if (state.form.fields.email !== '' && !state.form.fields.emailHasError) {
        return state.setIn(['form', 'isValid'], true)
      } else {
        return state.setIn(['form', 'isValid'], false)
      }
  }
  /**
   * Default, return the state
   */
  return state
}
