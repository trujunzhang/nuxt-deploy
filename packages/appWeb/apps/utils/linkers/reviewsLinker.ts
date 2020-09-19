import * as Types from '@app/types'
import { AppConstants } from '@app/types'
import { AppLinks } from '@appUtils/index'

export class ReviewsLinker {
  static getUrlWithSort(params: IReviewsLinkerGetUrlWithSortParams) {
    const { router, linkObject, selectedId } = params
    const { url: adjustNextUrl, containedSort } = ReviewsLinker.adjustUrlWithSort({
      router,
      url: linkObject.pathname
    })
    if (containedSort) {
      return `${adjustNextUrl}&select=${selectedId}`
    }
    return `${adjustNextUrl}?select=${selectedId}`
  }

  static adjustUrlWithSort(
    params: IReviewsLinkerAdjustUrlWithSortParams
  ): IAdjustUrlWithSortResult {
    const { router, url } = params
    const query: any = router.query as any
    if (!!query.sort_by) {
      return {
        url: `${url}?sort_by=${query.sort_by}`,
        containedSort: true
      }
    }
    return {
      url,
      containedSort: false
    }
  }

  static getReviewObjectByType(review: IParseModelReviews): IReviewObjectByType {
    const { objectSchemaName } = AppConstants.realmObjects[review.reviewType]
    const { restaurant, event, recipe } = review
    switch (objectSchemaName) {
      case Types.model.PARSE_RESTAURANTS:
        if (!!restaurant) {
          return {
            id: restaurant.id,
            objectSchemaName,
            displayName: restaurant.displayName,
            detailUrl: AppLinks.getRestaurantLink(restaurant),
            breadcrumbs: [
              {
                title: restaurant.displayName,
                url: AppLinks.getRestaurantLink(restaurant)
              }
            ],
            thirdRow: restaurant.address
          }
        }
      case Types.model.PARSE_EVENTS:
        if (!!event) {
          return {
            id: event.restaurant.id,
            objectSchemaName,
            displayName: event.displayName,
            detailUrl: AppLinks.getEventLink(event),
            breadcrumbs: [
              {
                title: event.restaurant.displayName,
                url: AppLinks.getRestaurantLink(event.restaurant)
              },
              {
                title: event.displayName,
                url: AppLinks.getEventLink(event)
              }
            ],
            thirdRow: event.restaurant.address
          }
        }
      case Types.model.PARSE_RECIPES:
        if (!!recipe) {
          return {
            id: recipe.id,
            objectSchemaName,
            displayName: recipe.displayName,
            detailUrl: AppLinks.getOrderedRecipeLink(recipe),
            breadcrumbs: [],
            thirdRow: `$ ${recipe.price}`
          }
        }
    }
    throw new Error('get ReviewObject by Type!')
  }
}
