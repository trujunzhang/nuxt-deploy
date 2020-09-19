declare interface IPhotoBrowserUserItem {
  userId: string
  displayName: string
  imageUrl: string
  userProfileUrl: string
}

declare interface IPhotoBrowserItem {
  photoId: string
  linkObject: any
  imageUrl: string
}

declare interface IPhotoBrowserItemOverlay extends IParseCreatorModel {
  id: string
  title: string
  linkUrl: string
  // creator: IParseModelUsers
  user: IPhotoBrowserUserItem
}

declare interface IPhotoBrowserItemInfo extends IPhotoBrowserItem {
  overlay: IPhotoBrowserItemOverlay
}

declare interface IPhotoBrowserObject {
  photosWallModel: boolean
  total: number
  photos: IPhotoBrowserItemInfo[]
  photosWall: IPhotoBrowserItem[]
}

declare interface IPhotoScrollModelObject {
  haveLeftIcon: boolean
  haveRightIcon: boolean
  currentIndex: number
  showPhotosIndex: number[]
}

declare interface IPhotoNavBarModel {
  photoIndex: number
  photosLength: number
  hasPreIcon: boolean
  hasNextIcon: boolean
  photoSource: string
  photoAlt: string
  detailedLink: string
  selectedPhotoInfo: ISelectedPhotoInfo
}

declare type PhotoNavBarModelWithNull = IPhotoNavBarModel | null

declare interface ISelectedPhotoInfo extends IPhotoBrowserUserItem {
  photoId: string
  currentPhoto: IParseModelPhotos
  photoCreatedAtFormat: any
}
