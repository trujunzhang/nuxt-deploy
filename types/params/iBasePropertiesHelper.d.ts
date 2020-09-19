declare interface IBasePropertiesHelperGetRealmCommonPropertiesParams {
  objectSchemaName: string
  savedRealmModelObject: IRealmCommonModel
}

declare interface IBasePropertiesHelperGetRealmCommonPropertiesFromParseCommonParams {
  objectSchemaName: string
  recordedParseModel: IParseCommonModel
}

declare interface IBasePropertiesHelperUpdateLocalRealmBasePropertiesParams {
  localRealmModelObject: IRealmBaseModel
  recordedParseModel: IParseBaseModel
}

declare interface IBasePropertiesHelperUpdateLocalRealmCommonPropertiesParams {
  localRealmModelObject: IRealmCommonModel
  recordedParseModel: IParseCommonModel
}

// declare interface IBasePropertiesHelper  Params {
