declare interface IWebParseSingleInvokeParseCloudForUser {
  userId?: string
}

declare type IWebParseSingleInvokeParseCloudMethodData =
  | IStatisticReviewParams
  | IGoogleAddressFetchParams
  | IWebParseSingleInvokeParseCloudForUser

declare interface IWebParseSingleInvokeParseCloudMethodParams {
  methodType: string
  data: IWebParseSingleInvokeParseCloudMethodData
  parseId: string
  type?: string
}
