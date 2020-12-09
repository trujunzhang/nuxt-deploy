import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'
import { namespace } from 'vuex-class'
import PhotoConfirm from '~/components/screens/uploadPhoto/photo_confirm.vue'
import PhotoForm from '~/components/screens/uploadPhoto/photo_form.vue'
import RestaurantTitle from '~/components/screens/uploadPhoto/restaurantTitle/restaurant_title.vue'
import PhotoFooter from '~/components/screens/footer/footer_photo.vue'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'
const ieattaConfigure = namespace('ieattaConfigure')

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

  @ieattaConfigure.Mutation
  public SET_SHOW_404!: (payload: boolean) => void

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

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    this.restaurant = await FirestoreService.instance.getData({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Restaurants,
      uniqueId: this.$route.params.id,
      emptyHint: () => {
        this.SET_SHOW_404(true)
      }
    })
    this.isLoading = false
  }

  async mounted () {
    await this._fetchPage()
  }
}
