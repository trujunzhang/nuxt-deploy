import { RouteParserUtils as Route } from '@app/tools'

import { twitterServerConfigure } from '../authApi'

import {
  ISocialAuthHelperGetFacebookSdkParams,
  ISocialAuthHelperGetTwitterOauthTokenUrlParams,
  ISocialAuthHelperGetTwitterRequestTokenUrlParams
} from './socialAuthHelper.d'

export class SocialAuthHelper {
  // =====================================
  // Facebook ============================
  // =====================================
  static getFacebookSdk(params: ISocialAuthHelperGetFacebookSdkParams) {
    const route = new Route(`https://connect.facebook.net/:language/sdk.js`)
    return route.reverse(params)
  }

  // =====================================
  // Twitter =============================
  // =====================================
  static getTwitterOauthTokenUrl(params: ISocialAuthHelperGetTwitterOauthTokenUrlParams) {
    const route = new Route(
      `${twitterServerConfigure.loginUrl}?oauth_verifier=:oAuthVerifier&oauth_token=:oauthToken`
    )
    return route.reverse(params)
  }

  static getTwitterRequestTokenUrl(params: ISocialAuthHelperGetTwitterRequestTokenUrlParams) {
    const route = new Route(`https://api.twitter.com/oauth/authenticate?oauth_token=:oauth_token`)
    return route.reverse(params)
  }
}
