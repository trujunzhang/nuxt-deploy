import { Component, Prop, Vue } from 'vue-property-decorator'
import UserDetailReviewsSelf from '~/components/screens/userDetail/right/reviews_self.vue'

@Component({
  layout (context) {
    return 'userPage'
  },
  components: {
    UserDetailReviewsSelf
  }
})
export default class UserDetailReviewsPage extends Vue {
  mounted () {
  }
}
