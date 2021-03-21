import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRecipe, IFBRestaurant } from 'ieattatypes/types/index'
import { getRelatedDetailInPhotoLink } from '~/utils/linkHelper/detail'
import { getUploadPhotoLink } from '~/utils/linkHelper/photos'

@Component({
  components: {}
})
export default class TopTitle extends Vue {
  @Prop({}) relatedModel!: IFBRestaurant | IFBRecipe
  @Prop({}) photosLen!: number

  getRelatedDetailUrl () {
    const photoType = this.$route.query.type as string
    return getRelatedDetailInPhotoLink(this.relatedModel, photoType)
  }

  getPhotoCountStr () {
    if (this.photosLen) {
      return `${this.photosLen} photos for ${this.relatedModel.displayName}`
    }
    return ''
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
