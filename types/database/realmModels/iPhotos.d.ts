/// <reference path="iRealmBaseModels.d.ts" />

declare interface IRealmPhotoNormal extends IRealmCommonModel {
  originalUrl: string
  thumbnailUrl: string
  photoType: string
}

declare interface IRealmModelPhotos extends IRealmPhotoNormal {
  forObjectUniqueId: string
  // Relations
  restaurant?: RealmModelRestaurantsWithNull
  recipe?: RealmModelRecipesWithNull
  user?: RealmModelUsersWithNull
  // Location
  // latitude: number
  // longitude: number
}
