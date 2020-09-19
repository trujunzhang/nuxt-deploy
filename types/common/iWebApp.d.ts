declare interface UrlObjectCommon {
  auth?: string
  hash?: string
  host?: string
  hostname?: string
  href?: string
  path?: string
  pathname?: string
  protocol?: string
  search?: string
  slashes?: boolean
}

// Input to `url.format`
declare interface UrlObject extends UrlObjectCommon {
  port?: string | number
  query?: string | null | { [key: string]: any }
}
type UrlLike = UrlObject
declare interface IWebAppRouterProps {
  // router properties
  readonly components: {
    [key: string]: { Component: React.ComponentType<any>; err: any }
  }
  replace: any
  readonly pathname: string
  readonly route: string
  readonly asPath?: string
  readonly query?:
    | {
        [key: string]: boolean | boolean[] | number | number[] | string | string[]
      }
    | object

  // router methods
  reload(route: string): Promise<void>
  back(): void
  prefetch(url: string): Promise<React.ComponentType<any>>
  push(url: string | UrlLike, as?: string, options?: any): Promise<boolean>

  // router events
  onAppUpdated?(nextRoute: string): void
  onRouteChangeStart?(url: string): void
  onBeforeHistoryChange?(as: string): void
  onRouteChangeComplete?(url: string): void
  onRouteChangeError?(error: any, url: string): void
}
