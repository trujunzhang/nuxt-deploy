import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBUser } from 'ieattatypes/types/index'

@Component({
  components: {}
})
export default class UserLeft extends Vue {
  @Prop({}) user!: IFBUser

  getLeftTitle () {
    return `${this.user.username}'s Profile`
  }

  mounted () {
  }
}
