import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { IAuthUser } from '~/database/models/auth_user_model'
import { IFBUser } from 'ieattatypes/types/index'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'
import { ParseModelUsers } from '~/database/appModel/users'

const auth = namespace('auth')

@Component({
  components: {}
})
export default class UserProfilePage extends Vue {
  @auth.State
  public user!: IAuthUser | null
  @auth.Mutation
  public SET_AUTH_USER!: (payload: IAuthUser | null) => void

  public firstName: string = ''
  public lastName: string = ''

  getFirstName () {
    if (this.user === null) {
      throw new Error('not found logged user!')
    }
    return this.user.displayName.split(' ')[0]
  }

  getLastName () {
    if (this.user === null) {
      throw new Error('not found logged user!')
    }
    const s = this.user.displayName.split(' ')
    return s.length === 2 ? s[1] : ''
  }

  getUserPhotoUrl () {
    if (this.user === null) {
      throw new Error('not found logged user!')
    }
    if (this.user.photoURL === '') {
      return require('~/assets/images/user_60_square.png')
    }
    return this.user.photoURL
  }

  getCancelUrl () {
    return (this.$route.query.return_url as string) || '/'
  }

  /**
   * href="/user_photos/add"
   */
  getUserAddPhotoUrl () {
    const { fullPath } = this.$route
    return `/user_photos/add?return_url=${fullPath}`
  }

  async onSaveUserBtnClick () {
    const displayName = [this.firstName, this.lastName].join(' ')
    const nextUser: IFBUser = await FirestoreService.instance.getData({
      $fireStore: this.$fireStore,
      path: FBCollections.Users,
      uniqueId: (this.user as any).uid
    })
    ParseModelUsers.updateUserProfile(nextUser, displayName)
    // First of all, save new photo url as user's originalUrl.
    await FirestoreService.instance.updateUser(
      this.$fireStore,
      nextUser
    )
    if (this.$fireAuth.currentUser) {
      await this.$fireAuth.currentUser.updateProfile({
        displayName,
        photoURL: this.user?.photoURL
      })
    }
    // Then, update vue's store status.
    const nextModel: IAuthUser = Object.assign(this.user,
      { displayName }
    )
    this.SET_AUTH_USER(nextModel)
    // Final, go to the user's detail page.
    this.goBack()
  }

  goBack () {
    const returnUrl = (this.$route.query.return_url as string) || '/'
    this.$router.push(returnUrl, () => {
    })
  }

  mounted () {
    this.firstName = this.getFirstName()
    this.lastName = this.getLastName()
  }
}
