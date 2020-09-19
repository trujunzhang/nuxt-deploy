import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant, IFBReview } from 'ieattatypes'
import ReviewForm from '~/components/screens/editReview/review_form.vue'
import ReviewRight from '~/components/screens/editReview/review_right.vue'
import { RestaurantHelper } from '~/database/restaurant_helper'
import { ReviewHelper } from '~/database/review_helper'

@Component({
  layout (context) {
    return 'edit'
  },
  components: {
    ReviewForm,
    ReviewRight
  }
})
export default class WriteReview extends Vue {
  public restaurant: IFBRestaurant | null = null
  public review: IFBReview | null = null
  private isLoading = false
  private isNewReview = false

  _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    RestaurantHelper.getSingleRestaurantFromId(
      this.$route.params.id,
      this.$fireStore,
      (restaurant: IFBRestaurant | null) => {
        this.restaurant = restaurant
        this.isLoading = false
      })
    if (this.isNewReview) {
      return
    }
    ReviewHelper.getSingleReviewFromRId(this.$route,
      this.$fireStore,
      (review: IFBReview | null) => {
        this.review = review
        this.isLoading = false
      })
  }

  shouldShowPage () {
    if (this.restaurant) {
      if (this.isNewReview) {
        return true
      }
      if (this.review) {
        return true
      }
    }
    return false
  }

  mounted () {
    this.isNewReview = ReviewHelper.checkNewReviewPage(this.$route)
    this._fetchPage()
  }
}
