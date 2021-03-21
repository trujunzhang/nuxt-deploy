import { Component, Vue } from 'vue-property-decorator'
import { IFBEvent } from 'ieattatypes/types'
import { namespace } from 'vuex-class'
import PhotoFooter from '~/components/screens/footer/footer_photo.vue'
import EventInfo from '~/components/screens/details/event/info/info.vue'
import EventActions from '~/components/screens/details/event/actions/actions.vue'
import OrderedPeopleInEvent from '~/components/screens/details/event/orderedPeople/ordered_people.vue'
import WaitersInEvent from '~/components/screens/details/event/waiters/waiters.vue'
import ReviewsList from '~/components/screens/details/reviews/reviewList/review_list.vue'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections, ReviewType } from '~/database/constant'

const ieattaConfigure = namespace('ieattaConfigure')

@Component({
  components: {
    PhotoFooter,
    EventInfo,
    EventActions,
    OrderedPeopleInEvent,
    WaitersInEvent,
    ReviewsList
  }
})
export default class EventDetailPage extends Vue {
  public event: IFBEvent | null = null
  private isLoading = false

  @ieattaConfigure.Mutation
  public SET_SHOW_404!: (payload: boolean) => void

  getReviewType () {
    return ReviewType.Event
  }

  shouldShowPage () {
    return this.event !== null
  }

  getRelatedId () {
    if (this.event === null) {
      return ''
    }
    return this.event.uniqueId
  }

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const eventSlug = this.$route.params.slug as string
    await FirestoreService.instance.snapshotList({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Events,
      queryBuilder: (query: any) => {
        return query.where('slug', '==', eventSlug)
      },
      iterateDocumentSnapshots: (data: IFBEvent) => {
        this.event = data
      },
      emptyHint: () => {
        this.SET_SHOW_404(true)
      }
    })
    this.isLoading = false
  }

  async mounted () {
    await this._fetchPage()
  }
}
