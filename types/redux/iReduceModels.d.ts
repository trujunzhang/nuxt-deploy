declare interface IAppState {
  isMobileApp?: boolean
  isMobileSideOpen?: boolean
  GOOGLE_ANALYTICS_ID?: string | any
  FACEBOOK_PIXEL_ID?: string | any
  HOTJAR_ID?: string | any
  HOTJAR_VERSION?: string | any
  showMobileSearchBar?: boolean
}

declare interface IMobileWidgets {
  showTopNewsletter: string
  showTopHero: string
  showWelcome: boolean
}

declare interface IDetailedModelsState {
  currentModel?: any
  updatedVotingStatus?: any
  statistic?: any
  overlayModel?: IOverlayModel | null
  trendingList?: any
}

declare interface IListContainerState {
  currentModel?: any
  updatedVotingStatus?: any
  statistic?: any
  overlayModel?: any
  trendingList?: any
}

declare interface IPostOverlayState {
  overlayPosts: object
  currentPost: IOverlayPost | null
}

// =====================================
// Photos ==============================
// =====================================

declare interface IPhotosOverlayCurrentPhoto {
  photoId: string
}

declare interface IPhotosOverlayListTask {
  listPhotosDict: IListPhotosDict<string>
}

declare interface IPhotosOverlayState {
  ownedUserPhoto: ParseModelPhotoWithNull
  overlayPhotos: any
  currentPhoto: IPhotosOverlayCurrentPhoto | null
  photosForPage: IListPhotosDict<IParseModelPhotos>
  forObject: any
}

declare interface IListContainerTasks {
  updatedPhotoModel: IParseModelPhotos | null
  usersPhotosDict: IListPhotosDict<string>
}

declare interface IFetchedParseModel {
  parseId: string
  model: IGoogleReverseModel
}

declare interface IDetailedModelsOverlayState {
  currentModel?: IFetchedParseModel | null
  statistic: any
  googleAddressReverse: IFetchedParseModel | null
  overlayModel?: IOverlayModel | null
}

// =====================================
// Realm Model  ====================
// =====================================

declare interface IRealmModelState {
  isPhotoBrowser: boolean
  nearRestaurants: IRealmModelRestaurants[]
  searchRestaurants: IRealmModelRestaurants[]
  searchUsers: IRealmModelUsers[]
  searchRecipes: IRealmModelRecipes[]
  events: IRealmModelEvents[]
  peopleInEvents: IRealmModelPeopleInEvents[]
  restaurantPhoto: any
  photosBrowser: any
  photosForObject: any
  refreshPageObject: RefreshPageObjectWithNull
}
