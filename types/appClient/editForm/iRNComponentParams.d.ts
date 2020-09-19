// ===========================================================
// ===========================================================
//  *** Navigation params for editing models ***
// ===========================================================
// ===========================================================

declare interface INavEditForReViewProps {
  forObject: IRealmModelReviews
  pageForm: string
}

declare interface INavEditForEventProps {
  forObject: IRealmModelEvents
  pageForm: string
}

declare interface INavEditForRecipeProps {
  forObject: IRealmModelRecipes
  pageForm: string
}

declare interface INavEditForRestaurantProps {
  forObject: IRealmModelRestaurants
  pageForm: string
}

declare type NavEditForModelProps =
  | INavEditForReViewProps
  | INavEditForEventProps
  | INavEditForRecipeProps
  | INavEditForRestaurantProps
