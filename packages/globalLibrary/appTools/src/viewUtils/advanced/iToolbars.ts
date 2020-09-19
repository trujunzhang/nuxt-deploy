export interface IPageToolbarIcon {
  iconName: string
  iconType: string
  vectorType?: string
  iconColor?: string
}

export type IPageToolbarIconArray = IPageToolbarIcon[]

export interface IPageToolbarTitleObject {
  title?: string
  subTitle?: string
}

export type IPageToolbarIconPressed = (icon: IPageToolbarIcon) => any

export type IPageToolbarOnSearchSubmitEditingChanged = (text: string) => any
export interface IPageToolbarCenterSearchBarObject {
  onSearchSubmitEditing?: IPageToolbarOnSearchSubmitEditingChanged
}

export type ToolbarRenderComponent = any

/**
 * Left Element.
 */
export interface IPageToolbarLeftElement {
  renderLeft?: () => ToolbarRenderComponent
  icons?: IPageToolbarIconArray
  titleObject?: IPageToolbarTitleObject
}

/**
 * Right Element.
 */
export interface IPageToolbarRightElement {
  renderRight?: () => ToolbarRenderComponent
  icons?: IPageToolbarIconArray
  titleObject?: IPageToolbarTitleObject
}

/**
 * Center Element.
 */
export interface IPageToolbarCenterElement {
  renderCenter?: () => ToolbarRenderComponent
  titleObject?: IPageToolbarTitleObject
  searchBarObject?: IPageToolbarCenterSearchBarObject
}
