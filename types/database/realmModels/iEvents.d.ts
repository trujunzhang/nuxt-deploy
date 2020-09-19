/// <reference path="iRealmBaseModels.d.ts" />
declare interface IRealmModelEvents extends IRealmCommonModel {
  // Attributes
  displayName: string
  start: Date
  end: Date
  want: string
  // Pointer
  restaurant?: RealmModelRestaurantsWithNull
  restaurantUniqueId: string
}
