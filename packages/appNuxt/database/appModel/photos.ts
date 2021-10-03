import { IFBPhoto, IFBRestaurant, IFBRecipe } from 'ieattatypes/types/index'
import { getDateStringForCreatedOrUpdatedDate } from '~/database/utils/timeago_helper'
import { documentIdFromCurrentDate } from '~/database/utils/md5_utils'
import { convertToGeoHash } from '~/database/utils/geohash_utils'
import { IAuthUser } from '~/database/models/auth_user_model'
import { PhotoType } from '~/database/constant'

export class ParseModelPhotos {
  static emptyPhotoForRestaurant (
    authUserModel: IAuthUser,
    relatedId: string,
    photoType: string,
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
      // Common
      originalUrl,
      thumbnailUrl: '',
      // point(4)
      photoType,
      restaurantId: photoType === PhotoType.Restaurant ? relatedId : '',
      recipeId: photoType === PhotoType.Recipe ? relatedId : '',
      userId: photoType === PhotoType.User ? relatedId : '',
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
