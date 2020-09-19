/// <reference path="iParseBaseModels.d.ts" />
declare interface IParseModelRecipes extends IParseCommonModel {
  // Attributes
  displayName: string
  price: string
  // Relations
  restaurant: IParseModelRestaurants
}
