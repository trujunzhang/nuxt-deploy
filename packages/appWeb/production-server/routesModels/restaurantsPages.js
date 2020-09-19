"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class RestaurantsPages {
}
exports.RestaurantsPages = RestaurantsPages;
RestaurantsPages.home = {
    name: 'restaurantSingle',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.RESTAURANT_SINGLE_PAGE),
    // pattern: '/biz/:forObjectUniqueId/:rslug',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.RESTAURANT_SINGLE_PAGE)
    // page: 'restaurantSingle'
};
RestaurantsPages.edit = {
    name: 'restaurantEdit',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.RESTAURANT_EDIT_PAGE),
    // pattern: '/edit/biz/:forObjectUniqueId/:rslug',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.RESTAURANT_EDIT_PAGE)
    // page: 'editRestaurantForm'
};
RestaurantsPages.photosBrowser = {
    name: 'restaurantPhotos',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.RESTAURANT_ONE_PHOTO_PAGE),
    // pattern: '/biz_photos/:forObjectUniqueId/:rslug',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.RESTAURANT_ONE_PHOTO_PAGE)
    // page: 'restaurantOnePhotoPage'
};
RestaurantsPages.recipes = {
    name: 'restaurantRecipes',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.RESTAURANT_RECIPES_LIST_PAGE),
    // pattern: '/biz_recipes/:forObjectUniqueId/:rslug',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.RESTAURANT_RECIPES_LIST_PAGE)
    // page: 'restaurantRecipesPage'
};
RestaurantsPages.newForm = {
    name: 'restaurantNew',
    pattern: '/new/biz',
    page: 'newRestaurantForm'
};
RestaurantsPages.paginationRecipesList = {
    pattern: `${RestaurantsPages.recipes.pattern}?page=:page`
};
