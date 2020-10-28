import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBReview } from 'ieattatypes'
import { starRegularForEditReviewDict } from '~/database/star_helper'
import { formatDateForReview } from '~/database/utils/timeago_helper'

@Component({
  components: {}
})
export default class ReviewItem extends Vue {
  @Prop({}) review!: IFBReview

  /**
   * class="lemon--div__09f24__1mboc i-stars__09f24__Y2F3O i-stars--regular-5__09f24__ySHIl border-color--default__09f24__1eOdn overflow--hidden__09f24__3z7CX"
   */
  getRateStarClassName () {
    return `lemon--div__09f24__1mboc i-stars__09f24__Y2F3O
    ${starRegularForEditReviewDict[this.review.rate]}
    border-color--default__09f24__1eOdn overflow--hidden__09f24__3z7CX`
  }

  getUserProfileUrl () {
    return `/user_details?userid=${this.review.creatorId}`
  }

  getReviewPublishedAt () {
    return formatDateForReview(this.review.createdAt)
  }

  getUserPhotoUrl () {
    if (
      this.review.avatarUrl === '' ||
      this.review.avatarUrl === undefined
    ) {
      return require('~/assets/images/user_60_square.png')
    }
    return this.review.avatarUrl
  }
}