import { Component, Prop, Vue } from 'vue-property-decorator'
import UserDefaultRight from '~/components/screens/userDetail/right/right_default.vue'

@Component({
  layout (context) {
    return 'userPage'
  },
  components: {
    UserDefaultRight
  }
})
export default class UserDetailPage extends Vue {
  mounted () {
  }
}
