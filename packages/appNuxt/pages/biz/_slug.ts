import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes'
import HomeFooter from '~/components/screens/footer/footer.vue'
import ReviewsList from '~/components/screens/details/reviews/reviewList/review_list.vue'
import RestaurantPhotoHeader from '~/components/screens/details/photos/photos_header.vue'
import RestaurantInfo from '~/components/screens/details/info/info.vue'
import RestaurantEvent from '~/components/screens/details/event/event.vue'
import { RestaurantHelper } from '~/database/restaurant_helper'

@Component({
  components: {
    HomeFooter,
    RestaurantPhotoHeader,
    RestaurantInfo,
    RestaurantEvent,
    ReviewsList
  }
})
export default class DetailPage extends Vue {
  public restaurant: IFBRestaurant | null = null
  private isLoading = false

  _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    RestaurantHelper.getSingleRestaurantFromSlug(this.$route,
      this.$fireStore,
      (restaurant: IFBRestaurant | null) => {
        this.restaurant = restaurant
        this.isLoading = false
      })
  }

  mounted () {
    this._fetchPage()
  }
}
