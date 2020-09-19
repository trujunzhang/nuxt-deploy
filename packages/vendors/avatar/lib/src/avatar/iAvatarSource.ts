import {
  ISrcSource,
  IValueSource,
  IGravatarBaseSource,
  IGoogleBaseSource,
  IFacebookBaseSource,
  ISkypeSource,
  ITwitterBaseSource,
  IVkontakteBaseSource,
  IIconSource
} from '../sources'

export interface IAvatarSourceProps
  extends ISrcSource,
    IValueSource,
    IGravatarBaseSource,
    IGoogleBaseSource,
    IFacebookBaseSource,
    ISkypeSource,
    ITwitterBaseSource,
    IVkontakteBaseSource,
    IIconSource {}
