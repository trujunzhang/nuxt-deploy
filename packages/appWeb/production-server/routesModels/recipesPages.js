"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class RecipesPages {
}
exports.RecipesPages = RecipesPages;
RecipesPages.home = {
    name: 'recipeSingle',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.RECIPE_SINGLE_PAGE),
    // pattern: '/orderedrecipe/:forObjectUniqueId/:oslug',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.RECIPE_SINGLE_PAGE)
    // page: 'recipeSingle'
};
// static edit = {
//   name: 'recipeEdit',
//   pattern: '/edit/orderedrecipe/:recipeUniqueId/:oslug',
//   page: 'recipeEdit'
// }
RecipesPages.photosBrowser = {
    name: 'recipePhotos',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.RECIPE_ONE_PHOTO_PAGE),
    // pattern: '/recipe_photos/:forObjectUniqueId/:oslug',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.RECIPE_ONE_PHOTO_PAGE)
    // page: 'recipeOnePhotoPage'
};
