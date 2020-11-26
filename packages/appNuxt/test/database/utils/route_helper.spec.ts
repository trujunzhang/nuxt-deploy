import { RouteHelper } from '~/database/utils/route_helper'

describe('RouteHelper', () => {
  test('convertQueryToString', () => {
    expect(
      RouteHelper.convertQueryToString({
        sort_by: 'date_asc',
        q: 'xxx'
      })
    ).toBe('sort_by=date_asc&q=xxx')
    expect(
      RouteHelper.convertQueryToString({
        q: 'xxx',
        sort_by: 'date_asc'
      })
    ).toBe('q=xxx&sort_by=date_asc')
  })
  test('getReviewSearchLocation', () => {
    const location = RouteHelper.getReviewSearchLocation({
      path: '/biz/forno-vecchio',
      query: {
        sort_by: 'date_asc'
      }
    }, '')
    // expect(digest).toBe('df1546979d56fe7fbf8ab2b24cc54668')
  })
})
