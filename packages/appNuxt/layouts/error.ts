import { Component, Prop, Vue } from 'vue-property-decorator'
import Error404 from '~/components/screens/error/404_error.vue'

@Component({
  components: {
    Error404
  }
})
export default class AppError extends Vue {

}
