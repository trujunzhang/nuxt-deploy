import { Component, Vue } from 'vue-property-decorator'
import { IFBRestaurant, IFBReview, IFBEvent, IFBRecipe } from 'ieattatypes/types'
import { namespace } from 'vuex-class'
import ReviewForm from '~/components/screens/edit/review/review_form.vue'
import ReviewRight from '~/components/screens/edit/review/review_right.vue'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections, getReviewRelatedPath } from '~/database/constant'

const ieattaConfigure = namespace('ieattaConfigure')

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
  public relatedModel: IFBRestaurant | IFBEvent | IFBRecipe | null = null
  public review: IFBReview | null = null
  private isLoading = false
  private isNewReview = false

  @ieattaConfigure.Mutation
  public SET_SHOW_404!: (payload: boolean) => void

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const reviewType = this.$route.query.type as string
    this.relatedModel = await FirestoreService.instance.getData({
      $fireStore: this.$fire.firestore,
      path: getReviewRelatedPath(reviewType),
      uniqueId: this.$route.params.id,
      emptyHint: () => {
        this.SET_SHOW_404(true)
      }
    })
    this.isLoading = false
    if (this.isNewReview) {
      return
    }
    const reviewId = this.$route.query.rid as string
    this.review = await FirestoreService.instance.getData({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Reviews,
      uniqueId: reviewId,
      emptyHint: () => {
        this.SET_SHOW_404(true)
      }
    })
    this.isLoading = false
  }

  shouldShowPage () {
    if (this.relatedModel) {
      if (this.isNewReview) {
        return true
      }
      else if (this.review) {
        return true
      }
    }
    return false
  }

  checkNewReviewPage () {
    const reviewId = this.$route.query.rid as string
    return reviewId === undefined || reviewId === null
  }

  async mounted () {
    this.isNewReview = this.checkNewReviewPage()
    await this._fetchPage()
  }
}
