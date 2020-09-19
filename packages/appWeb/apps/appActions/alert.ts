import * as Types from '@app/types'

/**
 *  Dismiss all alert messages.
 *
 * @returns {{type: string}}
 */
export function dismissAlertMessage() {
  return {
    type: Types.alert.DISMISS_ALERT_MESSAGE
  }
}

/**
 * Show alert message.
 *
 * @param message
 * @returns action: {{type: string; payload: any}}
 */
export function showAlertMessage(message: IAlertMessage) {
  return {
    type: Types.alert.SHOW_ALERT_MESSAGE,
    payload: message
  }
}
