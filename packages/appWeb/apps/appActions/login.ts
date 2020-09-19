import * as queryString from 'query-string'
import * as Types from '@app/types'
import { LoginByParseUser, SignUpWithEmailPassword } from '@appActionUtils/index'

/**
 * Async action: Sign in.
 *
 * @param {string} usernameOrEmail
 * @param {string} password
 * @returns Promise:{Promise<{type: string; model: IParseModelUsers} | {type: string; model: ParseModelUsersWithNull}>}
 */
export async function loginByParseUser(params: ISignInParameter) {
  const { usernameOrEmail, password } = params
  const install = new LoginByParseUser()
  await install.login(usernameOrEmail, password)
  const action: ILoginLoginByParseUserAction = install.end()

  return action
}

/**
 * Promise: Register for an Account.
 *
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {boolean} needEmailVerification
 * @returns Promise: {Promise<{type: string; payload: ParseModelUsersWithNull}[]>}
 */
export async function signUpWithEmailPassword(params: ISignUpParameter) {
  const { username, email, password, needEmailVerification } = params
  const instance = new SignUpWithEmailPassword(email, needEmailVerification)
  await instance.signUp(username, password)
  const action = instance.end()

  return Promise.all([Promise.resolve(action)])
}

/**
 * Action: Register for an Account.
 *
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @param {boolean} needEmailVerification :
 *                  true: Web app need email verification
 *                  false: for mobile client app.
 * @returns {(dispatch) => Promise<Promise<{type: string; payload: ParseModelUsersWithNull}[]>>}
 */
export function signUpWithPassword(params: ISignUpParameter) {
  return (dispatch) => {
    const login = signUpWithEmailPassword(params)
    login.then(([result]) => {
      dispatch(result)
    })
    return login
  }
}

export function connectedSocialFailure(buttonType) {
  return {
    type: Types.authAction.SOCIAL_CONNECTION_FAILURE_BUTTON_TYPE,
    payload: {
      buttonType
    }
  }
}

/**
 *  Call back object only for mobile twitter.
 * @param params : ICallbackWebbrowserParams
 */
export function callBackTwitter(params: ICallbackWebbrowserParams): ITwitterCallbackAction {
  const { browserToken, url } = params

  const newRouterUrl = queryString.parseUrl(url) as any
  const twitterObject: ITwitterCallBackObject = {
    oauth_token: newRouterUrl.query.oauth_token,
    oauth_verifier: newRouterUrl.query.oauth_verifier
  }
  const payload: ITwitterCallbackPayload = {
    browserToken,
    twitterObject
  }
  return {
    type: Types.authAction.LOGIN_TWITTER_MOBILE_CALLBACK,
    payload
  }
}

/**
 *  Call back object only for mobile facebook.
 * @param params : ICallbackWebbrowserParams
 */
export function callBackFacebook(params: ICallbackWebbrowserParams): IFacebookCallbackAction {
  const { browserToken, url } = params

  const newRouterUrl = queryString.parseUrl(url) as any
  const facebookObject: IFacebookCallBackObject = {
    access_token: newRouterUrl.query.access_token,
    expires_in: newRouterUrl.query.expires_in
  }
  const payload: IFacebookCallbackPayload = {
    browserToken,
    facebookObject
  }
  return {
    type: Types.authAction.LOGIN_FACEBOOK_MOBILE_CALLBACK,
    payload
  }
}
