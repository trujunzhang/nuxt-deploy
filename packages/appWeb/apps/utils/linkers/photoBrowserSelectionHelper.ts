import { AppLinks } from '@appUtils/index'

export class PhotoBrowserSelectionHelper {
  /**
   * No photo browser page's pageIndex:
   * http://localhost:3000/biz_photos/OnNGSfwoou/Forno%20Vecchio?select=Px63VDvuud
   *
   * Contains photo browser page's pageIndex:
   * http://localhost:3000/biz_photos/OnNGSfwoou/Forno%20Vecchio?select=Px63VDvuud && page = 1
   *
   * @param photo
   * @param objectSchemaName
   * @param forObject
   * @param props
   * @returns {string}
   */
  static getPhotosBrowserSelectionLink(params: IAppLinksGetPhotosBrowserSelectionLinkParams) {
    const { photo, objectSchemaName, forObject, router } = params

    // debugger
    const routeParams = AppLinks.getParamsForPhotosBrowser(objectSchemaName, forObject)
    const route = AppLinks.getRouteForPhotosBrowser(objectSchemaName)
    const pathname = route.reverse(routeParams)

    const query = {
      select: photo.id
    }
    const nextLink = AppLinks.adjustRouterQuery(
      {
        pathname,
        query
      },
      router
    )

    // debugger

    return nextLink
  }
}
