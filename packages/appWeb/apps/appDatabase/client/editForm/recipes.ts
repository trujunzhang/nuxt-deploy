import * as Types from '@app/types'

export class Recipes {
  static getParams(editModel): IRealmSaverWriteLocalRealmObjectParams {
    const { originModel, editModelType } = editModel.form

    const displayName = editModel.form.fields.displayName
    const price = editModel.form.fields.price

    const model: IRealmModelRecipes = {
      // commonProperties
      objectId: originModel.objectId,
      uniqueId: originModel.uniqueId,
      createdAt: originModel.createdAt,
      updatedAt: originModel.updatedAt,
      syncPostedAt: originModel.syncPostedAt,
      flag: originModel.flag,
      // Attributes
      displayName,
      price,
      // Relations
      restaurant: originModel.restaurant,
      restaurantUniqueId: originModel.restaurantUniqueId,
      // Model's creator
      creator: originModel.creator
    }

    const object: IRealmSaverWriteLocalRealmObjectParams = {
      objectSchemaName: Types.model.PARSE_RECIPES,
      editModelType,
      model
    }
    return object
  }
}
