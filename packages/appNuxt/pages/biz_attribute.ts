import { Component, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'
import { namespace } from 'vuex-class'
import RestaurantForm from '~/components/screens/edit/restaurant/restaurant_form.vue'
import RestaurantMap from '~/components/screens/edit/restaurant/restaurant_map.vue'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'

const ieattaConfigure = namespace('ieattaConfigure')

@Component({
  components: {
    RestaurantForm,
    RestaurantMap
  }
})
export default class EditRestaurant extends Vue {
  public restaurant: IFBRestaurant | null = null
  private isLoading = false
  private isNewRestaurant = false

  @ieattaConfigure.Mutation
  public SET_SHOW_404!: (payload: boolean) => void

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const restaurantId = this.$route.query.biz_id as string
    this.restaurant = await FirestoreService.instance.getData({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Restaurants,
      uniqueId: restaurantId,
      emptyHint: () => {
        this.SET_SHOW_404(true)
      }
    })
    this.isLoading = false
  }

  shouldShowPage () {
    if (this.isNewRestaurant) {
      return true
    } else if (this.restaurant) {
      return true
    }
    return false
  }

  checkNewRestaurantPage () {
    const restaurantId = this.$route.query.biz_id as string
    return restaurantId === undefined || restaurantId === null
  }

  async mounted () {
    this.isNewRestaurant = this.checkNewRestaurantPage()
    await this._fetchPage()
  }
}
