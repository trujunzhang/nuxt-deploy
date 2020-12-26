import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBEvent } from 'ieattatypes/types/index'
import { loadEvents } from '~/database/data/Events'
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
      text: 'Rate',
      value: 'rate'
    },
    {
      text: 'ReviewCount',
      value: 'reviewCount'
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

  public items: Array<IFBEvent> = loadEvents()

  public search?: string = ''

  public loading?: boolean = false

  async importToFirebase () {
    this.loading = true
    await uploadEvents(this.$fire.auth, this.$fire.firestore)
    this.loading = false
  }
}
