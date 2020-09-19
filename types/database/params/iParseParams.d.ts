declare interface IGetFirstOnlineParseInstanceParams {
  objectSchemaName: string
  localRealmModelObject?: RealmBaseModelWithNull | IWriteParseObjectModel | IUniqueModel
}

declare interface IGetFirstOnlineParseInstanceByTermsParams {
  query: IParseQuery
  terms: IDatabaseCommonQuery
}
declare interface IGetFirstOnlineParseInstanceByUniqueIdParams {
  objectSchemaName: string
  terms: IDatabaseCommonQuery
}

// declare interface I Params
// declare interface I Params
