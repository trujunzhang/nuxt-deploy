import * as Types from '@app/types'
import { AppConstants } from '@app/types'
import { ServerRoutePathHelper } from '@web/server/routesModels/utils'

export class PageFormHelper {
  static checkPhotoSelected(params: IWebAppRouterPropsParams): boolean {
    return !!PageFormHelper.checkPhotosBrowserSelection(params)
  }

  static getCurrentRoutePageType(params: IWebAppRouterPropsParams): string {
    const { router } = params
    const { pathname } = router
    const routePageType = ServerRoutePathHelper.getRoutePageType(pathname)
    // const routePageType = ServerRoutePathHelper.getRoutePageType('/xxx')

    const isPhotoBrowserSelectionId = PageFormHelper.checkPhotosBrowserSelection({
      router
    })

    return routePageType
  }

  static checkEditModel(params: IWebAppRouterPropsParams) {
    const { router } = params
    return router.asPath && router.asPath.indexOf('edit/') !== -1
  }

  static checkNewModel(params: IWebAppRouterPropsParams) {
    const { router } = params
    return router.asPath && router.asPath.indexOf('/new/') !== -1
  }

  static checkPhotosBrowserSelection(params: IWebAppRouterPropsParams) {
    const { router } = params
    const query: any = router.query
    if (!!query && !!query.select) {
      return query.select
    }
    return null
  }

  static checkPhotosBrowser(objectSchemaName, { router }) {
    const subDomain = AppConstants.SubDomainPhotos[objectSchemaName]
    return router.asPath.indexOf(subDomain + '/') !== -1
  }

  static checkRecipesListBrowser(objectSchemaName, props) {
    const subDomain = AppConstants.SubDomainRecipesList[objectSchemaName]
    return props.router.asPath.indexOf(subDomain + '/') !== -1
  }

  static getPageFormForEditForm(params: IWebAppRouterPropsParams) {
    if (PageFormHelper.checkEditModel(params)) {
      return Types.editModel.MODEL_FORM_TYPE_EDIT
    }

    if (PageFormHelper.checkNewModel(params)) {
      return Types.editModel.MODEL_FORM_TYPE_NEW
    }

    throw new Error('Not found PageType for edit page')
  }

  static getPageFormType(
    pageType,
    params: IWebAppRouterPropsParams,
    lastFormType: string | null = null
  ) {
    const { router } = params
    if (PageFormHelper.checkEditModel(params)) {
      return Types.editModel.MODEL_FORM_TYPE_EDIT
    }
    if (PageFormHelper.checkNewModel(params)) {
      return Types.editModel.MODEL_FORM_TYPE_NEW
    }
    if (!!router.asPath && router.asPath.indexOf('/event/users/') !== -1) {
      return Types.common.PAGE_ORDERED_USERS_IN_EVENT
    }
    const isPhotoBrowserSelectionId = PageFormHelper.checkPhotosBrowserSelection({
      router
    })
    if (!!isPhotoBrowserSelectionId) {
      if (lastFormType === Types.common.PAGE_MAIN_FORM) {
        return Types.common.PAGE_MAIN_FORM_WITH_PHOTO_OVERLAY
      }
      // else if (lastFormType === Types.common.PAGE_PHOTOS_BROWSER_FORM) {
      // return Types.common.PAGE_PHOTOS_BROWSER_FORM_WITH_PHOTO_OVERLAY
      // }
      if (!!lastFormType) {
        return lastFormType
      }
      return Types.common.PAGE_SINGLE_SELECTED_PHOTO_FORM
    }
    const isRecipesBrowser = PageFormHelper.checkRecipesListBrowser(pageType, {
      router
    })
    if (isRecipesBrowser) {
      return Types.common.PAGE_RECIPES_LIST_BROWSER_FORM
    }
    const isPhotoBrowser = PageFormHelper.checkPhotosBrowser(pageType, {
      router
    })
    if (isPhotoBrowser) {
      if (lastFormType !== Types.common.PAGE_MAIN_FORM) {
        return Types.common.PAGE_PHOTOS_BROWSER_FORM
      }
    }
    return Types.common.PAGE_MAIN_FORM
  }
}
