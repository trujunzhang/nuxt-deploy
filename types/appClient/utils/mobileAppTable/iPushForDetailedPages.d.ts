declare interface IPushForDetailedRestaurantPageParams {
  restaurant: IRealmModelRestaurants
}

declare interface IPushForDetailedEventPageParams {
  event: IRealmModelEvents
}

// declare interface IPushForDetailed PageParams {
// declare interface IPushForDetailed PageParams {
// declare interface IPushForDetailed PageParams {

declare interface IPushForDetailedPagesParams {
  restaurant?: IRealmModelRestaurants
  event?: IRealmModelEvents
  orderedUser?: IRealmModelUsers
  recipe?: IRealmModelRecipes
  review?: IRealmModelReviews
  singleUser?: IRealmModelUsers
}
