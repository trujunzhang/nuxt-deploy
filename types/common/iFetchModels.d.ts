declare interface IListTask {
  id?: string
  ready: boolean
  totalCount: number
  allItems: boolean
  limit: number
  pageIndex: number
  results: any
  firstPagination?: boolean
}

declare interface IListWithPhotosDictTask extends IListTask {
  listPhotosDict: IListPhotosDict<string>
}
