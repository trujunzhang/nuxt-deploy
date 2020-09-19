declare interface IPhotoBrowserBaseParams {
  router: IWebAppRouterProps
  photosOverlay: IPhotosOverlayState
  photoBrowserType: string
}

declare interface IPhotoBrowserShouldUpdatePhotoItemParams {
  photosOverlay: IPhotosOverlayState
  photo: IParseModelPhotos
  photoInfo: IPhotoBrowserItemInfo
}

declare interface IPhotoBrowserGetNavBarModelParams extends IPhotoBrowserBaseParams {
  newSelectedPhotoId?: string | null
}

declare interface IPhotoBrowserOnIconClickParams extends IPhotoBrowserBaseParams {
  pushNewPhotosAsSingleAction: any
}
