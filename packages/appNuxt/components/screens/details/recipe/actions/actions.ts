import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRecipe } from 'ieattatypes/types/index'
import { getUploadPhotoLink } from '~/utils/linkHelper/photos'
import { PhotoType } from '~/database/constant'

@Component({
  components: {}
})
export default class RecipeActions extends Vue {
  @Prop({}) recipe!: IFBRecipe

  /**
   * Example:
   *  href="/biz_user_photos/upload/3YVy-af7Ipl7TVft3kquWg"
   */
  getUploadImageUrl () {
    return getUploadPhotoLink(this.recipe, PhotoType.Recipe)
  }
}
