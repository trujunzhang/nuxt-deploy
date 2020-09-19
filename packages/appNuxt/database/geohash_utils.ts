const geohash = require('ngeohash')

export const convertToGeoHash = (latitude: number, longitude: number) => {
  return geohash.encode(latitude, longitude, 12)
}
