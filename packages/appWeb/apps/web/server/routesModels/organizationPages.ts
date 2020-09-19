import { routePage, ServerRoutePathHelper } from './utils'

export class OrganizationPages {
  static recipeEdit = {
    name: 'organizationRecipeEdit',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.ORGANIZATION_EDIT_RECIPE),
    // pattern: '/organization/recipe/edit/:modelType/:forObjectUniqueId/:recipeUniqueId',
    page: ServerRoutePathHelper.getRoutePageName(routePage.ORGANIZATION_EDIT_RECIPE) // 'editRecipeForm'
  }

  static recipeNew = {
    name: 'organizationRecipeNew',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.ORGANIZATION_NEW_RECIPE),
    // pattern: '/organization/recipe/new/:modelType/:forObjectUniqueId',
    page: ServerRoutePathHelper.getRoutePageName(routePage.ORGANIZATION_NEW_RECIPE) // 'newRecipeForm'
  }
}
