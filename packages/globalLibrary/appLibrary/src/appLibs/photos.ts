import { UnderscoreUtils } from '@app/tools'
import { MomentUtils } from '@app/tools'

export class Photos {
  static config = {
    paginationCountPerPage: 6 * 5,
    // paginationCountPerPage: 6 * 1, //Using it now.
    // July 29, 2017
    selectedPhotoCreatedAtFormat: 'MMMM DD, YYYY',
    placeHolderSmallImage: {
      PAGE_MAIN_FORM: '',
      PAGE_MAIN_FORM_WITH_PHOTO_OVERLAY: '',
      PAGE_PHOTOS_BROWSER_FORM: '',
      PAGE_PHOTOS_BROWSER_FORM_WITH_PHOTO_OVERLAY: '',
      PARSE_RESTAURANTS: '/static/default/blank_biz_small.png',
      PARSE_USERS: '/static/default/user_30_square.png',
      PARSE_RECORDS: '',
      PARSE_EVENTS: '/static/default/blank_biz_small.png',
      PARSE_RECIPES: '/static/default/blank_biz_small.png',
      PARSE_PHOTOS: '',
      PARSE_REVIEWS: '',
      PARSE_PEOPLE_IN_EVENT: ''
    },
    placeHolderLargeImage: {
      PAGE_MAIN_FORM: '',
      PAGE_MAIN_FORM_WITH_PHOTO_OVERLAY: '',
      PAGE_PHOTOS_BROWSER_FORM: '',
      PAGE_PHOTOS_BROWSER_FORM_WITH_PHOTO_OVERLAY: '',
      PARSE_RESTAURANTS: '/static/default/blank_biz_large.png',
      PARSE_USERS: '',
      PARSE_RECORDS: '',
      PARSE_EVENTS: '/static/default/blank_biz_large.png',
      PARSE_RECIPES: '',
      PARSE_PHOTOS: '',
      PARSE_REVIEWS: '',
      PARSE_PEOPLE_IN_EVENT: ''
    },
    photoTypes: {
      SECTION_PHOTOS_BROWSER_FOR_RESTAURANT: 'restaurant',
      SECTION_PHOTOS_BROWSER_FOR_EVENT: 'event',
      SECTION_PHOTOS_BROWSER_FOR_RECIPE: 'recipe',
      SECTION_PHOTOS_BROWSER_FOR_USER: 'user'
    }
  }

  static getPhotoThumbnailUrl(photo: IParseModelPhotos) {
    return photo.thumbnailUrl
  }

  static getOriginalUrl(photo: IParseModelPhotos) {
    return photo.originalUrl
  }

  static getImageUrlInListPhotosDict(params: IPhotoGetImageUrlInListPhotosDictParams) {
    const { model, listTask } = params
    const { id } = model
    const { listPhotosDict } = listTask
    if (!!listPhotosDict) {
      if (Object.keys(listPhotosDict).indexOf(id) !== -1) {
        return listPhotosDict[id]
      }
    }
    return ''
  }

  static getListThumbnailUrl(item: any = {}) {
    const photo = item.listPhoto || {}
    return Photos.getPhotoThumbnailUrl(photo)
  }

  static isPhotoParseObjectOwnRecipe(recipeUniqueId, photoParseInstance: IParseObject) {
    const recipeParseInstance = photoParseInstance.get('recipe')
    if (!!recipeParseInstance && recipeUniqueId === recipeParseInstance.get('uniqueId')) {
      return true
    }
    return false
  }

  static isPhotoOwnRecipe(recipeUniqueId: string, photo: IParseModelPhotos) {
    const recipe = photo.recipe
    if (!!recipe) {
      return recipeUniqueId === recipe.uniqueId
    }
    return false
  }

  static getPhotoType(sectionType) {
    const photoTypes = Photos.config.photoTypes
    return photoTypes[sectionType]
  }

  static removePhotoFromList(
    { photosCache },
    selectedPhoto: IParseModelPhotos
  ): IParseModelPhotos[] {
    const id = UnderscoreUtils.findWhereInArray({
      array: photosCache,
      properties: {
        id: selectedPhoto.id
      }
    })
    const nextPhotosCache = UnderscoreUtils.withoutInArray({
      array: photosCache,
      id
    }) as IParseModelPhotos[]
    return nextPhotosCache
  }

  static toSelectedPhotoCreatedAtString(createdAt: Date) {
    return MomentUtils.toDateString(createdAt, Photos.config.selectedPhotoCreatedAtFormat)
  }
}
