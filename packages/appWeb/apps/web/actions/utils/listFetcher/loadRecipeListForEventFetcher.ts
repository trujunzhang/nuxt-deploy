import { PeopleInEvent } from '@app/library' //  '@app/libs'
import { ParseUtils } from '@appParse/index' // '@app/library' //  '@app/parse'
import { ParseModels } from '@appModels/index' //from '@app/library' //  '@app/models'
import { AfterFetchHookHelper } from '@web/actions/utils'
import * as Types from '@app/types'

export class LoadRecipeListForEventFetcher {
  private listTask
  private terms
  private parseSchemaName

  private fetchedList: any = []
  private extendProps = {}

  constructor(listTask, terms, parseSchemaName) {
    this.listTask = listTask
    this.terms = terms
    this.parseSchemaName = parseSchemaName
  }

  private async getRecipesList(recipeIds) {
    const recipesQuery = ParseUtils.getRecipesParameters({
      recipeIds
    })
    const recipeResults = await recipesQuery.find()
    const list = (recipeResults || []).map((map) => {
      return ParseModels.parseOnlineParseObject(this.parseSchemaName, map)
    })

    return list
  }

  async fetch(objectsQuery: IParseQuery, afterFetchHookType: string) {
    const results = await objectsQuery.find()
    const peopleInEventModels = (results || []).map(ParseModels.fromParsePeopleInEvent)
    const recipeIds = PeopleInEvent.getRecipeIdsForQuery(peopleInEventModels)

    const list = await this.getRecipesList(recipeIds)
    if (!!afterFetchHookType) {
      // this.extendProps = await afterFetchHook(this.terms, this.listTask, list)
      const instance = new AfterFetchHookHelper(afterFetchHookType)
      await instance.getPropertiesAfterFetch({
        terms: this.terms,
        listTask: this.listTask,
        list
      })
      this.extendProps = instance.end()
    }
    this.fetchedList = list
  }

  end() {
    const payload = {
      ...this.extendProps,
      list: this.fetchedList,
      listTas: this.listTask,
      listId: this.terms.listId,
      limit: this.terms.limit,
      totalCount: -1
    }
    const action = {
      type: Types.fetch.LIST_VIEW_LOADED_BY_TYPE,
      payload
    }
    return action
  }
}
