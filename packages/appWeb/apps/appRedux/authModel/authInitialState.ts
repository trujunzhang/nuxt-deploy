import * as Types from '@app/types'

const { Record } = require('immutable') // Using TypeScript with Immutable.js v4

let defaultFields = {
  usernameOrEmail: '',
  username: '',
  email: '',
  password: ''
}

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  defaultFields = {
    usernameOrEmail: 'trujunzhang@gmail.com',
    username: 'trujunzhang',
    email: 'trujunzhang@gmail.com',
    password: 'wanghao@720123'
  }
}

// Define our record defaults
const defaultAuthModelFields: IAuthModelFieldsProps = {
  signUpUserId: '',
  username: defaultFields.username,
  usernameHasError: false,
  usernameErrorMsg: '',
  usernameOrEmail: defaultFields.usernameOrEmail,
  usernameOrEmailHasError: false,
  usernameOrEmailErrorMsg: '',
  email: defaultFields.email,
  emailHasError: false,
  emailErrorMsg: '',
  password: defaultFields.password,
  passwordHasError: false,
  passwordErrorMsg: '',
  passwordAgain: '',
  passwordAgainHasError: false,
  passwordAgainErrorMsg: '',
  showPassword: false,
  socialConnectedError: null
}

// Create our AuthModelField class
export class AuthModelField extends Record(defaultAuthModelFields) {
  // Set the params. This will also typecheck when we instantiate a new FruitRecord
  constructor(params: IAuthModelFieldsProps) {
    super(params)
  }

  // This following line is the magic. It overrides the "get" method of record
  // and lets typescript know the return type based on our IFruitParams interface
  get<T extends keyof IAuthModelFieldsProps>(value: T): IAuthModelFieldsProps[T] {
    // super.get() is mapped to the original get() function on Record
    return super.get(value)
  }
}

// Define our record defaults
const defaultTwitterCallbackFields: IAuthTwitterCallbackFieldsProps = {
  twitterToken: '-1',
  oauth_token: '',
  oauth_verifier: ''
}

// Create our AuthModelField class
export class AuthTwitterCallbackField extends Record(defaultTwitterCallbackFields) {
  // Set the params. This will also typecheck when we instantiate a new FruitRecord
  constructor(params: IAuthTwitterCallbackFieldsProps) {
    super(params)
  }

  // This following line is the magic. It overrides the "get" method of record
  // and lets typescript know the return type based on our IFruitParams interface
  get<T extends keyof IAuthTwitterCallbackFieldsProps>(
    value: T
  ): IAuthTwitterCallbackFieldsProps[T] {
    // super.get() is mapped to the original get() function on Record
    return super.get(value)
  }
}

// Define our record defaults
const defaultFacebookCallbackFields: IAuthFacebookCallbackFieldsProps = {
  facebookToken: '-1',
  token: '',
  expires: ''
}

// Create our AuthModelField class
export class AuthFacebookCallbackField extends Record(defaultFacebookCallbackFields) {
  // Set the params. This will also typecheck when we instantiate a new FruitRecord
  constructor(params: IAuthFacebookCallbackFieldsProps) {
    super(params)
  }

  // This following line is the magic. It overrides the "get" method of record
  // and lets typescript know the return type based on our IFruitParams interface
  get<T extends keyof IAuthFacebookCallbackFieldsProps>(
    value: T
  ): IAuthFacebookCallbackFieldsProps[T] {
    // super.get() is mapped to the original get() function on Record
    return super.get(value)
  }
}

// Define our record defaults
const defaultAuthModelStateRecord: IAuthModelStateForm = {
  state: Types.authModel.PAGE_FORM_TYPE_REGISTER,
  formState: Types.authAction.LOGIN_PANEL_FORM_NORMAL,
  disabled: false,
  alert: null,
  isValid: false,
  isFetching: false,
  fields: new AuthModelField(defaultAuthModelFields),
  error: null,
  twitterCallback: new AuthTwitterCallbackField(defaultTwitterCallbackFields),
  facebookCallback: new AuthFacebookCallbackField(defaultFacebookCallbackFields)
}

// Create our AuthFormState class
export class AuthFormState extends Record(defaultAuthModelStateRecord) {
  // Set the params. This will also typecheck when we instantiate a new FruitRecord
  constructor(params: IAuthModelStateForm) {
    super(params)
  }

  // This following line is the magic. It overrides the "get" method of record
  // and lets typescript know the return type based on our IFruitParams interface
  get<T extends keyof IAuthModelStateForm>(value: T): IAuthModelStateForm[T] {
    // super.get() is mapped to the original get() function on Record
    return super.get(value)
  }
}

// Define our record defaults
export const defaultAuthModelFormRecord: IAuthModelState = {
  form: new AuthFormState(defaultAuthModelStateRecord)
}

// Create our AuthFormRecord class
export class AuthFormRecord extends Record(defaultAuthModelFormRecord) {
  // Set the params. This will also typecheck when we instantiate a new FruitRecord
  constructor(params: IAuthModelState) {
    super(params)
  }

  // This following line is the magic. It overrides the "get" method of record
  // and lets typescript know the return type based on our IFruitParams interface
  get<T extends keyof IAuthModelState>(value: T): IAuthModelState[T] {
    // super.get() is mapped to the original get() function on Record
    return super.get(value)
  }

  static setTwitterCallbackPayload(state, action: ITwitterCallbackAction) {
    const payload: ITwitterCallbackPayload = action.payload
    const nextState = state
      .setIn(['form', 'twitterCallback', 'twitterToken'], payload.browserToken)
      .setIn(['form', 'twitterCallback', 'oauth_token'], payload.twitterObject.oauth_token)
      .setIn(['form', 'twitterCallback', 'oauth_verifier'], payload.twitterObject.oauth_verifier)

    return nextState
  }

  static setFacebookCallbackPayload(state, action: IFacebookCallbackAction) {
    const payload: IFacebookCallbackPayload = action.payload
    const nextState = state
      .setIn(['form', 'facebookCallback', 'facebookToken'], payload.browserToken)
      .setIn(['form', 'facebookCallback', 'token'], payload.facebookObject.access_token)
      .setIn(['form', 'facebookCallback', 'expires'], payload.facebookObject.expires_in)

    return nextState
  }

  static resetForm(state) {
    return state
      .setIn(['form', 'alert'], null)
      .setIn(['form', 'fields', 'socialConnectedError'], null)
  }
}
