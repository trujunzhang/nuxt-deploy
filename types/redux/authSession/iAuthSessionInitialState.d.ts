// =====================================
// auth Form Model  ====================
// =====================================

// declare interface IAuthModelFieldsProps {
//   signUpUserId: string
//   username: string
//   usernameHasError: boolean
//   usernameErrorMsg: string
//   email: string
//   emailHasError: boolean
//   emailErrorMsg: string
//   email1: string
//   email1HasError: boolean
//   email1ErrorMsg: string
//   email2: string
//   email2HasError: boolean
//   email2ErrorMsg: string
//   password: string
//   passwordHasError: boolean
//   passwordErrorMsg: string
//   passwordAgain: string
//   passwordAgainHasError: boolean
//   passwordAgainErrorMsg: string
//   showPassword: boolean
// }

// declare interface IAuthModelStateProps {
//   state: string
//   formState: string
//   disabled: boolean
//   alert: any
//   isValid: boolean
//   isFetching: boolean
//   fields: any
// }

// declare interface IAuthModelFormProps {
//   form: any
// }

declare interface IAuthSessionState {
  mobileWidget: any
  loaded: boolean
  user: ParseModelUsersWithNull
  localeLanguage: string
}
