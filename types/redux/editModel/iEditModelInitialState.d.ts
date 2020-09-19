declare interface IEditModelValueProps {
  displayName?: string
  eventWhat?: string
  start?: string
  end?: string
  price?: string
  reviewRating?: number
  reviewBody?: string
}

declare interface IEditModelFieldsProps {
  displayName: string
  displayNameHasError: false
  displayNameErrorMsg: string
  eventWhat: string
  eventWhatHasError: false
  eventWhatErrorMsg: string
  start: Date
  end: Date
  price: string
  priceHasError: false
  priceErrorMsg: string
  reviewRating: number
  reviewBody: string
  reviewBodyHasError: false
  reviewBodyErrorMsg: string
  // google address
  latitude: null
  longitude: null
  address: string
  street_number: string
  route: string
  locality: string
  sublocality: string
  country: string
  postal_code: string
  administrative_area: string
}

declare interface IEditModelStateForm {
  state: string
  editModelType: string
  originModel: object
  disabled: boolean
  currentRequestRecipeId: string
  error: any
  isValid: boolean
  isFetching: boolean
  fields: any
}

declare interface IEditModelEventsStateForm extends IEditModelStateForm {
  originModel: IParseModelEvents
}
declare interface IEditModelPeopleInEventsStateForm extends IEditModelStateForm {
  originModel: IParseModelPeopleInEvent
}
declare interface IEditModelPhotosStateForm extends IEditModelStateForm {
  originModel: IParseModelPhotos
}
declare interface IEditModelRecipesStateForm extends IEditModelStateForm {
  originModel: IParseModelRecipes
}
declare interface IEditModelRestaurantsStateForm extends IEditModelStateForm {
  originModel: IParseModelRestaurants
}
declare interface IEditModelUsersStateForm extends IEditModelStateForm {
  originModel: IParseModelUsers
}
declare interface IEditModelReviewsStateForm extends IEditModelStateForm {
  originModel: IParseModelReviews
}

declare interface IEditModelState {
  form: any
}
