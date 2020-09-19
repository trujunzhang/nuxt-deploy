declare interface IWebParseSingleLoadParseObjectParams {
  query: IParseQuery
  parseId: string
  terms: IDatabaseCommonQuery
  parseFun: any
  afterFetchHookType?: string | null
  type?: string
}
