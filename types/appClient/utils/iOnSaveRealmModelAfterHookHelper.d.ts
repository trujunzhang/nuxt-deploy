declare interface IOnSaveRealmModelAfterHookHelperSaveRealmModelAfterHookParams {
  navigation: ISingletonNavigation
  // savedRealmModelUniqueId: string
  objectSchemaName: string
  savedRealmModel: any
  onEditRealmModelSavedHook: IEditRealmModelSavedHookFunc
}
