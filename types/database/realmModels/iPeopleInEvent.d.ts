/// <reference path="iRealmBaseModels.d.ts" />

declare interface IRealmModelPeopleInEvents extends IRealmCommonModel {
  // Pointer
  restaurant?: RealmModelRestaurantsWithNull
  event?: RealmModelEventsWithNull
  user?: RealmModelUsersWithNull

  // PointIds
  restaurantUniqueId: string
  eventUniqueId: string
  userId: string

  // Recipes, join with ';'
  recipeUniqueIds: string
}
