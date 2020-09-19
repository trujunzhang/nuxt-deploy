import { ParseModels } from '@appModels/index' //from '@app/library' //  '@app/models'
import * as Types from '@app/types'
import { AfterFetchHookHelper } from '@web/actions/utils'

export class ParseObjectsListFetch {
  // Local fields.
  private extendProps: any = {}
  private limit: number
  private listId: string

  // Constructor fields.
  private listTask: IListTask
  private objectsQuery: IParseQuery
  private terms: IParseQueryBaseTerm
  private afterFetchHookType: string | null
  private parseSchemaName: string
  private type: string

  private payload: any = {}

  constructor(params: IWebParseObjectsListPromiseListByTypeParams) {
    const {
      listTask,
      objectsQuery,
      terms,
      parseSchemaName,
      afterFetchHookType,
      type = Types.fetch.LIST_VIEW_LOADED_BY_TYPE
    } = params

    this.listTask = listTask
    this.objectsQuery = objectsQuery
    this.terms = terms
    this.afterFetchHookType = afterFetchHookType
    this.parseSchemaName = parseSchemaName
    this.type = type

    // Local fields.
    const { limit = -1, listId } = terms

    this.limit = limit
    this.listId = listId || ''
  }

  async queryParseResults() {
    const { pageIndex = 0, limit = -1, allItems } = this.terms
    if (allItems === false) {
      const skipCount = (pageIndex - 1) * limit
      this.objectsQuery.skip(skipCount).limit(limit)
    }
    const results = await this.objectsQuery.find({
      useMasterKey: true
    })
    const parsedResults = (results || []).map((map) => {
      return ParseModels.parseOnlineParseObject(this.parseSchemaName, map)
    })

    return parsedResults
  }

  async getExtendProperties(parsedResults) {
    if (!!this.afterFetchHookType) {
      const instance = new AfterFetchHookHelper(this.afterFetchHookType)
      await instance.getPropertiesAfterFetch({
        terms: this.terms,
        listTask: this.listTask,
        list: parsedResults
      })
      this.extendProps = instance.end()
    }
  }

  async fetch() {
    const totalCount = await this.objectsQuery.count()

    const parsedResults = await this.queryParseResults()

    // console.log('results:', results.length)
    // console.log('listId:', listId)

    await this.getExtendProperties(parsedResults)

    this.payload = {
      ...this.extendProps,
      list: parsedResults,
      listId: this.listId,
      limit: this.limit,
      totalCount
    }
  }

  end() {
    return {
      type: this.type,
      payload: this.payload
    }
  }
}
