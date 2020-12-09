import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBPhoto } from 'ieattatypes'
import { IFBRestaurant } from 'ieattatypes/types/index'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'

@Component({
  components: {}
})
export default class RestaurantPhotoHeader extends Vue {
  @Prop({}) restaurant!: IFBRestaurant
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
