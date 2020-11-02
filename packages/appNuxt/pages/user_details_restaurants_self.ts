import { Component, Prop, Vue } from 'vue-property-decorator'
import UserDetailRestaurantsSelf from '~/components/screens/userDetail/right/restaurants_self.vue'

@Component({
  layout (context) {
    return 'userPage'
  },
  components: {
    UserDetailRestaurantsSelf
  }
})
export default class UserDetailRestaurantsPage extends Vue {
  mounted () {
  }
}
