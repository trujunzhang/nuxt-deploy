declare interface IMobileRefreshHelperBaseParams {
  realmModels: IRealmModelState
}

declare interface IMobileRefreshHelperGetRefreshTypeParams extends IMobileRefreshHelperBaseParams {
  lastRefreshId: Date
  pageObjectSchemaName: string
}

declare interface IMobileRefreshHelperShouldRefreshReviewsListParams
  extends IMobileRefreshHelperBaseParams {
  lastRefreshId: string
}

// declare interface IMobileRefreshHelper  Params extends IMobileRefreshHelperBaseParams {}
// declare interface IMobileRefreshHelper  Params extends IMobileRefreshHelperBaseParams {}
// declare interface IMobileRefreshHelper  Params extends IMobileRefreshHelperBaseParams {}
// declare interface IMobileRefreshHelper  Params
// declare interface IMobileRefreshHelper  Params
// declare interface IMobileRefreshHelper  Params
