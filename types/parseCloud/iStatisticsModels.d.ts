// ===========================================================
// ===========================================================
//  *** Parse Cloud ***
// ===========================================================
// ===========================================================

declare interface IReviewStatisticResult {
  total: number
  oneStars: number
  twoStars: number
  threeStars: number
  fourStars: number
  fiveStars: number
  reviewRating: number
}

declare type ReviewStatisticResultWithNull = IReviewStatisticResult | null

declare interface IUserStatisticResult {
  recipes: number
  reviews: number
  photos: number
  events: number
  oneStars: number
  twoStars: number
  threeStars: number
  fourStars: number
  fiveStars: number
}

declare type UserStatisticResultWithNull = IUserStatisticResult | null

// ===========================================================
// ===========================================================
//  *** Users Page***
// ===========================================================
// ===========================================================

declare interface IUserStateRowItem {
  tag: string
  svg: string
  value: number
}

declare interface IUserRatingStarItem {
  tag: number
  width: string
  value: number
}
