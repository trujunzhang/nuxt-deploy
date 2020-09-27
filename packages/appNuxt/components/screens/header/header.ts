import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import vClickOutside from 'v-click-outside'
import { IAuthUser } from '~/database/models/auth_user_model'

import HeaderPop from '~/components/screens/header/header_pop.vue'
const auth = namespace('auth')

@Component({
  directives: {
    clickOutside: vClickOutside.directive
  },
  components: {
    HeaderPop
  }
})
export default class HomeHeader extends Vue {
  @auth.State
  public user!: IAuthUser | null

  public isLoaded: boolean = false
  public showPopMenu: boolean = false
  // public showPopMenu: boolean = true

  onClickOutside (event) {
    console.log('Clicked outside. Event: ', event)
    this.showPopMenu = false
  }

  onHeaderIconClick () {
    this.showPopMenu = true
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

    const x = this.$router
    // this.$router.push('/login')
    // debugger
  }
}
