import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBUser } from 'ieattatypes/types/index'
import { namespace } from 'vuex-class'
import { IAuthUser } from '~/database/models/auth_user_model'

const auth = namespace('auth')

@Component({
  components: {}
})
export default class UserTop extends Vue {
  @Prop({}) detailUser!: IFBUser

  @auth.State
  public user!: IAuthUser | null

  getPhotoUrl () {
    if (this.detailUser.originalUrl === '') {
      return require('~/assets/images/user_60_square.png')
    }
    return this.detailUser.originalUrl
  }

  shouldShowActionPanel () {
    return this.detailUser.id === this.user?.uid
  }

  /**
   * href="/user_photos/add"
   */
  getUserAddPhotoUrl () {
    const { fullPath } = this.$route
    return `/user_photos/add?return_url=${fullPath}`
  }

  /**
   * href="/profile?return_url=/user_details?userid=kIEHaO2vd6Lic4rwkMgH6Q"
   */
  getUserProfileUrl () {
    const { fullPath } = this.$route
    return `/profile?return_url=${fullPath}`
  }

  mounted () {
  }
}
