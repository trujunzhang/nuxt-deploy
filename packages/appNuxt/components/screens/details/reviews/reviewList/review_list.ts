import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { IFBReview, IFBRestaurant } from 'ieattatypes'
import { QuerySnapshot } from 'firebase/firebase-storage'
import { FBCollections } from '~/database/constant'
import ReviewItem from '~/components/screens/details/reviews/reviewItem/review_item.vue'
import ReviewSearch from '~/components/screens/details/reviews/reviewList/review_search.vue'
import ReviewSort from '~/components/screens/details/reviews/reviewList/review_sort.vue'
import NewReviewPanel from '~/components/screens/details/reviews/newReviewPanel/new_review_panel.vue'
import { FirestoreService, QueryBuilder } from '~/database/services/firestore_service'

@Component({
  components: {
    NewReviewPanel,
    ReviewItem,
    ReviewSearch,
    ReviewSort
  }
})
export default class ReviewsList extends Vue {
  @Prop({}) restaurant!: IFBRestaurant
  public items: Array<IFBReview> = []

  private isLoaded = false
  private isLoading = false
  // The last visible document
  private lastVisible

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

  searchQuery (query: any) {
    const reviewQ = this.$route.query.q || ''
    if (reviewQ !== '') { // Have review query.
      return query.where('body', '<', reviewQ)
    }
    return query
  }

  sortQuery (query: any) {
    const tag: string = (this.$route.query.sort_by as any) || 'default'

    if (tag === 'default') {
      return query
    } else if (tag === 'date_desc') {
      return query.orderBy('updatedAt', 'desc')
    } else if (tag === 'date_asc') {
      return query.orderBy('updatedAt', 'asc')
    } else if (tag === 'rating_desc') {
      return query.orderBy('rate', 'desc')
    } else if (tag === 'rating_asc') {
      return query.orderBy('rate', 'asc')
    }
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
      $fireStore: this.$fireStore,
      path: FBCollections.Reviews,
      queryBuilder: (query: any) => {
        let nextQuery = query.where('restaurantId', '==', this.restaurant.uniqueId)
        nextQuery = this.searchQuery(nextQuery)
        nextQuery = this.sortQuery(nextQuery)
        nextQuery = queryBuilder(nextQuery)
        return nextQuery.limit(2)
      },
      iterateDocumentSnapshots: (data: IFBReview) => {
        nextItem.push(data)
      },
      documentSnapshotsEvent: (documentSnapshots: QuerySnapshot) => {
        // Get the last visible document
        this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
        // console.log('last', this.lastVisible)
      },
      emptyHint: () => {
      }
    })
    this.items = nextItem
    this.isLoaded = true
    this.isLoading = false
  }

  showEmptyHint () {
    return this.isLoaded && this.items.length === 0
  }

  async onWaypoint (e) {
    await this.nextPageLoad()
  }

  async mounted () {
    await this.resetPage()
  }

  async resetPage () {
    this.items = []
    this.isLoading = false
    this.lastVisible = null

    await this.firstPageLoad()
  }

  @Watch('$route')
  async routeChanged (to: any, from: any) {
    // await this.resetPage()
  }
}
