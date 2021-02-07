import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRecipe, IFBRestaurant } from 'ieattatypes/types'
import { FirestoreService } from '~/database/services/firestore_service'
import { FirestorePath } from '~/database/services/firestore_path'
import MenuItem from '~/components/screens/details/restaurant/menus/menu_item.vue'

@Component({
  components: {
    MenuItem
  }
})
export default class RestaurantMenus extends Vue {
  @Prop({}) restaurant!: IFBRestaurant

  public items: Array<IFBRecipe> = []
  private isLoaded = false
  private isLoading = false

  getDetailRecipeUrl (event:IFBRecipe) {
    // return `/events/${event.slug}`
  }

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
      query: new FirestorePath(this.$fire.firestore).recipes(this.restaurant.uniqueId),
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
