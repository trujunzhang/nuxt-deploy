import { IFBUser } from 'ieattatypes/types/index'
import { IAuthUser } from '~/database/models/auth_user_model'
import { slugifyToLower } from '~/database/utils/slug_helper'
import { getDateStringForCreatedOrUpdatedDate } from '~/database/utils/timeago_helper'

export class ParseModelUsers {
  static getUserModel (model: IAuthUser): IFBUser {
    return {
      // Base(3)
      id: model.uid,
      createdAt: getDateStringForCreatedOrUpdatedDate(),
      updatedAt: getDateStringForCreatedOrUpdatedDate(),
      // Common(3)
      username: model.displayName,
      slug: slugifyToLower(model.displayName),
      email: model.email,
      // Property(3)
      loginType: 'google',
      originalUrl: model.photoURL,
      thumbnailUrl: ''
    }
  }

  static updateUserPhoto (model: IFBUser, originalUrl: string) {
    model.originalUrl = originalUrl
    model.updatedAt = getDateStringForCreatedOrUpdatedDate()
  }
}
