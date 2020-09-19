import { convertToGeoHash } from '~/database/geohash_utils'

describe('geohash', () => {
  test('is a Vue instance', () => {
    const geoHash = convertToGeoHash(37.8324, 112.5584)
    expect(geoHash).toBe('ww8p1r4t8yd0')
  })
})
