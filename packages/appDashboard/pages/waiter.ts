import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBPhoto } from 'ieattatypes/types/index'
import { loadWaiters } from '~/database/data/Waiters'
import { uploadWaiters } from '~/database/event/Waiters'

@Component({
  components: {
  }
})
export default class WaitersPage extends Vue {
  public headers: Array<object> = [
    {
      text: 'UniqueId',
      value: 'uniqueId'
    },
    {
      text: 'PhotoType',
      value: 'photoType'
    },
    {
      text: 'RestaurantId',
      value: 'restaurantId'
    },
    {
      text: 'Created',
      value: 'createdAt'
    }
  ]

  public items: Array<IFBPhoto> = loadWaiters()

  public search?: string = ''

  public loading?: boolean = false

  async importToFirebase () {
    this.loading = true
    await uploadWaiters(this.$fire.auth, this.$fire.firestore)
    this.loading = false
  }
}
