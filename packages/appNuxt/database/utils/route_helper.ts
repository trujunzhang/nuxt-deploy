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
  static getReviewSearchLocation ($router: any, searchReviews: string) {
    const { path, query } = $router
    const nextQuery = Object.assign(query, { q: searchReviews })
    if (searchReviews === '') {
      delete nextQuery.q
    }
    return `/${path}?q=${searchReviews}`
  }
}
