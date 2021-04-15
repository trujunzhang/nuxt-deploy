import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { IAuthUser } from '~/database/models/auth_user_model'

const auth = namespace('auth')

@Component({
  components: {}
})
export default class EditHeader extends Vue {
  @auth.State
  public user!: IAuthUser | null

  public isLoaded: boolean = false

  shouldShowUserBtn () {
    return (this.isLoaded && this.user !== null)
  }

  getUserPhotoUrl () {
    if (
      this.user === null ||
      this.user.photoURL === '' ||
      this.user.photoURL === undefined
    ) {
      return require('~/assets/images/user_60_square.png')
    }
    return this.user.photoURL
  }

  mounted () {
    this.isLoaded = true
  }
}
