import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant, IFBUser } from 'ieattatypes/types/index'
import RestaurantItem from '~/components/screens/userDetail/items/restaurantItem/restaurant_item'
import { FirestoreService, QueryBuilder } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'

@Component({
  components: {
    RestaurantItem
  }
})
export default class UserDefaultRight extends Vue {
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
      $fireStore: this.$fireStore,
      path: FBCollections.Restaurants,
      queryBuilder: (query: any) => {
        const userId: any = this.$route.query.userid
        const nextQuery = query.where('creatorId', '==', userId)
          .orderBy('updatedAt', 'desc')

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
