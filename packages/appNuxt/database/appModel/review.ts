import { IFBReview } from 'ieattatypes/types/index'
import { IAuthUser } from '~/database/firebase_helper'
import { getDateStringForCreatedOrUpdatedDate } from '~/database/timeago_helper'
import { documentIdFromCurrentDate } from '~/database/md5_utils'

export class ParseModelReviews {
  static emptyReview (
    authUserModel: IAuthUser,
    restaurantId: string
  ) {
    const review: IFBReview = {
      // Base(5)
      uniqueId: documentIdFromCurrentDate(),
      creatorId: authUserModel.uid,
      createdAt: getDateStringForCreatedOrUpdatedDate(),
      updatedAt: getDateStringForCreatedOrUpdatedDate(),
      flag: '1',
      // Common(2)
      rate: 0,
      body: '',
      // user(2)
      username: authUserModel.displayName,
      avatarUrl: authUserModel.photoURL,
      // point(4)
      reviewType: 'restaurant',
      restaurantId,
      eventId: '',
      recipeId: ''
    }
    return review
  }

  static updateReview (
    model: IFBReview,
    nextRate: number,
    nextExtraNote: string): IFBReview {
    model.rate = nextRate
    model.body = nextExtraNote

    return model
  }
}
