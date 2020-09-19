/// <reference path="../iDatabase.d.ts" />
/// <reference path="iEvents.d.ts" />
/// <reference path="iPeopleInEvent.d.ts" />
/// <reference path="iPhotos.d.ts" />
/// <reference path="iUsers.d.ts" />
/// <reference path="iUserDevices.d.ts" />
/// <reference path="iReviews.d.ts" />
/// <reference path="iRestaurants.d.ts" />
/// <reference path="iRecords.d.ts" />
/// <reference path="iRecipes.d.ts" />

declare interface IRealmObjectId {
  objectId: string
}
/**
 * Base Model for Realm.
 */
declare interface IRealmBaseModel extends IRealmObjectId, IDatabaseBaseModel {}

declare interface IRealmCommonModel extends IRealmBaseModel {
  creator?: RealmModelUsersWithNull
}

declare type RealmBaseModelWithNull = IRealmBaseModel | null
declare type RealmModelPhotosWithNull = IRealmModelPhotos | null
declare type RealmModelUsersWithNull = IRealmModelUsers | null
declare type RealmModelRestaurantsWithNull = IRealmModelRestaurants | null
declare type RealmModelPeopleInEvenstWithNull = IRealmModelPeopleInEvents | null
declare type RealmModelReviewsWithNull = IRealmModelReviews | null
declare type RealmModelEventsWithNull = IRealmModelEvents | null
declare type RealmModelRecordsWithNull = IRealmModelRecords | null
declare type RealmModelRecipesWithNull = IRealmModelRecipes | null

declare type EditRealmObjects =
  | IRealmModelRestaurants
  | IRealmModelEvents
  | IRealmModelReviews
  | IRealmModelRecipes
