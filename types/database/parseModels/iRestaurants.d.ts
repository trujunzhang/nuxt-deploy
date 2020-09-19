/// <reference path="iParseBaseModels.d.ts" />
declare interface IGoogleReverseModel {
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

declare interface IParseModelRestaurants
  extends IParseModelWithDisplayName,
    IParseCommonModel,
    IGoogleReverseModel {
  // Attributes
  geoLocation: IParseGeoPoint
}
