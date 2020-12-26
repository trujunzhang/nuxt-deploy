import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBReview } from 'ieattatypes/types/index'
import { loadReviews } from '~/database/data/Reviews'
import { uploadReviews } from '~/database/event/Reviews'
import { uploadPhotos } from '~/database/event/Photos'

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
      text: 'RestaurantId',
      value: 'restaurantId'
    },
    {
      text: 'EventId',
      value: 'eventId'
    },
    {
      text: 'RecipeId',
      value: 'recipeId'
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

  public items: Array<IFBReview> = loadReviews()

  public search?: string = ''

  public loading?: boolean = false

  async importToFirebase () {
    this.loading = true
    await uploadReviews(this.$fire.auth, this.$fire.firestore)
    this.loading = false
  }
}
