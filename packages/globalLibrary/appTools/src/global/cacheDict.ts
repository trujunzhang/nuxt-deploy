/**
 *
 * Global cache for vectorIcons, KeyboardAwareScrollView.
 *
 */
import { VectorIconsDictWithNull } from './iVectorIcons'
export declare interface ICacheDict {
  iconVectorVariables?: VectorIconsDictWithNull
  keyboardAwareScrollView?: any
}

var cacheDict: ICacheDict = {
  iconVectorVariables: null,
  keyboardAwareScrollView: null
}

export const CACHE_VECTOR_ICONS = 'iconVectorVariables'
export const CACHE_KEYBOARD_AWARE_SCROLL_VIEW = 'keyboardAwareScrollView'

export type CacheDictKeys = 'iconVectorVariables' | 'keyboardAwareScrollView'

export const setCachDict = (key: CacheDictKeys, value: any) => {
  cacheDict[key] = value
  // console.log('setCachDict : ', JSON.stringify(cacheDict))
}

export const getCachDict = (key: CacheDictKeys) => {
  const keys = Object.keys(cacheDict)
  if (keys.indexOf(key) !== -1) {
    // console.log('getCachDict : ', JSON.stringify(cacheDict))
    return cacheDict[key]
  }
  return null
}
