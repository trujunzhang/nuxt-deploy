declare interface IRealmObjectsListLoadListByTypeFuncParam
  extends IRealmObjectsListLoadListByTypeParams {
  objectsQuery: any
  parseSchemaName: string
  afterFetchHook?: any
  type: string
}

declare interface IRealmObjectsListLoadListByTypeParams extends IRealmObjectsListBaseParams {
  invokeListFunc: any
}
// declare interface IRealmObjectsList Params {}
// declare interface IRealmObjectsList Params {}
// declare interface IRealmObjectsList Params {}
