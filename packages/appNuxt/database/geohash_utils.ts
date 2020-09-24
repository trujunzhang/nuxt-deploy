import { IFBRestaurant } from 'ieattatypes/types/index'

const geohash = require('ngeohash')

export const convertToGeoHash = (latitude: number, longitude: number) => {
  return geohash.encode(latitude, longitude, 12)
}

export const getGeoHashForRestaurant = (restaurant: IFBRestaurant) => {
  return geohash.encode(restaurant.latitude, restaurant.longitude, 8)
}
