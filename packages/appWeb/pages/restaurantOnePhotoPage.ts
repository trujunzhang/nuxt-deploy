import { reduxPage } from '@config/redux'

/**
 * routePage.RESTAURANT_ONE_PHOTO_PAGE
 *
 * 1.1. IEAPageWithRestaurantObject
 * 1.2. IEAPageWithStatistic
 * 1.3. IEAPageWithPhotosList
 *
 * 2.1. IEAPhotosSingleLayout || IEAPhotosBrowserLayout
 */
export default reduxPage({
  pageKey: 'IEAPageWithRestaurantObject',
  showHeaderPanel: true
})
