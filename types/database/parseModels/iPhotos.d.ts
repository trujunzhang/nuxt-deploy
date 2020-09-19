/// <reference path="iParseBaseModels.d.ts" />

declare interface IParsePhotosNormal extends IParseCommonModel {
  originalUrl: string
  thumbnailUrl: string
  photoType: string
}

declare interface IParseModelPhotos extends IParsePhotosNormal {
  restaurant?: IParseModelRestaurants | null
  event?: IParseModelEvents | null
  recipe?: IParseModelRecipes | null
  user?: IParseModelUsers | null
}
