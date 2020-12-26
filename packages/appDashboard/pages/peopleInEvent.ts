import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBPeopleInEvent } from 'ieattatypes/types/index'
import { loadPeopleInEvent } from '~/database/data/PeopleInEvents'
import { uploadPeopleInEvents } from '~/database/event/PeopleInEvents'

@Component({
  components: {
  }
})
export default class Index extends Vue {
  public headers: Array<object> = [
    {
      text: 'UniqueId',
      value: 'uniqueId'
    },
    {
      text: 'UserId',
      value: 'userId'
    },
    {
      text: 'RestaurantId',
      value: 'restaurantId'
    },
    {
      text: 'EventId',
      value: 'eventId'
    },
    {
      text: 'CreatorId',
      value: 'creatorId'
    }
  ]

  public items: Array<IFBPeopleInEvent> = loadPeopleInEvent()

  public search?: string = ''

  public loading?: boolean = false

  async importToFirebase () {
    this.loading = true
    await uploadPeopleInEvents(this.$fire.auth, this.$fire.firestore)
    this.loading = false
  }
}
