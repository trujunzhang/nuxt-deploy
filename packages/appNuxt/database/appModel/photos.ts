import { IFBPhoto, IFBRestaurant } from 'ieattatypes/types/index'
import { IAuthUser } from '~/database/firebase_helper'
import { getDateStringForCreatedOrUpdatedDate } from '~/database/timeago_helper'
import { documentIdFromCurrentDate } from '~/database/md5_utils'
import { convertToGeoHash } from '~/database/geohash_utils'

export class ParseModelPhotos {
  static emptyPhotoForRestaurant (
    authUserModel: IAuthUser,
    restaurant: IFBRestaurant,
    originalUrl: string,
    extraNote: string
  ) {
    const photo: IFBPhoto = {
      // Base(5)
      uniqueId: documentIdFromCurrentDate(),
      creatorId: authUserModel.uid,
      createdAt: getDateStringForCreatedOrUpdatedDate(),
      updatedAt: getDateStringForCreatedOrUpdatedDate(),
      flag: '1',
      // user(2)
      username: authUserModel.displayName,
      avatarUrl: authUserModel.photoURL,
      // Location(3)
      geoHash: convertToGeoHash(restaurant.latitude, restaurant.longitude),
      latitude: restaurant.latitude,
      longitude: restaurant.longitude,
      // Common
      originalUrl,
      thumbnailUrl: '',
      url: '',
      // point(4)
      photoType: '',
      restaurantId: restaurant.uniqueId,
      recipeId: '',
      userId: '',
      // offline(1)
      offlinePath: '',
      // extra(1)
      extraNote
    }
    return photo
  }

  // static ParseModelPhotos updateFromCloudinary({
  //                                                @required ParseModelPhotos model,
  //                                                @required String originalUrl,
  //                                              }) {
  //   model.originalUrl = originalUrl;
  //   return model;
  // }
}
