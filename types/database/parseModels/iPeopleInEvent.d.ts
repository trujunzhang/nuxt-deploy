/// <reference path="iParseBaseModels.d.ts" />

declare interface IParseModelPeopleInEvent extends IParseCommonModel {
  // Pointer
  restaurant: IParseModelRestaurants
  event: IParseModelEvents
  user: IParseModelUsers
  recipes: IParseModelRecipes[]
  recipeUniqueIds: string
  // Detailed Event Page
  listPhotosDict?: IListPhotosDict<string>
}

declare interface IPeopleInEventListDictValue {
  peopleInEvent: IParseModelPeopleInEvent
  recipes: string[]
}
declare type IPeopleInEventListDict = IListDict<IPeopleInEventListDictValue>
