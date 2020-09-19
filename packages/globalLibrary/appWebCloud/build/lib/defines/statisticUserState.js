"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse_app_1 = require("../modules/parse-app");
const baseDefine_1 = require("./baseDefine");
class StatisticUserStateUtils {
    static generateUserStatisticQueries(request) {
        const userId = request.params.userId;
        const userParseObject = Parse.Object.extend('User').createWithoutData(userId);
        const firstQuery = new Parse.Query('Recipe').equalTo('creator', userParseObject);
        const secondQuery = new Parse.Query('Review').equalTo('creator', userParseObject);
        const thirdQuery = new Parse.Query('Photo').equalTo('creator', userParseObject);
        const fourQuery = new Parse.Query('PeopleInEvent').equalTo('creator', userParseObject);
        const reviewOneStarsQuery = parse_app_1.ParseApp.filterReviewForUser({
            userId
        }).equalTo('rate', 1);
        const reviewTwoStarsQuery = parse_app_1.ParseApp.filterReviewForUser({
            userId
        }).equalTo('rate', 2);
        const reviewThreeStarsQuery = parse_app_1.ParseApp.filterReviewForUser({
            userId
        }).equalTo('rate', 3);
        const reviewFourStarsQuery = parse_app_1.ParseApp.filterReviewForUser({
            userId
        }).equalTo('rate', 4);
        const reviewFiveStarsQuery = parse_app_1.ParseApp.filterReviewForUser({
            userId
        }).equalTo('rate', 5);
        const normalQueries = [
            firstQuery.count(),
            secondQuery.count(),
            thirdQuery.count(),
            fourQuery.count()
        ];
        const starsQueries = [
            reviewOneStarsQuery.count(),
            reviewTwoStarsQuery.count(),
            reviewThreeStarsQuery.count(),
            reviewFourStarsQuery.count(),
            reviewFiveStarsQuery.count()
        ];
        const promises = normalQueries.concat(starsQueries);
        return promises;
    }
    // tslint:disable-next-line:variable-name
    static generateUserStatisticResults(_request, results) {
        const returnData = {
            recipes: results[0],
            reviews: results[1],
            photos: results[2],
            events: results[3],
            oneStars: results[4],
            twoStars: results[5],
            threeStars: results[6],
            fourStars: results[7],
            fiveStars: results[8]
        };
        return returnData;
    }
}
class StatisticUserState extends baseDefine_1.BaseDefine {
    async handler(request) {
        return await Promise.all(StatisticUserStateUtils.generateUserStatisticQueries(request)).then((results) => {
            return StatisticUserStateUtils.generateUserStatisticResults(request, results);
        });
    }
}
exports.StatisticUserState = StatisticUserState;
