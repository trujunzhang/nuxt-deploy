import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { IFBUser } from 'ieattatypes/types/index'
import { OnToggleFormStepFunc } from '~/components/screens/uploadPhoto/type'
import { PhotoHelper } from '~/database/photo_helper'
import { IAuthUser } from '~/database/models/auth_user_model'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'
import { ParseModelUsers } from '~/database/appModel/users'

const auth = namespace('auth')
@Component({
  components: {}
})
export default class PhotoConfirm extends Vue {
  /**
   * image is data:image/png;base64.
   */
  @Prop({}) image!: string
  @Prop({}) onToggleFormStep!: OnToggleFormStepFunc
  public note: string = ''
  public showAlertMessage: boolean = false

  @auth.State
  public user!: IAuthUser | null

  @auth.Mutation
  public SET_AUTH_USER!: (payload: IAuthUser | null) => void

  getPreviewStyle () {
    return `background-image: url(${this.image});`
  }

  getUserProfileUrl () {
    if (this.user === null) {
      throw new Error('not found logged user!')
    }
    return `/user_details?userid=${this.user.uid}`
  }

  async onUploadClick () {
    this.showAlertMessage = false
    await PhotoHelper.uploadImage(
      this.image,
      (progressEvent) => {
      }
    )
      .then(async (response) => {
        const results = response.data
        const originalUrl = results.url
        if (!this.user) {
          this.showAlertMessage = true
        }
        const nextUser: IFBUser = await FirestoreService.instance.getData({
          $fireStore: this.$fireStore,
          path: FBCollections.Users,
          uniqueId: (this.user as any).uid
        })
        ParseModelUsers.updateUserPhoto(nextUser, originalUrl)
        // First of all, save new photo url as user's originalUrl.
        await FirestoreService.instance.updateUser(
          this.$fireStore,
          nextUser
        )
        if (this.$fireAuth.currentUser) {
          await this.$fireAuth.currentUser.updateProfile({
            displayName: this.user?.displayName,
            photoURL: originalUrl
          })
        }
        // Then, update vue's store status.
        const nextModel: IAuthUser = Object.assign(this.user,
          { photoURL: originalUrl }
        )
        this.SET_AUTH_USER(nextModel)
        // Final, go to the user's detail page.
        this.goBack()
      })
      // eslint-disable-next-line handle-callback-err
      .catch((error) => {
        this.showAlertMessage = true
        // this.errors.push(error)
        console.log(error)
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

  goBack () {
    const returnUrl = (this.$route.query.return_url as string) || '/'
    this.$router.push(returnUrl, () => {
    })
  }

  async mounted () {
    await this.onUploadClick()
  }
}
