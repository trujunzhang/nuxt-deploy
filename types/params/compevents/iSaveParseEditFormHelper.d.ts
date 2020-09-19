declare interface ISaveParseEditFormHelperParams {
  objectSchemaName: string
  actions: IEditModelActions
  showAlertMessageAction: ShowAlertMessageActionFunc
  writeParseParams: IWriteWebParseObjectParams
  writeOnlineParseObjectAction: WriteOnlineParseObjectActionFunc
  onSaveParseModelHook: any
}
