import { Component, Vue } from 'vue-property-decorator'
import GoogleLoginButton from '~/components/screens/thirdLogin/google_button.vue'

@Component({
  layout (context) {
    return 'register'
  },
  components: {
    GoogleLoginButton
  }
})
export default class LoginPage extends Vue {

}
