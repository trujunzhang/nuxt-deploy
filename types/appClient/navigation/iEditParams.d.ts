declare type IEditRealmModelSavedHookFunc = () => any

declare interface INavEditModelParams extends INavBaseParams {
  forObject: EditRealmObjects
  editModelType: string
  objectSchemaName: string
  onEditRealmModelSavedHook: IEditRealmModelSavedHookFunc
}

declare interface INavUserEditParams extends INavBaseParams {
  userId: string
}
