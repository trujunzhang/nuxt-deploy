import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant, IFBPhoto } from 'ieattatypes/types/index'
import { loadPhotos } from '~/database/data/Photos'
import RestaurantTitle from '~/components/screens/photoGrid/restaurantTitle/restaurant_title.vue'
import { FBCollections } from '~/database/constant'
import { getGeoHashForRestaurant } from '~/database/geohash_utils'

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

  firstPageLoad () {
    const first = this.$fireStore.collection(FBCollections.Photos)
    this._fetchPage(first)
  }

  nextPageLoad () {
    if (this.lastVisible === undefined) {
      return
    }
    const next = this.$fireStore.collection(FBCollections.Photos)
      .startAfter(this.lastVisible)
    this._fetchPage(next)
  }

  _fetchPage (query) {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const restaurantGeoHash = getGeoHashForRestaurant(this.restaurant)
    const nextQuery = query
      .where('geoHash', '>', restaurantGeoHash)
      .limit(5 * 3)
    // .orderBy("population")
    nextQuery.get().then(
      (documentSnapshots) => {
        // Get the last visible document
        this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
        // console.log('last', this.lastVisible)

        const nextItem = this.items.concat([])
        // console.log('.........')
        documentSnapshots.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data()}`)
          nextItem.push(doc.data())
        })
        this.items = nextItem
        this.isLoading = false
      }
    ).catch((ex) => {
      this.isLoading = false
    })
  }

  onWaypoint (e) {
    this.nextPageLoad()
  }

  toggle () {
    this.nextPageLoad()
  }

  mounted () {
    this.firstPageLoad()
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
   * @param item
   */
  getSeeAllLink () {
    return `/biz_photos/${this.restaurant.slug}`
  }
}
