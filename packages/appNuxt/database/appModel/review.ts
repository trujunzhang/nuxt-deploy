import { IFBReview } from 'ieattatypes/types/index'
import { getDateStringForCreatedOrUpdatedDate } from '~/database/utils/timeago_helper'
import { documentIdFromCurrentDate } from '~/database/utils/md5_utils'
import { IAuthUser } from '~/database/models/auth_user_model'
import { ReviewType } from '~/database/constant'

export class ParseModelReviews {
  static emptyReview (
    authUserModel: IAuthUser,
    relatedId: string,
    reviewType: string
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
      reviewType,
      restaurantId: reviewType === ReviewType.Restaurant ? relatedId : '',
      eventId: reviewType === ReviewType.Event ? relatedId : '',
      recipeId: reviewType === ReviewType.Recipe ? relatedId : ''
    }
    return review
  }

  static updateReview (
    model: IFBReview,
    nextRate: number,
    nextExtraNote: string): IFBReview {
    model.rate = nextRate
    model.body = nextExtraNote
    model.updatedAt = getDateStringForCreatedOrUpdatedDate()

    return model
  }
}
