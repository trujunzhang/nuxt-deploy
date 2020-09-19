import { GeoHash } from 'geohash'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const code = GeoHash.encodeGeoHash(37.8324, 112.5584)
    expect(code).toBe('ww8p1r4t8yd0')
  })
})
