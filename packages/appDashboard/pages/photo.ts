import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBPhoto } from 'ieattatypes/types/index'
import { loadPhotos } from '~/database/data/Photos'
import { uploadPhotos } from '~/database/event/Photos'

@Component({
  components: {}
})
export default class Index extends Vue {
  public headers: Array<object> = [
    {
      text: 'RestaurantId',
      value: 'restaurantId'
    },
    {
      text: 'RecipeId',
      value: 'recipeId'
    },
    {
      text: 'PhotoType',
      value: 'photoType'
    },
    {
      text: 'CreatorId',
      value: 'creatorId'
    },
    {
      text: 'GeoHash',
      value: 'geoHash'
    }
  ]

  public items: Array<IFBPhoto> = loadPhotos()

  public search?: string = ''

  public loading?: boolean = false

  async importToFirebase () {
    this.loading = true
    await uploadPhotos(this.$fire.auth, this.$fire.firestore)
    this.loading = false
  }
}
