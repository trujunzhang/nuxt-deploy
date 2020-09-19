export class WebSearchHelper {
  static getNextSearch(router: IWebAppRouterProps, currentSearch: string | null) {
    const query = router.query as any
    const { search: nextSearch } = query

    let haveNextString = false
    if ((!!nextSearch && nextSearch !== currentSearch) || (!nextSearch && !!currentSearch)) {
      haveNextString = true
    }

    return {
      haveNextString,
      nextSearch
    }
  }
}
