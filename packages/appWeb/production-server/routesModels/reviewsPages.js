"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class ReviewsPages {
}
exports.ReviewsPages = ReviewsPages;
ReviewsPages.list = {
    name: 'reviewSingle',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.REVIEWS_LIST_FOR_MODELS_PAGE),
    // pattern: '/reviews/:modelType/:forObjectUniqueId/:forObjectDisplayName',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.REVIEWS_LIST_FOR_MODELS_PAGE)
    // page: 'reviewsList'
};
ReviewsPages.paginationList = {
    pattern: `${ReviewsPages.list.pattern}?page=:page`
};
ReviewsPages.edit = {
    name: 'reviewEdit',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.ORGANIZATION_EDIT_REVIEW),
    // pattern: '/edit/review/:reviewType/:forObjectUniqueId/:reviewUniqueId',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.ORGANIZATION_EDIT_REVIEW)
    // page: 'reviewEdit'
};
ReviewsPages.newForm = {
    name: 'reviewNew',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.ORGANIZATION_NEW_REVIEW),
    // pattern: '/new/review/:reviewType/:forObjecUniquetId',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.ORGANIZATION_NEW_REVIEW)
    // page: 'reviewNew'
};
