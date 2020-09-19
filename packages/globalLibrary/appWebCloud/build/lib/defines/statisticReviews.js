"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse_app_1 = require("../modules/parse-app");
const baseDefine_1 = require("./baseDefine");
class StatisticReviewsUtils {
    static generateStarsInReviewQueries(request) {
        const params = request.params;
        const { reviewType, forObjectUniqueId } = params;
        const reviewsQuery = parse_app_1.ParseApp.filterForReview({ reviewType, forObjectUniqueId });
        const reviewOneStarsQuery = parse_app_1.ParseApp.filterForReview({ reviewType, forObjectUniqueId }).equalTo('rate', 1);
        const reviewTwoStarsQuery = parse_app_1.ParseApp.filterForReview({ reviewType, forObjectUniqueId }).equalTo('rate', 2);
        const reviewThreeStarsQuery = parse_app_1.ParseApp.filterForReview({
            reviewType,
            forObjectUniqueId
        }).equalTo('rate', 3);
        const reviewFourStarsQuery = parse_app_1.ParseApp.filterForReview({
            reviewType,
            forObjectUniqueId
        }).equalTo('rate', 4);
        const reviewFiveStarsQuery = parse_app_1.ParseApp.filterForReview({
            reviewType,
            forObjectUniqueId
        }).equalTo('rate', 5);
        const starsQueries = [
            reviewsQuery.find(),
            // each rates.
            reviewOneStarsQuery.count(),
            reviewTwoStarsQuery.count(),
            reviewThreeStarsQuery.count(),
            reviewFourStarsQuery.count(),
            reviewFiveStarsQuery.count()
        ];
        return starsQueries;
    }
    // tslint:disable-next-line:variable-name
    static generateStarsInViewResults(_request, results) {
        const reviews = results[0];
        const returnData = {
            total: reviews.length,
            oneStars: results[1],
            twoStars: results[2],
            threeStars: results[3],
            fourStars: results[4],
            fiveStars: results[5],
            reviewRating: parse_app_1.ParseApp.reviewRateForObject(reviews)
        };
        return returnData;
    }
}
class StatisticReviews extends baseDefine_1.BaseDefine {
    async handler(request) {
        const nextResult = await Promise.all(StatisticReviewsUtils.generateStarsInReviewQueries(request)).then((results) => {
            return StatisticReviewsUtils.generateStarsInViewResults(request, results);
        });
        return nextResult;
    }
}
exports.StatisticReviews = StatisticReviews;
