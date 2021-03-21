import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant, IFBReview, IFBEvent, IFBRecipe } from 'ieattatypes/types'
import { FirestoreService, QueryBuilder } from '~/database/services/firestore_service'
import ReviewItem from '~/components/screens/edit/review/reviewItem/review_item.vue'
import { FirestorePath } from '~/database/services/firestore_path'

@Component({
  components: {
    ReviewItem
  }
})
export default class ReviewRight extends Vue {
  @Prop({}) relatedModel!: IFBRestaurant | IFBEvent | IFBRecipe
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
    const reviewType = this.$route.query.type as string
    await FirestoreService.instance.collectionStream({
      query: new FirestorePath(this.$fire.firestore).getReviewsList(this.relatedModel.uniqueId, reviewType),
      queryBuilder: (query: any) => {
        return queryBuilder(query)
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

  checkNewReviewPage () {
    const reviewId = this.$route.query.rid as string
    return reviewId === undefined || reviewId === null
  }

  async mounted () {
    this.isNewReview = this.checkNewReviewPage()
    await this.firstPageLoad()
  }
}
