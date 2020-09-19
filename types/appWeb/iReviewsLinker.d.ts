declare interface IAdjustUrlWithSortResult {
  url: string
  containedSort: boolean
}

declare interface IReviewObjectByType {
  id: string
  objectSchemaName: string
  displayName: string
  detailUrl: string
  breadcrumbs: any
  thirdRow: any
}

declare interface IReviewsLinkerGetUrlWithSortParams {
  router: IWebAppRouterProps

  linkObject: ILinkModel
  selectedId: string
}
declare interface IReviewsLinkerAdjustUrlWithSortParams {
  router: IWebAppRouterProps
  url: string
}
// declare interface IReviewsLinker Params
// declare interface IReviewsLinker Params
// declare interface IReviewsLinker Params
