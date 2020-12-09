import { QuerySnapshot } from 'firebase/firebase-storage'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant, IFBReview } from 'ieattatypes/types/index'
import { FirestoreService, QueryBuilder } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'
import ReviewItem from '~/components/screens/editReview/reviewItem/review_item.vue'

@Component({
  components: {
    ReviewItem
  }
})
export default class ReviewRight extends Vue {
  @Prop({}) restaurant!: IFBRestaurant
  public items: Array<IFBReview> = []

  private isLoaded = false
  private isLoading = false
  private isNewReview = false

  async firstPageLoad () {
    await this._fetchPage((query: any) => {
      return query
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
        return queryBuilder(query)
          .where('restaurantId', '==', this.restaurant.uniqueId)
          .limit(6)
      },
      iterateDocumentSnapshots: (data: IFBReview) => {
        if (this.isNewReview || (!!reviewId && data.uniqueId !== reviewId)) {
          nextItem.push(data)
        }
      }
    })
    this.items = nextItem
    this.isLoaded = true
    this.isLoading = false
  }

  showEmptyText () {
    return (this.isLoaded && this.items.length === 0)
  }

  checkNewReviewPage (
  ) {
    const reviewId = this.$route.query.rid as string
    return reviewId === undefined || reviewId === null
  }

  async mounted () {
    this.isNewReview = this.checkNewReviewPage()
    await this.firstPageLoad()
  }
}
