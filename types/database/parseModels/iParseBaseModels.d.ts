declare interface IParseObjectId {
  id: string
}

/**
 * Base Model for Parse.
 */
declare interface IParseBaseModel extends IParseObjectId, IDatabaseBaseModel {}

declare interface IParseModelRelative extends IUniqueModel, IParseObjectId {}

declare interface IParseModelWithDisplayName extends IUniqueModel, IParseObjectId {
  displayName: string
}

declare interface IParseCreatorModel {
  creator?: ParseModelUsersWithNull
}

declare interface IParseCommonModel extends IParseBaseModel, IParseCreatorModel {}

// Length(9)
declare type ParseModelNewEventWithNull = IParseModelNewEvent | null
declare type ParseModelRecipeWithNull = IParseModelRecipes | null
declare type ParseModelRecordWithNull = IParseModelRecord | null
declare type ParseModelEventWithNull = IParseModelEvents | null
declare type ParseModelReviewWithNull = IParseModelReviews | null
declare type ParseModelPeopleInEventWithNull = IParseModelPeopleInEvent | null
declare type ParseModelRestaurantWithNull = IParseModelRestaurants | null
declare type ParseModelPhotoWithNull = IParseModelPhotos | null
declare type ParseModelUsersWithNull = IParseModelUsers | null

declare type AppParseModels =
  | IParseModelNewEvent
  | IParseModelRecipes
  | IParseModelRecord
  | IParseModelEvents
  | IParseModelReviews
  | IParseModelPeopleInEvent
  | IParseModelRestaurants
  | IParseModelPhotos
  | IParseModelUsers
