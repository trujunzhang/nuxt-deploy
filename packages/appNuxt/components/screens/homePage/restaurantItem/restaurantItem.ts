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

  getRestaurantPhotoUrl () {
    if (this.restaurant.originalUrl === '') {
      return require('~/assets/images/business_large_square.png')
    }
    return this.restaurant.originalUrl
  }

  /**
   * class=" i-stars__09f24__1T6rz i-stars--regular-4-half__09f24__1YrPo border-color--default__09f24__R1nRO overflow--hidden__09f24__3u-sw"
   */
  getRateStarClassName () {
    return `i-stars__09f24__1T6rz ${
      starRegularDict[
        calcRateForRestaurant(
          this.restaurant.rate,
          this.restaurant.reviewCount
        )
        ]
    } border-color--default__09f24__R1nRO overflow--hidden__09f24__3u-sw`
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
