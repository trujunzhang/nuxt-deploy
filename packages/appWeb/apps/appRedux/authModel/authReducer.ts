import { AuthFormRecord, defaultAuthModelFormRecord } from './authInitialState'

import { fieldValidation } from '@app/types'

import { formValidation } from './utils'

import * as Types from '@app/types'

const initialState = new AuthFormRecord(defaultAuthModelFormRecord)

/**
 * ## authReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export function authReducer(state: any = initialState, action: any): any {
  let nextState: any = null

  switch (action.type) {
    case Types.authAction.LOGIN_TWITTER_MOBILE_CALLBACK: {
      nextState = AuthFormRecord.setTwitterCallbackPayload(state, action as ITwitterCallbackAction)

      return nextState
    }
    case Types.authAction.LOGIN_FACEBOOK_MOBILE_CALLBACK: {
      nextState = AuthFormRecord.setFacebookCallbackPayload(
        state,
        action as IFacebookCallbackAction
      )

      return nextState
    }
    case Types.authAction.SOCIAL_CONNECTION_FAILURE_BUTTON_TYPE: {
      nextState = state.setIn(['form', 'fields', 'socialConnectedError'], {
        buttonType: action.payload.buttonType
      })
      return nextState
    }
    case Types.authAction.SET_LOGIN_FORM_STATE_TYPE: {
      nextState = state
        .setIn(['form', 'formState'], action.payload.stateType)
        .setIn(['form', 'fields', 'signUpUserId'], action.payload.userId)
      return nextState
    }

    case Types.authModel.SIGN_UP_DONE: {
      const userProfile: ParseModelUsersWithNull = action.payload as ParseModelUsersWithNull
      if (!!userProfile) {
        const { id, emailVerified } = userProfile
        if (emailVerified === true) {
          nextState = state
            .setIn(['form', 'formState'], Types.authAction.LOGIN_PANEL_FORM_NORMAL)
            .setIn(['form', 'fields', 'signUpUserId'], id)
          return nextState
        } else {
          nextState = state
            .setIn(['form', 'formState'], Types.authAction.LOGIN_PANEL_FORM_RESEND_VERIFICATION)
            .setIn(['form', 'fields', 'signUpUserId'], id)
          return nextState
        }
      }
      break
    }

    /**
     * ### Requests start
     * set the form to fetching and clear any errors
     */
    case Types.authModel.SIGNUP_REQUEST:
    case Types.authModel.LOGOUT_REQUEST:
    case Types.authModel.LOGIN_REQUEST:
    case Types.authModel.RESET_PASSWORD_REQUEST: {
      nextState = AuthFormRecord.resetForm(state)
      nextState = nextState.setIn(['form', 'isFetching'], true)
      return nextState
    }

    /**
     * ### Logout state
     * The logged in user logs out
     * Clear the form's error and all the fields
     */
    case Types.authModel.LOGOUT: {
      return formValidation(
        state
          .setIn(['form', 'state'], action.type)
          .setIn(['form', 'alert'], null)
          .setIn(['form', 'fields', 'username'], '')
          .setIn(['form', 'fields', 'email'], '')
          .setIn(['form', 'fields', 'password'], '')
          .setIn(['form', 'fields', 'passwordAgain'], '')
      )
    }
    /**
     * ### Loggin in state
     * The user isn't logged in, and needs to
     * login, register or reset password
     *
     * Set the form state and clear any errors
     */
    case Types.authModel.PAGE_FORM_TYPE_LOGIN:
    case Types.authModel.PAGE_FORM_TYPE_REGISTER:
    case Types.authModel.PAGE_FORM_TYPE_FORGOT_PASSWORD: {
      nextState = state
        .setIn(['form', 'state'], action.type)
        .setIn(['form', 'formState'], Types.authAction.LOGIN_PANEL_FORM_NORMAL)
        .setIn(['form', 'isFetching'], false)
        .setIn(['form', 'alert'], null)

      return formValidation(nextState)
    }
    /**
     * ### Auth form field change
     *
     * Set the form's field with the value
     * Clear the forms error
     * Pass the fieldValidation results to the
     * the formValidation
     */
    case Types.authModel.ON_AUTH_FORM_FIELD_CHANGE: {
      const { field, value } = action.payload
      nextState = state.setIn(['form', 'fields', field], value).setIn(['form', 'alert'], null)

      return formValidation(fieldValidation(nextState, action))
    }
    /**
     * ### Requests end, good or bad
     * Set the fetching flag so the forms will be enabled
     */
    case Types.authModel.DONE_SIGNUP_SUCCESS:
    case Types.authModel.DONE_LOGOUT_SUCCESS:
    case Types.authModel.DONE_RESET_PASSWORD_SUCCESS: {
      return state.setIn(['form', 'isFetching'], false)
    }

    case Types.authModel.PARSE_LOGIN_SUCCESS: {
      return state
        .setIn(['form', 'isFetching'], false)
        .setIn(['form', 'fields', 'username'], '')
        .setIn(['form', 'fields', 'password'], '')
    }

    /**
     *
     * The fetching is done, but save the error
     * for display to the user
     */
    case Types.authModel.PARSE_LOGIN_ALERT:
    case Types.authModel.DONE_SIGNUP_FAILURE:
    case Types.authModel.DONE_LOGOUT_FAILURE:
    case Types.authModel.DONE_RESET_PASSWORD_FAILURE: {
      return state.setIn(['form', 'isFetching'], false).setIn(['form', 'alert'], action.payload)
    }
  }

  return state
}
