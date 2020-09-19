declare interface INavDetailedModels {
  restaurant?: IRealmModelRestaurants
  event?: IRealmModelEvents
  orderedUser?: IRealmModelUsers
  recipe?: IRealmModelRecipes
  review?: IRealmModelReviews
}

declare interface INavDetailedModelParams extends INavBaseParams, INavDetailedModels {}
