declare interface IWriteParseObjectModel extends IUniqueModel {
  parseId: string
}

declare interface IWriteParseObjectUpdateUserInEventsModel extends IWriteParseObjectModel {
  objectId: string
  restaurant: IParseModelRestaurants
  event: IParseModelEvents
  newOrderedRecipeIds: string[]
  user: IParseObjectId
}

declare type WriteParseObjectUpdateUserInEventsModelWithNull = IWriteParseObjectUpdateUserInEventsModel | null

declare type IWriteWebParseObjectModel =
  | IParseBaseModel
  | IParseModelEvents
  | IParseModelRestaurants
  | IParseModelReviews
  | IParseModelPhotos
  | IParseModelReviews
  | IParseModelPeopleInEvent
  | IParseModelRecipes
  | IParseModelUsers

declare interface IWriteWebParseObjectParams {
  editModelType: string
  objectSchemaName: string
  model: IWriteWebParseObjectModel
}

declare interface IWritePhotoWithFilesParams {
  newPhotoInstance: IParseModelPhotos
  localUploadFile: ILocalUploadFile
}
