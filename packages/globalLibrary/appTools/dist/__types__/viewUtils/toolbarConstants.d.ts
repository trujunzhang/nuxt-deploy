import { IPageToolbarIcon } from './advanced';
export declare const nbToolbarIcons: {
    ICONS_LEFT_DISMISS: string;
    ICONS_LEFT_ONLY_DISMISS: string;
    ICONS_LEFT_BACKICON_DISMISS: string;
    ICONS_LEFT_BACK: string;
    ICONS_LEFT_USER_AVATAR: string;
    ICONS_RIGHT_SETTINGS: string;
    ICONS_RIGHT_ADD: string;
    ICONS_RIGHT_DONE: string;
    ICON_RIGHT_SECTION_BOOKMARK_ICON: string;
    ICON_RIGHT_SECTION_NOTIFICATION_ICON: string;
};
declare interface IPageToolbarDict {
    [Key: string]: IPageToolbarIcon;
}
export declare const nbPageToolbarIcons: IPageToolbarDict;
export {};
