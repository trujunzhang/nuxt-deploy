import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes'
import { FBCollections } from '~/database/constant'
import { restaurants, loadRestaurants } from '~/database/data/Restaurants'
import RestaurantItem from '~/components/screens/homePage/restaurantItem/restaurantItem.vue'
import HomeFooter from '~/components/screens/footer/footer.vue'

@Component({
  components: {
    HomeFooter,
    RestaurantItem
  }
})
export default class HomePage extends Vue {
  public markers: any = []

  // public items: Array<IFBRestaurant> = loadRestaurants()
  public items: Array<IFBRestaurant> = []

  private isLoading = false
  // The last visible document
  private lastVisible

  firstPageLoad () {
    const first = this.$fireStore.collection(FBCollections.Restaurants)
    this._fetchPage(first)
  }

  nextPageLoad () {
    if (this.lastVisible === undefined) {
      return
    }
    const next = this.$fireStore.collection(FBCollections.Restaurants)
      .startAfter(this.lastVisible)
    this._fetchPage(next)
  }

  _fetchPage (query) {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const nextQuery = query.limit(2)
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
}
