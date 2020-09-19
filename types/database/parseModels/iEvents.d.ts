/// <reference path="iParseBaseModels.d.ts" />

declare interface IParseModelEvents extends IParseModelNewEvent {
  // Attributes
  displayName: string
  slug: string
  // Detailed Event Page
  listPhotosDict?: IListPhotosDict<string>
}
declare interface IParseModelNewEvent extends IParseCommonModel {
  displayName: string
  want: string
  start: Date
  end: Date
  // Pointer
  restaurant: IParseModelRestaurants
}
