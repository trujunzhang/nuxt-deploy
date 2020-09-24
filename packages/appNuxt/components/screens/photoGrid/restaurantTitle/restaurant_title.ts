import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'
import { calcRateForRestaurant } from '~/database/rate_utils'

@Component({
  components: {}
})
export default class RestaurantTitle extends Vue {
  @Prop({}) restaurant!: IFBRestaurant

  getRestaurantPhotoUrl () {
    if (this.restaurant.originalUrl === '') {
      return require('~/assets/images/business_large_square.png')
    }
    return this.restaurant.originalUrl
  }

  getDetailRestaurantUrl () {
    return `/biz/${this.restaurant.slug}`
  }

  getTitle () {
    return `Photos for ${this.restaurant.displayName}`
  }

  getSubTitle () {
    return `${this.restaurant.displayName}`
  }

  /**
   *  class="lemon--div__373c0__1mboc i-stars__373c0__1T6rz i-stars--large-3__373c0__3_Jon border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK"
   */
  getRateStarClassName () {
    return `i-stars i-stars--small-${
        calcRateForRestaurant(
          this.restaurant.rate,
          this.restaurant.reviewCount
        )
    } rating`
  }

  /**
   * Example:
   *  href="/biz_user_photos/upload/3YVy-af7Ipl7TVft3kquWg"
   */
  getUploadImageLink () {
    return `/biz_user_photos/upload/${this.restaurant.uniqueId}`
  }
}
