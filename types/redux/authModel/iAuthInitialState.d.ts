// =====================================
// auth Form Model  ====================
// =====================================

declare interface ISocialConnectedFailureFieldsProps {
  buttonType: string
}

declare type SocialConnectedFailureFieldsPropsWithNull = ISocialConnectedFailureFieldsProps | null

declare interface IAuthModelFieldsProps {
  signUpUserId: string
  username: string
  usernameHasError: boolean
  usernameErrorMsg: string
  usernameOrEmail: string
  usernameOrEmailHasError: boolean
  usernameOrEmailErrorMsg: string
  email: string
  emailHasError: boolean
  emailErrorMsg: string
  password: string
  passwordHasError: boolean
  passwordErrorMsg: string
  passwordAgain: string
  passwordAgainHasError: boolean
  passwordAgainErrorMsg: string
  showPassword: boolean
  socialConnectedError: SocialConnectedFailureFieldsPropsWithNull
}

declare interface IAuthFacebookCallbackFieldsProps {
  facebookToken: string
  token: string
  expires: string
}

declare interface IAuthTwitterCallbackFieldsProps {
  twitterToken: string
  oauth_token: string
  oauth_verifier: string
}

declare interface IAuthModelStateForm {
  state: string
  formState: string
  disabled: boolean
  alert: any
  isValid: boolean
  isFetching: boolean
  fields: any
  error: any
  twitterCallback: any
  facebookCallback: any
}

declare interface IAuthModelState {
  form: any
}
