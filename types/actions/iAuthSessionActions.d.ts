/**
 * To be Hidden the newsletter.
 *
 * @returns action:{{type: string}}
 */
declare type hideWidgetForTopNewsletter = () => IAction
/**
 * To be Hidden the top hero.
 *
 * @returns action:{{type: string}}
 */
declare type hideWidgetForTopHero = () => IAction
/**
 * Only for mobile client app:
 *   To be Hidden the welcome screen.
 *
 * @returns action:{{type: string}}
 */
declare type hideWidgetForWelcome = () => IAction
/**
 * Check the current logged status for user.
 *
 * @param {IParseModelUsers} userModel
 * @returns action: {{type: string; payload: IParseModelUsers}}
 */
declare type CheckedLoggedStatusActionFunc = (userModel: ParseModelUsersWithNull) => IAction
/**
 * Set log out status.
 *
 * @returns action: {{type: string}}
 */
declare type checkedLogoutStatus = () => IAction
