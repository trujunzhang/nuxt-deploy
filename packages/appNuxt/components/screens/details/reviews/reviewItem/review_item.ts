import { Component, Prop, Vue } from 'vue-property-decorator'

import { IFBReview } from 'ieattatypes'
import { starRegularDict } from '~/database/star_helper'
import { formatDateForReview } from '~/database/timeago_helper'

@Component({
  components: {}
})
export default class ReviewItem extends Vue {
  @Prop({}) review!: IFBReview

  getUserProfileUrl () {
    return `/user_details?userid=${this.review.creatorId}`
  }

  getUserPhotoAlt () {
    return 'Photo of ' + this.review.username
  }

  /**
   *  class="lemon--div__373c0__1mboc i-stars__373c0__1T6rz i-stars--regular-3__373c0__Xlhbn border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK"
   */
  getRateStarClassName () {
    return `lemon--div__373c0__1mboc i-stars__373c0__1T6rz ${starRegularDict[this.review.rate]} border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK`
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
}
