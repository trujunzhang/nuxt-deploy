declare interface IWebParseDatabaseUtilsNewOnlineParseInstanceParams {
  onlineParseObject: IParseObject
  objectSchemaName: string
  parseModel: IParseBaseModel
}

declare interface IWebParseDatabaseUtilsUpdateOnlineParseInstanceParams {
  objectSchemaName: string
  onlineParseObject: IParseObject
  parseModel: IParseBaseModel
}

declare interface IClientParseDatabaseUtilsNewOnlineParseInstanceParams {
  onlineParseObject: IParseObject
  objectSchemaName: string
  localRealmModelObject: IRealmBaseModel
}

declare interface IClientParseDatabaseUtilsUpdateOnlineParseInstanceParams {
  objectSchemaName: string
  //   recordType: string
  onlineParseObject: IParseObject
  localRealmModelObject: IRealmBaseModel
}
