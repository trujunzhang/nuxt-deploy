import { routePage, ServerRoutePathHelper } from './utils'

export class UsersPages {
  static home = {
    name: 'userProfileHome',
    // pattern: '/user_details/:uid/:uslug',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.USER_PROFILE_SINGLE_PAGE),
    // page: 'userProfileSingle',
    page: ServerRoutePathHelper.getRoutePageName(routePage.USER_PROFILE_SINGLE_PAGE),
    menuTag: routePage.USER_PROFILE_SINGLE_PAGE,
    menuType: 'user_details'
  }
  static reviewsList = {
    name: 'userProfileReviewsList',
    // pattern: '/user_details_reviews_self/:uid/:uslug',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.USER_PROFILE_REVIEWS_LIST_PAGE),
    // page: 'userProfileSingle',
    page: ServerRoutePathHelper.getRoutePageName(routePage.USER_PROFILE_REVIEWS_LIST_PAGE),
    menuTag: routePage.USER_PROFILE_REVIEWS_LIST_PAGE,
    menuType: 'user_details_reviews_self'
  }
  static eventsList = {
    name: 'userProfileEventsList',
    // pattern: '/user_details_events/:uid/:uslug',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.USER_PROFILE_EVENTS_LIST_PAGE),
    // page: 'userProfileSingle',
    page: ServerRoutePathHelper.getRoutePageName(routePage.USER_PROFILE_EVENTS_LIST_PAGE),
    menuTag: routePage.USER_PROFILE_EVENTS_LIST_PAGE,
    menuType: 'user_details_events'
  }

  static recipesList = {
    name: 'userProfileRecipesList',
    // pattern: '/user_details_recipes/:uid/:uslug',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.USER_PROFILE_RECIPES_LIST_PAGE),
    // page: 'userProfileSingle',
    page: ServerRoutePathHelper.getRoutePageName(routePage.USER_PROFILE_RECIPES_LIST_PAGE),
    menuTag: routePage.USER_PROFILE_RECIPES_LIST_PAGE,
    menuType: 'user_details_recipes'
  }

  static photosList = {
    name: 'userProfilePhotosList',
    // pattern: '/user_local_photos/:uid/:uslug',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.USER_PROFILE_ONE_PHOTO_PAGE),
    // page: 'userProfileOnePhotoPage',
    page: ServerRoutePathHelper.getRoutePageName(routePage.USER_PROFILE_ONE_PHOTO_PAGE),
    menuTag: routePage.USER_PROFILE_ONE_PHOTO_PAGE,
    menuType: 'user_local_photos'
  }

  static editForm = {
    name: 'userProfile',
    // pattern: '/profile',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.USER_PROFILE_EDIT_PAGE),
    // page: 'userEditPage',
    page: ServerRoutePathHelper.getRoutePageName(routePage.USER_PROFILE_EDIT_PAGE),
    menuTag: routePage.USER_PROFILE_EDIT_PAGE,
    menuType: 'profile'
  }
}
