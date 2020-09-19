/// <reference path="iRealmBaseModels.d.ts" />

declare interface IRealmModelRestaurants extends IRealmCommonModel {
  // Attributes
  displayName: string
  // Google address
  address: string
  geoHash: string
  // Location
  latitude: number
  longitude: number
}
