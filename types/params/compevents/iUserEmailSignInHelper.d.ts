declare interface IUserEmailSignInHelperParams {
  authModel: IAuthModelState
  actions: any
  onSignInHook: any
  callCloudSendEmailMethodAction: any
  checkedLoggedStatusAction: any
  onLoginSuccessHook: () => any
}
