import { UnderscoreUtils } from '@app/tools'
import { RecipeUniqueIdsHelper } from '@appModels/index' //from '@app/library' //  '@app/models'
import { NewParseObjectGenerator } from '@appDatabase/index' // '@app/library' //  '@app/database'

export class PeopleInEventHelper {
  private static fixNewOrderedRecipeIds(
    params: IPeopleInEventHelperUpdatePeopleInEventParseInstanceParams
  ) {
    const {
      // Current selection.
      hasOrdered,
      orderedRecipeIds,
      selectedRecipe
    } = params
    let newOrderedRecipeIds: string[] = orderedRecipeIds
    if (hasOrdered) {
      newOrderedRecipeIds = UnderscoreUtils.withoutInArray({
        array: orderedRecipeIds,
        id: selectedRecipe.id
      })
    } else {
      newOrderedRecipeIds.push(selectedRecipe.id)
    }

    return newOrderedRecipeIds
  }

  /**
   * Update exist PeopleInEvent.
   *
   * @param lastPeopleInEvent
   * @param params
   * @param newOrderedRecipeIdsAsString
   * @param recipes
   */
  private static updateExistPeopleInEvent(
    lastPeopleInEvent: IParseModelPeopleInEvent,
    params: IPeopleInEventHelperUpdatePeopleInEventParseInstanceParams,
    newOrderedRecipeIdsAsString: string,
    recipes: IParseModelRecipes[]
  ): IParseModelPeopleInEvent {
    lastPeopleInEvent.recipes = recipes
    lastPeopleInEvent.recipeUniqueIds = newOrderedRecipeIdsAsString
    return lastPeopleInEvent
  }

  /**
   * New PeopleInEvent instance.
   * @param params
   * @param newOrderedRecipeIdsAsString
   * @param recipes
   */
  private static newPeopleInEvent(
    params: IPeopleInEventHelperUpdatePeopleInEventParseInstanceParams,
    newOrderedRecipeIdsAsString: string,
    recipes: IParseModelRecipes[]
  ): IParseModelPeopleInEvent {
    const {
      // Relation
      event,
      // Current selection.
      selectedUserId
    } = params

    const newParseModel: IParseModelPeopleInEvent = NewParseObjectGenerator.generateNewPeopleInEventParseObject(
      {
        selectedUserId,
        restaurant: event.restaurant,
        event,
        newOrderedRecipeIdsAsString,
        recipes
      }
    )
    return newParseModel
  }

  /**
   * Update or New an 'PeopleInEvent' Parse Instance
   *
   * @param props
   * @param orderedRecipeIds
   * @param hasOrdered
   * @param recipe
   * @returns {*}
   */
  static updatePeopleInEventParseInstance(
    params: IPeopleInEventHelperUpdatePeopleInEventParseInstanceParams
  ): IParseModelPeopleInEvent {
    const {
      // Relation
      peopleInEventListDict,
      // Current selection.
      selectedUserId
    } = params

    // Step1: Get new ordered recipe objectIds.
    const newOrderedRecipeIds = PeopleInEventHelper.fixNewOrderedRecipeIds(params)

    // Step2: Get string of recipe's objectIds.
    const newOrderedRecipeIdsAsString: string = RecipeUniqueIdsHelper.getRecipeUniueIdsAsString(
      newOrderedRecipeIds
    )

    // Step3: Get recipes parse model from recipe's objectIds.
    const recipes: IParseModelRecipes[] = RecipeUniqueIdsHelper.getRecipeParseModels(
      newOrderedRecipeIds
    )

    // Step4: Finally, new/update PeopleInEvent parse model.
    let updatedPeopleInEvent: IParseModelPeopleInEvent
    if (Object.keys(peopleInEventListDict).indexOf(selectedUserId) !== -1) {
      const lastPeopleInEvent: IParseModelPeopleInEvent =
        peopleInEventListDict[selectedUserId].peopleInEvent
      updatedPeopleInEvent = PeopleInEventHelper.updateExistPeopleInEvent(
        lastPeopleInEvent,
        params,
        newOrderedRecipeIdsAsString,
        recipes
      )
    } else {
      updatedPeopleInEvent = PeopleInEventHelper.newPeopleInEvent(
        params,
        newOrderedRecipeIdsAsString,
        recipes
      )
    }

    return updatedPeopleInEvent
  }
}
