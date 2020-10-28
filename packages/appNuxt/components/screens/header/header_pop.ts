import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import Cookies from 'universal-cookie'
import { IAuthUser } from '~/database/models/auth_user_model'

const auth = namespace('auth')

@Component({
  components: {}
})
export default class HeaderPop extends Vue {
  @auth.State
  public user!: IAuthUser | null

  @auth.Mutation
  public SET_AUTH_USER!: (payload: IAuthUser | null) => void

  async onLogoutClick () {
    // Update vue's store status.
    this.SET_AUTH_USER(null)
    const cookies = new Cookies()
    cookies.remove('credential', { path: '/' })
    // Sign out.
    await this.$fireAuth.signOut()
    this.$router.push('/', () => {
    })
  }

  getUserProfileUrl () {
    if (this.user === null) {
      throw new Error('not found logged user!')
    }
    return `/user_details?userid=${this.user.uid}`
  }
}
