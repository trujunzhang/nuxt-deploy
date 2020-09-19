"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class UsersPages {
}
exports.UsersPages = UsersPages;
UsersPages.home = {
    name: 'userProfileHome',
    // pattern: '/user_details/:uid/:uslug',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.USER_PROFILE_SINGLE_PAGE),
    // page: 'userProfileSingle',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.USER_PROFILE_SINGLE_PAGE),
    menuTag: utils_1.routePage.USER_PROFILE_SINGLE_PAGE,
    menuType: 'user_details'
};
UsersPages.reviewsList = {
    name: 'userProfileReviewsList',
    // pattern: '/user_details_reviews_self/:uid/:uslug',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.USER_PROFILE_REVIEWS_LIST_PAGE),
    // page: 'userProfileSingle',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.USER_PROFILE_REVIEWS_LIST_PAGE),
    menuTag: utils_1.routePage.USER_PROFILE_REVIEWS_LIST_PAGE,
    menuType: 'user_details_reviews_self'
};
UsersPages.eventsList = {
    name: 'userProfileEventsList',
    // pattern: '/user_details_events/:uid/:uslug',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.USER_PROFILE_EVENTS_LIST_PAGE),
    // page: 'userProfileSingle',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.USER_PROFILE_EVENTS_LIST_PAGE),
    menuTag: utils_1.routePage.USER_PROFILE_EVENTS_LIST_PAGE,
    menuType: 'user_details_events'
};
UsersPages.recipesList = {
    name: 'userProfileRecipesList',
    // pattern: '/user_details_recipes/:uid/:uslug',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.USER_PROFILE_RECIPES_LIST_PAGE),
    // page: 'userProfileSingle',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.USER_PROFILE_RECIPES_LIST_PAGE),
    menuTag: utils_1.routePage.USER_PROFILE_RECIPES_LIST_PAGE,
    menuType: 'user_details_recipes'
};
UsersPages.photosList = {
    name: 'userProfilePhotosList',
    // pattern: '/user_local_photos/:uid/:uslug',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.USER_PROFILE_ONE_PHOTO_PAGE),
    // page: 'userProfileOnePhotoPage',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.USER_PROFILE_ONE_PHOTO_PAGE),
    menuTag: utils_1.routePage.USER_PROFILE_ONE_PHOTO_PAGE,
    menuType: 'user_local_photos'
};
UsersPages.editForm = {
    name: 'userProfile',
    // pattern: '/profile',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.USER_PROFILE_EDIT_PAGE),
    // page: 'userEditPage',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.USER_PROFILE_EDIT_PAGE),
    menuTag: utils_1.routePage.USER_PROFILE_EDIT_PAGE,
    menuType: 'profile'
};
