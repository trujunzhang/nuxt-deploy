import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBEvent } from 'ieattatypes/types/index'
import { events } from '~/database/data/Events'
import { uploadEvents } from '~/database/event/Events'
import { uploadRestaurants } from '~/database/event/Restaurants'

@Component({
  components: {
  }
})
export default class Index extends Vue {
  public headers: Array<object> = [
    {
      text: 'Name',
      value: 'displayName'
    },
    {
      text: 'Start',
      value: 'start'
    },
    {
      text: 'End',
      value: 'end'
    }
  ]

  public items: Array<IFBEvent> = events

  public search?: string = ''

  public loading?: boolean = false

  async importToFirebase () {
    this.loading = true
    await uploadEvents(this.$fire.auth, this.$fire.firestore)
    this.loading = false
  }
}
