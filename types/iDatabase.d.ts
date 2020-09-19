declare interface IUniqueModel {
  uniqueId: string
}

declare interface IDatabaseCommonQuery {
  singleObjectId?: string
  singleUniqueId?: string
}

declare interface IDatabaseBaseModel extends IUniqueModel {
  createdAt: Date
  updatedAt: Date
  syncPostedAt: Date
  flag: string
  objectSchemaName?: string
}
