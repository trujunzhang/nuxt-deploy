declare interface IUserSocialConnectHelperConnectSocialParams {
  actions: any
  buttonType: string
  profile: any
  connectedUser: ParseModelUsersWithNull
  onConnectedAfterHook: any
  showAlertMessageAction: ShowAlertMessageActionFunc
}

declare interface IUserSocialConnectHelperLoginViaSocialAuthParams {
  actions: any
  buttonType: string
  profile: any
  checkedLoggedStatusAction: any
  onSignInAfterHook: any
}
