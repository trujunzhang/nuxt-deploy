const { Record } = require('immutable') // Using TypeScript with Immutable.js v4

// Define our record defaults
const defaultAuthMobileWidget: IMobileWidgets = {
  showTopNewsletter: 'true',
  showTopHero: 'true',
  showWelcome: true
}

// Create our AuthMobileWidget class
export class AuthMobileWidget extends Record(defaultAuthMobileWidget) {
  // Set the params. This will also typecheck when we instantiate a new FruitRecord
  constructor(params: IMobileWidgets) {
    super(params)
  }

  // This following line is the magic. It overrides the "get" method of record
  // and lets typescript know the return type based on our IFruitParams interface
  get<T extends keyof IMobileWidgets>(value: T): IMobileWidgets[T] {
    // super.get() is mapped to the original get() function on Record
    return super.get(value)
  }
}
// Define our record defaults
export const defaultAuthSessionRecord: IAuthSessionState = {
  mobileWidget: new AuthMobileWidget(defaultAuthMobileWidget),
  loaded: false,
  user: null,
  localeLanguage: 'en'
}
// Create our AuthSessionStateRecord class
export class AuthSessionStateRecord extends Record(defaultAuthSessionRecord) {
  // Set the params. This will also typecheck when we instantiate a new FruitRecord
  constructor(params: IAuthSessionState) {
    super(params)
  }

  // This following line is the magic. It overrides the "get" method of record
  // and lets typescript know the return type based on our IFruitParams interface
  get<T extends keyof IAuthSessionState>(value: T): IAuthSessionState[T] {
    // super.get() is mapped to the original get() function on Record
    return super.get(value)
  }

  setLoggedUser(user) {
    return this.setIn(['loaded'], true).setIn(['user'], user)
  }

  hideTopNewsLetter() {
    return this.setIn(['mobileWidget', 'showTopNewsletter'], 'false')
  }

  hideTopHero() {
    return this.setIn(['mobileWidget', 'showTopHero'], 'false')
  }

  hideWelcomeScreen() {
    return this.setIn(['mobileWidget', 'showWelcome'], false)
  }

  current() {
    return this.toJS()
  }
}
