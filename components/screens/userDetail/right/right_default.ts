import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBUser } from 'ieattatypes/types/index'

@Component({
  components: {}
})
export default class UserDefaultRight extends Vue {
  @Prop({}) user!: IFBUser
  mounted () {
  }
}
