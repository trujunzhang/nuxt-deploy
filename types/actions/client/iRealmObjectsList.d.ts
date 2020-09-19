declare interface IRealmObjectsListBaseParams {
  listTask: IListTask
  terms: IRealmQueryBaseTerm
}

declare type LoadRealmObjectsListActionFunc = (params: IRealmObjectsListBaseParams) => any

declare type QueryUsersInEventActionFunc = (params: IRealmActionsQueryUsersInEventParams) => any
