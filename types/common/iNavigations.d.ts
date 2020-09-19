declare interface INavReducerQuery {
  from?: string
  author?: string
  s?: string
  dat?: string
  orderby?: string
  userProfileId?: string
  currentLeftSideMenuTag?: string
  topicId?: string
}

/**
 * @ isHomeListView
 */
declare interface INavReducerModel {
  isHomeListView: boolean
  title: string
  pathname: string
  params: INavReducerQuery
}

declare interface INavPostsListParams {
  // Topics
  topicId?: string
  s?: string
  // Common Fields
  leftIconType?: string
  /**
   * to be shown on the center of the toolbar.
   */
  centerTitle?: string
  /**
   * to be shown on the top of the post list.
   */
  listTitle?: string
  // For User Profile
  userProfile?: IParseModelUsers
  orderby?: string
  userProfileId?: string
  currentLeftSideMenuTag?: string
}

declare interface ISingletonNavigationState {
  routeName: string
  params: any
}

declare interface ISingletonNavigation {
  state: ISingletonNavigationState
  goBack: () => any
  dismiss: () => any
  getParam: (key: string, defaultValue: any) => any
  navigate: (navigateTo: string, params?: object) => any
  push: (routeName: string, params?: object) => any
  replace: (routeName: string, params?: object) => any
}

declare interface IReactPropsWithNavigation {
  navigation: ISingletonNavigation
}

declare interface IReactPropsWithNavigationForUsers {
  navigation: ISingletonNavigation
  currentUser: IParseModelUsers
}
