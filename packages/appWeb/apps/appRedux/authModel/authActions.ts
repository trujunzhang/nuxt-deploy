/**
 * # authActions.js
 *
 */

import * as Types from '@app/types'

export function logoutState() {
  return {
    type: Types.authModel.LOGOUT
  }
}

export function registerState() {
  return {
    type: Types.authModel.PAGE_FORM_TYPE_REGISTER
  }
}

export function loginState() {
  return {
    type: Types.authModel.PAGE_FORM_TYPE_LOGIN
  }
}

export function forgotPasswordState() {
  return {
    type: Types.authModel.PAGE_FORM_TYPE_FORGOT_PASSWORD
  }
}

/**
 * ## Logout actions
 */
export function logoutRequest() {
  return {
    type: Types.authModel.LOGOUT_REQUEST
  }
}

export function logoutSuccess() {
  return {
    type: Types.authModel.DONE_LOGOUT_SUCCESS
  }
}

export function logoutFailure(error: any) {
  return {
    type: Types.authModel.DONE_LOGOUT_FAILURE,
    payload: error
  }
}

export function setFormState(stateType: string, userId: string) {
  return {
    type: Types.authAction.SET_LOGIN_FORM_STATE_TYPE,
    payload: {
      stateType,
      userId
    }
  }
}

/**
 * ## onAuthFormFieldChange
 * Set the payload so the reducer can work on it
 */
export function onAuthFormFieldChange(field: string, value: any) {
  return {
    type: Types.authModel.ON_AUTH_FORM_FIELD_CHANGE,
    payload: {
      field,
      value
    }
  }
}

/**
 * ## Signup actions
 */
export function signupRequest() {
  return {
    type: Types.authModel.SIGNUP_REQUEST
  }
}

export function signupSuccess(json: any) {
  return {
    type: Types.authModel.DONE_SIGNUP_SUCCESS,
    payload: json
  }
}

export function signupFailure(error: any) {
  return {
    type: Types.authModel.DONE_SIGNUP_FAILURE,
    payload: error
  }
}

/**
 * ## Login actions
 */
export function loginRequest() {
  return {
    type: Types.authModel.LOGIN_REQUEST
  }
}

export function loginSuccess(json: any) {
  return {
    type: Types.authModel.PARSE_LOGIN_SUCCESS,
    payload: json
  }
}

export function showLoginAlert(alert: any) {
  return {
    type: Types.authModel.PARSE_LOGIN_ALERT,
    payload: alert
  }
}

/**
 * ## ResetPassword actions
 */
export function resetPasswordRequest() {
  return {
    type: Types.authModel.RESET_PASSWORD_REQUEST
  }
}

export function resetPasswordSuccess() {
  return {
    type: Types.authModel.DONE_RESET_PASSWORD_SUCCESS
  }
}

export function resetPasswordFailure(error: any) {
  return {
    type: Types.authModel.DONE_RESET_PASSWORD_FAILURE,
    payload: error
  }
}

export function inviteState() {
  return {
    type: Types.menuMore.MENU_ITEM_LOGGED_USER_INVITE
  }
}

export function editUserState() {
  return {
    type: Types.menuMore.MENU_ITEM_ADD_OR_EDIT_USER
  }
}

/**
 * ## signup
 * @param {string} username - name of user
 * @param {string} email - user's email
 * @param {string} password - user's password
 * @param {string} roleType - user's type, such as "admin","client","driver"
 *
 * Call the server signup and if good, save the sessionToken,
 * set the state to logout and signal success
 *
 * Otherwise, dispatch the error so the user can see
 */
export function signup(username, email, password, roleType) {
  return (dispatch) => {
    dispatch(deleteTokenRequestSuccess())
  }
}

export function deleteTokenRequestSuccess() {
  return {
    type: Types.common.DELETE_TOKEN_SUCCESS
  }
}

export function loginFailure(error) {
  return {
    type: Types.authModel.DONE_LOGIN_FAILURE,
    payload: error
  }
}

/**
 * ## Login
 * @param {string} username - user's name
 * @param {string} password - user's password
 *
 * After calling Backend, if response is good, save the json
 * which is the currentUser which contains the sessionToken
 *
 * If successful, set the state to logout
 * otherwise, dispatch a failure
 */
export function login(username, password) {
  return (dispatch) => {
    dispatch(loginRequest())
  }
}

/**
 * ## ResetPassword
 *
 * @param {string} email - the email address to reset password
 * *Note* There's no feedback to the user whether the email
 * address is valid or not.
 *
 * This functionality depends on the server set
 * up correctly ie, that emails are verified.
 * With that enabled, an email can be sent w/ a
 * form for setting the new password.
 */
export function resetPassword(email) {
  return (dispatch) => {
    return dispatch(resetPasswordRequest())
  }
}
