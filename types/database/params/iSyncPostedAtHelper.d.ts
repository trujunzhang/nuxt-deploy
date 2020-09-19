declare interface ISyncPostedAtHelperUpdateRealmSyncPostedAtParams {
  instance: IRealmBaseModel
  newDate: Date
}

declare interface ISyncPostedAtHelperUpdateParseSyncPostedAtParams {
  instance: IParseObject
  newDate: Date
}

declare interface ISyncPostedAtHelperNeedUpdateLocalRealmObjectParams {
  lastRealmObject: IRealmBaseModel
  recordedParseModel: SyncOnlineParseObjects
}

declare interface ISyncPostedAtHelperNeedUpdateOnlineParseObjectParams {
  objectSchemaName: string
  recordType: string
  onlineParseObject: IParseObject
  localRealmModelObject: IRealmBaseModel
}

// declare interface ISyncPostedAtHelper  Params {
