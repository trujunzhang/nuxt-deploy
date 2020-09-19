declare type LoadPhotosBrowserActionFun = (terms: IParseQueryPhotoTerm) => any

declare type InvokeParseCloudMethodActionForStatisticReviewFun = (
  data: IStatisticReviewParams,
  parseId: string
) => any

declare type InvokeParseCloudMethodActionForRevieForUserFun = (
  data: IFilterReviewForUserParams,
  parseId: string
) => any

declare type InvokeParseCloudMethodActionForGoogleAddressFetchFun = (
  data: IGoogleAddressFetchParams,
  parseId: string
) => any

declare type InvokeParseCloudMethodActionFun =
  | InvokeParseCloudMethodActionForStatisticReviewFun
  | InvokeParseCloudMethodActionForRevieForUserFun
  | InvokeParseCloudMethodActionForGoogleAddressFetchFun
