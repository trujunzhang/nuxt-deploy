export class RouteHelper {
  // static getReviewSearchLocation ($router: any, searchReviews: string) {
  //   const { path, query } = $router
  //   const nextQuery = Object.assign(query, { q: searchReviews })
  //   if (searchReviews === '') {
  //     delete nextQuery.q
  //   }
  //   return {
  //     path,
  //     query: {
  //       q: searchReviews
  //     }
  //   }
  // }

  /**
   * https://www.yelp.com/biz/the-ramen-bar-sf-san-francisco-2?sort_by=rating_desc&q=xxx
   * @param query
   */
  static convertQueryToString (query: object) {
    const keys = Object.keys(query)
    const rows =
      keys.map((key) => {
        return `${key}=${query[key]}`
      })

    return rows.join('&')
  }

  static getReviewSearchLocation ($router: any, searchReviews: string) {
    const { path, query } = $router
    const nextQuery = Object.assign({}, query)
    if (searchReviews === '') {
      delete nextQuery.q
    } else {
      nextQuery.q = searchReviews
    }
    return `/${path}?q=${searchReviews}`
  }
}
