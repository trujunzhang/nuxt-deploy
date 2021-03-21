import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBEvent, IFBRecipe, IFBRestaurant, IFBReview } from 'ieattatypes/types'
import { namespace } from 'vuex-class'
import { starExtraLargeForReviewDict } from '~/database/star_helper'
import { ReviewHelper } from '~/database/review_helper'
import { ParseModelReviews } from '~/database/appModel/review'
import { IAuthUser } from '~/database/models/auth_user_model'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'
import { getRelatedDetailInReviewLink } from '~/utils/linkHelper/detail'

const auth = namespace('auth')

const ALERT_MSG = 'Rate this business to submit your review'
@Component({
  components: {}
})
export default class ReviewForm extends Vue {
  @Prop({}) relatedModel!: IFBRestaurant | IFBEvent | IFBRecipe
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

  getRelatedDetailUrl () {
    const reviewType = this.$route.query.type as string
    return getRelatedDetailInReviewLink(this.relatedModel, reviewType)
  }

  /**
   *  class=" i-stars__09f24__1T6rz i-stars--large-0__09f24__272jL stars__09f24__2Pxjn"
   */
  getRateStarClassName () {
    return ` i-stars__09f24__1T6rz ${starExtraLargeForReviewDict[this.selectedStar]} stars__09f24__2Pxjn`
  }

  async onSaveBtnClick () {
    if (this.selectedStar === 0) {
      this.alertMessage = ALERT_MSG
      return
    }
    this.alertMessage = ''

    const reviewType = this.$route.query.type as string
    const lastReviewRate: number =
      (this.isNewReview ? 0 : this.review.rate)
    const lastReview = this.isNewReview
      ? ParseModelReviews.emptyReview(
        (this.user as any),
        this.relatedModel.uniqueId,
        reviewType
      ) : this.review
    const nextReview: IFBReview = ParseModelReviews.updateReview(
      lastReview,
      this.selectedStar,
      this.note
    )
    await FirestoreService.instance.setData(
      this.$fire.firestore,
      FBCollections.Reviews,
      nextReview
    )
    await ReviewHelper.onSaveReviewAfterHook(
      this.$fire.firestore,
      this.relatedModel.uniqueId,
      reviewType,
      lastReviewRate,
      this.selectedStar,
      this.isNewReview
    )
    await this.$router.push(this.getRelatedDetailUrl())
  }

  mounted () {
    if (!this.isNewReview) {
      this.selectedStar = this.review.rate
      this.note = this.review.body
    }
  }
}
