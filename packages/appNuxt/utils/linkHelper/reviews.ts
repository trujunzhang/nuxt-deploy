import { IFBRecipe, IFBRestaurant, IFBEvent, IFBReview } from 'ieattatypes/types'
import { ReviewType } from '~/database/constant'

export const getWriteReviewLink = (relatedModel: IFBRestaurant | IFBEvent | IFBRecipe, reviewType: string) => {
  return `/writeareview/${relatedModel.uniqueId}?type=${reviewType}`
}

export const getEditReviewLink = (review: IFBReview) => {
  let relatedId: any = ''
  switch (review.reviewType) {
    case ReviewType.Restaurant: {
      relatedId = review.restaurantId
      break
    }
    case ReviewType.Event: {
      relatedId = review.eventId
      break
    }
    case ReviewType.Recipe: {
      relatedId = review.recipeId
      break
    }
  }
  return `/writeareview/${relatedId}?type=${review.reviewType}&rid=${review.uniqueId}`
}
