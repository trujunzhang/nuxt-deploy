import { ParseHrefFromRouterHelper } from '@appUtils/index'

describe('methods correctly in the ParseHrefFromRouterHelper', () => {
  test('get real href', () => {
    // /user_details_reviews_self/zis2vkx9G2/Jaron-Lawrence
    const routerReviewsUser: IWebAppRouterProps | any = {
      asPath: '/user_details_reviews_self/zis2vkx9G2/Jaron-Lawrence',
      pathname: '/userProfileSingle',
      query: {
        uid: 'zis2vkx9G2',
        uslug: 'Jaron-Lawrence'
      }
    }

    const href = new ParseHrefFromRouterHelper(routerReviewsUser).getHref().end()
    const expectedHref = '/user_details_reviews_self/zis2vkx9G2/Jaron-Lawrence'

    expect(href).toEqual(expectedHref)
  })
})
