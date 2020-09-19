import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBEvent } from 'ieattatypes'
import { events } from '~/database/data/Events'
import { uploadEvents } from '~/database/event/Events'

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
    await uploadEvents(this.$fireStore)
    this.loading = false
  }
}
