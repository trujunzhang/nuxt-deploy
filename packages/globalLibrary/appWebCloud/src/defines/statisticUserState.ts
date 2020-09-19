import { ParseApp } from '../modules/parse-app'

import { BaseDefine } from './baseDefine'

class StatisticUserStateUtils {
  static generateUserStatisticQueries(request) {
    const userId = request.params.userId

    const userParseObject = Parse.Object.extend('User').createWithoutData(userId)

    const firstQuery = new Parse.Query('Recipe').equalTo('creator', userParseObject)
    const secondQuery = new Parse.Query('Review').equalTo('creator', userParseObject)
    const thirdQuery = new Parse.Query('Photo').equalTo('creator', userParseObject)
    const fourQuery = new Parse.Query('PeopleInEvent').equalTo('creator', userParseObject)

    const reviewOneStarsQuery = ParseApp.filterReviewForUser({
      userId
    }).equalTo('rate', 1)
    const reviewTwoStarsQuery = ParseApp.filterReviewForUser({
      userId
    }).equalTo('rate', 2)
    const reviewThreeStarsQuery = ParseApp.filterReviewForUser({
      userId
    }).equalTo('rate', 3)
    const reviewFourStarsQuery = ParseApp.filterReviewForUser({
      userId
    }).equalTo('rate', 4)
    const reviewFiveStarsQuery = ParseApp.filterReviewForUser({
      userId
    }).equalTo('rate', 5)

    const normalQueries = [
      firstQuery.count(),
      secondQuery.count(),
      thirdQuery.count(),
      fourQuery.count()
    ]
    const starsQueries = [
      reviewOneStarsQuery.count(),
      reviewTwoStarsQuery.count(),
      reviewThreeStarsQuery.count(),
      reviewFourStarsQuery.count(),
      reviewFiveStarsQuery.count()
    ]

    const promises = normalQueries.concat(starsQueries)

    return promises
  }

  // tslint:disable-next-line:variable-name
  static generateUserStatisticResults(_request, results) {
    const returnData: IUserStatisticResult = {
      recipes: results[0],
      reviews: results[1],
      photos: results[2],
      events: results[3],
      oneStars: results[4],
      twoStars: results[5],
      threeStars: results[6],
      fourStars: results[7],
      fiveStars: results[8]
    }

    return returnData
  }
}

export class StatisticUserState extends BaseDefine {
  async handler(request) {
    return await Promise.all(StatisticUserStateUtils.generateUserStatisticQueries(request)).then(
      (results) => {
        return StatisticUserStateUtils.generateUserStatisticResults(request, results)
      }
    )
  }
}
