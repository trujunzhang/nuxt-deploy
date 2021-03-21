import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRecipe, IFBRestaurant } from 'ieattatypes/types'
import { FirestoreService } from '~/database/services/firestore_service'
import { FirestorePath } from '~/database/services/firestore_path'
import RecipesList from '~/components/screens/details/recipes/recipes_list.vue'

@Component({
  components: {
    RecipesList
  }
})
export default class RestaurantMenus extends Vue {
  @Prop({}) restaurant!: IFBRestaurant

  public items: Array<IFBRecipe> = []
  private isLoaded = false
  private isLoading = false

  showEmptyHint () {
    return this.isLoaded && this.items.length === 0
  }

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const nextItem = this.items.concat([])
    await FirestoreService.instance.collectionStream({
      query: new FirestorePath(this.$fire.firestore).getRecipesList(this.restaurant.uniqueId),
      queryBuilder: (query: any) => {
        return query.orderBy('updatedAt', 'desc')
      },
      iterateDocumentSnapshots: (data: IFBRecipe) => {
        nextItem.push(data)
      }
    })
    this.items = nextItem
    this.isLoaded = true
    this.isLoading = false
  }

  async mounted () {
    await this._fetchPage()
  }
}
