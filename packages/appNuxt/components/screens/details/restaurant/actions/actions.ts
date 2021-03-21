import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'
import { getUploadPhotoLink } from '~/utils/linkHelper/photos'
import { PhotoType, ReviewType } from '~/database/constant'
import { getWriteReviewLink } from '~/utils/linkHelper/reviews'

@Component({
  components: {}
})
export default class RestaurantActions extends Vue {
  @Prop({}) restaurant!: IFBRestaurant

  /**
   * Example:
   *  href="/biz_user_photos/upload/3YVy-af7Ipl7TVft3kquWg"
   */
  getUploadImageUrl () {
    return getUploadPhotoLink(this.restaurant, PhotoType.Restaurant)
  }

  getWriteReviewUrl () {
    return getWriteReviewLink(this.restaurant, ReviewType.Restaurant)
  }
}
