import { IFBRecipe, IFBRestaurant } from 'ieattatypes/types'
import { PhotoType } from '~/database/constant'

export const getSeeAllPhotoLink = (relatedModel: IFBRestaurant | IFBRecipe, photoType: string) => {
  return `/biz_photos/${relatedModel.slug}?type=${photoType}`
}

export const getSinglePhotoLink = (relatedModel: IFBRestaurant | IFBRecipe, photoType: string, selected: string) => {
  return `/biz_photos/${relatedModel.slug}?type=${photoType}&select=${selected}`
}

export const getUploadPhotoLink = (relatedModel: IFBRestaurant | IFBRecipe, photoType: string) => {
  return `/biz_user_photos/upload/${relatedModel.uniqueId}?type=${photoType}`
}
