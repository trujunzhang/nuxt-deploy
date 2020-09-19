import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBUser } from 'ieattatypes/types/index'

@Component({
  components: {}
})
export default class UserTop extends Vue {
  @Prop({}) user!: IFBUser

  getUserUrl () {
    if (this.user.originalUrl === '') {
      return require('~/assets/images/user_60_square.png')
    }
    return this.user.originalUrl
  }

  mounted () {
  }
}
