import { ServerRoutePathHelper } from '../serverRoutePathHelper'

import { routePage, routePageMap } from '../serverRoutePathConstants'

describe('functions in the serverRoutePathHelper', () => {
  it('should return page type correctly', () => {
    const routePageType = ServerRoutePathHelper.getRoutePageType(
      '/' + routePageMap.RESTAURANT_SINGLE_PAGE.pathname
    )
    expect(routePageType).toBe(routePage.RESTAURANT_SINGLE_PAGE)
  })
})
