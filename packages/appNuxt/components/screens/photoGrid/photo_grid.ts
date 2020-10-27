import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant, IFBPhoto } from 'ieattatypes/types/index'
import { QuerySnapshot } from 'firebase/firebase-storage'
// import { loadPhotos } from '~/database/data/Photos'
import RestaurantTitle from '~/components/screens/photoGrid/restaurantTitle/restaurant_title.vue'
import { FBCollections } from '~/database/constant'
import { FirestoreService, QueryBuilder } from '~/database/services/firestore_service'

@Component({
  components: {
    RestaurantTitle
  }
})
export default class PhotoGrid extends Vue {
  @Prop({}) restaurant!: IFBRestaurant

  // public items: Array<IFBPhoto> = loadPhotos()
  public items: Array<IFBPhoto> = []

  private isLoading = false
  // The last visible document
  private lastVisible

  async firstPageLoad () {
    await this._fetchPage({
      queryBuilder: (query: any) => {
        return query
      },
      emptyHint: () => {
      }
    })
  }

  async nextPageLoad () {
    if (this.lastVisible === undefined) {
      return
    }
    await this._fetchPage({
      queryBuilder: (query: any) => {
        return query.startAfter(this.lastVisible)
      }
    })
  }

  async _fetchPage (
    params: {
      queryBuilder: QueryBuilder,
      emptyHint?: () => void
    }) {
    if (this.isLoading) {
      return
    }
    const {
      queryBuilder,
      emptyHint
    } = params
    this.isLoading = true
    const nextItem = this.items.concat([])
    await FirestoreService.instance.snapshotList({
      $fireStore: this.$fireStore,
      path: FBCollections.Photos,
      queryBuilder: (query: any) => {
        return queryBuilder(
          FirestoreService.instance.queryPhotoByGeoHashFromRestaurant({
            query,
            restaurant: this.restaurant
          })
        ).limit(5 * 3)
      },
      iterateDocumentSnapshots: (data: IFBPhoto) => {
        nextItem.push(data)
      },
      documentSnapshotsEvent: (documentSnapshots: QuerySnapshot) => {
        // Get the last visible document
        this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
        // console.log('last', this.lastVisible)
      },
      emptyHint
    })
    this.items = nextItem
    this.isLoading = false
  }

  async onWaypoint (e) {
    await this.nextPageLoad()
  }

  async mounted () {
    await this.firstPageLoad()
  }

  /**
   * Example:
   *   href="/biz_photos/the-ramen-bar-san-francisco?select=J73NiWfGvXslEK2EMIPSbA"
   * @param item
   */
  getImageLink (item: IFBPhoto) {
    return `${this.getSeeAllLink()}?select=${item.uniqueId}`
  }

  getPhotoUrl (item: IFBPhoto) {
    if (item.originalUrl === '') {
      return require('~/assets/images/offline-sign-circular-band-label-sticker.png')
    }
    return item.originalUrl
  }

  /**
   * Example:
   *   href="/biz_photos/the-ramen-bar-san-francisco"
   */
  getSeeAllLink () {
    return `/biz_photos/${this.restaurant.slug}`
  }
}
