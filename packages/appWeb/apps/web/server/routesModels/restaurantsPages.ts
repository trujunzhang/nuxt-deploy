import { routePage, ServerRoutePathHelper } from './utils'

export class RestaurantsPages {
  static home = {
    name: 'restaurantSingle',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.RESTAURANT_SINGLE_PAGE),
    // pattern: '/biz/:forObjectUniqueId/:rslug',
    page: ServerRoutePathHelper.getRoutePageName(routePage.RESTAURANT_SINGLE_PAGE)
    // page: 'restaurantSingle'
  }

  static edit = {
    name: 'restaurantEdit',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.RESTAURANT_EDIT_PAGE),
    // pattern: '/edit/biz/:forObjectUniqueId/:rslug',
    page: ServerRoutePathHelper.getRoutePageName(routePage.RESTAURANT_EDIT_PAGE)
    // page: 'editRestaurantForm'
  }

  static photosBrowser = {
    name: 'restaurantPhotos',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.RESTAURANT_ONE_PHOTO_PAGE),
    // pattern: '/biz_photos/:forObjectUniqueId/:rslug',
    page: ServerRoutePathHelper.getRoutePageName(routePage.RESTAURANT_ONE_PHOTO_PAGE)
    // page: 'restaurantOnePhotoPage'
  }

  static recipes = {
    name: 'restaurantRecipes',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.RESTAURANT_RECIPES_LIST_PAGE),
    // pattern: '/biz_recipes/:forObjectUniqueId/:rslug',
    page: ServerRoutePathHelper.getRoutePageName(routePage.RESTAURANT_RECIPES_LIST_PAGE)
    // page: 'restaurantRecipesPage'
  }

  static newForm = {
    name: 'restaurantNew',
    pattern: '/new/biz',
    page: 'newRestaurantForm'
  }

  static paginationRecipesList = {
    pattern: `${RestaurantsPages.recipes.pattern}?page=:page`
  }
}
