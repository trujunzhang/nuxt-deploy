import * as Types from '@app/types'
import { AppConstants } from '@app/types'
import { UnderscoreUtils } from '@app/tools'
import { ParseObjects } from '@appModels/index' //from '@app/library' //  '@app/models'

export class PhotosListForSingleModel {
  private photoRelations: IPhotoRelations = []
  private listPhotosDict: IListPhotosDict<string> = {}

  private getRelationsForPeoppleInEvents(parseModel: IParseModelPeopleInEvent) {
    // Step1: all recipes.
    this.photoRelations = UnderscoreUtils.getFieldArray({
      list: parseModel.recipes,
      propertyName: 'id'
    }).map((id: string) => {
      return {
        id,
        photoType: AppConstants.realmTypes[Types.model.PARSE_RECIPES]
      }
    })
    // Step2: current user.
    this.photoRelations.push({
      id: parseModel.user.id,
      photoType: AppConstants.realmTypes[Types.model.PARSE_USERS]
    })
  }

  private getRelationsForEvents(parseModel: IParseModelEvents) {
    this.photoRelations = [
      {
        id: parseModel.restaurant.id,
        photoType: AppConstants.realmTypes[Types.model.PARSE_RESTAURANTS]
      }
    ]
  }

  private getRelationsForCommon(parseModel: IParseCommonModel, objectSchemaName: string) {
    this.photoRelations = [
      {
        id: parseModel.id,
        photoType: AppConstants.realmTypes[objectSchemaName]
      }
    ]
  }

  async loadPhotosListForSingleModel(params: IAfterFetchHookHelperGetPropertiesAfterFetchParams) {
    const { parseModel } = params
    if (!parseModel) {
      throw new Error('not found parseModel, get extend properties!')
    }
    const { objectSchemaName } = parseModel
    switch (objectSchemaName) {
      case Types.model.PARSE_PEOPLE_IN_EVENTS: {
        this.getRelationsForPeoppleInEvents(parseModel as IParseModelPeopleInEvent)
        break
      }

      case Types.model.PARSE_EVENTS: {
        this.getRelationsForEvents(parseModel as IParseModelEvents)
        break
      }
      case Types.model.PARSE_RESTAURANTS:
      case Types.model.PARSE_RECIPES:
      case Types.model.PARSE_USERS: {
        this.getRelationsForCommon(parseModel, objectSchemaName)
        break
      }
    }
    this.listPhotosDict = await ParseObjects.ParseCloud.getListPhotosDict({
      photoRelations: this.photoRelations
    })
  }

  end() {
    return {
      listPhotosDict: this.listPhotosDict
    }
  }
}
