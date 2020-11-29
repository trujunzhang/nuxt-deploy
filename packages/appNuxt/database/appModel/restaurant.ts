import { IFBRestaurant } from 'ieattatypes/types/index'
import { getDateStringForCreatedOrUpdatedDate } from '~/database/utils/timeago_helper'
import { documentIdFromCurrentDate } from '~/database/utils/md5_utils'
import { convertToGeoHash } from '~/database/utils/geohash_utils'
import { slugifyToLower } from '~/database/utils/slug_helper'
import { IAuthUser } from '~/database/models/auth_user_model'

export class ParseModelRestaurants {
  static emptyRestaurant (
    authUserModel: IAuthUser,
    latitude: number,
    longitude: number
  ): IFBRestaurant {
    const restaurant: IFBRestaurant = {
      // Base(5)
      uniqueId: documentIdFromCurrentDate(),
      creatorId: authUserModel.uid,
      createdAt: getDateStringForCreatedOrUpdatedDate(),
      updatedAt: getDateStringForCreatedOrUpdatedDate(),
      flag: '1',
      // extra(1)
      extraNote: '',
      // Check google(1)
      isNew: true,
      // Location(3)
      geoHash: convertToGeoHash(latitude, longitude),
      latitude,
      longitude,
      // Common(4)
      displayName: '',
      slug: '',
      thumbnailUrl: '',
      originalUrl: '',
      // for review(2)
      rate: 0,
      reviewCount: 0,
      // Google api(8)
      address: '',
      street_number: '',
      route: '',
      locality: '',
      sublocality: '',
      country: '',
      postal_code: '',
      administrative_area: ''
    }
    return restaurant
  }

  static updateCover (
    model: IFBRestaurant,
    originalUrl: string): IFBRestaurant {
    model.originalUrl = originalUrl
    model.updatedAt = getDateStringForCreatedOrUpdatedDate()

    return model
  }

  static updateRestaurant (
    model: IFBRestaurant,
    nextDisplayName: string,
    nextExtraNote: string): IFBRestaurant {
    model.displayName = nextDisplayName
    model.slug = slugifyToLower(nextDisplayName)
    model.extraNote = nextExtraNote
    model.updatedAt = getDateStringForCreatedOrUpdatedDate()

    return model
  }
}
