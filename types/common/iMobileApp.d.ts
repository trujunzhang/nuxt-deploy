declare interface INavWebbrowserParams {
  browserToken: string
  initialURL: string
  browserType: string
}

// ===========================================================
// ===========================================================
//  *** Webbrowser for Login via social ***
// ===========================================================
// ===========================================================
declare interface ICallbackWebbrowserParams {
  browserToken: string
  url: string
}

// ===========================================================
// ===========================================================
//  *** Twitter ***
// ===========================================================
// ===========================================================
declare interface ITwitterCallBackObject {
  oauth_token: string
  oauth_verifier: string
}

declare interface ITwitterCallbackPayload {
  browserToken: string
  twitterObject: ITwitterCallBackObject
}

declare interface ITwitterCallbackAction {
  type: string
  payload: ITwitterCallbackPayload
}

// ===========================================================
// ===========================================================
//  *** Facebook ***
// ===========================================================
// ===========================================================
declare interface IFacebookCallBackObject {
  access_token: string
  expires_in: string
}

declare interface IFacebookCallbackPayload {
  browserToken: string
  facebookObject: IFacebookCallBackObject
}

declare interface IFacebookCallbackAction {
  type: string
  payload: IFacebookCallbackPayload
}

// ===========================================================
// ===========================================================
//  *** Location ***
// ===========================================================
// ===========================================================

declare type getCurrentLocationFunc = () => IAppGeoRegionWithNull

// ===========================================================
// ===========================================================
//  *** SVG***
// ===========================================================
// ===========================================================

declare interface ISvgButtonIcon {
  path: string
  opacity: string
}

declare interface ISvgButtonItem {
  tag?: string
  title: string
  subTitleText?: string
  icons: ISvgButtonIcon[]
}
