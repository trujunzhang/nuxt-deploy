import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { IFBReview } from 'ieattatypes'
import { starRegularDict } from '~/database/star_helper'
import { formatDateForReview } from '~/database/utils/timeago_helper'
import { IAuthUser } from '~/database/models/auth_user_model'

const auth = namespace('auth')

@Component({
  components: {}
})
export default class ReviewItem extends Vue {
  @Prop({}) review!: IFBReview

  @auth.State
  public user!: IAuthUser | null

  getUserPhotoAlt () {
    return 'Photo of ' + this.review.username
  }

  /**
   *  class=" i-stars__373c0__1BRrc i-stars--regular-5__373c0__1P0Eg border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK"
   */
  getRateStarClassName () {
    return `i-stars__373c0__1BRrc
    ${starRegularDict[this.review.rate]}
     border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK`
  }

  getReviewUserProfileUrl () {
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

  /**
   * http://localhost:3000/writeareview/biz/3YVy-af7Ipl7TVft3kquWg
   */
  getEditReviewUrl () {
    return `/writeareview/biz/${this.review.restaurantId}?rid=${this.review.uniqueId}`
  }

  showReviewEditBtn () {
    return this.user?.uid === this.review.creatorId
  }
}
