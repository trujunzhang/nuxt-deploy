import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'
import { loadRestaurants } from '~/database/data/Restaurants'
import { uploadRestaurants } from '~/database/event/Restaurants'

@Component({
  components: {
  }
})
export default class Index extends Vue {
  public headers: Array<object> = [
    {
      text: 'Name',
      value: 'displayName'
    },
    {
      text: 'Slug',
      value: 'slug'
    },
    {
      text: 'CreatedAt',
      value: 'createdAt'
    },
    {
      text: 'CreatorId',
      value: 'creatorId'
    },
    {
      text: 'Rate',
      value: 'rate'
    },
    {
      text: 'ReviewCount',
      value: 'reviewCount'
    },
    {
      text: 'GeoHash',
      value: 'geoHash'
    }
  ]

  public items: Array<IFBRestaurant> = loadRestaurants()

  public search?: string = ''

  public loading?: boolean = false

  async importToFirebase () {
    this.loading = true
    await uploadRestaurants(this.$fire.auth, this.$fire.firestore)
    this.loading = false
  }
}
