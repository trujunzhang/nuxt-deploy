const { Record, isImmutable, fromJS } = require('immutable') // Using TypeScript with Immutable.js v4

import { AuthMobileWidget, AuthSessionStateRecord } from '../authSessionInitialState'

export class TransferAuthSession {
  private state: any

  constructor(state) {
    this.state = state
  }

  private convertToRecorder() {
    const authMobileWidget: IMobileWidgets = {
      showTopNewsletter: this.state.mobileWidget.showTopNewsletter,
      showTopHero: this.state.mobileWidget.showTopHero,
      showWelcome: this.state.mobileWidget.showWelcome
    }
    const mobileWidget = new AuthMobileWidget(authMobileWidget)

    const authSessionRecord: IAuthSessionState = {
      mobileWidget,
      loaded: this.state.loaded,
      user: this.state.user,
      localeLanguage: 'en'
    }

    return new AuthSessionStateRecord(authSessionRecord)
  }

  transfer() {
    const notObject = isImmutable(this.state)
    if (notObject) {
      return this.state
    }
    return this.convertToRecorder()
  }
}
