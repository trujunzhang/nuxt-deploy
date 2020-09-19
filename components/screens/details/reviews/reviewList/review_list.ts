import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBReview } from 'ieattatypes'
import { FBCollections } from '~/database/constant'
import { loadReviews } from '~/database/data/Reviews'
import ReviewItem from '~/components/screens/details/reviews/reviewItem/review_item.vue'
import NewReviewPanel from '~/components/screens/details/reviews/newReviewPanel/new_review_panel.vue'
import { IFBRestaurant } from 'ieattatypes/types/index'

@Component({
  components: {
    NewReviewPanel,
    ReviewItem
  }
})
export default class ReviewsList extends Vue {
  @Prop({}) restaurant!: IFBRestaurant
  // public items: Array<IFBReview> = loadReviews()
  public items: Array<IFBReview> = []
  public markers: any = []

  private isLoading = false
  // The last visible document
  private lastVisible

  firstPageLoad () {
    const first = this.$fireStore.collection(FBCollections.Reviews)
    this._fetchPage(first)
  }

  nextPageLoad () {
    if (this.lastVisible === undefined) {
      return
    }
    const next = this.$fireStore.collection(FBCollections.Reviews)
      .startAfter(this.lastVisible)
    this._fetchPage(next)
  }

  _fetchPage (query) {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const nextQuery = query
      .where('restaurantId', '==', this.restaurant.uniqueId)
      .limit(2)
    nextQuery.get().then(
      (documentSnapshots) => {
        // Get the last visible document
        this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
        // console.log('last', this.lastVisible)

        const nextItem = this.items.concat([])
        // console.log('.........')
        documentSnapshots.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data()}`)
          nextItem.push(doc.data())
        })
        this.items = nextItem
        this.isLoading = false
      }
    ).catch((ex) => {
      this.isLoading = false
    })
  }

  onWaypoint (e) {
    this.nextPageLoad()
  }

  toggle () {
    this.nextPageLoad()
  }

  mounted () {
    this.firstPageLoad()
  }
}
