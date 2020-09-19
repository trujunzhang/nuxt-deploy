// import { RouteParserUtils as Route } from '../routeParserUtils'

import Route from 'route-parser' // No require '* as'.

describe('methods on the RouteParserUtils', () => {
  test('return correctly, getQueryObject', () => {
    const route = new Route('/:one/:two')
    const result: any = route.match('/foo/bar') // -> {one: 'foo', two: 'bar'}
    expect(result.one).toEqual('foo')
    expect(result.two).toEqual('bar')
  })
})
