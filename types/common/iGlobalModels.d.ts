declare interface IListDict<T> {
  [Key: string]: T
}

declare interface ILinkModel {
  pathname: string
  query: any
}

declare interface IUserPageLinkItem {
  pathname: string
}

declare interface INotificationItem {
  link?: string
  permission: string
}

declare interface IOverlayModelPosition {
  left: number
  top: number
  width: number
  height: number
}

declare interface IOverlayModel {
  overLayType: string
  object: any
  position: IOverlayModelPosition
}

declare interface IOverlayPost {
  postId: string
  hashCode: string
}

declare interface IUserProfileLeftMenuItm {
  tag: string
  title: string
  menuTag: string
  listTitle: string
  emptyHint: string
  value: number
  link: IUserPageLinkItem
}

declare interface IVotingState {
  id: string
  usersUpvote: string[]
  usersDownvote: string[]
}

declare interface IListPhotosDict<T> {
  [Key: string]: T
}

declare interface ITopRightButtonItem {
  title: string
  svg: string
  linkUrl: string
}

declare interface IReviewSortItem {
  title: string
  queryTag: string
}

declare interface INewRecipeModel extends IUniqueModel, IParseObjectId {
  displayName: string
  price: number
}

declare interface IOwnPhotoForRecipeParams {
  recipeUniqueId: string
  photoId: string
}

declare interface ISlideShowObject {
  emptyList: boolean
  photoUrl: string
  placeholder: string
}

declare interface IImageSource {
  uri: string
}

declare type IImageSourceWithNull = IImageSource | null
