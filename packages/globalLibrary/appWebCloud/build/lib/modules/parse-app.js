"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("@app/tools");
class ParseApp {
    static getQueryInstance(modelType) {
        switch (modelType) {
            case 'restaurant':
                return new Parse.Query('Restaurant');
            case 'event':
                return new Parse.Query('Event');
            case 'recipe':
                return new Parse.Query('Recipe');
            case 'photo':
                return new Parse.Query('Photo');
            case 'user':
                return new Parse.User();
            default:
                throw new Error('No matched selected modelType!');
        }
    }
    static getInstanceWithoutData(modelType, forObjectId) {
        let relatedObject = null;
        switch (modelType) {
            case 'restaurant':
                relatedObject = Parse.Object.extend('Restaurant').createWithoutData(forObjectId);
                break;
            case 'event':
                relatedObject = Parse.Object.extend('Event').createWithoutData(forObjectId);
                break;
            case 'recipe':
                relatedObject = Parse.Object.extend('Recipe').createWithoutData(forObjectId);
                break;
            case 'user':
                relatedObject = Parse.Object.extend('User').createWithoutData(forObjectId);
                break;
        }
        return relatedObject;
    }
    static filterReviewForUser(params) {
        const { userId } = params;
        const query = new Parse.Query('Review');
        const relation = ParseApp.getInstanceWithoutData('user', userId);
        query.equalTo('creator', relation);
        return query;
    }
    static filterForReview(params) {
        const { reviewType, forObjectUniqueId } = params;
        const query = new Parse.Query('Review');
        const keyName = reviewType || '';
        // if (fieldName !== undefined && !!fieldName) {
        // keyName = fieldName
        // }
        // const relation = ParseApp.getInstanceWithoutData(reviewType || '', forObjectId || '')
        // query.equalTo(keyName, relation)
        const relationQuery = ParseApp.getQueryInstance(reviewType || '');
        relationQuery.equalTo('uniqueId', forObjectUniqueId);
        query.matchesQuery(keyName, relationQuery);
        return query;
    }
    static reviewRateForObject(array) {
        const sum = tools_1.UnderscoreUtils.reduceWithIterator({
            arrays: array,
            iterator: (memo, row) => {
                // tslint:disable-next-line:variable-name
                const _value = row.get('rate');
                return memo + _value;
            },
            memo: 0
        });
        const avg = sum / array.length;
        if (avg < 1 && avg > 0) {
            return 1;
        }
        // tslint:disable-next-line:no-bitwise
        return avg >> 0;
    }
}
exports.ParseApp = ParseApp;
