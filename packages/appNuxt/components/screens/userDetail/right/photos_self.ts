import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBPhoto } from 'ieattatypes/types/index'
import { QuerySnapshot } from 'firebase/firebase-storage'
import { FBCollections } from '~/database/constant'
import { FirestoreService, QueryBuilder } from '~/database/services/firestore_service'

@Component({
  components: {
  }
})
export default class UserDetailPhotosSelf extends Vue {
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
    await FirestoreService.instance.snapshotList({
      $fireStore: this.$fireStore,
      path: FBCollections.Photos,
      queryBuilder: (query: any) => {
        return queryBuilder(FirestoreService.instance.queryByCreatorId({
          query,
          userId: (this.$route.query.userid as string)
        })).limit(5 * 3)
      },
      iterateDocumentSnapshots: (data: IFBPhoto) => {
        nextItem.push(data)
      },
      documentSnapshotsEvent: (documentSnapshots: QuerySnapshot) => {
        // Get the last visible document
        this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1]
        // console.log('last', this.lastVisible)
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

  getPhotoUrl (item: IFBPhoto) {
    if (item.originalUrl === '') {
      return require('~/assets/images/offline-sign-circular-band-label-sticker.png')
    }
    return item.originalUrl
  }
}
