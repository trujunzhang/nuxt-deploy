import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { IFBUser } from 'ieattatypes/types/index'
import HomeHeader from '~/components/screens/header/common/header_home.vue'
import UserTop from '~/components/screens/details/user/user_top.vue'
import UserLeft from '~/components/screens/details/user/user_left.vue'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'
import PhotoFooter from '~/components/screens/footer/footer_photo.vue'
import Error404 from '~/components/screens/error/404_error.vue'
import { IAuthUser } from '~/database/models/auth_user_model'

const ieattaConfigure = namespace('ieattaConfigure')
const auth = namespace('auth')

@Component({
  components: {
    HomeHeader,
    PhotoFooter,
    UserLeft,
    UserTop,
    Error404
  }
})
export default class UserPageLayout extends Vue {
  public detailUser: IFBUser | null = null
  private isLoading = false

  @ieattaConfigure.State
  public show404!: boolean

  @auth.State
  public user!: IAuthUser | null

  @ieattaConfigure.Mutation
  public SET_SHOW_404!: (payload: boolean) => void

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const uniqueId = this.$route.query.userid as any || this.user?.uid
    this.detailUser = await FirestoreService.instance.getData({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Users,
      uniqueId,
      emptyHint: () => {
        this.SET_SHOW_404(true)
      }
    })
    this.isLoading = false
  }

  async mounted () {
    await this._fetchPage()
  }
}
