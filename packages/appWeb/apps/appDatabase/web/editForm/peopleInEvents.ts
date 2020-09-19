import * as Types from '@app/types'

export class PeopleInEvents {
  static getParams(editModel): IWriteWebParseObjectParams {
    const { originModel, editModelType } = editModel.form as IEditModelPeopleInEventsStateForm

    // const model: IParseModelPeopleInEvent = {
    //   // commonProperties
    //   id: originModel.id,
    //   uniqueId: originModel.uniqueId,
    //   createdAt: originModel.createdAt,
    //   updatedAt: originModel.updatedAt,
    //   syncPostedAt: originModel.syncPostedAt,
    //   flag: originModel.flag,
    //   // Pointer
    //   restaurant: originModel.restaurant,
    //   event: originModel.event,
    //   user: originModel.user,

    //   // Recipes, join with ';'
    //   recipes: [],
    //   recipeUniqueIds: '',
    //   // Model's creator
    //   creator: originModel.creator
    // }

    const model: any = {}

    const object: IWriteWebParseObjectParams = {
      objectSchemaName: Types.model.PARSE_PEOPLE_IN_EVENTS,
      editModelType,
      model
    }
    return object
  }
}
