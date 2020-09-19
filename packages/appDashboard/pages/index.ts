import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBReview } from 'ieattatypes'
import { reviews, loadReviews } from '~/database/data/Reviews'
import { uploadReviews } from '~/database/event/Reviews'

@Component({
  components: {}
})
export default class Index extends Vue {
  public headers: Array<object> = [
    {
      text: 'reviewType',
      value: 'reviewType'
    },
    {
      text: 'rate',
      value: 'rate'
    },
    {
      text: 'creatorId',
      value: 'creatorId'
    }
  ]

  // public items: Array<IFBReview> = reviews
  public items: Array<IFBReview> = loadReviews()

  public search?: string = ''

  public loading?: boolean = false

  async importToFirebase () {
    this.loading = true
    await uploadReviews(this.$fireStore)
    this.loading = false
  }
}
