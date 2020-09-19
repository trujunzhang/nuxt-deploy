/// <reference path="iParseBaseModels.d.ts" />

declare interface IParseModelRecord extends IParseCommonModel {
  // Attributes
  recordType: string
  removedObjectUniqueId: string
  // Pointer
  user: ParseModelUsersWithNull
  restaurant: ParseModelRestaurantWithNull
  event: ParseModelEventWithNull
  peopleInEvent: ParseModelPeopleInEventWithNull
  recipe: ParseModelRecipeWithNull
  photo: ParseModelPhotoWithNull
  review: ParseModelReviewWithNull
}
