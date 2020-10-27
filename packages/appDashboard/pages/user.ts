import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBUser } from 'ieattatypes/types/index'
import { users, loadUsers } from '~/database/data/Users'
import { uploadUsers } from '~/database/event/Users'

@Component({
  components: {}
})
export default class Index extends Vue {
  public headers: Array<object> = [
    {
      text: 'Username',
      value: 'username'
    },
    {
      text: 'Email',
      value: 'email'
    },
    {
      text: 'OriginalUrl',
      value: 'originalUrl'
    }
  ]

  public items: Array<IFBUser> = loadUsers()

  public search?: string = ''

  public loading?: boolean = false

  async importToFirebase () {
    this.loading = true
    await uploadUsers(this.$fireAuth, this.$fireStore)
    this.loading = false
  }
}
