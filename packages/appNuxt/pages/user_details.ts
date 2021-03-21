import { Component, Vue, Watch } from 'vue-property-decorator'
import UserDefaultRight from '~/components/screens/details/user/right/right_default.vue'
import UserDetailPhotosSelf from '~/components/screens/details/user/right/photos_self.vue'
import UserDetailRestaurantsSelf from '~/components/screens/details/user/right/restaurants_self.vue'
import UserDetailReviewsSelf from '~/components/screens/details/user/right/reviews_self.vue'

@Component({
  layout (context) {
    return 'userPage'
  },
  components: {
    UserDefaultRight,
    UserDetailPhotosSelf,
    UserDetailRestaurantsSelf,
    UserDetailReviewsSelf
  }
})
export default class UserDetailPage extends Vue {
  public menu: string | null = null

  switchMenu (activePath: string) {
    return (this.menu === activePath)
  }

  mounted () {
    this.menu = (this.$route.query.menu as string | null) || 'profile'
  }

  @Watch('$route')
  routeChanged (to: any, from: any) {
    this.menu = (to.query.menu as string | null) || 'profile'
  }
}
