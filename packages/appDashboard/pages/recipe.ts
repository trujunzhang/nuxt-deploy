import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRecipe } from 'ieattatypes/types/index'
import { recipes } from '~/database/data/Recipes'
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
      text: 'Created',
      value: 'createdAt'
    }
  ]

  public items: Array<IFBRecipe> = recipes

  public search?: string = ''

  public loading?: boolean = false

  async importToFirebase () {
    this.loading = true
    await uploadRecipes(this.$fireStore)
    this.loading = false
  }
}
