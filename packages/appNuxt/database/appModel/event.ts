import { IFBEvent } from 'ieattatypes/types/index'
import { getDateStringForCreatedOrUpdatedDate } from '~/database/utils/timeago_helper'
import { documentIdFromCurrentDate } from '~/database/utils/md5_utils'
import { slugifyToLower } from '~/database/utils/slug_helper'
import { IAuthUser } from '~/database/models/auth_user_model'

export class ParseModelEvents {
  // static emptyEvent (
  //   authUserModel: IAuthUser,
  //   restaurantId: string
  // ): IFBEvent {
  //   const event: IFBEvent = {
  //     // Base(5)
  //     uniqueId: documentIdFromCurrentDate(),
  //     creatorId: authUserModel.uid,
  //     createdAt: getDateStringForCreatedOrUpdatedDate(),
  //     updatedAt: getDateStringForCreatedOrUpdatedDate(),
  //     flag: '1',
  //     // Common(5)
  //     displayName: '',
  //     slug: '',
  //     // for review(2)
  //     rate: 0,
  //     reviewCount: 0,
  //     // point(1)
  //     restaurantId
  //   }
  //   return event
  // }

  static updateEvent (
    model: IFBEvent,
    nextDisplayName: string,
    nextPrice: string): IFBEvent {
    model.displayName = nextDisplayName
    model.slug = slugifyToLower(nextDisplayName)
    // Others
    model.updatedAt = getDateStringForCreatedOrUpdatedDate()

    return model
  }
}
