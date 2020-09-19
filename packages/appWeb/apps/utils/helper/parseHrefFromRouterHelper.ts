import { RouteParserUtils as Route } from '@app/tools'
import { UsersPages } from '@web/server/routesModels'
import { ServerRoutePathHelper } from '@web/server/routesModels/utils'
import { ReviewsLinker } from '@appUtils/index'

export class ParseHrefFromRouterHelper {
  private router: IWebAppRouterProps
  private pattern: string

  private nextHref: string = ''

  constructor(router: IWebAppRouterProps) {
    this.router = router

    const { pathname } = router

    this.pattern = this.getPattern(pathname)
  }

  private getPatternForUserProfile() {
    const { asPath } = this.router
    const route = new Route('/:menuType/:uid/:uslug')
    const query: any = route.match(asPath || '')

    let userPattern = ''
    const userRouterKeys = Object.keys(UsersPages)
    userRouterKeys.forEach((userRouterKey, index) => {
      const { pattern, menuType } = UsersPages[userRouterKey]
      if (menuType.indexOf(query.menuType) !== -1) {
        userPattern = pattern
      }
    })

    return userPattern
  }

  private getPattern(pathname: string) {
    if (pathname === '/userProfileSingle') {
      return this.getPatternForUserProfile()
    }

    const routePageType = ServerRoutePathHelper.getRoutePageType(pathname)
    const routePattern = ServerRoutePathHelper.getRoutePattern(routePageType)

    // console.log('getPattern: ', routePattern)

    return routePattern
  }

  getHref() {
    const route = new Route(this.pattern)
    this.nextHref = route.reverse(this.router.query as object) as string

    return this
  }

  end(adjust: boolean = true) {
    if (adjust) {
      return ReviewsLinker.adjustUrlWithSort({
        router: this.router,
        url: this.nextHref
      }).url
    }
    return this.nextHref
  }
}
