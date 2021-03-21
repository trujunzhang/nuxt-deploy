import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBEvent, IFBRestaurant } from 'ieattatypes/types'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'
import { formatDateString } from '~/database/utils/timeago_helper'
import { starLargeDict } from '~/database/star_helper'
import { calcRateForRestaurant } from '~/database/rate_utils'
import { getDetailRestaurantLink } from '~/utils/linkHelper/detail'

@Component({
  components: {}
})
export default class EventInfo extends Vue {
  @Prop({}) event !: IFBEvent

  public restaurant: IFBRestaurant | null = null

  /**
   *  class=" i-stars__373c0__1BRrc i-stars--large-3__373c0__JLUyg border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK"
   */
  getRateStarClassName () {
    return `i-stars__373c0__1BRrc  ${
      starLargeDict[
        calcRateForRestaurant(
          this.event.rate,
          this.event.reviewCount
        )
        ]
    }  border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK`
  }

  getRateCountStr () {
    return `${this.event.reviewCount} reviews`
  }

  /**
   * Monday, Jan 11, 12:00 am
   */
  getEventStartString () {
    return `${formatDateString(this.event.start)}`
  }

  /**
   * Wednesday, Feb 10, 12:00 am
   */
  getEventEndString () {
    return `${formatDateString(this.event.end)}`
  }

  getReviewsCountInRestaurant () {
    if (this.restaurant === null) {
      return ' reviews'
    }
    return `${this.restaurant.reviewCount} reviews`
  }

  getDetailRestaurantAddress () {
    if (this.restaurant === null) {
      return ''
    }
    return this.restaurant.address
  }

  getDetailRestaurantTitle () {
    if (this.restaurant === null) {
      return ''
    }
    return this.restaurant.displayName
  }

  getDetailRestaurantUrl () {
    if (this.restaurant === null) {
      return ''
    }
    return getDetailRestaurantLink(this.restaurant)
  }

  getRestaurantPhotoUrl () {
    if (this.restaurant === null || this.restaurant.originalUrl === '') {
      return require('~/assets/images/business_large_square.png')
    }
    return this.restaurant.originalUrl
  }

  /**
   * Example:
   *   href="/biz_attribute?biz_id=3YVy-af7Ipl7TVft3kquWg"
   */
  getEditLink () {
    // return `/biz_attribute?biz_id=${this.restaurant.uniqueId}`
  }

  private isLoading = false

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    await FirestoreService.instance.snapshotList({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Restaurants,
      queryBuilder: (query: any) => {
        return query.where('uniqueId', '==', this.event.restaurantId)
      },
      iterateDocumentSnapshots: (data: IFBRestaurant) => {
        this.restaurant = data
      }
    })
    this.isLoading = false
  }

  async mounted () {
    await this._fetchPage()
  }
}
