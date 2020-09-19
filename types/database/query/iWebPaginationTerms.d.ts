// ===========================================================
// ===========================================================
//  *** For web ***
// ===========================================================
// ===========================================================

declare interface IWebPaginationTermsGeneratePhotoTermParams {
  objectSchemaName: string
  forObjectUniqueId: string
  pageForm: string
  router: IWebAppRouterProps
  isUserOwnerPhotos?: boolean
  creatorId?: string
  withoutPhotoType?: boolean
  isPhotosBrowserPage?: boolean
}

declare interface IWebPaginationTermsGenerateTermsForReviewsListParams {
  router: IWebAppRouterProps
  forObject: any
  relatedObjectSchemaName: string
  reviewListPageType: string
  prefix: string
}

declare interface IWebPaginationTermsGeneratePhotoTermForRecipeParams {
  router: IWebAppRouterProps
  objectSchemaName: string
  forObjectUniqueId: string
  pageForm: string
}

declare interface IWebPaginationTermsGenerateTermsForRecipesListParams {
  forEvent?: IParseModelEvents
  forRestaurant?: IParseModelRestaurants
  orderedUser?: IParseModelUsers
  forCreator?: IParseModelUsers
}

// declare interface IWebPaginationTermsGeneratePhotoTermParams {}
// declare interface IWebPaginationTermsGeneratePhotoTermParams {}
// declare interface IWebPaginationTermsGeneratePhotoTermParams {}
