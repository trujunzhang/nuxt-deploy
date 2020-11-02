import { Component, Prop, Vue } from 'vue-property-decorator'
import UserDetailPhotosSelf from '~/components/screens/userDetail/right/photos_self.vue'

@Component({
  layout (context) {
    return 'userPage'
  },
  components: {
    UserDetailPhotosSelf
  }
})
export default class UserDetailPhotosPage extends Vue {
  mounted () {
  }
}
