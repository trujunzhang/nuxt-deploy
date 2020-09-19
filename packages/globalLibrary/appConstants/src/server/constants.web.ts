import { RouteParserUtils as Route } from '@app/tools'

let appDomain = 'https://ieatta-web.herokuapp.com'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  appDomain = 'http://localhost:4000'
}

export const webDomain = appDomain

export function getServerURLForParse(): string {
  const route = new Route(`:webDomain/parse`)
  return route.reverse({
    webDomain
  }) as string
}
