import { encodeGeoHash } from '../vendor/GeoHash'

export class GeoHashUtils {
  static encode(latitude: any, longitude: any) {
    const hash = encodeGeoHash(latitude, longitude)
    return hash
  }
}
