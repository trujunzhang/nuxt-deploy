import { IFBRecipe } from 'ieattatypes/types/index'
import { getDateStringForCreatedOrUpdatedDate } from '~/database/utils/timeago_helper'
import { documentIdFromCurrentDate } from '~/database/utils/md5_utils'
import { slugifyToLower } from '~/database/utils/slug_helper'
import { IAuthUser } from '~/database/models/auth_user_model'

export class ParseModelRecipes {
  static emptyRecipe (
    authUserModel: IAuthUser,
    restaurantId: string
  ): IFBRecipe {
    const recipe: IFBRecipe = {
      // Base(5)
      uniqueId: documentIdFromCurrentDate(),
      creatorId: authUserModel.uid,
      createdAt: getDateStringForCreatedOrUpdatedDate(),
      updatedAt: getDateStringForCreatedOrUpdatedDate(),
      flag: '1',
      // Common(5)
      displayName: '',
      slug: '',
      price: '',
      originalUrl: '',
      thumbnailUrl: '',
      // for review(2)
      rate: 0,
      reviewCount: 0,
      // point(1)
      restaurantId
    }
    return recipe
  }

  static updateCover (
    model: IFBRecipe,
    originalUrl: string): IFBRecipe {
    model.originalUrl = originalUrl
    model.updatedAt = getDateStringForCreatedOrUpdatedDate()

    return model
  }

  static updateRecipe (
    model: IFBRecipe,
    nextDisplayName: string,
    nextPrice: string): IFBRecipe {
    model.displayName = nextDisplayName
    model.slug = slugifyToLower(nextDisplayName)
    // Others
    model.price = nextPrice
    model.updatedAt = getDateStringForCreatedOrUpdatedDate()

    return model
  }
}
