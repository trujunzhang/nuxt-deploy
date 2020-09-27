import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant, IFBReview } from 'ieattatypes/types/index'
import { namespace } from 'vuex-class'
import { starExtraLargeDict } from '~/database/star_helper'
import { ReviewHelper } from '~/database/review_helper'
import { ParseModelReviews } from '~/database/appModel/review'
import { IAuthUser } from '~/database/models/auth_user_model'

const auth = namespace('auth')

const ALERT_MSG = 'Rate this business to submit your review'
@Component({
  components: {}
})
export default class ReviewForm extends Vue {
  @Prop({}) restaurant!: IFBRestaurant
  @Prop({}) review!: IFBReview
  @Prop({}) isNewReview!: boolean
  public selectedStar: number = 0
  public note: string = ''
  public alertMessage: string = ''

  @auth.State
  public user!: IAuthUser | null

  onStarValueChanged (index: number) {
    this.selectedStar = index
    this.alertMessage = ''
  }

  getDetailRestaurantUrl () {
    return `/biz/${this.restaurant.slug}`
  }

  /**
   *  class="lemon--ul__09f24__1_cxs i-selector-stars__09f24__UXiGQ i-selector-stars--extra-large-0__09f24__3GE2w stars__09f24__2IyST"
   */
  getRateStarClassName () {
    return `lemon--ul__09f24__1_cxs i-selector-stars__09f24__UXiGQ ${starExtraLargeDict[this.selectedStar]} stars__09f24__2IyST`
  }

  async onSaveBtnClick () {
    if (this.selectedStar === 0) {
      this.alertMessage = ALERT_MSG
      return
    }
    this.alertMessage = ''

    const lastReviewRate: number =
      (this.isNewReview ? 0 : this.review.rate)
    const lastReview = this.isNewReview
      ? ParseModelReviews.emptyReview(
        (this.user as any),
        this.restaurant.uniqueId
      ) : this.review
    const nextReview: IFBReview = ParseModelReviews.updateReview(
      lastReview,
      this.selectedStar,
      this.note
    )
    const result = await ReviewHelper.saveReview(
      this.$fireStore,
      nextReview
    )
    await ReviewHelper.onSaveReviewAfterHook(
      this.$fireStore,
      this.restaurant.uniqueId,
      lastReviewRate,
      this.selectedStar,
      this.isNewReview
    )
    await this.$router.push(this.getDetailRestaurantUrl())
  }

  mounted () {
    if (!this.isNewReview) {
      this.selectedStar = this.review.rate
      this.note = this.review.body
    }
  }
}
