import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRecipe } from 'ieattatypes/types/index'
import { loadRecipes } from '~/database/data/Recipes'
import { uploadRecipes } from '~/database/event/Recipes'

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
      text: 'Price',
      value: 'price'
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
      text: 'RestaurantId',
      value: 'restaurantId'
    },
    {
      text: 'Created',
      value: 'createdAt'
    }
  ]

  public items: Array<IFBRecipe> = loadRecipes()

  public search?: string = ''

  public loading?: boolean = false

  async importToFirebase () {
    this.loading = true
    await uploadRecipes(this.$fire.auth, this.$fire.firestore)
    this.loading = false
  }
}
