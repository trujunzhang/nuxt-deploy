import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBUser } from 'ieattatypes/types/index'
import UserTop from '~/components/screens/userDetail/user_top.vue'
import UserLeft from '~/components/screens/userDetail/user_left.vue'
import UserDefaultRight from '~/components/screens/userDetail/right/right_default.vue'
import { UserHelper } from '~/database/user_helper'

@Component({
  components: {
    UserLeft,
    UserTop,
    UserDefaultRight
  }
})
export default class UserDetail extends Vue {
  public user: IFBUser | null = null
  private isLoading = false

  _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    UserHelper.getSingleUserFromId(
      this.$route.query.userid as string,
      this.$fireStore,
      (user: IFBUser | null) => {
        this.user = user
        this.isLoading = false
      })
  }

  mounted () {
    this._fetchPage()
  }
}
