/// <reference path="iRealmBaseModels.d.ts" />

declare interface IRealmModelRecipes extends IRealmCommonModel {
  // Attributes
  displayName: string
  price: string
  // Relations
  restaurant?: RealmModelRestaurantsWithNull
  restaurantUniqueId: string
}
