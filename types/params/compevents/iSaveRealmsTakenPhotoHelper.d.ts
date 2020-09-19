declare type OnSaveRealmPhotolAfterHookFunc = () => any

declare interface ISaveRealmsTakenPhotoHelperParams {
  showAlertMessageAction: ShowAlertMessageActionFunc
  saveTakenPhotoAction: SaveTakenPhotoActionFunc
  newPhotoInstance: IRealmModelPhotos
  image: ICameraKitImage
  iOSVersion: boolean
  needUpdateListPhotoId: boolean
  onSaveRealmPhotolAfterHook: OnSaveRealmPhotolAfterHookFunc
}
