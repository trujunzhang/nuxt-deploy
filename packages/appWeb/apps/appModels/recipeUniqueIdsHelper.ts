import { UnderscoreUtils } from '@app/tools'

import * as Types from '@app/types'
import { ParseModels, ParseObjects } from './index'

export class RecipeUniqueIdsHelper {
  static getRecipeUniueIdsAsString(uniqueIds: string[]) {
    if (uniqueIds.length === 0) {
      return ''
    } else if (uniqueIds.length === 1) {
      return uniqueIds[0]
    }
    return uniqueIds.join(';')
  }

  static getRecipeUniqueIdsStringFromParseRecipes(recipesParseObjects) {
    const uniqueIds = recipesParseObjects.map((recipe: IParseObject) => {
      return recipe.get('uniqueId')
    })

    return RecipeUniqueIdsHelper.getRecipeUniueIdsAsString(uniqueIds)
  }

  static getRecipeUniqueIdsArrayFromPeopleInEvent(
    peopleInEventRealmInstance: IRealmModelPeopleInEvents
  ) {
    const { recipeUniqueIds } = peopleInEventRealmInstance
    if (recipeUniqueIds === undefined || !recipeUniqueIds || recipeUniqueIds === '') {
      return []
    }
    return recipeUniqueIds.split(';')
  }

  static getRecipeUniqueIdsArrayFromString(recipeUniqueIdsAsString: string) {
    return recipeUniqueIdsAsString.split(';')
  }

  /**
   * Insert new choisen uniqueIds of recipe.
   * @param peopleInEventRealmInstance
   * @param uniqueIds
   */
  static insertRecipesUniqueIdsToPeopleInEventRealmInstance(
    peopleInEventRealmInstance: IRealmModelPeopleInEvents,
    uniqueIds: string[]
  ) {
    const array: string[] = RecipeUniqueIdsHelper.getRecipeUniqueIdsArrayFromPeopleInEvent(
      peopleInEventRealmInstance
    )
    const nextUniqueIds = UnderscoreUtils.unionArrays({
      array,
      ids: uniqueIds
    })
    return RecipeUniqueIdsHelper.getRecipeUniueIdsAsString(nextUniqueIds)
  }

  static getRecipeParseModels(orderedRecipeIds: string[]): IParseModelRecipes[] {
    return orderedRecipeIds.map((objectId) => {
      const onlineParseInstance: IParseObject = ParseObjects.getInstanceWithoutData(
        Types.model.PARSE_RECIPES,
        objectId
      )
      const recipeParseModel: IParseModelRecipes = ParseModels.fromParseRecipe(onlineParseInstance)
      return recipeParseModel
    })
  }
}
