import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBPhoto, IFBRecipe, IFBRestaurant } from 'ieattatypes/types/index'
import { QuerySnapshot } from 'firebase/firebase-storage'
import TopTitle from '~/components/screens/photoGrid/topTitle/top_title.vue'
import { FirestoreService, QueryBuilder } from '~/database/services/firestore_service'
import { FirestorePath } from '~/database/services/firestore_path'
import { getSeeAllPhotoLink, getSinglePhotoLink } from '~/utils/linkHelper/photos'

@Component({
  components: {
    TopTitle
  }
})
export default class PhotoGrid extends Vue {
  @Prop({}) relatedModel!: IFBRestaurant | IFBRecipe

  public items: Array<IFBPhoto> = []

  private isLoaded = false
  private isLoading = false
  // The last visible document
  private lastVisible

  showEmptyHint () {
    return this.isLoaded && this.items.length === 0
  }

  async firstPageLoad () {
    await this._fetchPage({
      queryBuilder: (query: any) => {
        return query
      },
      emptyHint: () => {
      }
    })
  }

  async nextPageLoad () {
    if (this.lastVisible === undefined) {
      return
    }
    await this._fetchPage({
      queryBuilder: (query: any) => {
        return query.startAfter(this.lastVisible)
      }
    })
  }

  async _fetchPage (
    params: {
      queryBuilder: QueryBuilder,
      emptyHint?: () => void
    }) {
    if (this.isLoading) {
      return
    }
    const {
      queryBuilder,
      emptyHint
    } = params
    this.isLoading = true
    const nextItem = this.items.concat([])
    const photoType = this.$route.query.type as string
    await FirestoreService.instance.collectionStream({
      query: new FirestorePath(this.$fire.firestore).getPhotosList(this.relatedModel.uniqueId, photoType),
      queryBuilder: (query: any) => {
        return queryBuilder(
          query.orderBy('updatedAt', 'desc')
        ).limit(5 * 3)
      },
      iterateDocumentSnapshots: (data: IFBPhoto) => {
        nextItem.push(data)
      },
      documentSnapshotsEvent: (documentSnapshots: QuerySnapshot) => {
        // Get the last visible document
        this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
      },
      emptyHint
    })
    this.items = nextItem
    this.isLoaded = true
    this.isLoading = false
  }

  async onWaypoint (e) {
    await this.nextPageLoad()
  }

  async mounted () {
    await this.firstPageLoad()
  }

  /**
   * Example:
   *   href="/biz_photos/the-ramen-bar-san-francisco?select=J73NiWfGvXslEK2EMIPSbA"
   * @param item
   */
  getImageLink (item: IFBPhoto) {
    const photoType = this.$route.query.type as string
    return getSinglePhotoLink(this.relatedModel, photoType, item.uniqueId)
  }

  getPhotoUrl (item: IFBPhoto) {
    if (item.originalUrl === '') {
      return require('~/assets/images/offline-sign-circular-band-label-sticker.png')
    }
    return item.originalUrl
  }

  /**
   * Example:
   *   href="/biz_photos/the-ramen-bar-san-francisco"
   */
  getSeeAllLink () {
    const photoType = this.$route.query.type as string
    return getSeeAllPhotoLink(this.relatedModel, photoType)
  }
}
