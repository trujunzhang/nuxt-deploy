declare interface ITableSubmitArticlesPayload {
  tag: string
  model: any
  editModelType: string
}

declare interface IWriteModelDonePayload {
  objectSchemaName: string
  tableSelectAction: string
  changedParseModels: any
}

declare interface IGoogleReverseModelPayload {
  parseId: string
  model: IGoogleReverseModel | string
}

declare interface ICloudObjectResult {
  methodName: string
  parameters: object
}

declare interface IResetPasswordObject {
  token: string
  newPassword: string
}

declare interface IDeleteParseObjectModel {
  parseId: string
}

declare interface IDeleteUserModel extends IDeleteParseObjectModel {
  token: string
  userName: string
}

declare interface IDeleteUserObject {
  objectSchemaName: string
  model: IDeleteParseObjectModel | IDeleteUserModel
}

// ===========================================================
// ===========================================================
//  *** Realm Objects Refresh Action ***
// ===========================================================
// ===========================================================
declare interface IRefreshPageObjectPayload {
  parseId: string
  model: IGoogleReverseModel | string
}

declare interface IWriteOnlineParseObjectsPayload {
  parseId: string
  originModel: AppParseModels
}
