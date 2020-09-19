declare type SyncOnlineParseObjects =
  | IParseModelEvents
  | IParseModelRestaurants
  | IParseModelRecipes
  | IParseModelReviews
  | IParseModelPeopleInEvent
  | IParseModelUsers

declare type SyncLocalRealmObjects =
  | IRealmModelRestaurants
  | IRealmModelEvents
  | IRealmModelRecipes
  | IRealmModelReviews
  | IRealmModelPeopleInEvents
  | IRealmModelUsers

// =====================================
// Sync (Push/Pull)====================
// =====================================

declare interface IPushLocalRecorderPrepareParams {
  objectSchemaName: string
  recordType: string
  localRealmObject: IRealmModelRecords
}

declare interface IUpdateOnlineRecorderOnlyUpdateOnlineRecordParams {
  objectSchemaName: string
  recordType: string
  onlineRecorder: IParseObject
  localRealmRecorderObject: IRealmModelRecords
}

declare interface ICreateOnlineRecorderCheckOnlineParseObjectParams {
  objectSchemaName: string
  recordType: string
  localRealmRecorderObject: IRealmModelRecords
}

declare interface ICreateOnlineRecorderShouldCreateOnineRecorderParams {
  objectSchemaName: string
  recordType: string
  localRealmRecorderObject: IRealmModelRecords
}

declare interface ICreateNewOnlineParseCreateParams {
  objectSchemaName: string
  recordType: string
  localRealmRecorderObject: IRealmModelRecords
}

declare interface ICreateNewOnlineParseFixUploadRealmObjectParams {
  objectSchemaName: string
  localRealmModelObject: IRealmBaseModel
}

declare interface IRealmDataUtilsUpdateLocalRealmInstanceParams {
  localRealmModelObject: IRealmBaseModel
  objectSchemaName: string
  recordedParseModel: SyncOnlineParseObjects
}
declare interface IRealmDataUtilsGetRealmDataFromLocalRealmObjectParams {
  objectSchemaName: string
  savedRealmModelObject: SavedRealmModels
}

declare interface IRealmDataUtilsGetRealmDataFromParseObjectParams {
  objectSchemaName: string
  recordedParseModel: SyncOnlineParseObjects
}
// declare interface IRealmDataUtils
