import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'
import { starLargeDict } from '~/database/star_helper'
import { formatByTimeAgo, formatByTimeAgoForTest } from '~/database/utils/timeago_helper'
import { calcRateForRestaurant } from '~/database/rate_utils'

@Component({
  components: {}
})
export default class RestaurantInfo extends Vue {
  @Prop({}) restaurant!: IFBRestaurant

  /**
   * Example:
   *   href="/biz_attribute?biz_id=3YVy-af7Ipl7TVft3kquWg"
   */
  getEditLink () {
    return `/biz_attribute?biz_id=${this.restaurant.uniqueId}`
  }

  /**
   *  class="lemon--div__373c0__1mboc i-stars__373c0__1T6rz i-stars--large-3__373c0__3_Jon border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK"
   */
  getRateStarClassName () {
    return `lemon--div__373c0__1mboc i-stars__373c0__1T6rz ${
      starLargeDict[
        calcRateForRestaurant(
          this.restaurant.rate,
          this.restaurant.reviewCount
        )
        ]
    } border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK`
  }

  getRateCountStr () {
    return `${this.restaurant.reviewCount} reviews`
  }

  /**
   * Hours updated 2 weeks ago
   */
  getUpdatedDateStr () {
    const timeAgo: string = formatByTimeAgo(this.restaurant.updatedAt)
    return `Hours updated ${timeAgo}`
  }
}
