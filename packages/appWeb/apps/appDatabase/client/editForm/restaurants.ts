import * as Types from '@app/types'
import { GeoHashUtils } from '@app/tools'

export class Restaurants {
  static getParams(editModel): IRealmSaverWriteLocalRealmObjectParams {
    const { originModel, editModelType } = editModel.form

    const displayName = editModel.form.fields.displayName

    const { latitude, longitude } = originModel
    const model: IRealmModelRestaurants = {
      // commonProperties
      objectId: originModel.objectId,
      uniqueId: originModel.uniqueId,
      createdAt: originModel.createdAt,
      updatedAt: originModel.updatedAt,
      syncPostedAt: originModel.syncPostedAt,
      flag: originModel.flag,
      // Attributes
      displayName,
      // Location
      address: originModel.address,
      geoHash: GeoHashUtils.encode(latitude, longitude),
      latitude,
      longitude,
      // Model's creator
      creator: originModel.creator
    }

    console.log('restaurant: model, ', model)

    const object: IRealmSaverWriteLocalRealmObjectParams = {
      objectSchemaName: Types.model.PARSE_RESTAURANTS,
      editModelType,
      model
    }
    return object
  }
}
