import * as Types from '@app/types'

import { ParseObjects } from '@appModels/index'

export class Restaurants {
  static getParams(editModel: IEditModelState): IWriteWebParseObjectParams {
    const { originModel, editModelType } = editModel.form as IEditModelRestaurantsStateForm

    const originalModel = editModel.form.originModel
    const { id, uniqueId } = originalModel
    const displayName = editModel.form.fields.displayName
    const latitude = editModel.form.fields.latitude
    const longitude = editModel.form.fields.longitude
    const address = editModel.form.fields.address
    const street_number = editModel.form.fields.street_number
    const route = editModel.form.fields.route
    const locality = editModel.form.fields.locality
    const sublocality = editModel.form.fields.sublocality
    const country = editModel.form.fields.country
    const postal_code = editModel.form.fields.postal_code
    const administrative_area = editModel.form.fields.administrative_area

    const geoLocation = ParseObjects.ParseGeoLocation.createGeoLocation({
      latitude,
      longitude
    })

    const model: IParseModelRestaurants = {
      // commonProperties
      id,
      uniqueId,
      createdAt: originModel.createdAt,
      updatedAt: originModel.updatedAt,
      syncPostedAt: originModel.syncPostedAt,
      flag: originModel.flag,
      // Attributes
      displayName,
      geoLocation,
      address,
      street_number,
      route,
      locality,
      sublocality,
      country,
      postal_code,
      administrative_area,
      // Model's creator
      creator: originModel.creator
    }

    // console.log('restaurant: model, ', model)

    const object: IWriteWebParseObjectParams = {
      objectSchemaName: Types.model.PARSE_RESTAURANTS,
      editModelType,
      model
    }
    return object
  }
}
