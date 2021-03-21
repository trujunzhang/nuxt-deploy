import { IFBRecipe, IFBRestaurant, IFBEvent } from 'ieattatypes/types'
import { PhotoType, ReviewType } from '~/database/constant'

export const getDetailRestaurantLink = (model: IFBRestaurant) => {
  return `/biz/${model.slug}`
}

export const getDetailEventLink = (model: IFBEvent) => {
  return `/event/${model.slug}`
}

export const getDetailRecipeLink = (model: IFBRecipe) => {
  return `/recipe/${model.slug}`
}

export const getRelatedDetailInPhotoLink = (relatedModel: IFBRestaurant | IFBRecipe, photoType: string) => {
  switch (photoType) {
    case PhotoType.Restaurant: {
      return getDetailRestaurantLink(relatedModel as IFBRestaurant)
    }
    case PhotoType.Recipe: {
      return getDetailRecipeLink(relatedModel as IFBRecipe)
    }
  }
  return ''
}

export const getRelatedDetailInReviewLink = (relatedModel: IFBRestaurant | IFBRecipe | IFBEvent, reviewType: string) => {
  switch (reviewType) {
    case ReviewType.Restaurant: {
      return getDetailRestaurantLink(relatedModel as IFBRestaurant)
    }
    case ReviewType.Event: {
      return getDetailEventLink(relatedModel as IFBEvent)
    }
    case ReviewType.Recipe: {
      return getDetailRecipeLink(relatedModel as IFBRecipe)
    }
  }
  return ''
}
