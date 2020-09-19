"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class OrganizationPages {
}
exports.OrganizationPages = OrganizationPages;
OrganizationPages.recipeEdit = {
    name: 'organizationRecipeEdit',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.ORGANIZATION_EDIT_RECIPE),
    // pattern: '/organization/recipe/edit/:modelType/:forObjectUniqueId/:recipeUniqueId',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.ORGANIZATION_EDIT_RECIPE) // 'editRecipeForm'
};
OrganizationPages.recipeNew = {
    name: 'organizationRecipeNew',
    pattern: utils_1.ServerRoutePathHelper.getRoutePattern(utils_1.routePage.ORGANIZATION_NEW_RECIPE),
    // pattern: '/organization/recipe/new/:modelType/:forObjectUniqueId',
    page: utils_1.ServerRoutePathHelper.getRoutePageName(utils_1.routePage.ORGANIZATION_NEW_RECIPE) // 'newRecipeForm'
};
