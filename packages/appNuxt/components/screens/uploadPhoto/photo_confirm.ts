import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'
import { namespace } from 'vuex-class'
import { OnToggleFormStepFunc } from '~/components/screens/uploadPhoto/type'
import { PhotoHelper } from '~/database/photo_helper'
import { IAuthUser } from '~/database/firebase_helper'
import { ParseModelPhotos } from '~/database/appModel/photos'
import { ReviewHelper } from '~/database/review_helper'

const auth = namespace('auth')
@Component({
  components: {}
})
export default class PhotoConfirm extends Vue {
  @Prop({}) restaurant!: IFBRestaurant
  /**
   * image is data:image/png;base64.
   */
  @Prop({}) image!: string
  @Prop({}) onToggleFormStep!: OnToggleFormStepFunc
  public note: string = ''
  public errorMsg: string = ''

  @auth.State
  public user!: IAuthUser | null

  async onUploadClick () {
    await PhotoHelper.uploadImage(
      this.image,
      (progressEvent) => {
      }
    )
      .then(async (response) => {
        const results = response.data
        const originalUrl = results.url
        const nextPhoto =
          ParseModelPhotos.emptyPhotoForRestaurant(
            (this.user as any),
            this.restaurant,
            originalUrl,
            this.note
          )
        const result = await PhotoHelper.savePhoto(
          this.$fireStore,
          nextPhoto
        )
        this.onToggleFormStep()
      })
      // eslint-disable-next-line handle-callback-err
      .catch((error) => {
        // this.errors.push(error)
        //   console.log(this.errorMsg)
      })
      .finally(() => {
        setTimeout(
          () => {
            // this.showProgress = false;
          },
          1000
        )
      })
  }

  mounted () {
  }
}
