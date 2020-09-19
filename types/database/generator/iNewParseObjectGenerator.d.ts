// ===========================================================
// ===========================================================
//  *** For Web ***
// ===========================================================
// ===========================================================

declare interface INewParseObjectGeneratorGetRelativeModelParams {
  modelType: string
  objectSchemaName: string
  parseRelationInstance: any
}
declare interface INewParseObjectGeneratorGenerateRelativeObjectsParams {
  forParseInstance: any
  reviewType: any
}

declare interface INewParseObjectGeneratorGenerateNewRestaurantParseObjectParams {
  currentUser: ParseModelUsersWithNull
}
declare interface INewParseObjectGeneratorGenerateNewEventParseObjectParams {
  currentUser: ParseModelUsersWithNull
  restaurant: IParseModelRestaurants
}

declare interface INewParseObjectGeneratorGenerateNewRecipeParseObjectParams {
  currentUser: ParseModelUsersWithNull
  restaurant: IParseModelRestaurants
}

declare interface INewParseObjectGeneratorGenerateNewReviewParseObjectParams {
  currentUser: ParseModelUsersWithNull
  forItem: any
  objectSchemaName: string
  rate: number // default is '0'.
  body: string
}

declare interface INewParseObjectGeneratorGenerateNewPeopleInEventParseObjectParams {
  selectedUserId: string
  restaurant: IParseModelRestaurants
  event: IParseModelEvents
  newOrderedRecipeIdsAsString: string
  recipes: IParseModelRecipes[]
}

declare interface INewParseObjectGeneratorGenerateNewPhotoParseObjectParams {
  modelType: string
  forObject: any
  currentUser: ParseModelUsersWithNull
}
