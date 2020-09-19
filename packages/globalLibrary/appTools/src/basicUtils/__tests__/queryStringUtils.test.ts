import { QueryStringUtils } from '../queryStringUtils'

describe('methods on the QueryStringUtils', () => {
  test('return correctly, getQueryObject', () => {
    const queryObject = QueryStringUtils.getQueryObject('https://foo.bar?foo=bar&foo=baz#top')

    expect(JSON.stringify(queryObject)).toEqual(
      JSON.stringify({
        foo: ['bar', 'baz']
      })
    )
  })
})
