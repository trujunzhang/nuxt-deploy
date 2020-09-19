declare interface IRealmQueryListIdTerm {
  listId?: string
  objectSchemaName?: string
}

declare interface IRealmQueryPaginationTerm {
  pageIndex?: number
  limit?: number
}

declare interface IRealmQuerySortTerm {
  sortFieldName?: string
  isOrderASC?: boolean
}
declare interface IRealmQuerySearchTerm {
  search?: string
}

declare interface IRealmQueryBaseTerm
  extends IRealmQueryListIdTerm,
    IRealmQueryPaginationTerm,
    IRealmQuerySortTerm,
    IRealmQuerySearchTerm {}

declare interface IRealmQueryRestaurantTerm extends IRealmQueryBaseTerm, IRealmQuerySearchTerm {
  position?: any
}

declare interface IRealmQueryUserTerm
  extends IRealmQuerySearchTerm,
    IRealmQueryPaginationTerm,
    IRealmQuerySortTerm {
  choicenUserObjectIds?: string[]
  // containedUserUniqueIds?: string[]
  containedUserObjectIds?: string[]
}

declare interface IRealmQueryRecipeTerm extends IRealmQueryBaseTerm, IRealmQuerySortTerm {
  choicenRecipesUniqueIds?: string[]
  containedRecipesUniqueIds?: string[]
  creatorUserObjectId?: string
  restaurantUniqueId?: string
  eventUniqueId?: string
  userId?: string
}

declare interface IRealmQueryReviewTerm extends IRealmQueryBaseTerm {
  reviewType?: string
  forObjectUniqueId?: string
  limit?: number
  creatorUserObjectId: string
}

declare interface IRealmQueryPhotoTerm extends IRealmQueryBaseTerm, IRealmQuerySearchTerm {
  forObjectUniqueId?: string
  photoType?: string
  creatorUserObjectId?: string
}

declare interface IRealmQuerySingleObjectTerm extends IRealmQueryBaseTerm {
  singleObjectId?: string
  singleUniqueId?: string
}

declare interface IRealmQueryRecordTerm extends IRealmQueryBaseTerm {
  restaurant?: any
  event?: any
  recipe?: any
  photo?: any
  review?: any
  peopleInEvent?: any
}

declare interface IRealmQueryEventTerm extends IRealmQueryBaseTerm {
  restaurantUniqueId?: string
  containedRecipesUniqueIds?: string[]
}

declare interface IRealmQueryPeopleInEventTerm extends IRealmQueryBaseTerm {
  restaurantUniqueId?: string
  eventUniqueId?: string
  userId?: string
}
