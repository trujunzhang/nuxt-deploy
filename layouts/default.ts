
import { Component, Prop, Vue } from 'vue-property-decorator'
import HomeHeader from '~/components/screens/header/header.vue'

@Component({
  components: {
    HomeHeader
  }
})
export default class DefaultLayout extends Vue {
}
