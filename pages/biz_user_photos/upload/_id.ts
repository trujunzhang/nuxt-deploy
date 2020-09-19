import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'
import PhotoConfirm from '~/components/screens/uploadPhoto/photo_confirm.vue'
import PhotoForm from '~/components/screens/uploadPhoto/photo_form.vue'
import RestaurantTitle from '~/components/screens/uploadPhoto/restaurantTitle/restaurant_title.vue'
import PhotoFooter from '~/components/screens/footer/footer_photo.vue'
import { RestaurantHelper } from '~/database/restaurant_helper'

const UPLOAD_PHOTO_STEP_NORMAL = 'UPLOAD_PHOTO_STEP_NORMAL'
const UPLOAD_PHOTO_STEP_CONFIRM = 'UPLOAD_PHOTO_STEP_CONFIRM'

@Component({
  components: {
    PhotoFooter,
    PhotoConfirm,
    PhotoForm,
    RestaurantTitle
  }
})
export default class UploadPhoto extends Vue {
  public restaurant: IFBRestaurant | null = null
  private isLoading = false
  private image: string | ArrayBuffer | null = null
  private step: string = UPLOAD_PHOTO_STEP_NORMAL

  // private step: string = UPLOAD_PHOTO_STEP_CONFIRM

  onUploadImageHook (imgData: string) {
    this.image = imgData
    this.step = UPLOAD_PHOTO_STEP_CONFIRM
  }

  onToggleFormStep () {
    this.step = UPLOAD_PHOTO_STEP_NORMAL
  }

  isNormalPanel () {
    return this.step === UPLOAD_PHOTO_STEP_NORMAL
  }

  isConfirmPanel () {
    return this.step === UPLOAD_PHOTO_STEP_CONFIRM
  }

  _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    RestaurantHelper.getSingleRestaurantFromId(
      this.$route.params.id,
      this.$fireStore,
      (restaurant: IFBRestaurant | null) => {
        this.restaurant = restaurant
        this.isLoading = false
      })
  }

  mounted () {
    this._fetchPage()
  }
}
