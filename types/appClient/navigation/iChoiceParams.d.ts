declare type OnChoiceUsersAfterHookFunc = (userObjectIds: string[]) => any

declare type OnTermRowPressAfterHook = OnChoiceUsersAfterHookFunc

declare interface INavChoiceUsersParams {
  choicenUserObjectIds: string[]
  onChoiceUsersHook: OnChoiceUsersAfterHookFunc
}

declare interface INavChoiceRecipesParams {
  choicenRecipesUniqueIds: string[]
  forRestaurant: IRealmModelRestaurants
  onChoiceRecipesHook: (ids: string[]) => any
}

declare interface INavRecipesListInRestaurantParams {
  forRestaurant: IRealmModelRestaurants
}

declare interface INavListInUserParams {
  forUser: IRealmModelUsers
}

declare interface INavSeeAllPhotosParams extends INavBaseParams {
  forItem: any
  sectionType: string
}
