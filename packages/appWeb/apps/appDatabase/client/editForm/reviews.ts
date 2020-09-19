import * as Types from '@app/types'

export class Reviews {
  static getParams(editModel): IRealmSaverWriteLocalRealmObjectParams {
    const { originModel, editModelType } = editModel.form

    const reviewRating = editModel.form.fields.reviewRating
    const reviewBody = editModel.form.fields.reviewBody

    const model: IRealmModelReviews = {
      // commonProperties
      objectId: originModel.objectId,
      uniqueId: originModel.uniqueId,
      createdAt: originModel.createdAt,
      updatedAt: originModel.updatedAt,
      syncPostedAt: originModel.syncPostedAt,
      flag: originModel.flag,
      // Attributes
      rate: reviewRating,
      body: reviewBody,
      reviewType: originModel.reviewType,
      // Pointer
      restaurant: originModel.restaurant,
      event: originModel.event,
      recipe: originModel.recipe,
      // Model's creator
      creator: originModel.creator
    }
    const object: IRealmSaverWriteLocalRealmObjectParams = {
      objectSchemaName: Types.model.PARSE_REVIEWS,
      editModelType,
      model
    }
    return object
  }
}
