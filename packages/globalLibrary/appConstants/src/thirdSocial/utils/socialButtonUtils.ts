import * as Types from './constants'

export class SocialButtonUtils {
  getConnectionTitle(buttonType: string) {
    switch (buttonType) {
      case Types.social.SOCIAL_BUTTON_TYPE_FACEBOOK:
        return 'Connect to Facebook'
      case Types.social.SOCIAL_BUTTON_TYPE_TWITTER:
        return 'Connect to Twitter'
    }

    return ''
  }

  getLoggedTitle(buttonType: string, typeTitle: string) {
    switch (buttonType) {
      case Types.social.SOCIAL_BUTTON_TYPE_FACEBOOK:
        return `${typeTitle} with facebook`
      case Types.social.SOCIAL_BUTTON_TYPE_TWITTER:
        return `${typeTitle} with twitter${'     '}`
    }

    return ''
  }

  getTitle(socialButtonType: string, buttonType: string, typeTitle: string) {
    switch (socialButtonType) {
      case Types.social.SOCIAL_BUTTON_FOR_CONNECTION:
        return this.getConnectionTitle(buttonType)
      case Types.social.SOCIAL_BUTTON_FOR_LOGIN:
        return this.getLoggedTitle(buttonType, typeTitle)
    }

    return ''
  }
}
