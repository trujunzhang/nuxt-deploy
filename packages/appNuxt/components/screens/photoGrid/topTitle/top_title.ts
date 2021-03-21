import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRecipe, IFBRestaurant } from 'ieattatypes/types/index'
import { calcRateForRestaurant } from '~/database/rate_utils'
import { getRelatedDetailInPhotoLink } from '~/utils/linkHelper/detail'
import { getUploadPhotoLink } from '~/utils/linkHelper/photos'

@Component({
  components: {}
})
export default class TopTitle extends Vue {
  @Prop({}) relatedModel!: IFBRestaurant | IFBRecipe

  getRestaurantPhotoUrl () {
    if (this.relatedModel.originalUrl === '') {
      return require('~/assets/images/business_large_square.png')
    }
    return this.relatedModel.originalUrl
  }

  getRelatedDetailUrl () {
    const photoType = this.$route.query.type as string
    return getRelatedDetailInPhotoLink(this.relatedModel, photoType)
  }

  getTitle () {
    return `Photos for ${this.relatedModel.displayName}`
  }

  getSubTitle () {
    return `${this.relatedModel.displayName}`
  }

  /**
   *  class="lemon--div__373c0__1mboc i-stars__373c0__1T6rz i-stars--large-3__373c0__3_Jon border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK"
   */
  getRateStarClassName () {
    return `i-stars i-stars--small-${
      calcRateForRestaurant(
        this.relatedModel.rate,
        this.relatedModel.reviewCount
      )
    } rating`
  }

  /**
   * Example:
   *  href="/biz_user_photos/upload/3YVy-af7Ipl7TVft3kquWg"
   */
  getUploadImageUrl () {
    const photoType = this.$route.query.type as string
    return getUploadPhotoLink(this.relatedModel, photoType)
  }
}
