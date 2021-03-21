import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import EditHeader from '~/components/screens/header/header_edit.vue'
import Error404 from '~/components/screens/error/404_error.vue'
import PhotoFooter from '~/components/screens/footer/footer_photo.vue'

const ieattaConfigure = namespace('ieattaConfigure')

@Component({
  components: {
    EditHeader,
    PhotoFooter,
    Error404
  }
})
export default class EditLayout extends Vue {
  @ieattaConfigure.State
  public show404!: boolean
}
