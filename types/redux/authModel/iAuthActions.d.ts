declare interface IAuthActions {
  /**
   * # authActions.js
   *
   */
  logoutState(): {
    type: any
  }
  registerState(): {
    type: any
  }
  loginState(): {
    type: any
  }
  forgotPasswordState(): {
    type: any
  }
  /**
   * ## Logout actions
   */
  logoutRequest(): {
    type: any
  }
  logoutSuccess(): {
    type: any
  }
  logoutFailure(
    error: any
  ): {
    type: any
    payload: any
  }
  setFormState(
    stateType: string,
    userId: string
  ): {
    type: any
    payload: {
      stateType: string
      userId: string
    }
  }
  /**
   * ## onAuthFormFieldChange
   * Set the payload so the reducer can work on it
   */
  onAuthFormFieldChange(
    field: string,
    value: any
  ): {
    type: any
    payload: {
      field: string
      value: any
    }
  }
  /**
   * ## Signup actions
   */
  signupRequest(): {
    type: any
  }
  signupSuccess(
    json: any
  ): {
    type: any
    payload: any
  }
  signupFailure(
    error: any
  ): {
    type: any
    payload: any
  }
  /**
   * ## Login actions
   */
  loginRequest(): {
    type: any
  }
  loginSuccess(
    json: any
  ): {
    type: any
    payload: any
  }
  showLoginAlert(
    alert: any
  ): {
    type: any
    payload: any
  }
  /**
   * ## ResetPassword actions
   */
  resetPasswordRequest(): {
    type: any
  }
  resetPasswordSuccess(): {
    type: any
  }
  resetPasswordFailure(
    error: any
  ): {
    type: any
    payload: any
  }
  inviteState(): {
    type: any
  }
  editUserState(): {
    type: any
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
  signup(username: any, email: any, password: any, roleType: any): (dispatch: any) => void
  deleteTokenRequestSuccess(): {
    type: any
  }
  loginFailure(
    error: any
  ): {
    type: any
    payload: any
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
  login(username: any, password: any): (dispatch: any) => void
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
  resetPassword(email: any): (dispatch: any) => any
}
