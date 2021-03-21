import { Component, Vue } from 'vue-property-decorator'
import PhotoConfirm from '~/components/screens/uploadUserPhoto/photo_confirm.vue'
import PhotoForm from '~/components/screens/uploadUserPhoto/photo_form.vue'
import UserTitle from '~/components/screens/uploadUserPhoto/userTitle/user_title.vue'
import PhotoFooter from '~/components/screens/footer/footer_photo.vue'

const UPLOAD_PHOTO_STEP_NORMAL = 'UPLOAD_PHOTO_STEP_NORMAL'
const UPLOAD_PHOTO_STEP_CONFIRM = 'UPLOAD_PHOTO_STEP_CONFIRM'

@Component({
  components: {
    PhotoFooter,
    PhotoConfirm,
    PhotoForm,
    UserTitle
  }
})
export default class UploadPhoto extends Vue {
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
}
