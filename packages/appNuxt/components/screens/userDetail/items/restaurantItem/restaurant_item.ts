import { IFBRestaurant } from 'ieattatypes/types'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { starRegularRestaurantDict } from '~/database/star_helper'
import { calcRateForRestaurant } from '~/database/rate_utils'
import { formatDateForReview } from '~/database/utils/timeago_helper'

@Component({
  components: {}
})
export default class RestaurantItem extends Vue {
  @Prop({}) restaurant!: IFBRestaurant

  getDetailRestaurantUrl () {
    return `/biz/${this.restaurant.slug}`
  }

  getStreet () {
    const s = this.restaurant.address.split(',')
    return s.length > 0 ? s[0] : ''
  }

  getLocation () {
    const s = this.restaurant.address.split(',')
    return s.length >= 4 ? ([s[2], s[3]].join(',')) : ''
  }

  getRestaurantPublishedAt () {
    return `Started on ${formatDateForReview(this.restaurant.updatedAt)}`
  }

  /**
   * class="i-stars i-stars--regular-3 rating-large"
   */
  getRateStarClassName () {
    return `i-stars ${
      starRegularRestaurantDict[
        calcRateForRestaurant(
          this.restaurant.rate,
          this.restaurant.reviewCount
        )
        ]
    } rating-large`
  }

  getRestaurantPhotoUrl () {
    if (this.restaurant.originalUrl === '') {
      return require('~/assets/images/business_large_square.png')
    }
    return this.restaurant.originalUrl
  }
}
