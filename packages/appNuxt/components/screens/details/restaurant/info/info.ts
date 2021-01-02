import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types'
import { IFBPhoto } from 'ieattatypes/types/index'
import { starLargeDict } from '~/database/star_helper'
import { formatByTimeAgo, formatByTimeAgoForTest } from '~/database/utils/timeago_helper'
import { calcRateForRestaurant } from '~/database/rate_utils'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'

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

  public items: Array<IFBPhoto> = []
  public photosLen: number | null = null
  private isLoading = false

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const nextItem = this.items.concat([])
    await FirestoreService.instance.snapshotList({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Photos,
      queryBuilder: (query: any) => {
        return FirestoreService.instance.queryPhotoByGeoHashFromRestaurant({
          query,
          restaurant: this.restaurant
        })
      },
      iterateDocumentSnapshots: (data: IFBPhoto) => {
        nextItem.push(data)
      }
    })
    this.items = nextItem
    this.photosLen = nextItem.length
    this.isLoading = false
  }

  /**
   * Example:
   *   href="/biz_photos/the-ramen-bar-san-francisco?select=J73NiWfGvXslEK2EMIPSbA"
   * @param item
   */
  getImageLink (item: IFBPhoto) {
    return `${this.getSeeAllLink()}?select=${item.uniqueId}`
  }

  /**
   * Example:
   *   href="/biz_photos/the-ramen-bar-san-francisco"
   */
  getSeeAllLink () {
    return `/biz_photos/${this.restaurant.slug}`
  }

  getPhotoUrl (item: IFBPhoto) {
    if (item.originalUrl === '') {
      return require('~/assets/images/offline-sign-circular-band-label-sticker.png')
    }
    return item.originalUrl
  }

  getPhotosLen () {
    if (this.photosLen === undefined ||
      !this.photosLen
    ) {
      return ''
    }
    return 'See All ' + this.photosLen
  }

  async mounted () {
    await this._fetchPage()
  }
}
