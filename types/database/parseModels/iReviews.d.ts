/// <reference path="iParseBaseModels.d.ts" />

declare interface IParseModelReviews extends IParseCommonModel {
  // Attributes
  rate: number
  body: string
  reviewType: string
  // Pointer
  restaurant: ParseModelRestaurantWithNull
  event: ParseModelEventWithNull
  recipe: ParseModelRecipeWithNull
}
