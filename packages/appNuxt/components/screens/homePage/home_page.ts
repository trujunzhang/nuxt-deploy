import { Component, Vue, Watch } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes'
import { QuerySnapshot } from 'firebase/firebase-storage-compat'
import { FacebookLoader } from 'vue-content-loader'
import { FBCollections } from '~/database/constant'
import RestaurantItem from '~/components/screens/homePage/restaurantItem/restaurantItem.vue'
import NoResults from '~/components/screens/homePage/no_results.vue'
import HomeFooter from '~/components/screens/footer/footer.vue'
import { FirestoreService, QueryBuilder } from '~/database/services/firestore_service'

@Component({
  components: {
    FacebookLoader,
    HomeFooter,
    RestaurantItem,
    NoResults
  }
})
export default class HomePage extends Vue {
  public markers: any = []

  public placeHolders: number[] = [0, 1, 2, 3, 4]
  public items: Array<IFBRestaurant> = []

  private showNoResult: boolean = false
  private isLoaded = false
  private isLoading = false
  // The last visible document
  private lastVisible = null
  private find_desc: string | null = null

  shouldShowPlaceHolder () {
    return this.isLoading && !this.isLoaded
  }

  async firstPageLoad () {
    await this._fetchPage({
      queryBuilder: (query: any) => {
        return query
      },
      emptyHint: () => {
        this.showNoResult = true
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
      $fireStore: this.$fire.firestore,
      path: FBCollections.Restaurants,
      queryBuilder: (query: any) => {
        let nextQuery = query

        const search = this.find_desc
        if (search !== null && search !== undefined) {
          nextQuery = nextQuery.where('displayName', '>=', search)
            .orderBy('displayName', 'desc')
        }

        nextQuery = nextQuery.orderBy('updatedAt', 'desc')

        return queryBuilder(nextQuery).limit(2)
      },
      iterateDocumentSnapshots: (data: IFBRestaurant) => {
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
    this.isLoaded = true
    this.isLoading = false
  }

  async onWaypoint (e) {
    await this.nextPageLoad()
  }

  async mounted () {
    this.find_desc = (this.$route.query.find_desc as any)
    await this.resetPage()
  }

  async resetPage () {
    this.showNoResult = false
    this.items = []
    this.isLoading = false
    this.lastVisible = null

    await this.firstPageLoad()
  }

  @Watch('$route')
  async routeChanged (to: any, from: any) {
    this.find_desc = to.query.find_desc
    await this.resetPage()
  }
}
