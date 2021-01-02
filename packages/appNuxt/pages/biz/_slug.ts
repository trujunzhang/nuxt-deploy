import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes'
import { namespace } from 'vuex-class'
import PhotoFooter from '~/components/screens/footer/footer_photo.vue'
import ReviewsList from '~/components/screens/details/reviews/reviewList/review_list.vue'
import RestaurantInfo from '~/components/screens/details/restaurant/info/info.vue'
import RestaurantEvent from '~/components/screens/details/restaurant/event/event.vue'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'
const ieattaConfigure = namespace('ieattaConfigure')

@Component({
  components: {
    PhotoFooter,
    RestaurantInfo,
    RestaurantEvent,
    ReviewsList
  }
})
export default class DetailPage extends Vue {
  public restaurant: IFBRestaurant | null = null
  private isLoading = false

  @ieattaConfigure.Mutation
  public SET_SHOW_404!: (payload: boolean) => void

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const restaurantSlug = this.$route.params.slug as string
    await FirestoreService.instance.snapshotList({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Restaurants,
      queryBuilder: (query: any) => {
        return query.where('slug', '==', restaurantSlug)
      },
      iterateDocumentSnapshots: (data: IFBRestaurant) => {
        this.restaurant = data
      },
      emptyHint: () => {
        this.SET_SHOW_404(true)
      }
    })
    this.isLoading = false
  }

  async mounted () {
    await this._fetchPage()
  }
}
