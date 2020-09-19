import * as Types from '@app/types'
import { ParseObjectsUtils } from '../utils'
import { DatabaseHelper, ParseFirstObjectHelper } from '../../helper'

export class Photos {
  static async createOnlineParseInstance(
    onlineParseObject: IParseObject,
    localRealmModelObject: IRealmModelPhotos
  ) {
    // Basic Fields
    onlineParseObject.set('photoType', localRealmModelObject.photoType)

    // Photo images.
    onlineParseObject.set('thumbnailUrl', localRealmModelObject.thumbnailUrl)
    onlineParseObject.set('originalUrl', localRealmModelObject.originalUrl)

    // step2: Photo's creator, the logged user submitted the photo.
    await DatabaseHelper.setCreatorForMobile({
      onlineParseObject,
      localRealmModelObject
    })

    // step3: set the relation by photo type.(For 'restaurant','recipe','user').
    await ParseObjectsUtils.setOnlineParsePhotoRelationByUniqueId({
      localRealmModelObject,
      onlineParseObject
    })

    // step4: save the restaurant and recipe together.
    if (localRealmModelObject.photoType === 'recipe') {
      const onlineRestaurantInstance: any = await ParseFirstObjectHelper.getFirstOnlineParseInstance(
        {
          objectSchemaName: Types.model.PARSE_RESTAURANTS,
          localRealmModelObject: localRealmModelObject.restaurant
        }
      )
      onlineParseObject.set('restaurant', onlineRestaurantInstance)
    }
  }
}
