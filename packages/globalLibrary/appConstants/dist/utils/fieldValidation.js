"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldValidation = fieldValidation;

var _tools = require("@app/tools");

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
var validate = require('validate.js'); // using 'require'.


/**
 * ## Email validation setup
 * Used for validation of emails
 */
var emailConstraints = {
  from: {
    email: true
  }
};
/**
 * ## username validation rule
 * read the message.. )
 */

var usernamePattern = /^[a-zA]{6,12}$/;
var usernameConstraints = {
  username: {
    format: {
      pattern: usernamePattern,
      flags: 'i'
    }
  }
};
/**
 * ## username validation rule
 * read the message.. )
 */

var displayNamePattern = /^[a-zA]{4,12}$/;
var displayNameConstraints = {
  username: {
    format: {
      pattern: displayNamePattern,
      flags: 'i'
    }
  }
};
/**
 * ## password validation rule
 * read the message... )
 */

var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
var passwordConstraints = {
  password: {
    format: {
      pattern: passwordPattern,
      flags: 'i'
    }
  }
};
var passwordAgainConstraints = {
  confirmPassword: {
    equality: 'password'
  }
};
/**
 * ## Field Validation
 * @param {Object} state Redux state
 * @param {Object} action type & payload
 */

function fieldValidation(state, action) {
  var _action$payload = action.payload,
      field = _action$payload.field,
      value = _action$payload.value;

  switch (field) {
    case 'name':
      {
        if (value !== '') {
          return state.setIn(['form', 'fields', 'nameHasError'], false).setIn(['form', 'fields', 'nameErrorMsg'], '');
        } else {
          return state.setIn(['form', 'fields', 'nameHasError'], true).setIn(['form', 'fields', 'nameErrorMsg'], '');
        }
      }

    /**
     * ### username validation
     * set the form field error
     */

    case 'username':
      {
        // let validUsername = _.isUndefined(validate({username: value},
        //   usernameConstraints))
        var validUsername = value.length >= 6 && value.length <= 20;

        if (validUsername) {
          return state.setIn(['form', 'fields', 'usernameHasError'], false).setIn(['form', 'fields', 'usernameErrorMsg'], '');
        } else {
          return state.setIn(['form', 'fields', 'usernameHasError'], true).setIn(['form', 'fields', 'usernameErrorMsg'], 'FieldValidation.valid_user_name');
        }
      }

    case 'displayName':
      {
        var validDisplayName = _tools.UnderscoreUtils.isUndefined(validate({
          displayName: value
        }, displayNameConstraints));

        if (value.length < 2) {
          validDisplayName = false;
        }

        if (validDisplayName) {
          return state.setIn(['form', 'fields', 'displayNameHasError'], false).setIn(['form', 'fields', 'displayNameErrorMsg'], '');
        } else {
          return state.setIn(['form', 'fields', 'displayNameHasError'], true).setIn(['form', 'fields', 'displayNameErrorMsg'], 'FieldValidation.valid_display_name');
        }
      }

    case 'eventWhat':
      {
        var _validDisplayName = _tools.UnderscoreUtils.isUndefined(validate({
          eventWhat: value
        }, displayNameConstraints));

        if (value.length < 2) {
          _validDisplayName = false;
        }

        if (_validDisplayName) {
          return state.setIn(['form', 'fields', 'eventWhatHasError'], false).setIn(['form', 'fields', 'eventWhatErrorMsg'], '');
        } else {
          return state.setIn(['form', 'fields', 'eventWhatHasError'], true).setIn(['form', 'fields', 'eventWhatErrorMsg'], 'FieldValidation.valid_display_name');
        }
      }

    case 'reviewBody':
      {
        var validReviewBody = _tools.UnderscoreUtils.isUndefined(validate({
          reviewBody: value
        }, displayNameConstraints));

        if (value.length < 2) {
          validReviewBody = false;
        }

        if (validReviewBody) {
          return state.setIn(['form', 'fields', 'reviewBodyHasError'], false).setIn(['form', 'fields', 'reviewBodyErrorMsg'], '');
        } else {
          return state.setIn(['form', 'fields', 'reviewBodyHasError'], true).setIn(['form', 'fields', 'reviewBodyErrorMsg'], 'FieldValidation.valid_display_name');
        }
      }

    /**
     * ### email validation
     * set the form field error
     */

    case 'email':
      {
        var validEmail = _tools.UnderscoreUtils.isUndefined(validate({
          from: value
        }, emailConstraints));

        if (validEmail) {
          return state.setIn(['form', 'fields', 'emailHasError'], false);
        } else {
          return state.setIn(['form', 'fields', 'emailHasError'], true).setIn(['form', 'fields', 'emailErrorMsg'], 'FieldValidation.valid_email');
        }
      }

    case 'email1':
      {
        var _validEmail = _tools.UnderscoreUtils.isUndefined(validate({
          from: value
        }, emailConstraints));

        if (_validEmail) {
          return state.setIn(['form', 'fields', 'email1HasError'], false);
        } else {
          return state.setIn(['form', 'fields', 'email1HasError'], true).setIn(['form', 'fields', 'emailErrorMsg'], 'FieldValidation.valid_email');
        }
      }

    case 'email2':
      {
        var _validEmail2 = _tools.UnderscoreUtils.isUndefined(validate({
          from: value
        }, emailConstraints));

        if (_validEmail2) {
          return state.setIn(['form', 'fields', 'email2HasError'], false);
        } else {
          return state.setIn(['form', 'fields', 'email2HasError'], true).setIn(['form', 'fields', 'emailErrorMsg'], 'FieldValidation.valid_email');
        }
      }

    /**
     * ### password validation
     * set the form field error
     */

    case 'password':
      {
        var validPassword = _tools.UnderscoreUtils.isUndefined(validate({
          password: value
        }, passwordConstraints));

        if (validPassword) {
          return state.setIn(['form', 'fields', 'passwordHasError'], false).setIn(['form', 'fields', 'passwordErrorMsg'], '');
        } else {
          return state.setIn(['form', 'fields', 'passwordHasError'], true).setIn(['form', 'fields', 'passwordErrorMsg'], 'FieldValidation.valid_password');
        }
      }

    /**
     * ### passwordAgain validation
     * set the form field error
     */

    case 'passwordAgain':
      var validPasswordAgain = _tools.UnderscoreUtils.isUndefined(validate({
        password: state.form.fields.password,
        confirmPassword: value
      }, passwordAgainConstraints));

      if (validPasswordAgain) {
        return state.setIn(['form', 'fields', 'passwordAgainHasError'], false).setIn(['form', 'fields', 'passwordAgainErrorMsg'], '');
      } else {
        return state.setIn(['form', 'fields', 'passwordAgainHasError'], true).setIn(['form', 'fields', 'passwordAgainErrorMsg'], 'FieldValidation.valid_password_again');
      }

    /**
     * ### showPassword
     * toggle the display of the password
     */

    case 'showPassword':
      return state.setIn(['form', 'fields', 'showPassword'], value);
  }

  return state;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9maWVsZFZhbGlkYXRpb24udHMiXSwibmFtZXMiOlsidmFsaWRhdGUiLCJyZXF1aXJlIiwiZW1haWxDb25zdHJhaW50cyIsImZyb20iLCJlbWFpbCIsInVzZXJuYW1lUGF0dGVybiIsInVzZXJuYW1lQ29uc3RyYWludHMiLCJ1c2VybmFtZSIsImZvcm1hdCIsInBhdHRlcm4iLCJmbGFncyIsImRpc3BsYXlOYW1lUGF0dGVybiIsImRpc3BsYXlOYW1lQ29uc3RyYWludHMiLCJwYXNzd29yZFBhdHRlcm4iLCJwYXNzd29yZENvbnN0cmFpbnRzIiwicGFzc3dvcmQiLCJwYXNzd29yZEFnYWluQ29uc3RyYWludHMiLCJjb25maXJtUGFzc3dvcmQiLCJlcXVhbGl0eSIsImZpZWxkVmFsaWRhdGlvbiIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImZpZWxkIiwidmFsdWUiLCJzZXRJbiIsInZhbGlkVXNlcm5hbWUiLCJsZW5ndGgiLCJ2YWxpZERpc3BsYXlOYW1lIiwiVW5kZXJzY29yZVV0aWxzIiwiaXNVbmRlZmluZWQiLCJkaXNwbGF5TmFtZSIsImV2ZW50V2hhdCIsInZhbGlkUmV2aWV3Qm9keSIsInJldmlld0JvZHkiLCJ2YWxpZEVtYWlsIiwidmFsaWRQYXNzd29yZCIsInZhbGlkUGFzc3dvcmRBZ2FpbiIsImZvcm0iLCJmaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFlQTs7QUFmQTs7Ozs7Ozs7O0FBUUE7Ozs7OztBQU1BLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBeEIsQyxDQUF3Qzs7O0FBRXhDOzs7O0FBSUEsSUFBTUMsZ0JBQWdCLEdBQUc7QUFDdkJDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxLQUFLLEVBQUU7QUFESDtBQURpQixDQUF6QjtBQUtBOzs7OztBQUlBLElBQU1DLGVBQWUsR0FBRyxnQkFBeEI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRztBQUMxQkMsRUFBQUEsUUFBUSxF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LEtBRC9DLEVBRUpBLEtBRkksQ0FFRSxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLHVCQUFuQixDQUZGLEVBRStDLEVBRi9DLENBQVA7QUFHRCxPQUpELE1BSU87QUFDTCxlQUFPTCxLQUFLLENBQ1RLLEtBREksQ0FDRSxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLHVCQUFuQixDQURGLEVBQytDLElBRC9DLEVBRUpBLEtBRkksQ0FHSCxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLHVCQUFuQixDQUhHLEVBSUgsc0NBSkcsQ0FBUDtBQU1EOztBQUNIOzs7OztBQUlBLFNBQUssY0FBTDtBQUNFLGFBQU9MLEtBQUssQ0FBQ0ssS0FBTixDQUFZLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsY0FBbkIsQ0FBWixFQUFnREQsS0FBaEQsQ0FBUDtBQXBLSjs7QUFzS0EsU0FBT0osS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAjIGZpZWxkVmFsaWRhdGlvbi5qc1xuICpcbiAqIERlZmluZSB0aGUgdmFsaWRhdGlvbiBydWxlcyBmb3IgdmFyaW91cyBmaWVsZHMgc3VjaCBhcyBlbWFpbCwgdXNlcm5hbWUsXG4gKiBhbmQgcGFzc3dvcmRzLiAgSWYgdGhlIHJ1bGVzIGFyZSBub3QgcGFzc2VkLCB0aGUgYXBwcm9wcmlhdGVcbiAqIG1lc3NhZ2UgaXMgZGlzcGxheWVkIHRvIHRoZSB1c2VyXG4gKlxuICovXG4vKipcbiAqICMjIEltcG9ydHNcbiAqXG4gKiB2YWxpZGF0ZSBhbmQgdW5kZXJzY29yZVxuICpcbiAqL1xuY29uc3QgdmFsaWRhdGUgPSByZXF1aXJlKCd2YWxpZGF0ZS5qcycpIC8vIHVzaW5nICdyZXF1aXJlJy5cbmltcG9ydCB7IFVuZGVyc2NvcmVVdGlscyB9IGZyb20gJ0BhcHAvdG9vbHMnXG4vKipcbiAqICMjIEVtYWlsIHZhbGlkYXRpb24gc2V0dXBcbiAqIFVzZWQgZm9yIHZhbGlkYXRpb24gb2YgZW1haWxzXG4gKi9cbmNvbnN0IGVtYWlsQ29uc3RyYWludHMgPSB7XG4gIGZyb206IHtcbiAgICBlbWFpbDogdHJ1ZVxuICB9XG59XG4vKipcbiAqICMjIHVzZXJuYW1lIHZhbGlkYXRpb24gcnVsZVxuICogcmVhZCB0aGUgbWVzc2FnZS4uIClcbiAqL1xuY29uc3QgdXNlcm5hbWVQYXR0ZXJuID0gL15bYS16QV17NiwxMn0kL1xuY29uc3QgdXNlcm5hbWVDb25zdHJhaW50cyA9IHtcbiAgdXNlcm5hbWU6IHtcbiAgICBmb3JtYXQ6IHtcbiAgICAgIHBhdHRlcm46IHVzZXJuYW1lUGF0dGVybixcbiAgICAgIGZsYWdzOiAnaSdcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogIyMgdXNlcm5hbWUgdmFsaWRhdGlvbiBydWxlXG4gKiByZWFkIHRoZSBtZXNzYWdlLi4gKVxuICovXG5jb25zdCBkaXNwbGF5TmFtZVBhdHRlcm4gPSAvXlthLXpBXXs0LDEyfSQvXG5jb25zdCBkaXNwbGF5TmFtZUNvbnN0cmFpbnRzID0ge1xuICB1c2VybmFtZToge1xuICAgIGZvcm1hdDoge1xuICAgICAgcGF0dGVybjogZGlzcGxheU5hbWVQYXR0ZXJuLFxuICAgICAgZmxhZ3M6ICdpJ1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiAjIyBwYXNzd29yZCB2YWxpZGF0aW9uIHJ1bGVcbiAqIHJlYWQgdGhlIG1lc3NhZ2UuLi4gKVxuICovXG5jb25zdCBwYXNzd29yZFBhdHRlcm4gPSAvXig/PS4qWzAtOV0pKD89LipbIUAjJCVeJipdKVthLXpBLVowLTkhQCMkJV4mKl17NiwxMn0kL1xuY29uc3QgcGFzc3dvcmRDb25zdHJhaW50cyA9IHtcbiAgcGFzc3dvcmQ6IHtcbiAgICBmb3JtYXQ6IHtcbiAgICAgIHBhdHRlcm46IHBhc3N3b3JkUGF0dGVybixcbiAgICAgIGZsYWdzOiAnaSdcbiAgICB9XG4gIH1cbn1cbmNvbnN0IHBhc3N3b3JkQWdhaW5Db25zdHJhaW50cyA9IHtcbiAgY29uZmlybVBhc3N3b3JkOiB7XG4gICAgZXF1YWxpdHk6ICdwYXNzd29yZCdcbiAgfVxufVxuLyoqXG4gKiAjIyBGaWVsZCBWYWxpZGF0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgUmVkdXggc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gdHlwZSAmIHBheWxvYWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpZWxkVmFsaWRhdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHsgZmllbGQsIHZhbHVlIH0gPSBhY3Rpb24ucGF5bG9hZFxuICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAnbmFtZSc6IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgICAgLnNldEluKFsnZm9ybScsICdmaWVsZHMnLCAnbmFtZUhhc0Vycm9yJ10sIGZhbHNlKVxuICAgICAgICAgIC5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ25hbWVFcnJvck1zZyddLCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICAgIC5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ25hbWVIYXNFcnJvciddLCB0cnVlKVxuICAgICAgICAgIC5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ25hbWVFcnJvck1zZyddLCAnJylcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogIyMjIHVzZXJuYW1lIHZhbGlkYXRpb25cbiAgICAgKiBzZXQgdGhlIGZvcm0gZmllbGQgZXJyb3JcbiAgICAgKi9cbiAgICBjYXNlICd1c2VybmFtZSc6IHtcbiAgICAgIC8vIGxldCB2YWxpZFVzZXJuYW1lID0gXy5pc1VuZGVmaW5lZCh2YWxpZGF0ZSh7dXNlcm5hbWU6IHZhbHVlfSxcbiAgICAgIC8vICAgdXNlcm5hbWVDb25zdHJhaW50cykpXG4gICAgICBjb25zdCB2YWxpZFVzZXJuYW1lID0gdmFsdWUubGVuZ3RoID49IDYgJiYgdmFsdWUubGVuZ3RoIDw9IDIwXG4gICAgICBpZiAodmFsaWRVc2VybmFtZSkge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgICAuc2V0SW4oWydmb3JtJywgJ2ZpZWxkcycsICd1c2VybmFtZUhhc0Vycm9yJ10sIGZhbHNlKVxuICAgICAgICAgIC5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ3VzZXJuYW1lRXJyb3JNc2cnXSwgJycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgICAuc2V0SW4oWydmb3JtJywgJ2ZpZWxkcycsICd1c2VybmFtZUhhc0Vycm9yJ10sIHRydWUpXG4gICAgICAgICAgLnNldEluKFsnZm9ybScsICdmaWVsZHMnLCAndXNlcm5hbWVFcnJvck1zZyddLCAnRmllbGRWYWxpZGF0aW9uLnZhbGlkX3VzZXJfbmFtZScpXG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgJ2Rpc3BsYXlOYW1lJzoge1xuICAgICAgbGV0IHZhbGlkRGlzcGxheU5hbWUgPSBVbmRlcnNjb3JlVXRpbHMuaXNVbmRlZmluZWQoXG4gICAgICAgIHZhbGlkYXRlKHsgZGlzcGxheU5hbWU6IHZhbHVlIH0sIGRpc3BsYXlOYW1lQ29uc3RyYWludHMpXG4gICAgICApXG4gICAgICBpZiAodmFsdWUubGVuZ3RoIDwgMikge1xuICAgICAgICB2YWxpZERpc3BsYXlOYW1lID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIGlmICh2YWxpZERpc3BsYXlOYW1lKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICAgIC5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ2Rpc3BsYXlOYW1lSGFzRXJyb3InXSwgZmFsc2UpXG4gICAgICAgICAgLnNldEluKFsnZm9ybScsICdmaWVsZHMnLCAnZGlzcGxheU5hbWVFcnJvck1zZyddLCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICAgIC5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ2Rpc3BsYXlOYW1lSGFzRXJyb3InXSwgdHJ1ZSlcbiAgICAgICAgICAuc2V0SW4oWydmb3JtJywgJ2ZpZWxkcycsICdkaXNwbGF5TmFtZUVycm9yTXNnJ10sICdGaWVsZFZhbGlkYXRpb24udmFsaWRfZGlzcGxheV9uYW1lJylcbiAgICAgIH1cbiAgICB9XG4gICAgY2FzZSAnZXZlbnRXaGF0Jzoge1xuICAgICAgbGV0IHZhbGlkRGlzcGxheU5hbWUgPSBVbmRlcnNjb3JlVXRpbHMuaXNVbmRlZmluZWQoXG4gICAgICAgIHZhbGlkYXRlKHsgZXZlbnRXaGF0OiB2YWx1ZSB9LCBkaXNwbGF5TmFtZUNvbnN0cmFpbnRzKVxuICAgICAgKVxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdmFsaWREaXNwbGF5TmFtZSA9IGZhbHNlXG4gICAgICB9XG4gICAgICBpZiAodmFsaWREaXNwbGF5TmFtZSkge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgICAuc2V0SW4oWydmb3JtJywgJ2ZpZWxkcycsICdldmVudFdoYXRIYXNFcnJvciddLCBmYWxzZSlcbiAgICAgICAgICAuc2V0SW4oWydmb3JtJywgJ2ZpZWxkcycsICdldmVudFdoYXRFcnJvck1zZyddLCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICAgIC5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ2V2ZW50V2hhdEhhc0Vycm9yJ10sIHRydWUpXG4gICAgICAgICAgLnNldEluKFsnZm9ybScsICdmaWVsZHMnLCAnZXZlbnRXaGF0RXJyb3JNc2cnXSwgJ0ZpZWxkVmFsaWRhdGlvbi52YWxpZF9kaXNwbGF5X25hbWUnKVxuICAgICAgfVxuICAgIH1cbiAgICBjYXNlICdyZXZpZXdCb2R5Jzoge1xuICAgICAgbGV0IHZhbGlkUmV2aWV3Qm9keSA9IFVuZGVyc2NvcmVVdGlscy5pc1VuZGVmaW5lZChcbiAgICAgICAgdmFsaWRhdGUoeyByZXZpZXdCb2R5OiB2YWx1ZSB9LCBkaXNwbGF5TmFtZUNvbnN0cmFpbnRzKVxuICAgICAgKVxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdmFsaWRSZXZpZXdCb2R5ID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIGlmICh2YWxpZFJldmlld0JvZHkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgICAgLnNldEluKFsnZm9ybScsICdmaWVsZHMnLCAncmV2aWV3Qm9keUhhc0Vycm9yJ10sIGZhbHNlKVxuICAgICAgICAgIC5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ3Jldmlld0JvZHlFcnJvck1zZyddLCAnJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICAgIC5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ3Jldmlld0JvZHlIYXNFcnJvciddLCB0cnVlKVxuICAgICAgICAgIC5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ3Jldmlld0JvZHlFcnJvck1zZyddLCAnRmllbGRWYWxpZGF0aW9uLnZhbGlkX2Rpc3BsYXlfbmFtZScpXG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqICMjIyBlbWFpbCB2YWxpZGF0aW9uXG4gICAgICogc2V0IHRoZSBmb3JtIGZpZWxkIGVycm9yXG4gICAgICovXG4gICAgY2FzZSAnZW1haWwnOiB7XG4gICAgICBjb25zdCB2YWxpZEVtYWlsID0gVW5kZXJzY29yZVV0aWxzLmlzVW5kZWZpbmVkKHZhbGlkYXRlKHsgZnJvbTogdmFsdWUgfSwgZW1haWxDb25zdHJhaW50cykpXG4gICAgICBpZiAodmFsaWRFbWFpbCkge1xuICAgICAgICByZXR1cm4gc3RhdGUuc2V0SW4oWydmb3JtJywgJ2ZpZWxkcycsICdlbWFpbEhhc0Vycm9yJ10sIGZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgICAgLnNldEluKFsnZm9ybScsICdmaWVsZHMnLCAnZW1haWxIYXNFcnJvciddLCB0cnVlKVxuICAgICAgICAgIC5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ2VtYWlsRXJyb3JNc2cnXSwgJ0ZpZWxkVmFsaWRhdGlvbi52YWxpZF9lbWFpbCcpXG4gICAgICB9XG4gICAgfVxuICAgIGNhc2UgJ2VtYWlsMSc6IHtcbiAgICAgIGNvbnN0IHZhbGlkRW1haWwgPSBVbmRlcnNjb3JlVXRpbHMuaXNVbmRlZmluZWQodmFsaWRhdGUoeyBmcm9tOiB2YWx1ZSB9LCBlbWFpbENvbnN0cmFpbnRzKSlcbiAgICAgIGlmICh2YWxpZEVtYWlsKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ2VtYWlsMUhhc0Vycm9yJ10sIGZhbHNlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgICAgLnNldEluKFsnZm9ybScsICdmaWVsZHMnLCAnZW1haWwxSGFzRXJyb3InXSwgdHJ1ZSlcbiAgICAgICAgICAuc2V0SW4oWydmb3JtJywgJ2ZpZWxkcycsICdlbWFpbEVycm9yTXNnJ10sICdGaWVsZFZhbGlkYXRpb24udmFsaWRfZW1haWwnKVxuICAgICAgfVxuICAgIH1cbiAgICBjYXNlICdlbWFpbDInOiB7XG4gICAgICBjb25zdCB2YWxpZEVtYWlsID0gVW5kZXJzY29yZVV0aWxzLmlzVW5kZWZpbmVkKHZhbGlkYXRlKHsgZnJvbTogdmFsdWUgfSwgZW1haWxDb25zdHJhaW50cykpXG4gICAgICBpZiAodmFsaWRFbWFpbCkge1xuICAgICAgICByZXR1cm4gc3RhdGUuc2V0SW4oWydmb3JtJywgJ2ZpZWxkcycsICdlbWFpbDJIYXNFcnJvciddLCBmYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICAgIC5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ2VtYWlsMkhhc0Vycm9yJ10sIHRydWUpXG4gICAgICAgICAgLnNldEluKFsnZm9ybScsICdmaWVsZHMnLCAnZW1haWxFcnJvck1zZyddLCAnRmllbGRWYWxpZGF0aW9uLnZhbGlkX2VtYWlsJylcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogIyMjIHBhc3N3b3JkIHZhbGlkYXRpb25cbiAgICAgKiBzZXQgdGhlIGZvcm0gZmllbGQgZXJyb3JcbiAgICAgKi9cbiAgICBjYXNlICdwYXNzd29yZCc6IHtcbiAgICAgIGNvbnN0IHZhbGlkUGFzc3dvcmQgPSBVbmRlcnNjb3JlVXRpbHMuaXNVbmRlZmluZWQoXG4gICAgICAgIHZhbGlkYXRlKHsgcGFzc3dvcmQ6IHZhbHVlIH0sIHBhc3N3b3JkQ29uc3RyYWludHMpXG4gICAgICApXG4gICAgICBpZiAodmFsaWRQYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgICAuc2V0SW4oWydmb3JtJywgJ2ZpZWxkcycsICdwYXNzd29yZEhhc0Vycm9yJ10sIGZhbHNlKVxuICAgICAgICAgIC5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ3Bhc3N3b3JkRXJyb3JNc2cnXSwgJycpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgICAuc2V0SW4oWydmb3JtJywgJ2ZpZWxkcycsICdwYXNzd29yZEhhc0Vycm9yJ10sIHRydWUpXG4gICAgICAgICAgLnNldEluKFsnZm9ybScsICdmaWVsZHMnLCAncGFzc3dvcmRFcnJvck1zZyddLCAnRmllbGRWYWxpZGF0aW9uLnZhbGlkX3Bhc3N3b3JkJylcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogIyMjIHBhc3N3b3JkQWdhaW4gdmFsaWRhdGlvblxuICAgICAqIHNldCB0aGUgZm9ybSBmaWVsZCBlcnJvclxuICAgICAqL1xuICAgIGNhc2UgJ3Bhc3N3b3JkQWdhaW4nOlxuICAgICAgY29uc3QgdmFsaWRQYXNzd29yZEFnYWluID0gVW5kZXJzY29yZVV0aWxzLmlzVW5kZWZpbmVkKFxuICAgICAgICB2YWxpZGF0ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXNzd29yZDogc3RhdGUuZm9ybS5maWVsZHMucGFzc3dvcmQsXG4gICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6IHZhbHVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwYXNzd29yZEFnYWluQ29uc3RyYWludHNcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgaWYgKHZhbGlkUGFzc3dvcmRBZ2Fpbikge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgICAuc2V0SW4oWydmb3JtJywgJ2ZpZWxkcycsICdwYXNzd29yZEFnYWluSGFzRXJyb3InXSwgZmFsc2UpXG4gICAgICAgICAgLnNldEluKFsnZm9ybScsICdmaWVsZHMnLCAncGFzc3dvcmRBZ2FpbkVycm9yTXNnJ10sICcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgICAgLnNldEluKFsnZm9ybScsICdmaWVsZHMnLCAncGFzc3dvcmRBZ2Fpbkhhc0Vycm9yJ10sIHRydWUpXG4gICAgICAgICAgLnNldEluKFxuICAgICAgICAgICAgWydmb3JtJywgJ2ZpZWxkcycsICdwYXNzd29yZEFnYWluRXJyb3JNc2cnXSxcbiAgICAgICAgICAgICdGaWVsZFZhbGlkYXRpb24udmFsaWRfcGFzc3dvcmRfYWdhaW4nXG4gICAgICAgICAgKVxuICAgICAgfVxuICAgIC8qKlxuICAgICAqICMjIyBzaG93UGFzc3dvcmRcbiAgICAgKiB0b2dnbGUgdGhlIGRpc3BsYXkgb2YgdGhlIHBhc3N3b3JkXG4gICAgICovXG4gICAgY2FzZSAnc2hvd1Bhc3N3b3JkJzpcbiAgICAgIHJldHVybiBzdGF0ZS5zZXRJbihbJ2Zvcm0nLCAnZmllbGRzJywgJ3Nob3dQYXNzd29yZCddLCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gc3RhdGVcbn1cbiJdfQ==