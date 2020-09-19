/// <reference path="iRealmBaseModels.d.ts" />

declare interface IRealmModelReviews extends IRealmCommonModel {
  // Attributes
  rate: number
  body: string
  reviewType: string
  // Relative
  forObjectUniqueId?: string
  // Pointer
  restaurant?: RealmModelRestaurantsWithNull
  event?: RealmModelEventsWithNull
  recipe?: RealmModelRecipesWithNull
}
