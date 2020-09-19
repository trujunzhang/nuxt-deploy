import * as Types from '@app/types'
import { PageFormHelper } from '@appUtils/index'
import { UnderscoreUtils } from '@app/tools'

export class FilterRoutes {
  static getSelectPhoto({ router }, { results }, lastPhotoIndex) {
    if (results && results.length > 0) {
      const currentSelectedPhotoId = PageFormHelper.checkPhotosBrowserSelection({
        router
      })
      if (!!currentSelectedPhotoId && currentSelectedPhotoId !== '') {
        const selectedIndex = UnderscoreUtils.findLastIndex({
          array: results,
          id: currentSelectedPhotoId
        })
        if (selectedIndex === -1) {
          throw new Error('No matched selected photoId!')
        }
        return selectedIndex
      }
    }
    return lastPhotoIndex
  }

  static getLoginFormType({ router }) {
    const { pathname } = router
    if (pathname.indexOf('login') !== -1) {
      return Types.login.LOGIN_FORM_TYPE_LOGIN
    } else if (pathname.indexOf('logout') !== -1) {
      return Types.login.LOGIN_FORM_TYPE_LOG_OUT
    } else if (pathname.indexOf('signup') !== -1) {
      return Types.login.LOGIN_FORM_TYPE_REGISTER
    }
    throw new Error('Can not check the login form page type!')
  }

  static checkLoginFormPage({ router }) {
    const { pathname } = router
    return (
      pathname.indexOf('login') !== -1 ||
      pathname.indexOf('logout') !== -1 ||
      pathname.indexOf('signup') !== -1
    )
  }

  static getUserQueryId({ router, currentUser }) {
    const { asPath } = router
    if (asPath.indexOf('profile') !== -1) {
      return currentUser.id
    }
    return router.query.uid || ''
  }

  static checkNeedUpdatePhotosTask(lastPageForm, newPageForm) {
    return (
      lastPageForm !== Types.common.PAGE_MAIN_FORM_WITH_PHOTO_OVERLAY &&
      lastPageForm !== Types.common.PAGE_PHOTOS_BROWSER_FORM_WITH_PHOTO_OVERLAY &&
      newPageForm !== Types.common.PAGE_MAIN_FORM_WITH_PHOTO_OVERLAY &&
      newPageForm !== Types.common.PAGE_PHOTOS_BROWSER_FORM_WITH_PHOTO_OVERLAY &&
      lastPageForm !== newPageForm
    )
  }
}
