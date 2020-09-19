/// <reference path="iRealmBaseModels.d.ts" />

declare interface IRealmModelRecords extends IRealmBaseModel {
  // Attributes
  recordType: string
  recordSortType: number
  removedObjectUniqueId: string
  // Pointer
  restaurant?: RealmModelRestaurantsWithNull
  event?: RealmModelEventsWithNull
  peopleInEvent?: RealmModelPeopleInEvenstWithNull
  recipe?: RealmModelRecipesWithNull
  photo?: RealmModelPhotosWithNull
  review?: RealmModelReviewsWithNull
}
