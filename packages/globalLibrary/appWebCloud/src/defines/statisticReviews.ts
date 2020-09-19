import { ParseApp } from '../modules/parse-app'

import { BaseDefine } from './baseDefine'

class StatisticReviewsUtils {
  static generateStarsInReviewQueries(request) {
    const params: IStatisticReviewParams = request.params
    const { reviewType, forObjectUniqueId } = params

    const reviewsQuery = ParseApp.filterForReview({ reviewType, forObjectUniqueId })

    const reviewOneStarsQuery = ParseApp.filterForReview({ reviewType, forObjectUniqueId }).equalTo(
      'rate',
      1
    )
    const reviewTwoStarsQuery = ParseApp.filterForReview({ reviewType, forObjectUniqueId }).equalTo(
      'rate',
      2
    )
    const reviewThreeStarsQuery = ParseApp.filterForReview({
      reviewType,
      forObjectUniqueId
    }).equalTo('rate', 3)
    const reviewFourStarsQuery = ParseApp.filterForReview({
      reviewType,
      forObjectUniqueId
    }).equalTo('rate', 4)
    const reviewFiveStarsQuery = ParseApp.filterForReview({
      reviewType,
      forObjectUniqueId
    }).equalTo('rate', 5)

    const starsQueries: any = [
      reviewsQuery.find(),
      // each rates.
      reviewOneStarsQuery.count(),
      reviewTwoStarsQuery.count(),
      reviewThreeStarsQuery.count(),
      reviewFourStarsQuery.count(),
      reviewFiveStarsQuery.count()
    ]

    return starsQueries
  }

  // tslint:disable-next-line:variable-name
  static generateStarsInViewResults(_request, results) {
    const reviews = results[0]

    const returnData: IReviewStatisticResult = {
      total: reviews.length,
      oneStars: results[1],
      twoStars: results[2],
      threeStars: results[3],
      fourStars: results[4],
      fiveStars: results[5],
      reviewRating: ParseApp.reviewRateForObject(reviews)
    }

    return returnData
  }
}

export class StatisticReviews extends BaseDefine {
  async handler(request) {
    const nextResult = await Promise.all(
      StatisticReviewsUtils.generateStarsInReviewQueries(request)
    ).then((results) => {
      return StatisticReviewsUtils.generateStarsInViewResults(request, results)
    })
    return nextResult
  }
}
