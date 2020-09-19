declare interface IMobileAppTableBaseParams {
  navigation: ISingletonNavigation
}

declare interface IHomeMoreItemModel {
  title: string
  tag: string
  objectId: string
  icon: string
}

declare interface IMobileAppTableShowRegisterPageParams extends IMobileAppTableBaseParams {
  navigationPageType: string
  formType: string
}

declare interface IMobileAppTablePopupPageParams extends IMobileAppTableBaseParams {
  pageName: string
}

// declare interface IMobileAppTable Params
// declare interface IMobileAppTable Params
// declare interface IMobileAppTable Params
