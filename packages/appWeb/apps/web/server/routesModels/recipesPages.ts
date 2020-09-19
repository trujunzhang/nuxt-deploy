import { routePage, ServerRoutePathHelper } from './utils'

export class RecipesPages {
  static home = {
    name: 'recipeSingle',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.RECIPE_SINGLE_PAGE),
    // pattern: '/orderedrecipe/:forObjectUniqueId/:oslug',
    page: ServerRoutePathHelper.getRoutePageName(routePage.RECIPE_SINGLE_PAGE)
    // page: 'recipeSingle'
  }

  // static edit = {
  //   name: 'recipeEdit',
  //   pattern: '/edit/orderedrecipe/:recipeUniqueId/:oslug',
  //   page: 'recipeEdit'
  // }

  static photosBrowser = {
    name: 'recipePhotos',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.RECIPE_ONE_PHOTO_PAGE),
    // pattern: '/recipe_photos/:forObjectUniqueId/:oslug',
    page: ServerRoutePathHelper.getRoutePageName(routePage.RECIPE_ONE_PHOTO_PAGE)
    // page: 'recipeOnePhotoPage'
  }
}
