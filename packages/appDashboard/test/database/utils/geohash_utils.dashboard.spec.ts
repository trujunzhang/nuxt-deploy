import {
  convertToGeoHash,
  getGeoHashForRestaurant,
  numberOfCharsForRestaurant,
  numberOfCharsForPhoto
} from '~/database/utils/geohash_utils'

const geohash = require('ngeohash')

describe('geohash', () => {
  test('number of chars', () => {
    expect(numberOfCharsForPhoto).toBe(6)
    expect(numberOfCharsForRestaurant).toBe(6)
  })

  test('convertToGeoHash', () => {
    const geoHash = convertToGeoHash(37.8324, 112.5584)
    expect(geoHash).toBe('ww8p1r4t8yd0'.substring(0, numberOfCharsForPhoto))
  })

  test('geohash with 12 numberOfChars', () => {
    expect(geohash.encode(32.4133352, 120.570579, 12)).toBe('wtv8rssv65eg')
    expect(geohash.encode(32.4133352, 120.570579, 8)).toBe('wtv8rssv')
    expect(geohash.encode(32.4134176, 120.5705507, 12)).toBe('wtv8rssvc6yz')
    expect(geohash.encode(32.4134176, 120.5705507, 8)).toBe('wtv8rssv')
  })

  test('geohash with nearby', () => {
    // 001
    expect(geohash.encode(-73.651939, 40.738459, 12)).toBe('hfuvp00f6gkw')
    expect(geohash.encode(-73.651939, 40.738459, 3)).toBe('hfu')
    expect(geohash.encode(-73.652128, 40.738404, 12)).toBe('hfuvp00c385w')
    expect(geohash.encode(-73.652173, 40.738486, 12)).toBe('hfuvp00bgxbf')
    expect(geohash.encode(-73.652002, 40.738517, 12)).toBe('hfuvp00cupxy')
    expect(geohash.encode(-73.652334, 40.738750, 12)).toBe('hfuvp01019vd')
    expect(geohash.encode(-73.652195, 40.738797, 12)).toBe('hfuvp010fg8x')
    expect(geohash.encode(-73.652258, 40.738787, 12)).toBe('hfuvp0106xcr')
    // 002
    expect(geohash.encode(-73.651858, 40.738486, 12)).toBe('hfuvp00fgd8c')
    expect(geohash.encode(-73.652608, 40.738883, 12)).toBe('hfuuzpcnky8z')
    expect(geohash.encode(-73.652608, 40.738883, 3)).toBe('hfu')
    expect(geohash.encode(-73.652433, 40.738234, 12)).toBe('hfuuzpbxmxkg')
    expect(geohash.encode(-73.651683, 40.738189, 12)).toBe('hfuvp00eue5m')
    expect(geohash.encode(-73.651854, 40.738773, 12)).toBe('hfuvp014f5qc')
  })

  test('geohash with 8 numberOfChars', () => {
    expect(geohash.encode(32.4133352, 120.570579, 8)).toBe('wtv8rssv')
    expect(geohash.encode(32.4134176, 120.5705507, 8)).toBe('wtv8rssv')
  })
})
