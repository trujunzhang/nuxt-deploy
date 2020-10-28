import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBUser } from 'ieattatypes/types/index'
import { namespace } from 'vuex-class'
import UserTop from '~/components/screens/userDetail/user_top.vue'
import UserLeft from '~/components/screens/userDetail/user_left.vue'
import UserDefaultRight from '~/components/screens/userDetail/right/right_default.vue'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'
import PhotoFooter from '~/components/screens/footer/footer_photo.vue'
const ieattaConfigure = namespace('ieattaConfigure')

@Component({
  components: {
    PhotoFooter,
    UserLeft,
    UserTop,
    UserDefaultRight
  }
})
export default class UserDetailReview extends Vue {
  public user: IFBUser | null = null
  private isLoading = false

  @ieattaConfigure.Mutation
  public SET_SHOW_404!: (payload: boolean) => void

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const userId: any = this.$route.query.userid
    this.user = await FirestoreService.instance.getData({
      $fireStore: this.$fireStore,
      path: FBCollections.Users,
      uniqueId: userId,
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
