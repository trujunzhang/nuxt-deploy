import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'

@Component({
  components: {
  }
})
export default class RestaurantTitle extends Vue {
  @Prop({}) restaurant!: IFBRestaurant
  @Prop({}) photosLen!: number

  getDetailRestaurantUrl () {
    return `/biz/${this.restaurant.slug}`
  }

  getPhotoCountStr () {
    if (this.photosLen) {
      return `${this.photosLen} photos for The ${this.restaurant.displayName}`
    }
    return ''
  }

  /**
   * Example:
   *  href="/biz_user_photos/upload/3YVy-af7Ipl7TVft3kquWg"
   */
  getUploadImageLink () {
    return `/biz_user_photos/upload/${this.restaurant.uniqueId}`
  }
}
