export interface INavWebbrowserParams {
  title: string
  showNavigationBottonBar: boolean
  browserToken: string
  initialURL: string
  browserType: string
  post: any
}

export interface IGummybearWebBrowserGlobalProps {
  navigation: any
  title: string
  showNavigationBottonBar: boolean
  callBackTwitterAction: any
  callBackFacebookAction: any
  renderBottonPanel: any
}
