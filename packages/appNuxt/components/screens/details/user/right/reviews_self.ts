import { Component, Prop, Vue } from 'vue-property-decorator'
import { QuerySnapshot } from 'firebase/firebase-storage-compat'
import { namespace } from 'vuex-class'
import { IFBRestaurant, IFBReview } from 'ieattatypes/types/index'
import { FirestoreService, QueryBuilder } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'
import ReviewItem from '~/components/screens/edit/review/reviewItem/review_item.vue'
import { IAuthUser } from '~/database/models/auth_user_model'
const auth = namespace('auth')

@Component({
  components: {
    ReviewItem
  }
})
export default class UserDetailReviewSelf extends Vue {
  @auth.State
  public user!: IAuthUser | null

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
    const nextItem = this.items.concat([])
    await FirestoreService.instance.snapshotList({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Reviews,
      queryBuilder: (query: any) => {
        const userId = this.$route.query.userid as any || this.user?.uid
        return queryBuilder(FirestoreService.instance.queryByCreatorId({
          query,
          userId
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
