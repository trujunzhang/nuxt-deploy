declare interface IParseQueryListIdTerm {
  listId?: string
  objectSchemaName?: string
}

declare interface IParseQueryPaginationTerm {
  allItems?: boolean
  pageIndex?: number
  limit?: number
}

declare interface IParseQuerySortTerm {
  sort_by?: string
  sortFieldName?: string
  isOrderASC?: boolean
}

declare interface IParseQueryBaseTerm
  extends IParseQueryListIdTerm,
    IParseQueryPaginationTerm,
    IParseQuerySortTerm {}
declare interface IParseQuerySearchTerm {
  search?: string
}

declare interface IParseQueryEventsTerm extends IParseQueryBaseTerm {
  restaurantId?: string
  userId?: string
}

declare interface IParseQueryReviewsTerm extends IParseQueryBaseTerm {
  reviewListPageType: string
  relatedObjectSchemaName: string
  forObject: any
}

declare interface IParseQueryRecipesTerm extends IParseQueryBaseTerm {
  restaurantId?: string | null
  userId?: string | null
  eventId?: string | null
  orderedUserId?: string | null
  creatorId?: string | null
  recipeIds?: string[]
  recipeUniquIds?: string[]
}

declare interface IParseQueryRestaurantTerm
  extends IParseQuerySearchTerm,
    IParseQueryPaginationTerm {
  position?: any
}

declare interface IParseQueryPhotoTerm
  extends IParseQueryListIdTerm,
    IParseQuerySearchTerm,
    IParseQueryPaginationTerm,
    IParseQuerySortTerm {
  objectSchemaName: string
  photoParamsType: string
  forObjectUniqueId: string
  // TODO: DJZHANG(25/12/2018)
  creatorId?: string
  // creatorId: string | null
  withoutPhotoType: boolean
}

// declare interface IPhotosTerms extends IParseQueryBaseTerm {
//   photoParamsType: string
//   withoutPhotoType: boolean
//   listId: string
//   forObjectId: string
//   creatorId?: string
// }

declare interface IParseReviewsListTermParams {
  router: IWebAppRouterProps
  forObject: any
  reviewType?: string
  reviewListPageType?: string
}

// ===========================================================
// ===========================================================
//  *** Function ***
// ===========================================================
// ===========================================================

declare interface IParseQueryEqualToRelationObjectParams {
  query: IParseQuery
  objectSchemaName: string
  terms: IDatabaseCommonQuery
  fieldName?: string | null
}

declare interface IParseQueryContainInRelationObjectParams {
  query: IParseQuery
  objectSchemaName: string
  parseId: string
  fieldName: string
}
