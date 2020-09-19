import * as Types from '@app/types'

export class PeopleInEvents {
  static getParams(editModel): IRealmSaverWriteLocalRealmObjectParams {
    const { originModel, editModelType } = editModel.form

    const model: IRealmModelPeopleInEvents = {
      // commonProperties
      objectId: originModel.objectId,
      uniqueId: originModel.uniqueId,
      createdAt: originModel.createdAt,
      updatedAt: originModel.updatedAt,
      syncPostedAt: originModel.syncPostedAt,
      flag: originModel.flag,
      // Pointer
      restaurant: originModel.restaurant,
      event: originModel.event,
      user: originModel.user,

      // PointIds
      restaurantUniqueId: originModel.restaurant.uniqueId,
      eventUniqueId: originModel.event.uniqueId,
      userId: originModel.user.objectId,

      // Recipes, join with ';'
      recipeUniqueIds: '',
      // Model's creator
      creator: originModel.creator
    }

    const object: IRealmSaverWriteLocalRealmObjectParams = {
      objectSchemaName: Types.model.PARSE_PEOPLE_IN_EVENTS,
      editModelType,
      model
    }
    return object
  }
}
