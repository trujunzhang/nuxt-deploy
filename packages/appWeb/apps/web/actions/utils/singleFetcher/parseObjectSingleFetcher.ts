import { ParseFirstObjectHelper } from '@appDatabase/index' //'@app/library' //  '@app/database'
import * as Types from '@app/types'
import { AfterFetchHookHelper } from '@web/actions/utils'

export class ParseObjectSingleFetcher {
  // Local fields.
  private extendProps: any = {}
  private firstOnlineParseInstanceParams: IGetFirstOnlineParseInstanceByTermsParams
  private type: string
  private payload: IFetchedParseModel | any = {}

  constructor(params: IWebParseSingleLoadParseObjectParams) {
    const { query, terms, type = Types.common.OVERLAY_LOADED_MODEL_PAGE } = params

    this.type = type
    this.firstOnlineParseInstanceParams = {
      query,
      terms
    }
  }

  async queryFirstParseOnlineInstance() {
    const onlineParseInstance: IParseObjectWithNull = await ParseFirstObjectHelper.getFirstOnlineParseInstanceByTerms(
      this.firstOnlineParseInstanceParams
    )
    return onlineParseInstance
  }

  async getExtendProperties(
    params: IWebParseSingleLoadParseObjectParams,
    parseModel: IParseBaseModel
  ) {
    const { afterFetchHookType } = params
    if (!!afterFetchHookType) {
      const instance = new AfterFetchHookHelper(afterFetchHookType)
      await instance.getPropertiesAfterFetch({ parseModel })
      this.extendProps = instance.end()
    }
  }

  async fetch(params: IWebParseSingleLoadParseObjectParams) {
    // Step1: get the online single parse instance.
    const onlineParseInstance = await this.queryFirstParseOnlineInstance()

    const { parseId, parseFun } = params
    // Step2: parse it as model.
    const parseModel: IParseBaseModel = parseFun(onlineParseInstance)

    // Step3: try to fetch the extend properties.
    await this.getExtendProperties(params, parseModel)

    this.payload = {
      parseId,
      model: {
        ...parseModel,
        ...this.extendProps
      }
    }
  }

  end() {
    return {
      type: this.type,
      payload: this.payload
    }
  }
}
