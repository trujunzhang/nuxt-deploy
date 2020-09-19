import * as Types from '@app/types'

/**
 * To be Hidden the newsletter.
 *
 * @returns action:{{type: string}}
 */
export function hideWidgetForTopNewsletter() {
  return {
    type: Types.authSession.HIDDEN_WIDGETS_FOR_NEWSLETTER
  }
}

/**
 * To be Hidden the top hero.
 *
 * @returns action:{{type: string}}
 */
export function hideWidgetForTopHero() {
  return {
    type: Types.authSession.HIDDEN_WIDGETS_FOR_TOP_HERO
  }
}

/**
 * Only for mobile client app:
 *   To be Hidden the welcome screen.
 *
 * @returns action:{{type: string}}
 */
export function hideWidgetForWelcome() {
  return {
    type: Types.authSession.HIDDEN_WIDGETS_FOR_WELCOME
  }
}

/**
 * Check the current logged status for user.
 *
 * @param {IParseModelUsers} userModel
 * @returns action: {{type: string; payload: IParseModelUsers}}
 */
export function checkedLoggedStatus(userModel: ParseModelUsersWithNull) {
  return {
    type: Types.authSession.CHECKED_LOGIN_STATUS_SUCCESS,
    payload: userModel
  }
}

/**
 * Set log out status.
 *
 * @returns action: {{type: string}}
 */
export function checkedLogoutStatus() {
  return {
    type: Types.authSession.CHECKED_LOGOUT_STATUS_SUCCESS
  }
}
