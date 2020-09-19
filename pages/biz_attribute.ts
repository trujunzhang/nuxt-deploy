import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant, IFBReview } from 'ieattatypes/types/index'
import RestaurantForm from '~/components/screens/editRestaurant/restaurant_form.vue'
import RestaurantMap from '~/components/screens/editRestaurant/restaurant_map.vue'
import { ReviewHelper } from '~/database/review_helper'
import { RestaurantHelper } from '~/database/restaurant_helper'

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

  _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    RestaurantHelper.getSingleRestaurantFromId(
      this.$route.query.biz_id as string,
      this.$fireStore,
      (restaurant: IFBRestaurant | null) => {
        this.restaurant = restaurant
        this.isLoading = false
      })
  }

  shouldShowPage () {
    if (this.isNewRestaurant) {
      return true
    } else if (this.restaurant) {
      return true
    }
    return false
  }

  mounted () {
    this.isNewRestaurant = RestaurantHelper.checkNewRestaurantPage(this.$route)
    this._fetchPage()
  }
}
