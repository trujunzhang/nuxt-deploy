/**
 *
 * Global cache for vectorIcons, KeyboardAwareScrollView.
 *
 */
import { VectorIconsDictWithNull } from './iVectorIcons';
export declare interface ICacheDict {
    iconVectorVariables?: VectorIconsDictWithNull;
    keyboardAwareScrollView?: any;
}
export declare const CACHE_VECTOR_ICONS = "iconVectorVariables";
export declare const CACHE_KEYBOARD_AWARE_SCROLL_VIEW = "keyboardAwareScrollView";
export declare type CacheDictKeys = 'iconVectorVariables' | 'keyboardAwareScrollView';
export declare const setCachDict: (key: CacheDictKeys, value: any) => void;
export declare const getCachDict: (key: CacheDictKeys) => any;
