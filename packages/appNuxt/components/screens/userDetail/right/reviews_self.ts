import { Component, Prop, Vue } from 'vue-property-decorator'
import { QuerySnapshot } from 'firebase/firebase-storage'
import { IFBRestaurant, IFBReview } from 'ieattatypes/types/index'
import { FirestoreService, QueryBuilder } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'
import ReviewItem from '~/components/screens/editReview/reviewItem/review_item.vue'

@Component({
  components: {
    ReviewItem
  }
})
export default class UserDetailReviewSelf extends Vue {
  @Prop({}) restaurant!: IFBRestaurant
  public items: Array<IFBReview> = []

  // The last visible document
  private lastVisible

  private isLoaded = false
  private isLoading = false

  async firstPageLoad () {
    await this._fetchPage((query: any) => {
      return query
    })
  }

  async nextPageLoad () {
    if (this.lastVisible === undefined) {
      return
    }
    await this._fetchPage((query: any) => {
      return query.startAfter(this.lastVisible)
    })
  }

  async _fetchPage (
    queryBuilder: QueryBuilder
  ) {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const reviewId = this.$route.query.rid as string
    const nextItem = this.items.concat([])
    await FirestoreService.instance.snapshotList({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Reviews,
      queryBuilder: (query: any) => {
        return queryBuilder(FirestoreService.instance.queryByCreatorId({
          query,
          userId: (this.$route.query.userid as string)
        })).limit(2)
      },
      iterateDocumentSnapshots: (data: IFBReview) => {
        nextItem.push(data)
      },
      documentSnapshotsEvent: (documentSnapshots: QuerySnapshot) => {
        // Get the last visible document
        this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
        // console.log('last', this.lastVisible)
      }
    })
    this.items = nextItem
    this.isLoaded = true
    this.isLoading = false
  }

  async onWaypoint (e) {
    await this.nextPageLoad()
  }

  showEmptyText () {
    return (this.isLoaded && this.items.length === 0)
  }

  async mounted () {
    await this.firstPageLoad()
  }
}
