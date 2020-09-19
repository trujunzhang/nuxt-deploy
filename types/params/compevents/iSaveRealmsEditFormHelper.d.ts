declare type OnSaveRealmModelAfterHookFunc = (savedRealmModel: any) => any

declare interface ISaveRealmsEditFormHelperParams {
  editModel: IEditModelState
  objectSchemaName: string
  writeEditModelAction: WriteEditModelActionFunc
  refreshRealmObjectsPageAction: RefreshRealmObjectsPageActionFunc
  showAlertMessageAction: ShowAlertMessageActionFunc
  actions: IEditModelActions
  writeRealmParams: IRealmSaverWriteLocalRealmObjectParams
  onSaveRealmModelAfterHook: OnSaveRealmModelAfterHookFunc
}
