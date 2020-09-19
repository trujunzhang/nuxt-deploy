declare interface IStatisticReviewParams {
  reviewType: string | null
  forObjectUniqueId: string | null
}

declare interface IFilterReviewForUserParams {
  userId: string
}

declare interface IFilterForReviewParams extends IStatisticReviewParams {}

declare interface IGoogleAddressFetchResult {
  // length(8)
  address: string
  street_number: string
  route: string
  locality: string
  sublocality: string
  country: string
  postal_code: string
  administrative_area: string
}

declare interface IGoogleAddressFetchParams {
  lat?: number
  lng?: number
}
