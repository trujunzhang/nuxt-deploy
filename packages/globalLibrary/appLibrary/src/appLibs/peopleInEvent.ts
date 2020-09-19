import { UnderscoreUtils } from '@app/tools'

export class PeopleInEvent {
  static config = {
    paginationCountPerPage: 10
  }

  static getRecipeIdsForQuery(peopleInEventModels) {
    const multipleArrays = UnderscoreUtils.getFieldArrayWithoutUndefined({
      list: peopleInEventModels,
      propertyName: 'recipes'
    })
    const arrays = UnderscoreUtils.reduceForArray({
      arrays: multipleArrays
    })
    let recipeIds = UnderscoreUtils.getFieldArrayWithoutUndefined({
      list: arrays,
      propertyName: 'id'
    })
    recipeIds = UnderscoreUtils.uniqueInArray({
      array: recipeIds
    })
    recipeIds = recipeIds.slice(0, 0 + PeopleInEvent.config.paginationCountPerPage)
    return recipeIds
  }

  static getOtherUsersAlsoOrderedRecipe(terms, listTask, list) {
    const users: any = []
    const userIds: any = []
    list.map((item: any) => {
      const user: any = item.user
      if (userIds.indexOf(user.id) === -1) {
        users.push(user)
        userIds.push(user.id)
      }
    })
    return users
  }

  static getOrderedRecipeDict(peopleInEventListTask): IPeopleInEventListDict {
    const dict: IPeopleInEventListDict = {}
    peopleInEventListTask.results.map((item: any) => {
      const user = item.user
      dict[user.id] = {
        peopleInEvent: item,
        recipes: item.recipes
      }
    })
    return dict
  }

  static getOrderedRecipeCount(user, peopleInEventListDict: IPeopleInEventListDict) {
    if (Object.keys(peopleInEventListDict).indexOf(user.id) === -1) {
      return 0
    }
    return peopleInEventListDict[user.id].recipes.length
  }

  static getOrderedRecipeIds({ peopleInEventListDict, selectedUserId }): string[] {
    if (Object.keys(peopleInEventListDict).indexOf(selectedUserId) !== -1) {
      const orderedRecipes = peopleInEventListDict[selectedUserId].recipes
      return UnderscoreUtils.getFieldArrayWithoutUndefined({
        list: orderedRecipes,
        propertyName: 'id'
      })
    }
    return []
  }

  /**
   * Basically, the 'peopleInEvent' parse instance can be created and removed as the same instance.
   * For Example:
   *     1. Created a 'PeopleInEvent' parse object for some use in the event and flagged it as '1'.
   *     2. One day, the 'PeopleInEvent' parse object will be removed only flagged as '0'.
   *     3. Other day, some user also want to create it again, but the parse instance already exist,
   *        So do not need to create a new 'PeopleInEvent' parse object,
   *        Just query it using 'PeopleInEvent' uniqueId.
   * @param eventUniqueId - uniqueId of the event
   * @param userId - id of the user
   * @returns {string}
   */
  static generateParseObjectUniqueId(eventUniqueId: string, userId: string) {
    return `${eventUniqueId}_${userId}`
  }

  static hasOrdered({ orderedRecipeIds }, recipe: IParseModelRecipes) {
    return orderedRecipeIds.indexOf(recipe.id) !== -1
  }
}
