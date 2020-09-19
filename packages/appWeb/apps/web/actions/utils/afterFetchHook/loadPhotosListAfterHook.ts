import { PeopleInEvent } from '@app/library' //  '@app/libs'
import * as Types from '@app/types'
import { AppConstants } from '@app/types'
import { UnderscoreUtils } from '@app/tools'
import { ParseObjects } from '@appModels/index' //from '@app/library' //  '@app/models'

export class LoadPhotosListAfterHook {
  private photoRelations: IPhotoRelations = []
  private listPhotosDict: IListPhotosDict<string> = {}
  private extendProps: any = {}

  private getRelationsForUsers(params: IAfterFetchHookHelperGetPropertiesAfterFetchParams) {
    const { terms, listTask, list } = params
    let users: any = []
    const { isUsersRelation } = terms
    if (isUsersRelation) {
      users = PeopleInEvent.getOtherUsersAlsoOrderedRecipe(terms, listTask, list)
      this.extendProps.orderedUsers = users
    } else {
      users = list
    }
    const userIds = UnderscoreUtils.getFieldArrayWithoutUndefined({
      list: users,
      propertyName: 'id'
    })
    this.photoRelations = userIds.map((id) => {
      return {
        id,
        photoType: AppConstants.realmTypes[Types.model.PARSE_USERS]
      }
    })
  }

  private getRelationsForPeopleInEvent(params: IAfterFetchHookHelperGetPropertiesAfterFetchParams) {
    const { terms, listTask, list } = params
    const ids = UnderscoreUtils.getObjectFieldArray({
      list,
      objectPropertyName: 'user.id'
    })
    this.photoRelations = ids.map((id) => {
      return {
        id,
        photoType: AppConstants.realmTypes[Types.model.PARSE_USERS]
      }
    })
  }

  private getRelationsForReviews(params: IAfterFetchHookHelperGetPropertiesAfterFetchParams) {
    const { terms, listTask, list } = params

    const { reviewListPageType } = terms
    switch (reviewListPageType) {
      case Types.reviewListPage.REVIEW_LIST_TYPE_USER_PROFILE_ABOUT: {
        this.photoRelations = list.map((item) => {
          let reviewForObject = item[item.reviewType]
          if (reviewForObject.objectSchemaName === Types.model.PARSE_EVENTS) {
            reviewForObject = reviewForObject.restaurant
          }
          return {
            id: reviewForObject.id,
            photoType: AppConstants.realmTypes[reviewForObject.objectSchemaName]
          }
        })
        break
      }
      default: {
        const ids = UnderscoreUtils.getObjectFieldArray({
          list,
          objectPropertyName: 'creator.id'
        })
        this.photoRelations = ids.map((id) => {
          return {
            id,
            photoType: AppConstants.realmTypes[Types.model.PARSE_USERS]
          }
        })
        break
      }
    }
  }

  private getRelationsForEvents(params: IAfterFetchHookHelperGetPropertiesAfterFetchParams) {
    const { terms, listTask, list } = params
    const ids = UnderscoreUtils.getObjectFieldArray({
      list,
      objectPropertyName: 'restaurant.id'
    })
    this.photoRelations = ids.map((id) => {
      return {
        id,
        photoType: AppConstants.realmTypes[Types.model.PARSE_RESTAURANTS]
      }
    })
  }

  async loadPhotosList(params: IAfterFetchHookHelperGetPropertiesAfterFetchParams) {
    const { terms, listTask, list } = params
    const { objectSchemaName } = terms

    switch (objectSchemaName) {
      // For loadOtherUsersAlsoOrderedRecipeList.
      // For loadUsersWithoutAnonymousList.
      case Types.model.PARSE_USERS: {
        this.getRelationsForUsers(params)
        break
      }
      case Types.model.PARSE_PEOPLE_IN_EVENTS: {
        this.getRelationsForPeopleInEvent(params)
        break
      }
      case Types.model.PARSE_REVIEWS: {
        this.getRelationsForReviews(params)
        break
      }
      case Types.model.PARSE_EVENTS: {
        this.getRelationsForEvents(params)
        break
      }
      default:
        const ids = UnderscoreUtils.getFieldArrayWithoutUndefined({
          list,
          propertyName: 'id'
        })
        this.photoRelations = ids.map((id) => {
          return {
            id,
            photoType: AppConstants.realmTypes[objectSchemaName]
          }
        })
        break
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
