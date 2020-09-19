import { routePage, ServerRoutePathHelper } from './utils'

export class ReviewsPages {
  static list = {
    name: 'reviewSingle',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.REVIEWS_LIST_FOR_MODELS_PAGE),
    // pattern: '/reviews/:modelType/:forObjectUniqueId/:forObjectDisplayName',
    page: ServerRoutePathHelper.getRoutePageName(routePage.REVIEWS_LIST_FOR_MODELS_PAGE)
    // page: 'reviewsList'
  }

  static paginationList = {
    pattern: `${ReviewsPages.list.pattern}?page=:page`
  }

  static edit = {
    name: 'reviewEdit',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.ORGANIZATION_EDIT_REVIEW),
    // pattern: '/edit/review/:reviewType/:forObjectUniqueId/:reviewUniqueId',
    page: ServerRoutePathHelper.getRoutePageName(routePage.ORGANIZATION_EDIT_REVIEW)
    // page: 'reviewEdit'
  }

  static newForm = {
    name: 'reviewNew',
    pattern: ServerRoutePathHelper.getRoutePattern(routePage.ORGANIZATION_NEW_REVIEW),
    // pattern: '/new/review/:reviewType/:forObjecUniquetId',
    page: ServerRoutePathHelper.getRoutePageName(routePage.ORGANIZATION_NEW_REVIEW)
    // page: 'reviewNew'
  }
}
