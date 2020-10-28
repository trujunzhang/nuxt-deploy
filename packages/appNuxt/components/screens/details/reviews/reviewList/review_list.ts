import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { IFBReview, IFBRestaurant } from 'ieattatypes'
import { QuerySnapshot } from 'firebase/firebase-storage'
import { FBCollections } from '~/database/constant'
// import { loadReviews } from '~/database/data/Reviews'
import ReviewItem from '~/components/screens/details/reviews/reviewItem/review_item.vue'
import ReviewPop from '~/components/screens/details/reviews/review_pop.vue'
import NewReviewPanel from '~/components/screens/details/reviews/newReviewPanel/new_review_panel.vue'
import { FirestoreService, QueryBuilder } from '~/database/services/firestore_service'

@Component({
  components: {
    NewReviewPanel,
    ReviewItem,
    ReviewPop
  }
})
export default class ReviewsList extends Vue {
  @Prop({}) restaurant!: IFBRestaurant
  // public items: Array<IFBReview> = loadReviews()
  public items: Array<IFBReview> = []

  private isLoaded = false
  private isLoading = false
  // The last visible document
  private lastVisible

  public sortTitle: string = 'Yelp Sort'
  public showPopMenu: boolean = false
  // public showPopMenu: boolean = true

  onClickOutside (event) {
    console.log('Clicked outside. Event: ', event)
    this.showPopMenu = false
  }

  onSortIconClick () {
    this.showPopMenu = true
  }

  private sortTitles = {
    default: 'Yelp Sort',
    date_desc: 'Newest First',
    date_asc: 'Oldest First',
    rating_desc: 'Highest Rated',
    rating_asc: 'Lowest Rated'
  }

  onSortItemChanged (tag:string) {
    this.showPopMenu = false
    this.sortTitle = this.sortTitles[tag]
  }

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
        return queryBuilder(this.sortQuery(query))
          .where('restaurantId', '==', this.restaurant.uniqueId)
          .limit(2)
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
    const tag: string = (this.$route.query.sort_by as any) || 'default'
    this.sortTitle = this.sortTitles[tag]
    await this.resetPage()
  }

  async resetPage () {
    this.items = []
    this.isLoading = false
    this.lastVisible = null

    await this.firstPageLoad()
  }

  @Watch('$route')
  async routeChanged (to: any, from:any) {
    await this.resetPage()
  }
}
