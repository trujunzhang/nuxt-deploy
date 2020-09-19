import * as Types from '@app/types'

const initialState: IAlertState = {
  message: null
}

/**
 * appAlert: store.appAlert
 *
 */
export function alert(state: IAlertState = initialState, action: any): IAlertState {
  if (action.type === Types.alert.DISMISS_ALERT_MESSAGE) {
    return initialState
  }

  if (action.type === Types.alert.SHOW_ALERT_MESSAGE) {
    return {
      message: action.payload
    }
  }

  if (action.type === Types.editModelAction.UPDATE_MODEL_REQUEST) {
    return initialState
  }

  return state
}
