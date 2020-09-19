import { MomentUtils } from '@app/tools'

import * as Types from '@app/types'

export class Restaurants {
  /**
   * @summary Restaurants config namespace
   * @type {Object}
   */
  static config = {
    dateFormat: 'DD, MMMM, YYYY'
  }

  static TOP_MENUS: IHomeMoreItemModel[] = [
    {
      title: 'Add a Restaurant',
      tag: Types.menuMore.MENU_ITEM_ADD_OR_EDIT_RESTAURANT,
      objectId: Types.menuMore.MENU_ITEM_ADD_OR_EDIT_RESTAURANT,
      icon:
        'M17.22 22a1.78 1.78 0 0 1-1.74-2.167l1.298-4.98L14 13l1.756-9.657A1.635 1.635 0 0 1 19 3.635V20.22A1.78 1.78 0 0 1 17.22 22zm-7.138-9.156l.697 7.168a1.79 1.79 0 1 1-3.56 0l.7-7.178A3.985 3.985 0 0 1 5 9V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.83c0 1.85-1.2 3.518-2.918 4.014z'
    },
    {
      title: 'Search Restaurants',
      tag: Types.menuMore.MENU_ITEM_SEARCH_RESTAURANTS,
      objectId: Types.menuMore.MENU_ITEM_SEARCH_RESTAURANTS,
      icon:
        'M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3 1 1 0 0 1 2 0h8a1 1 0 0 1 2 0 3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zm1-13H5v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V8zm-5.634 7.723L12 18l-1.366-2.277a3.5 3.5 0 1 1 2.732 0zM12 11.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z'
    },
    {
      title: 'Manage Friends',
      tag: Types.menuMore.MENU_ITEM_MANAGE_FRIENDS,
      objectId: Types.menuMore.MENU_ITEM_MANAGE_FRIENDS,
      icon: ''
    },
    {
      title: 'Read Reviews',
      tag: Types.menuMore.MENU_ITEM_READ_REVIEWS,
      objectId: Types.menuMore.MENU_ITEM_READ_REVIEWS,
      icon:
        'M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6zm-5.88 10.428l-3.16-1.938-3.05 2.01.59-3.457L7 10.596l3.457-.505L11.96 6.5l1.582 3.59 3.458.506-2.5 2.447.62 3.385z'
    }
  ]

  /**
   * @summary generate 15 days as the day filter for Restaurants list admin
   */
  static getDateSelectors() {
    const size = 15
    const reference = MomentUtils.createTodayMomentInstance() // today
    // let currentYear = REFERENCE.format('YYYY')
    const dateSelectors: any = []
    for (let i = 0; i < size; i++) {
      const date: any = reference.clone().subtract(i, 'months')
      const queryString = MomentUtils.toDateString(date, 'YYYY-MM')
      const year = MomentUtils.toDateString(date, 'YYYY')
      const title = date.format('MMMM YYYY')
      dateSelectors.push({ query: queryString, title })
    }
    return dateSelectors
  }

  static showReady(results, hasMore, ready, totalCount, limit, firstPagination) {
    if (!firstPagination) {
      return false
    }
    if (typeof totalCount === 'undefined' || !ready || typeof results === 'undefined') {
      return true
    }
    if (ready && !hasMore && results.length === 0) {
      return false
    }
    if (!ready && hasMore && results.length <= limit) {
      return true
    }
    if (hasMore && !!results && results.length > limit) {
      return false
    }
    if (hasMore && results.length % limit !== 0) {
      return true
    }
    return false
  }

  // static toDateString(date) {
  //   return moment(date).format(Restaurants.config.dateFormat)
  // }

  static getAddress(restaurant) {
    return restaurant.address || '  '
  }
}
