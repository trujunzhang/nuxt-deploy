declare interface IUserEmailSignUpHelperParams {
  authModel: IAuthModelState
  actions: any
  needEmailVerification: boolean
  signUpWithPasswordAction: any
  onSignSuccessHook: () => any
}
