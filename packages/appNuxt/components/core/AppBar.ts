// Components
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { AppBarItem } from './AppBarItem'
const appConfigure = namespace('appConfigure')

@Component({
  components: { AppBarItem }
})
export default class DashboardCoreAppBar extends Vue {
    @Prop({ default: false }) readonly value: boolean = false
    private notifications: Array<string> = [
      'Mike John Responded to your email',
      'You have 5 new tasks',
      "You're now friends with Andrew",
      'Another Notification',
      'Another one'
    ]

    public profile:Array<object> = [
      { title: 'Profile' },
      { title: 'Settings' },
      { divider: true },
      { title: 'Log out' }
    ]

    @appConfigure.State
    public drawer!: any

    @appConfigure.Mutation
    public SET_DRAWER!: (payload: any) => void

    setDrawer (payload: any) {
      this.SET_DRAWER(payload)
    }
}

//
// export default {
//
//   computed: {
//     ...mapState(['drawer'])
//   },
//
//   methods: {
//     ...mapMutations({
//       setDrawer: 'SET_DRAWER'
//     })
//   }
// }
