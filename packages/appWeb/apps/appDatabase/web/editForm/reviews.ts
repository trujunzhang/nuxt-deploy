import * as Types from '@app/types'

export class Reviews {
  static getParams(editModel): IWriteWebParseObjectParams {
    const { originModel, editModelType } = editModel.form as IEditModelReviewsStateForm

    const {
      id,
      uniqueId,
      createdAt,
      updatedAt,
      syncPostedAt,
      flag
    } = originModel as IParseModelReviews

    const reviewRating = editModel.form.fields.reviewRating
    const reviewBody = editModel.form.fields.reviewBody

    const model: IParseModelReviews = {
      // commonProperties
      id,
      uniqueId,
      createdAt,
      updatedAt,
      syncPostedAt,
      flag,
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
    const object: IWriteWebParseObjectParams = {
      objectSchemaName: Types.model.PARSE_REVIEWS,
      editModelType,
      model
    }
    return object
  }
}
