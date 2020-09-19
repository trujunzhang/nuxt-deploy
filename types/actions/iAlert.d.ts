/**
 *  Dismiss all alert messages.
 *
 * @returns {{type: string}}
 */
declare type DismissAlertMessageFunc = () => IAction

/**
 * Show alert message.
 *
 * @param message
 * @returns action: {{type: string; payload: any}}
 */
declare type ShowAlertMessageActionFunc = (message: IAlertMessage) => IAction
