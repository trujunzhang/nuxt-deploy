import { Component, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'
import { namespace } from 'vuex-class'
import RestaurantItem from '~/components/screens/details/user/items/restaurantItem/restaurant_item'
import { FirestoreService, QueryBuilder } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'
import { IAuthUser } from '~/database/models/auth_user_model'

const auth = namespace('auth')

@Component({
  components: {
    RestaurantItem
  }
})
export default class UserDefaultRight extends Vue {
  @auth.State
  public user!: IAuthUser | null

  public items: Array<IFBRestaurant> = []

  private showNoResult: boolean = false
  private isLoading = false
  private isLoaded = false

  showEmptyHint () {
    return this.isLoaded && this.items.length === 0
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
        const nextQuery = FirestoreService.instance.queryByCreatorId({
          query,
          userId
        })
        return queryBuilder(nextQuery).limit(5)
      },
      iterateDocumentSnapshots: (data: IFBRestaurant) => {
        nextItem.push(data)
      },
      emptyHint
    })
    this.items = nextItem
    this.isLoaded = true
    this.isLoading = false
  }

  async mounted () {
    await this.firstPageLoad()
  }
}
