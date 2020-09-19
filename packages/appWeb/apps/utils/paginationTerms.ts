import * as Types from '@app/types'
import { StatusConstants } from '@app/types'
import { Photos, Reviews } from '@app/library' //  '@app/libs'

export class PaginationTerms {
  /**
   * For Review List.
   *
   * @param param
   */
  private static getReviewSortType({ router }): string {
    if (!!router && !!router.query && router.query.sort_by) {
      return router.query.sort_by
    }
    return StatusConstants.getDefaultReviewSort()
  }

  /**
   * Get the selected dropbox index for sorted review list.
   *
   * @param param
   */
  static getCurrentSelectedDropMenuIndex({ router }) {
    const sort = PaginationTerms.getReviewSortType({ router })
    const tags = StatusConstants.SORT_TAGS
    const index = Object.values(tags).indexOf(sort)
    if (index !== -1) {
      return index
    }
    return 0
  }

  /**
   *  Get Router's page index.
   *
   * @param param
   */
  static getCurrentQueryPageIndex({ router }): number {
    if (!!router && !!router.query && router.query.page) {
      const paged = router.query.page
      if (typeof paged === 'string') {
        return Number(paged)
      }
      return paged
    }
    return 1
  }

  /**
   *  Update the pageIndex of the review List terms.
   *
   * @param lastTerms
   * @param currentPageIndex
   */
  static updateTermsForReviewsList(lastTerms, currentPageIndex: number) {
    return {
      ...lastTerms,
      pageIndex: currentPageIndex
    }
  }

  static generateTermsForReviewsList(
    params: IWebPaginationTermsGenerateTermsForReviewsListParams
  ): IParseQueryReviewsTerm {
    const { router, forObject, relatedObjectSchemaName, reviewListPageType, prefix } = params
    const limit = prefix === 'page' ? Reviews.config.paginationCountPerPage : 10
    const listId = `reviews-${prefix}-view-for-${forObject.uniqueId}`
    const currentPageIndex = PaginationTerms.getCurrentQueryPageIndex({
      router
    })
    return {
      ...router.query,
      objectSchemaName: Types.model.PARSE_REVIEWS,
      reviewListPageType,
      relatedObjectSchemaName,
      forObject,
      sort_by: PaginationTerms.getReviewSortType({ router }),
      listId,
      limit,
      allItems: false,
      pageIndex: currentPageIndex
    }
  }

  static generateTermsForRecipesListOnRestaurant(forObject: IParseModelRestaurants, pageIndex = 0) {
    const restaurantId = forObject.id
    const listId = `recipes-list-view-for-r${restaurantId}`
    const terms = {
      listId,
      limit: 10,
      allItems: false,
      restaurantId,
      pageIndex,
      objectSchemaName: Types.model.PARSE_RECIPES
    }
    return terms
  }

  static generateTermsForRecipesList(
    params: IParseQueryRecipesTerm
    //   {
    //   forEvent = { id: '' },
    //   forRestaurant = { id: '' },
    //   orderedUser = { id: '' },
    //   forCreator = { id: '' }
    // }: {
    //   forEvent?: any
    //   forRestaurant?: any
    //   orderedUser?: any
    //   forCreator?: any
    // }
  ) {
    const {
      restaurantId,
      userId,
      orderedUserId,
      eventId,
      creatorId,
      recipeIds,
      recipeUniquIds
    } = params

    // const orderedUserId = orderedUser.id
    // const eventId = forEvent.id
    // const restaurantId = forRestaurant.id
    // const creatorId = forCreator.id
    const listId = `ordered-recipes-list-view-for-u${orderedUserId || ''}-e${eventId ||
      ''}-r${restaurantId || ''}-c${creatorId || ''}`
    const terms = {
      listId,
      limit: 10,
      allItems: false,
      pageIndex: 1,
      orderedUserId,
      eventId,
      restaurantId,
      creatorId,
      objectSchemaName: Types.model.PARSE_RECIPES
    }
    return terms
  }

  static generateTermsForPeopleInEventList(event) {
    const listId = event.id
    return {
      listId: 'people-in-event-list-view-for-' + listId,
      limit: -1,
      allItems: true,
      pageIndex: 1,
      restaurantId: event.restaurant.id,
      eventId: event.id,
      objectSchemaName: Types.model.PARSE_PEOPLE_IN_EVENTS
    }
  }

  static generateTermsForEventsList({ eventType, forObject }) {
    const listId = forObject.id
    const extendProps =
      eventType === Types.common.EVENTS_LIST_FOR_RESTAURANT
        ? {
            restaurantId: listId
          }
        : {
            userId: listId
          }
    return {
      listId: 'event-list-view-for-' + listId,
      limit: 10,
      allItems: false,
      pageIndex: 1,
      ...extendProps,
      objectSchemaName: Types.model.PARSE_EVENTS
    }
  }

  /**
   *
   * @param forObject: is 'Event' model.
   * @returns {{listId: string, limit: number, eventId, restaurantId: (*|string)}}
   */
  static generateTermsForOrderedUsersList(forObject: IParseModelEvents) {
    const listId = forObject.id
    return {
      listId: 'ordered-users-list-view-for-' + listId,
      limit: 10,
      allItems: false,
      pageIndex: 1,
      eventId: listId,
      restaurantId: forObject.restaurant.id,
      objectSchemaName: Types.model.PARSE_PEOPLE_IN_EVENTS
    }
  }

  /**
   *
   * @param forObject: is 'Event' model.
   * @returns {{listId: string, limit: number, eventId, restaurantId: (*|string)}}
   */
  static generateTermsForUsersInEventList({ forObject }) {
    const listId = forObject.id
    return {
      listId: 'users-in-event-list-view-for-' + listId,
      limit: 10,
      allItems: false,
      pageIndex: 1,
      eventId: listId,
      restaurantId: forObject.restaurant.id,
      isUsersRelation: false,
      objectSchemaName: Types.model.PARSE_USERS
    }
  }

  /**
   *
   * @param forObject: is 'Recipe' model.
   * @returns {{listId: string, limit: number, recipeUniqueId}}
   */
  static generateTermsForOrderedRecipeUsersList(forObject: IParseModelRecipes) {
    const listId = forObject.id
    return {
      listId: 'ordered-users-list-view-for-' + listId,
      limit: 10,
      allItems: false,
      pageIndex: 1,
      recipeUniqueId: forObject.uniqueId,
      isUsersRelation: true,
      objectSchemaName: Types.model.PARSE_USERS
    }
  }

  static generateTermsForRestaurantList(props) {
    const { router } = props
    return {
      ...router.query,
      limit: 10,
      allItems: false,
      pageIndex: 1,
      listId: 'single-list-view-for-restaurants',
      objectSchemaName: Types.model.PARSE_RESTAURANTS
    }
  }

  static generatePhotoTermForRecipe(
    params: IWebPaginationTermsGeneratePhotoTermForRecipeParams
  ): IParseQueryPhotoTerm {
    const {
      objectSchemaName,
      forObjectUniqueId,
      pageForm = Types.common.PAGE_MAIN_FORM,
      router
    } = params
    const limit = Photos.config.paginationCountPerPage
    const currentPageIndex = PaginationTerms.getCurrentQueryPageIndex({
      router
    })
    const photoTerms: IParseQueryPhotoTerm = {
      photoParamsType: Types.common.PHOTOS_TERMS_PARAM_FOR_EDIT_RECIPE,
      withoutPhotoType: true,
      listId: `photos-page-view-for-recipe-${forObjectUniqueId}`,
      forObjectUniqueId,
      objectSchemaName,
      allItems: limit === -1,
      limit,
      pageIndex: Number(currentPageIndex)
      // TODO: DJZHANG(25/12/2018)
      // creatorId: null
    }
    return photoTerms
  }

  static generatePhotoTerm(
    params: IWebPaginationTermsGeneratePhotoTermParams
  ): IParseQueryPhotoTerm {
    const {
      objectSchemaName,
      forObjectUniqueId,
      pageForm = Types.common.PAGE_MAIN_FORM,
      router,
      creatorId,
      isPhotosBrowserPage = false,
      withoutPhotoType = false
    } = params
    let nextIsPhotosBrowserPage = isPhotosBrowserPage
    if (isPhotosBrowserPage === false) {
      nextIsPhotosBrowserPage = pageForm === Types.common.PAGE_PHOTOS_BROWSER_FORM
    }
    const termType = nextIsPhotosBrowserPage ? 'page' : 'list'
    const limit = nextIsPhotosBrowserPage ? Photos.config.paginationCountPerPage : -1
    const currentPageIndex = PaginationTerms.getCurrentQueryPageIndex({
      router
    })
    const photoTerms: IParseQueryPhotoTerm = {
      listId: `photos-${termType}-view-for-parseId-${forObjectUniqueId}`,
      objectSchemaName,
      allItems: limit === -1,
      limit,
      pageIndex: Number(currentPageIndex),
      photoParamsType: Types.common.PHOTOS_TERMS_PARAM_NORMAL,
      withoutPhotoType,
      forObjectUniqueId,
      // TODO: DJZHANG(25/12/2018)
      creatorId
    }

    return photoTerms
  }

  static generateTermsForUsersWithoutAnonymousList() {
    return {
      listId: 'current-users-list-without-anonymous',
      allItems: true,
      limit: -1,
      pageIndex: 1,
      isUsersRelation: false,
      objectSchemaName: Types.model.PARSE_USERS
    }
  }
}
