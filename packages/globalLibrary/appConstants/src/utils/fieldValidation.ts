/**
 * # fieldValidation.js
 *
 * Define the validation rules for various fields such as email, username,
 * and passwords.  If the rules are not passed, the appropriate
 * message is displayed to the user
 *
 */
/**
 * ## Imports
 *
 * validate and underscore
 *
 */
const validate = require('validate.js') // using 'require'.
import { UnderscoreUtils } from '@app/tools'
/**
 * ## Email validation setup
 * Used for validation of emails
 */
const emailConstraints = {
  from: {
    email: true
  }
}
/**
 * ## username validation rule
 * read the message.. )
 */
const usernamePattern = /^[a-zA]{6,12}$/
const usernameConstraints = {
  username: {
    format: {
      pattern: usernamePattern,
      flags: 'i'
    }
  }
}
/**
 * ## username validation rule
 * read the message.. )
 */
const displayNamePattern = /^[a-zA]{4,12}$/
const displayNameConstraints = {
  username: {
    format: {
      pattern: displayNamePattern,
      flags: 'i'
    }
  }
}
/**
 * ## password validation rule
 * read the message... )
 */
const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/
const passwordConstraints = {
  password: {
    format: {
      pattern: passwordPattern,
      flags: 'i'
    }
  }
}
const passwordAgainConstraints = {
  confirmPassword: {
    equality: 'password'
  }
}
/**
 * ## Field Validation
 * @param {Object} state Redux state
 * @param {Object} action type & payload
 */
export function fieldValidation(state, action) {
  const { field, value } = action.payload
  switch (field) {
    case 'name': {
      if (value !== '') {
        return state
          .setIn(['form', 'fields', 'nameHasError'], false)
          .setIn(['form', 'fields', 'nameErrorMsg'], '')
      } else {
        return state
          .setIn(['form', 'fields', 'nameHasError'], true)
          .setIn(['form', 'fields', 'nameErrorMsg'], '')
      }
    }
    /**
     * ### username validation
     * set the form field error
     */
    case 'username': {
      // let validUsername = _.isUndefined(validate({username: value},
      //   usernameConstraints))
      const validUsername = value.length >= 6 && value.length <= 20
      if (validUsername) {
        return state
          .setIn(['form', 'fields', 'usernameHasError'], false)
          .setIn(['form', 'fields', 'usernameErrorMsg'], '')
      } else {
        return state
          .setIn(['form', 'fields', 'usernameHasError'], true)
          .setIn(['form', 'fields', 'usernameErrorMsg'], 'FieldValidation.valid_user_name')
      }
    }
    case 'displayName': {
      let validDisplayName = UnderscoreUtils.isUndefined(
        validate({ displayName: value }, displayNameConstraints)
      )
      if (value.length < 2) {
        validDisplayName = false
      }
      if (validDisplayName) {
        return state
          .setIn(['form', 'fields', 'displayNameHasError'], false)
          .setIn(['form', 'fields', 'displayNameErrorMsg'], '')
      } else {
        return state
          .setIn(['form', 'fields', 'displayNameHasError'], true)
          .setIn(['form', 'fields', 'displayNameErrorMsg'], 'FieldValidation.valid_display_name')
      }
    }
    case 'eventWhat': {
      let validDisplayName = UnderscoreUtils.isUndefined(
        validate({ eventWhat: value }, displayNameConstraints)
      )
      if (value.length < 2) {
        validDisplayName = false
      }
      if (validDisplayName) {
        return state
          .setIn(['form', 'fields', 'eventWhatHasError'], false)
          .setIn(['form', 'fields', 'eventWhatErrorMsg'], '')
      } else {
        return state
          .setIn(['form', 'fields', 'eventWhatHasError'], true)
          .setIn(['form', 'fields', 'eventWhatErrorMsg'], 'FieldValidation.valid_display_name')
      }
    }
    case 'reviewBody': {
      let validReviewBody = UnderscoreUtils.isUndefined(
        validate({ reviewBody: value }, displayNameConstraints)
      )
      if (value.length < 2) {
        validReviewBody = false
      }
      if (validReviewBody) {
        return state
          .setIn(['form', 'fields', 'reviewBodyHasError'], false)
          .setIn(['form', 'fields', 'reviewBodyErrorMsg'], '')
      } else {
        return state
          .setIn(['form', 'fields', 'reviewBodyHasError'], true)
          .setIn(['form', 'fields', 'reviewBodyErrorMsg'], 'FieldValidation.valid_display_name')
      }
    }
    /**
     * ### email validation
     * set the form field error
     */
    case 'email': {
      const validEmail = UnderscoreUtils.isUndefined(validate({ from: value }, emailConstraints))
      if (validEmail) {
        return state.setIn(['form', 'fields', 'emailHasError'], false)
      } else {
        return state
          .setIn(['form', 'fields', 'emailHasError'], true)
          .setIn(['form', 'fields', 'emailErrorMsg'], 'FieldValidation.valid_email')
      }
    }
    case 'email1': {
      const validEmail = UnderscoreUtils.isUndefined(validate({ from: value }, emailConstraints))
      if (validEmail) {
        return state.setIn(['form', 'fields', 'email1HasError'], false)
      } else {
        return state
          .setIn(['form', 'fields', 'email1HasError'], true)
          .setIn(['form', 'fields', 'emailErrorMsg'], 'FieldValidation.valid_email')
      }
    }
    case 'email2': {
      const validEmail = UnderscoreUtils.isUndefined(validate({ from: value }, emailConstraints))
      if (validEmail) {
        return state.setIn(['form', 'fields', 'email2HasError'], false)
      } else {
        return state
          .setIn(['form', 'fields', 'email2HasError'], true)
          .setIn(['form', 'fields', 'emailErrorMsg'], 'FieldValidation.valid_email')
      }
    }
    /**
     * ### password validation
     * set the form field error
     */
    case 'password': {
      const validPassword = UnderscoreUtils.isUndefined(
        validate({ password: value }, passwordConstraints)
      )
      if (validPassword) {
        return state
          .setIn(['form', 'fields', 'passwordHasError'], false)
          .setIn(['form', 'fields', 'passwordErrorMsg'], '')
      } else {
        return state
          .setIn(['form', 'fields', 'passwordHasError'], true)
          .setIn(['form', 'fields', 'passwordErrorMsg'], 'FieldValidation.valid_password')
      }
    }
    /**
     * ### passwordAgain validation
     * set the form field error
     */
    case 'passwordAgain':
      const validPasswordAgain = UnderscoreUtils.isUndefined(
        validate(
          {
            password: state.form.fields.password,
            confirmPassword: value
          },
          passwordAgainConstraints
        )
      )
      if (validPasswordAgain) {
        return state
          .setIn(['form', 'fields', 'passwordAgainHasError'], false)
          .setIn(['form', 'fields', 'passwordAgainErrorMsg'], '')
      } else {
        return state
          .setIn(['form', 'fields', 'passwordAgainHasError'], true)
          .setIn(
            ['form', 'fields', 'passwordAgainErrorMsg'],
            'FieldValidation.valid_password_again'
          )
      }
    /**
     * ### showPassword
     * toggle the display of the password
     */
    case 'showPassword':
      return state.setIn(['form', 'fields', 'showPassword'], value)
  }
  return state
}
