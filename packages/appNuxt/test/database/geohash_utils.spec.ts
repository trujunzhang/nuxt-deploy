import { convertToGeoHash } from '~/database/geohash_utils'

const geohash = require('ngeohash')

describe('geohash', () => {
  test('is a Vue instance', () => {
    const geoHash = convertToGeoHash(37.8324, 112.5584)
    expect(geoHash).toBe('ww8p1r4t8yd0')
  })

  test('geohash with 12 numberOfChars', () => {
    const photoGeoHash = geohash.encode(32.4133352, 120.570579, 12)
    expect(photoGeoHash).toBe('wtv8rssv65eg')
    const restaurantGeoHash = geohash.encode(32.4134176, 120.5705507, 12)
    expect(restaurantGeoHash).toBe('wtv8rssvc6yz')
  })

  test('geohash with 8 numberOfChars', () => {
    const photoGeoHash = geohash.encode(32.4133352, 120.570579, 8)
    expect(photoGeoHash).toBe('wtv8rssv')
    const restaurantGeoHash = geohash.encode(32.4134176, 120.5705507, 8)
    expect(restaurantGeoHash).toBe('wtv8rssv')
  })
})
