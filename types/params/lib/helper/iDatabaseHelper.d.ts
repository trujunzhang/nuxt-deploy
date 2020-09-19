declare interface IDatabaseHelperSetCommonOnlineParseObjectParams {
  onlineParseObject: IParseObject
  savedModel: IDatabaseBaseModel
}

declare interface IDatabaseHelperSetCreatorForMobileParams {
  onlineParseObject: IParseObject
  localRealmModelObject: IRealmCommonModel
  fieldName?: string
}

declare interface IDatabaseHelperSetRelationFieldForWebParams {
  objectSchemaName: string
  onlineParseObject: IParseObject
  localRealmModelObject?: RealmBaseModelWithNull | IWriteParseObjectModel | IUniqueModel
}

declare interface IDatabaseHelperSetCreatorForWebParams {
  onlineParseObject: IParseObject
  parseModel: IParseCommonModel
  fieldName?: string
}

// declare interface IDatabaseHelper Params {}
// declare interface IDatabaseHelper Params {}
// declare interface IDatabaseHelper Params {}
