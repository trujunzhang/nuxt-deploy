// =====================================
// Edit Form Model  ====================
// =====================================
declare interface IEditParseQueryProps {
  orderby: string
  order: string
  pageIndex: number
  s: string
  status: string
  date: string | null
}

declare interface IEditModelQueryProps {
  paginationIndex: number
  dateSelector: string
  queryStatus: string
  tableSearch: string
  loginType: string
  orderBy: string
  orderType: string // 'desc' || 'asc'
}

declare interface IEditModelQueryRouter {
  query: IEditParseQueryProps
}

// Function
