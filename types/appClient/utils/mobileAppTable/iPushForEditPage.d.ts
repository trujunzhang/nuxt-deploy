declare interface IMobileAppTablePushForEditPageParams extends IMobileAppTableBaseParams {
  objectSchemaName: string
  forObject: EditRealmObjects
  editModelType: string
  onEditRealmModelSavedHook: IEditRealmModelSavedHookFunc
}
