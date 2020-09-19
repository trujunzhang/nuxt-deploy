import { routePageMap } from './serverRoutePathConstants'

export class ServerRoutePathHelper {
  static getRoutePageName(pageType: string) {
    const pageName = routePageMap[pageType]
    return pageName.pathname
  }

  static getRoutePattern(pageType: string) {
    const pageName = routePageMap[pageType]
    return pageName.pattern
  }

  static checkSamePathname(pageName, fixedPageName) {
    const same = routePageMap[pageName].pathname === fixedPageName
    if (same === true) {
      const x = 0
    }
    return same
  }

  /**
   *
   * @param pageName - also can be named 'pathname'.
   */
  static getRoutePageType(pageName: string): string {
    const fixedPageName = pageName.replace('/', '')
    const pageType = Object.keys(routePageMap).find((k) => {
      return ServerRoutePathHelper.checkSamePathname(k, fixedPageName)
    })

    if (pageType === undefined) {
      throw new Error(`Not found page type from pathName! ${pageName}`)
    }
    return pageType
  }
}
