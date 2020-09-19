import * as Types from '@app/types'

const { Record, List } = require('immutable') // Using TypeScript with Immutable.js v4

const defaultEditModelFields: IEditModelFieldsProps = {
  displayName: '',
  displayNameHasError: false,
  displayNameErrorMsg: '',
  eventWhat: '',
  eventWhatHasError: false,
  eventWhatErrorMsg: '',
  start: new Date(),
  end: new Date(),
  price: '',
  priceHasError: false,
  priceErrorMsg: '',
  reviewRating: 0,
  reviewBody: '',
  reviewBodyHasError: false,
  reviewBodyErrorMsg: '',
  // google address
  latitude: null,
  longitude: null,
  address: '',
  street_number: '',
  route: '',
  locality: '',
  sublocality: '',
  country: '',
  postal_code: '',
  administrative_area: ''
}

export class EditModelField extends Record(defaultEditModelFields) {
  // Set the params. This will also typecheck when we instantiate a new FruitRecord
  constructor(params: IEditModelFieldsProps) {
    super(params)
  }

  // This following line is the magic. It overrides the "get" method of record
  // and lets typescript know the return type based on our IFruitParams interface
  get<T extends keyof IEditModelFieldsProps>(value: T): IEditModelFieldsProps[T] {
    // super.get() is mapped to the original get() function on Record
    return super.get(value)
  }
}

const defaultEditModelStateFormRecord: IEditModelStateForm = {
  state: Types.menuMore.MENU_ITEM_ADD_OR_EDIT_RESTAURANT,
  editModelType: Types.editModel.MODEL_FORM_TYPE_NEW,
  originModel: {},
  disabled: false,
  currentRequestRecipeId: '',
  error: null,
  isValid: false,
  isFetching: false,
  fields: new EditModelField(defaultEditModelFields)
}

export class EditFormState extends Record(defaultEditModelStateFormRecord) {
  // Set the params. This will also typecheck when we instantiate a new FruitRecord
  constructor(params: IEditModelStateForm) {
    super(params)
  }

  // This following line is the magic. It overrides the "get" method of record
  // and lets typescript know the return type based on our IFruitParams interface
  get<T extends keyof IEditModelStateForm>(value: T): IEditModelStateForm[T] {
    // super.get() is mapped to the original get() function on Record
    return super.get(value)
  }
}

export const defaultEditModelFormRecord: IEditModelState = {
  form: new EditFormState(defaultEditModelStateFormRecord)
}

export class EditFormRecord extends Record(defaultEditModelFormRecord) {
  // Set the params. This will also typecheck when we instantiate a new FruitRecord
  constructor(params: IEditModelState) {
    super(params)
  }

  // This following line is the magic. It overrides the "get" method of record
  // and lets typescript know the return type based on our IFruitParams interface
  get<T extends keyof IEditModelState>(value: T): IEditModelState[T] {
    // super.get() is mapped to the original get() function on Record
    return super.get(value)
  }
}
