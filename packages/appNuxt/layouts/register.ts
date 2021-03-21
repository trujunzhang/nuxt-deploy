import { Component, Vue } from 'vue-property-decorator'
import LoginHeader from '~/components/screens/header/header_login.vue'

@Component({
  components: {
    LoginHeader
  }
})
export default class RegisterLayout extends Vue {
}
