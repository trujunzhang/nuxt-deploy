// ===========================================================
// ===========================================================
//  *** For mobile ***
// ===========================================================
// ===========================================================

declare interface IGenerateNewBaseRealmObjectParams {
  realmUser: RealmModelUsersWithNull
}

declare interface IGenerateNewRecipeRealmObjectParams extends IGenerateNewBaseRealmObjectParams {
  restaurant: IRealmModelRestaurants
}

declare interface IGenerateNewPeopleInEventRealmObjectParams {
  restaurant: IRealmModelRestaurants
  event: IRealmModelEvents
  user: IRealmModelUsers
}

declare interface IGenerateNewReviewRealmObjectParams extends IGenerateNewBaseRealmObjectParams {
  forReviewItem: any
  objectSchemaName: string
  reviewRating: number
}

declare interface IGenerateNewRestaurantRealmObjectParams
  extends IGenerateNewBaseRealmObjectParams {
  getCurrentLocation: getCurrentLocationFunc
}

declare interface IGenerateNewEventRealmObjectParams extends IGenerateNewBaseRealmObjectParams {
  restaurant: IRealmModelRestaurants
}

declare interface IGenerateNewRealmPhotoObjectParams extends IGenerateNewBaseRealmObjectParams {
  modelType: string
  forObject: any
  getCurrentLocation: getCurrentLocationFunc
}
