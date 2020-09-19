import { IPageToolbarIcon } from './advanced' // typings

import { IconVectorTypeMaterialIcons } from './iconTypeConstants'

export const nbToolbarIcons = {
  ICONS_LEFT_DISMISS: 'ICONS_LEFT_DISMISS',
  ICONS_LEFT_ONLY_DISMISS: 'ICONS_LEFT_ONLY_DISMISS',
  ICONS_LEFT_BACKICON_DISMISS: 'ICONS_LEFT_BACKICON_DISMISS',
  ICONS_LEFT_BACK: 'ICONS_LEFT_BACK',
  ICONS_LEFT_USER_AVATAR: 'ICONS_LEFT_USER_AVATAR',
  ICONS_RIGHT_SETTINGS: 'ICONS_RIGHT_SETTINGS',
  ICONS_RIGHT_ADD: 'ICONS_RIGHT_ADD',
  ICONS_RIGHT_DONE: 'ICONS_RIGHT_DONE',
  ICON_RIGHT_SECTION_BOOKMARK_ICON: 'ICON_RIGHT_SECTION_BOOKMARK_ICON',
  ICON_RIGHT_SECTION_NOTIFICATION_ICON: 'ICON_RIGHT_SECTION_NOTIFICATION_ICON'
}

declare interface IPageToolbarDict {
  [Key: string]: IPageToolbarIcon
}

export const nbPageToolbarIcons: IPageToolbarDict = {
  ICONS_LEFT_DISMISS: {
    iconName: 'close',
    iconType: nbToolbarIcons.ICONS_LEFT_DISMISS
  },
  ICONS_LEFT_ONLY_DISMISS: {
    iconName: 'close',
    iconType: nbToolbarIcons.ICONS_LEFT_ONLY_DISMISS
  },
  ICONS_LEFT_BACKICON_DISMISS: {
    iconName: 'arrow-back',
    iconType: nbToolbarIcons.ICONS_LEFT_DISMISS
  },
  ICONS_LEFT_BACK: {
    iconName: 'arrow-back',
    iconType: nbToolbarIcons.ICONS_LEFT_BACK
  },
  ICONS_RIGHT_SETTINGS: {
    iconName: 'settings',
    iconType: nbToolbarIcons.ICONS_RIGHT_SETTINGS
  },
  ICONS_RIGHT_ADD: {
    iconName: 'add',
    iconType: nbToolbarIcons.ICONS_RIGHT_ADD
  },
  ICONS_RIGHT_DONE: {
    iconName: 'done',
    iconType: nbToolbarIcons.ICONS_RIGHT_DONE,
    vectorType: IconVectorTypeMaterialIcons
  },
  ICON_RIGHT_SECTION_BOOKMARK_ICON: {
    iconName: 'bookmark-border',
    iconType: nbToolbarIcons.ICON_RIGHT_SECTION_BOOKMARK_ICON,
    vectorType: IconVectorTypeMaterialIcons
  },
  ICON_RIGHT_SECTION_NOTIFICATION_ICON: {
    iconName: 'notifications',
    iconType: nbToolbarIcons.ICON_RIGHT_SECTION_NOTIFICATION_ICON
  }
}
