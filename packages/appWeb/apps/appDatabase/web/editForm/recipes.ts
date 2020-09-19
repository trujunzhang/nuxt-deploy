import * as Types from '@app/types'

export class Recipes {
  static getParams(editModel): IWriteWebParseObjectParams {
    const { originModel, editModelType } = editModel.form as IEditModelRecipesStateForm

    const displayName = editModel.form.fields.displayName
    const price = editModel.form.fields.price

    const model: IParseModelRecipes = {
      // commonProperties
      id: originModel.id,
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
      // Model's creator
      creator: originModel.creator
    }

    const object: IWriteWebParseObjectParams = {
      objectSchemaName: Types.model.PARSE_RECIPES,
      editModelType,
      model
    }
    return object
  }
}
