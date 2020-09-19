declare interface IWriteTakenPhotosPayload {
  savedTakenPhotoInstance: IRealmModelPhotos
}

declare interface IWriteTakenPhotosAction {
  type: string
  payload: IWriteTakenPhotosPayload
}

declare interface IWriteRealmModel extends IUniqueModel {
  objectId: string
}

declare interface IWriteRealmEventsModel extends IWriteRealmModel {
  displayName: string
  want: string
  start: string
  end: string
  restaurant: IRealmModelRestaurants
  creator: IRealmModelUsers
}

declare type SavedRealmModels =
  | IRealmCommonModel
  | IRealmModelRestaurants
  | IRealmModelEvents
  | IRealmModelRecords
  | IRealmModelRecipes
  | IRealmModelReviews
  | IRealmModelPeopleInEvents
  | IRealmModelWriteRecords
// | IParseModelUsers // Only for pulled users from server.

declare interface IRealmModelWriteRecords {
  recordType: string
  realmObject: SavedRealmModels
}

// ===========================================================
// ===========================================================
//  *** Realm Objects Refresh ***
// ===========================================================
// ===========================================================
declare interface IRefreshPageObject {
  refreshId: Date
  pageId: string
  objectSchemaName: string
  editModelType: string
  refreshType: string
}

declare type RefreshRealmObjectsPageActionFunc = (object: IRefreshPageObject) => any

declare type RefreshPageObjectWithNull = IRefreshPageObject | null
