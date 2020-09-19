import {
  IPageToolbarIconPressed,
  IPageToolbarLeftElement,
  IPageToolbarCenterElement,
  IPageToolbarRightElement
} from './iToolbars'

export interface IPageToolbarVisible {
  showLeftElement?: boolean
  showCenterElement?: boolean
  showRightElement?: boolean
}

export interface IPageToolbarParams {
  onToolbarIconsPressed?: IPageToolbarIconPressed
  headerStyle?: any
  leftStyle?: any
  centerStyle?: any
  rightStyle?: any
  leftElement: IPageToolbarLeftElement
  centerElement: IPageToolbarCenterElement
  rightElement: IPageToolbarRightElement
  visible?: IPageToolbarVisible
}
