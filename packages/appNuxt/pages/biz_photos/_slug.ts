import { Component, Vue } from 'vue-property-decorator'
import { IFBRestaurant, IFBRecipe } from 'ieattatypes/types/index'
import { namespace } from 'vuex-class'
import PhotoSingle from '~/components/screens/photoSingle/photo_single.vue'
import PhotoGrid from '~/components/screens/photoGrid/photo_grid.vue'
import PhotoFooter from '~/components/screens/footer/footer_photo.vue'
import { FirestoreService } from '~/database/services/firestore_service'
import { getPhotoRelatedPath } from '~/database/constant'

const ieattaConfigure = namespace('ieattaConfigure')

@Component({
  components: {
    PhotoFooter,
    PhotoGrid,
    PhotoSingle
  }
})
export default class PhotoBrowse extends Vue {
  public relatedModel: IFBRestaurant | IFBRecipe | null = null
  private isLoading = false
  private photoSelectId: string | null = null

  @ieattaConfigure.Mutation
  public SET_SHOW_404!: (payload: boolean) => void

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    const photoType = this.$route.query.type as string
    await FirestoreService.instance.snapshotList({
      $fireStore: this.$fire.firestore,
      path: getPhotoRelatedPath(photoType),
      queryBuilder: (query: any) => {
        const slug = this.$route.params.slug as string
        return query.where('slug', '==', slug)
      },
      iterateDocumentSnapshots: (data: IFBRestaurant) => {
        this.relatedModel = data
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
