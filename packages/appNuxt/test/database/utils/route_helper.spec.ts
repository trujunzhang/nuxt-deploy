import { RouteHelper } from '~/database/utils/route_helper'

describe('RouteHelper', () => {
  test('convertQueryToString', () => {
    expect(RouteHelper.convertQueryToString({
      sort_by: 'date_asc',
      q: 'xxx'
    })
    ).toBe('sort_by=date_asc&q=xxx')
    expect(RouteHelper.convertQueryToString({
      q: 'xxx',
      sort_by: 'date_asc'
    })
    ).toBe('q=xxx&sort_by=date_asc')
  })

  test('getReviewSearchLocation with query xxx', () => {
    expect(RouteHelper.getReviewSearchLocation({
      path: '/biz/forno-vecchio',
      query: {
        sort_by: 'date_asc'
      }
    }, 'xxx')
    ).toBe('/biz/forno-vecchio?sort_by=date_asc&q=xxx')
    expect(RouteHelper.getReviewSearchLocation({
      path: '/biz/forno-vecchio',
      query: {
        q: '123',
        sort_by: 'date_asc'
      }
    }, 'xxx')
    ).toBe('/biz/forno-vecchio?q=xxx&sort_by=date_asc')
    expect(RouteHelper.getReviewSearchLocation({
      path: '/biz/forno-vecchio',
      query: {
        sort_by: 'date_asc',
        q: '123'
      }
    }, 'xxx')
    ).toBe('/biz/forno-vecchio?sort_by=date_asc&q=xxx')
    expect(RouteHelper.getReviewSearchLocation({
      path: '/biz/forno-vecchio',
      query: {
        q: '123'
      }
    }, 'xxx')
    ).toBe('/biz/forno-vecchio?q=xxx')
    expect(RouteHelper.getReviewSearchLocation({
      path: '/biz/forno-vecchio',
      query: {
      }
    }, 'xxx')
    ).toBe('/biz/forno-vecchio?q=xxx')
  })

  test('getReviewSearchLocation with empty query', () => {
    expect(RouteHelper.getReviewSearchLocation({
      path: '/biz/forno-vecchio',
      query: {
        sort_by: 'date_asc',
        q: '123'
      }
    }, '')
    ).toBe('/biz/forno-vecchio?sort_by=date_asc')
    expect(RouteHelper.getReviewSearchLocation({
      path: '/biz/forno-vecchio',
      query: {
        q: '123'
      }
    }, '')
    ).toBe('/biz/forno-vecchio')
    expect(RouteHelper.getReviewSearchLocation({
      path: '/biz/forno-vecchio',
      query: {
      }
    }, '')
    ).toBe('/biz/forno-vecchio')
  })

  test('getReviewSortLocation with sort date_desc', () => {
    expect(RouteHelper.getReviewSortLocation({
      path: '/biz/forno-vecchio',
      query: {
        q: '123'
      }
    }, 'date_desc')
    ).toBe('/biz/forno-vecchio?q=123&sort_by=date_desc')
    expect(RouteHelper.getReviewSortLocation({
      path: '/biz/forno-vecchio',
      query: {
        q: '123',
        sort_by: 'date_asc'
      }
    }, 'date_desc')
    ).toBe('/biz/forno-vecchio?q=123&sort_by=date_desc')
    expect(RouteHelper.getReviewSortLocation({
      path: '/biz/forno-vecchio',
      query: {
        sort_by: 'date_asc',
        q: '123'
      }
    }, 'date_desc')
    ).toBe('/biz/forno-vecchio?sort_by=date_desc&q=123')
    expect(RouteHelper.getReviewSortLocation({
      path: '/biz/forno-vecchio',
      query: {
        sort_by: 'date_asc'
      }
    }, 'date_desc')
    ).toBe('/biz/forno-vecchio?sort_by=date_desc')
    expect(RouteHelper.getReviewSortLocation({
      path: '/biz/forno-vecchio',
      query: {
      }
    }, 'date_desc')
    ).toBe('/biz/forno-vecchio?sort_by=date_desc')
  })

  test('getReviewSortLocation with default query', () => {
    expect(RouteHelper.getReviewSortLocation({
      path: '/biz/forno-vecchio',
      query: {
        sort_by: 'date_asc',
        q: '123'
      }
    }, 'default')
    ).toBe('/biz/forno-vecchio?q=123')
    expect(RouteHelper.getReviewSortLocation({
      path: '/biz/forno-vecchio',
      query: {
        sort_by: 'date_asc'
      }
    }, 'default')
    ).toBe('/biz/forno-vecchio')
    expect(RouteHelper.getReviewSortLocation({
      path: '/biz/forno-vecchio',
      query: {
      }
    }, 'default')
    ).toBe('/biz/forno-vecchio')
  })
})
