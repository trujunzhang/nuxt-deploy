import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import HomeHeader from '~/components/screens/header/common/header_home.vue'
import Error404 from '~/components/screens/error/404_error.vue'

const ieattaConfigure = namespace('ieattaConfigure')

@Component({
  components: {
    HomeHeader,
    Error404
  }
})
export default class DefaultLayout extends Vue {
  @ieattaConfigure.State
  public show404!: boolean
}
