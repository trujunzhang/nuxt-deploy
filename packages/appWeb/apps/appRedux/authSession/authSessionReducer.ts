import { AuthSessionStateRecord, defaultAuthSessionRecord } from './authSessionInitialState'

import * as Types from '@app/types'
import { TransferAuthSession } from './utils'

const initialState = new AuthSessionStateRecord(defaultAuthSessionRecord)

export function authSessionReducer(state: any = initialState, action: any): any {
  let nextState: any
  switch (action.type) {
    case Types.authSession.CHECKED_LOGIN_STATUS_SUCCESS:
      nextState = new TransferAuthSession(state).transfer()
      return nextState.setIn(['loaded'], true).setIn(['user'], action.payload)

    case Types.authSession.CHECKED_LOGOUT_STATUS_SUCCESS:
      nextState = new TransferAuthSession(state).transfer()
      return nextState.setLoggedUser(null)

    case Types.authSession.HIDDEN_WIDGETS_FOR_NEWSLETTER:
      nextState = new TransferAuthSession(state).transfer()
      return nextState.hideTopNewsLetter()

    case Types.authSession.HIDDEN_WIDGETS_FOR_WELCOME:
      nextState = new TransferAuthSession(state).transfer()
      return nextState.setIn(['mobileWidget', 'showWelcome'], false)

    case Types.authSession.HIDDEN_WIDGETS_FOR_TOP_HERO:
      nextState = new TransferAuthSession(state).transfer()
      return nextState.hideTopHero()

    default:
      return state
  }
}
