/**
 * For function _loadListByType.
 *
 */
declare interface IWebParseObjectsListPromiseListByTypeParams
  extends IWebParseObjectsListBaseParams {
  objectsQuery: IParseQuery
  afterFetchHookType: string | null
  parseSchemaName: string
  type?: string
}

declare interface IWebParseObjectsListLoadListByTypeParams
  extends IWebParseObjectsListPromiseListByTypeParams {
  invokeListFunc?: any
}
