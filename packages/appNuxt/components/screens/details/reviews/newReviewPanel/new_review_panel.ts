import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBEvent, IFBRecipe, IFBRestaurant } from 'ieattatypes/types'
import { namespace } from 'vuex-class'
import { ReviewType } from '~/database/constant'
import { IAuthUser } from '~/database/models/auth_user_model'
import { getWriteReviewLink } from '~/utils/linkHelper/reviews'

const auth = namespace('auth')

@Component({
  components: {}
})
export default class NewReviewPanel extends Vue {
  @auth.State
  public user!: IAuthUser | null

  @Prop({}) reviewType!: ReviewType
  @Prop({}) relatedId!: string
  @Prop({}) relatedModel!: IFBRestaurant | IFBEvent | IFBRecipe

  getUserTitle () {
    if (this.user === null) {
      return ''
    }
    return `${this.user.displayName}`
  }

  getUserProfileUrl () {
    if (this.user === null) {
      return '/user_details'
    }
    return `/user_details?userid=${this.user.uid}`
  }

  getUserPhotoUrl () {
    if (
      this.user === null ||
      this.user.photoURL === '' ||
      this.user.photoURL === undefined
    ) {
      return require('~/assets/images/user_60_square.png')
    }
    return this.user.photoURL
  }

  getTitle () {
    return `${this.relatedModel.displayName}`
  }

  /**
   * Example:
   *   href="/writeareview/biz/3YVy-af7Ipl7TVft3kquWg?return_url=%2Fbiz%2F3YVy-af7Ipl7TVft3kquWg&amp;source=biz_details_war_button"
   */
  getWriteReviewLink () {
    return getWriteReviewLink(this.relatedModel, this.reviewType)
    // return `/writeareview/biz/${this.relatedModel.uniqueId}?type=${this.reviewType}`
  }
}
