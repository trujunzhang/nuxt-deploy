import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { IAuthUser } from '~/database/models/auth_user_model'

const auth = namespace('auth')

@Component({
  components: {
  }
})
export default class HeaderPop extends Vue {
  @auth.State
  public user!: IAuthUser | null

  getUserProfileUrl () {
    if (this.user === null) {
      throw new Error('not found logged user!')
    }
    return `/user_details?userid=${this.user.uid}`
  }
}
