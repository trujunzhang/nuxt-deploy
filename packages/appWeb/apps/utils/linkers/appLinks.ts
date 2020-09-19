import { UnderscoreUtils } from '@app/tools'
import { RouteParserUtils as Route } from '@app/tools'
import {
  EventsPages,
  OrganizationPages,
  PhotosPages,
  RecipesPages,
  RestaurantsPages,
  ReviewsPages,
  UsersPages
} from '@web/server/routesModels'

import { Router } from '@web/server/routes'
import { Users } from '@app/library' //  '@app/libs'
import * as Types from '@app/types'
import { AppConstants } from '@app/types'
import { SlugifyUtils } from '@app/tools'
import { ParseHrefFromRouterHelper } from '@appUtils/index'

export class AppLinks {
  // =====================================
  // Restaurants =========================
  // =====================================
  static getRestaurantLink(restaurant: IParseModelWithDisplayName) {
    const params: IRouterRestaurantHomePattern = {
      forObjectUniqueId: restaurant.uniqueId,
      rslug: SlugifyUtils.toSlugifyString(restaurant.displayName)
    }
    const route = new Route(RestaurantsPages.home.pattern)
    return route.reverse(params) || '/'
  }

  static getEditRestaurantLink(restaurant: IParseModelWithDisplayName): string {
    const params: IRouterRestaurantEditPattern = {
      forObjectUniqueId: restaurant.uniqueId,
      rslug: SlugifyUtils.toSlugifyString(restaurant.displayName)
    }
    const spec = RestaurantsPages.edit.pattern
    const route = new Route(spec)
    // debugger
    return route.reverse(params) || '/'
    // return '/biz'
  }

  // =====================================
  // Events ==============================
  // =====================================
  static getEventLink(event: IParseModelWithDisplayName) {
    const params: IRouterEventHomePattern = {
      forObjectUniqueId: event.uniqueId,
      eslug: SlugifyUtils.toSlugifyString(event.displayName)
    }
    const route = new Route(EventsPages.home.pattern)
    return route.reverse(params) || '/'
  }

  static getEditEventLink(event: IParseModelWithDisplayName) {
    const params: IRouterEventEditPattern = {
      forObjectUniqueId: event.uniqueId,
      eslug: SlugifyUtils.toSlugifyString(event.displayName)
    }
    const route = new Route(EventsPages.edit.pattern)
    return route.reverse(params)
  }

  static getNewEventLink(restaurant: IParseModelWithDisplayName) {
    const params: IRouterOrganizationPageNewEventPattern = {
      modelType: 'restaurant',
      forObjectId: restaurant.uniqueId
    }
    const route = new Route(EventsPages.eventNew.pattern)
    return route.reverse(params)
  }
  /**
   * path: 'ordereduser/(:uid)/(:uslug)/(:eventUniqueId)/(:restaurantUniqueId)',
   *
   * @param user
   * @param peopleInEvent
   * @returns {string}
   */
  static getOrderedUserLink(user: IParseModelUsers, peopleInEvent: IParseModelPeopleInEvent) {
    const params: IRouterOrderedUserPagePattern = {
      peopleInEventId: peopleInEvent.id
    }
    const route = new Route(EventsPages.orderedUser.pattern)
    return route.reverse(params)
  }

  // =====================================
  // Recipes =============================
  // =====================================
  /**
   *  path: 'orderedrecipe/(:recipeUniqueId)/(:recipeUniqueId)
   *
   * @param recipe
   * @returns {string}
   */
  static getOrderedRecipeLink(recipe: IParseModelWithDisplayName) {
    const params: IRouterOrderedRecipePagePattern = {
      forObjectUniqueId: recipe.uniqueId,
      oslug: SlugifyUtils.toSlugifyString(recipe.displayName)
    }
    const route = new Route(RecipesPages.home.pattern)
    return route.reverse(params) || '/'
  }

  static getNewRecipeLink(modelType: string, forObject: IParseCommonModel) {
    const params: IRouterOrganizationPageNewRecipePattern = {
      modelType,
      forObjectUniqueId: forObject.uniqueId
    }
    const route = new Route(OrganizationPages.recipeNew.pattern)
    return route.reverse(params)
  }

  // =====================================
  // Photos ==============================
  // =====================================
  static getAddPhotoLink(objectSchemaName: string, model) {
    const modelType: string = AppConstants.realmTypes[objectSchemaName]
    const params: IRouterAddPhotoPagePattern = {
      modelType,
      forObjectUniqueId: model.uniqueId
    }
    const route = new Route(PhotosPages.addPhoto.pattern)
    return route.reverse(params)
  }

  // =====================================
  // Users ===============================
  // =====================================
  static getEventsForUserLink(forObject: IParseCommonModel) {
    const params: IRouterOrganizationPageEventsForUserPattern = {
      forObjectUniqueId: forObject.uniqueId
    }
    const route = new Route(EventsPages.eventsForUser.pattern)
    return route.reverse(params)
  }

  static getEventsForUserSelectedUserLink(
    params: IRouterOrganizationPageEventsForUserSelectedUserPattern
  ) {
    const route = new Route(EventsPages.eventsForUserSelectedUserPage.pattern)
    return route.reverse(params)
  }

  // =====================================
  // Organization ========================
  // =====================================
  static getEditRecipeLink(modelType: string, recipe: IParseModelRecipes) {
    const params: IRouterOrganizationPageEditRecipePattern = {
      modelType: 'restaurant',
      forObjectUniqueId: recipe.restaurant.uniqueId,
      recipeUniqueId: recipe.uniqueId
    }
    const route = new Route(OrganizationPages.recipeEdit.pattern)
    return route.reverse(params)
  }

  static getRecipesListForRestaurantLink(forObject) {
    const path = AppConstants.SubDomainRecipesList[Types.model.PARSE_RESTAURANTS]

    const params: IRouterRecipesListForRestaurantPattern = {
      forObjectUniqueId: forObject.uniqueId,
      rslug: SlugifyUtils.toSlugifyString(forObject.displayName)
    }
    const route = new Route(RestaurantsPages.recipes.pattern)
    return route.reverse(params)
  }

  static getRecipesListForRestaurantNavBarLink(query, page) {
    const params: IRouterRecipesListForRestaurantPattern = {
      forObjectUniqueId: query.forObjectUniqueId,
      rslug: SlugifyUtils.toSlugifyString(query.rslug),
      page
    }
    const route = new Route(RestaurantsPages.paginationRecipesList.pattern)
    return route.reverse(params)
  }

  static getReviewsListLink({ objectSchemaName, forObject }) {
    const modelType: string = AppConstants.realmTypes[objectSchemaName]
    const params: IRouterReviewsListPagePattern = {
      modelType,
      forObjectUniqueId: forObject.uniqueId,
      forObjectDisplayName: SlugifyUtils.toSlugifyString(forObject.displayName)
    }
    const route = new Route(ReviewsPages.list.pattern)
    return route.reverse(params)
  }

  static getReviewsListNavBarLink(reviewForObject: IReviewForObject, page) {
    const { modelType } = reviewForObject
    const params: IRouterReviewsListPagePattern = {
      modelType,
      forObjectUniqueId: reviewForObject.uniqueId,
      forObjectDisplayName: SlugifyUtils.toSlugifyString(reviewForObject.displayName),
      page
    }
    const route = new Route(ReviewsPages.paginationList.pattern)
    return route.reverse(params)
  }

  static getEditLinkByModelType(modelType: string, forObject: IParseBaseModel) {
    const { objectSchemaName } = AppConstants.realmObjects[modelType]
    switch (objectSchemaName) {
      case Types.model.PARSE_RESTAURANTS: {
        return AppLinks.getEditRestaurantLink(forObject as IParseModelRestaurants)
      }
      case Types.model.PARSE_EVENTS: {
        return AppLinks.getEditEventLink(forObject as IParseModelEvents)
      }
      case Types.model.PARSE_RECIPES: {
        return AppLinks.getEditRecipeLink(modelType, forObject as IParseModelRecipes)
      }
      default: {
        throw new Error(`not found route for ${objectSchemaName}`)
      }
    }
  }

  // =====================================
  // Reviews =============================
  // =====================================
  static getNewReviewLink(reviewType: string, forObject) {
    const params: IRouterOrganizationPageNewReviewPattern = {
      modelType: reviewType,
      forObjectUniqueId: forObject.uniqueId
    }
    const route = new Route(ReviewsPages.newForm.pattern)
    return route.reverse(params)
  }

  static getEditReviewLink(review: IParseModelReviews) {
    const reviewType = review.reviewType
    const forObject = review[reviewType]

    const params: IRouterOrganizationPageGetDetailedReviewLinkPattern = {
      modelType: reviewType,
      forObjectUniqueId: forObject.uniqueId,
      reviewUniqueId: review.uniqueId
    }
    const route = new Route(ReviewsPages.edit.pattern)
    return route.reverse(params)
  }

  static getRouteForPhotosBrowser(objectSchemaName: string) {
    switch (objectSchemaName) {
      case Types.model.PARSE_RESTAURANTS: {
        return new Route(RestaurantsPages.photosBrowser.pattern)
      }
      case Types.model.PARSE_RECIPES: {
        return new Route(RecipesPages.photosBrowser.pattern)
      }
      case Types.model.PARSE_USERS: {
        return new Route(UsersPages.photosList.pattern)
      }
      default: {
        throw new Error(`not found route for ${objectSchemaName}`)
      }
    }
  }

  static getParamsForPhotosBrowser(objectSchemaName: string, forObject) {
    const slug = SlugifyUtils.toSlugifyString(forObject.displayName)
    switch (objectSchemaName) {
      case Types.model.PARSE_RESTAURANTS: {
        const params: IRouterBrowserPhotoForRestaurantPagePattern = {
          forObjectUniqueId: forObject.uniqueId,
          rslug: slug
        }
        return params
      }
      case Types.model.PARSE_RECIPES: {
        const params: IRouterBrowserPhotoForRecipePagePattern = {
          forObjectUniqueId: forObject.uniqueId,
          oslug: slug
        }
        return params
      }
      case Types.model.PARSE_USERS: {
        const params: IRouterBrowserPhotoForUserPagePattern = {
          uid: forObject.uniqueId,
          uslug: slug
        }
        return params
      }
      default: {
        throw new Error(`not found route for ${objectSchemaName}`)
      }
    }
  }

  static getPhotosBrowserLink(objectSchemaName: string, forObject) {
    const params = AppLinks.getParamsForPhotosBrowser(objectSchemaName, forObject)
    const route = AppLinks.getRouteForPhotosBrowser(objectSchemaName)
    return route.reverse(params)
  }

  static geDetailedModelLinkByObjectSchemaName(objectSchemaName: string, forObject: any): string {
    switch (objectSchemaName) {
      case Types.model.PARSE_RESTAURANTS:
        return AppLinks.getRestaurantLink(forObject) || '/'
      case Types.model.PARSE_RECIPES:
        return AppLinks.getOrderedRecipeLink(forObject) || '/'
      case Types.model.PARSE_USERS:
        return AppLinks.getLoggedUserMenuLink(forObject)
      case Types.model.PARSE_EVENTS:
        return AppLinks.getEventLink(forObject) || '/'
    }
    throw new Error('You need to set a proper model type!')
  }

  static getLoggedUserMenuLink(
    userProfile: IParseModelUsersLinker,
    menuType: string = Types.common.LOGGED_USER_MENU_ABOUT
  ): string {
    if (!userProfile.id) {
      return ''
    }
    const row = Users.profileLeftMenus[menuType]
    switch (menuType) {
      case Types.common.LOGGED_USER_MENU_ABOUT:
      case Types.common.LOGGED_USER_MENU_REVIEWS:
      case Types.common.LOGGED_USER_MENU_BROWSER_PHOTOS:
      case Types.common.LOGGED_USER_MENU_EVENTS:
      case Types.common.LOGGED_USER_MENU_RECIPES:
        return `/${row.path}/${userProfile.id}/${SlugifyUtils.toSlugifyString(
          userProfile.username
        )}`
      case Types.common.LOGGED_USER_EDIT_FORM:
        return '/profile'
      default:
        return ''
    }
  }

  static restoreRouterAsShadow({ router }) {
    const href = new ParseHrefFromRouterHelper(router as IWebAppRouterProps).getHref().end()
    const as = href
    Router.replaceRoute(href, as, {
      shallow: false
    })
  }

  static adjustRouterQuery(old, router) {
    let oldQuery = old.query
    const page = router.query.page
    if (!!page) {
      oldQuery = Object.assign({}, oldQuery, {
        page
      })
    }
    const sort_by = router.query.sort_by
    if (!!sort_by) {
      oldQuery = Object.assign({}, oldQuery, {
        sort_by
      })
    }
    return {
      pathname: old.pathname,
      query: oldQuery
    }
  }

  static getTotalPageForPagination({ listTask }: any, totalCount: number): number {
    const { limit } = listTask
    let totalPage = Math.floor(totalCount / limit)
    const moreOnePage = totalCount % limit
    if (moreOnePage !== 0) {
      totalPage += 1
    }
    return totalPage
  }

  static calculateTotalCount(listTask: any): number {
    const count = listTask.totalCount
    return count < 0 ? '' : count
  }

  // For User Profile left panel
  static isLeftMenuActive(row, { router }): boolean {
    const { asPath } = router
    console.log('isLeftMenu, asPath', asPath)
    return `${asPath}/`.indexOf(`${row.path}/`) !== -1
  }

  static getPageFormTypeForUserProfile({ router }): string {
    const { asPath } = router
    const split = asPath.split('/')
    const formType: string =
      UnderscoreUtils.findInArray({
        array: Object.keys(Users.profileLeftMenus),
        iterator: (type: string) => {
          return split[1] === Users.profileLeftMenus[type].path
        }
      }) || ''
    return formType
  }

  static getUsersLeftMenu({ router }, menuType: string | null = null): IUsersLeftMenu {
    const leftMenu = {
      pageForm: AppLinks.getPageFormTypeForUserProfile({ router })
    }
    return leftMenu
  }
}
