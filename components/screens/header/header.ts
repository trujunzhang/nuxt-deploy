import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { IAuthUser } from '~/database/firebase_helper'

const auth = namespace('auth')

@Component({
  components: {}
})
export default class HomeHeader extends Vue {
  @auth.State
  public user!: IAuthUser | null

  public isLoaded: boolean = false

  mounted () {
    this.isLoaded = true

    const x = this.$router
    // this.$router.push('/login')
    // debugger
  }
}
