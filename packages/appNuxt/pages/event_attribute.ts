import { Component, Vue } from 'vue-property-decorator'
import { IFBEvent } from 'ieattatypes/types/index'
import { namespace } from 'vuex-class'
import EventForm from '~/components/screens/edit/event/event_form.vue'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'

const ieattaConfigure = namespace('ieattaConfigure')

@Component({
  components: {
    EventForm
  }
})
export default class EditEvent extends Vue {
  public event: IFBEvent | null = null
  private isLoading = false
  private isNewEvent = false

  @ieattaConfigure.Mutation
  public SET_SHOW_404!: (payload: boolean) => void

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const eventId = this.$route.query.e_id as string
    this.event = await FirestoreService.instance.getData({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Events,
      uniqueId: eventId,
      emptyHint: () => {
        this.SET_SHOW_404(true)
      }
    })
    this.isLoading = false
  }

  shouldShowPage () {
    if (this.isNewEvent) {
      return true
    } else if (this.event) {
      return true
    }
    return false
  }

  checkNewEventPage () {
    const eventId = this.$route.query.e_id as string
    return eventId === undefined || eventId === null
  }

  async mounted () {
    this.isNewEvent = this.checkNewEventPage()
    await this._fetchPage()
  }
}
