declare interface IWebParseObjectsListBaseParams {
  listTask: IListTask
  terms: IParseQueryBaseTerm
}

declare type LoadParseObjectsListActionFunc = (params: IWebParseObjectsListBaseParams) => any

declare interface IWebParseObjectsListLoadUsersWithoutAnonymousListParam
  extends IWebParseObjectsListBaseParams {}

/**
 * For function _loadRecipeListForEvent.
 *
 */
declare interface IWebParseObjectsListPromiseRecipeForEventParams
  extends IWebParseObjectsListBaseParams {
  objectsQuery: IParseQuery
  afterFetchHookType: any
  parseSchemaName: string
}
