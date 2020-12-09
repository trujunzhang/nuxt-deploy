import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'
import { namespace } from 'vuex-class'
import PhotoSingle from '~/components/screens/photoSingle/photo_single.vue'
import PhotoGrid from '~/components/screens/photoGrid/photo_grid.vue'
import PhotoFooter from '~/components/screens/footer/footer_photo.vue'
import { FirestoreService, QueryBuilder } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'
const ieattaConfigure = namespace('ieattaConfigure')

@Component({
  components: {
    PhotoFooter,
    PhotoGrid,
    PhotoSingle
  }
})
export default class PhotoBrowse extends Vue {
  public restaurant: IFBRestaurant | null = null
  private isLoading = false
  private photoSelectId: string | null = null

  @ieattaConfigure.Mutation
  public SET_SHOW_404!: (payload: boolean) => void

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    await FirestoreService.instance.snapshotList({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Restaurants,
      queryBuilder: (query: any) => {
        const restaurantSlug = this.$route.params.slug as string
        return query.where('slug', '==', restaurantSlug)
      },
      iterateDocumentSnapshots: (data: IFBRestaurant) => {
        this.restaurant = data
      },
      emptyHint: () => {
        this.SET_SHOW_404(true)
      }
    })
    this.isLoading = false
  }

  async mounted () {
    await this._fetchPage()
    this.photoSelectId = this.$route.query.select as string
  }
}
