import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBEvent, IFBRestaurant } from 'ieattatypes/types'
import { FirestoreService } from '~/database/services/firestore_service'
import { FirestorePath } from '~/database/services/firestore_path'

@Component({
  components: {}
})
export default class RestaurantEvents extends Vue {
  @Prop({}) restaurant!: IFBRestaurant

  public items: Array<IFBEvent> = []
  private isLoaded = false
  private isLoading = false

  getDetailEventUrl (event:IFBEvent) {
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
      query: new FirestorePath(this.$fire.firestore).events(this.restaurant.uniqueId),
      queryBuilder: (query: any) => {
        return query.orderBy('updatedAt', 'desc')
      },
      iterateDocumentSnapshots: (data: IFBEvent) => {
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
