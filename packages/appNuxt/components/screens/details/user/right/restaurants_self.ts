import { Component, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes'
import { QuerySnapshot } from 'firebase/firebase-storage-compat'
import { namespace } from 'vuex-class'
import { FBCollections } from '~/database/constant'
import RestaurantItem from '~/components/screens/homePage/restaurantItem/restaurantItem.vue'
import NoResults from '~/components/screens/homePage/no_results.vue'
import HomeFooter from '~/components/screens/footer/footer.vue'
import { FirestoreService, QueryBuilder } from '~/database/services/firestore_service'
import { IAuthUser } from '~/database/models/auth_user_model'

const auth = namespace('auth')
@Component({
  components: {
    HomeFooter,
    RestaurantItem,
    NoResults
  }
})
export default class UserDetailRestaurantsSelf extends Vue {
  @auth.State
  public user!: IAuthUser | null

  public markers: any = []

  public items: Array<IFBRestaurant> = []

  private showNoResult: boolean = false
  private isLoading = false
  // The last visible document
  private lastVisible = null
  private find_desc: string | null = null

  showEmptyHint () {
    return this.showNoResult
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
        const userId = this.$route.query.userid as any || this.user?.uid
        return queryBuilder(FirestoreService.instance.queryByCreatorId({
          query,
          userId
        })).limit(2)
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
}
