import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBEvent, IFBPhoto } from 'ieattatypes/types/index'
import { FirestoreService } from '~/database/services/firestore_service'
import { FirestorePath } from '~/database/services/firestore_path'
import { PhotoType } from '~/database/constant'
import WaiterItem from '~/components/screens/details/event/waiters/waiter_item.vue'

@Component({
  components: {
    WaiterItem
  }
})
export default class WaitersInEvent extends Vue {
  @Prop({}) event !: IFBEvent

  public items: Array<IFBPhoto> = []
  private isLoaded = false
  private isLoading = false

  showEmptyHint () {
    return this.isLoaded && this.items.length === 0
  }

  showWaitersPage () {
    return this.isLoaded
  }

  getWaiter (waiterId: string) {
    const obj = this.items.find(obj => obj.uniqueId === waiterId)
    return obj
  }

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const nextItem = this.items.concat([])
    await FirestoreService.instance.collectionStream({
      query: new FirestorePath(this.$fire.firestore).getPhotosList(this.event.restaurantId, PhotoType.Waiter),
      queryBuilder: (query: any) => {
        return query.orderBy('updatedAt', 'desc')
      },
      iterateDocumentSnapshots: (data: IFBPhoto) => {
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
