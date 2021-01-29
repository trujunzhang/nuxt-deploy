import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import vClickOutside from 'v-click-outside'
import { IAuthUser } from '~/database/models/auth_user_model'

import HeaderSearch from '~/components/screens/header/common/header_search.vue'
import HeaderPop from '~/components/screens/header/common/header_pop.vue'
const auth = namespace('auth')

@Component({
  directives: {
    clickOutside: vClickOutside.directive
  },
  components: {
    HeaderSearch,
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
    // console.log('Clicked outside. Event: ', event)
    this.showPopMenu = false
  }

  getAvatarContainerClassname () {
    const ext = this.showPopMenu ? 'active__373c0__2rFUH ' : ''
    return `${ext}lemon--span__373c0__3997G display--inline__373c0__3JqBP border-color--default__373c0__3-ifU`
  }

  onHeaderIconClick () {
    this.showPopMenu = true
  }

  shouldShowLoginBtn () {
    return (this.isLoaded && !this.user)
  }

  getUserProfileUrl () {
    if (this.user === null) {
      throw new Error('not found logged user!')
    }
    return `/user_details?userid=${this.user.uid}`
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

  @Watch('$route')
  routeChanged (to: any, from:any) {
  }
}
