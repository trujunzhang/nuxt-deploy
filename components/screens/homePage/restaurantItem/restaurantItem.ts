import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes'
import { starRegularDict } from '~/database/star_helper'
import { calcRateForRestaurant } from '~/database/rate_utils'

@Component({
  components: {}
})
export default class RestaurantItem extends Vue {
  @Prop({}) restaurant!: IFBRestaurant
  @Prop({}) index!: number

  mouseover () {
    // this.message = 'Good!'
  }

  mouseleave () {
    // this.message = 'Hover Me!'
  }

  getRestaurantUrl () {
    if (this.restaurant.originalUrl === '') {
      return require('~/assets/images/business_large_square.png')
    }
    return this.restaurant.originalUrl
  }

  /**
   * class="lemon--div__373c0__1mboc i-stars__373c0__1T6rz i-stars--regular-4__373c0__2YrSK border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK"
   */
  getRateStarClassName () {
    return `lemon--div__373c0__1mboc i-stars__373c0__1T6rz ${
      starRegularDict[
        calcRateForRestaurant(
          this.restaurant.rate,
          this.restaurant.reviewCount
        )
        ]
    } border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK`
  }

  getDetailRestaurantUrl () {
    return `/biz/${this.restaurant.slug}`
  }

  getRestaurantNote () {
    if (this.restaurant.extraNote !== '') {
      return this.restaurant.extraNote
    }
    return 'no note'
  }
}
