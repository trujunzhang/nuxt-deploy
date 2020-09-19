import * as queryString from 'query-string'
export class QueryStringUtils {
  static getQueryObject(url: string) {
    const newRouterUrl: any = queryString.parseUrl(url)
    return newRouterUrl.query
  }

  static getParseFromBody(body: any) {
    return queryString.parse(body)
  }
}
