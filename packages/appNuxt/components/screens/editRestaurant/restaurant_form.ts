import { namespace } from 'vuex-class'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBPhoto, IFBRestaurant } from 'ieattatypes/types/index'
import { ParseModelRestaurants } from '~/database/appModel/restaurant'
import { IAuthUser } from '~/database/models/auth_user_model'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'

const auth = namespace('auth')

@Component({
  components: {}
})
export default class RestaurantForm extends Vue {
  @Prop({}) restaurant!: IFBRestaurant
  @Prop({}) isNewRestaurant!: boolean
  public items: Array<IFBPhoto> = []
  private isLoading = false
  private lastCoverUrl = ''
  public displayName: string = ''
  public note: string = ''
  public showAlertMessage: boolean = false

  @auth.State
  public user!: IAuthUser | null

  getDetailRestaurantUrl () {
    return `/biz/${this.restaurant.slug}`
  }

  getCoverUrl () {
    if (this.lastCoverUrl === '') {
      return require('~/assets/images/business_large_square.png')
    }
    return this.lastCoverUrl
  }

  getPhotoUrl (item: IFBPhoto) {
    if (item.originalUrl === '') {
      return require('~/assets/images/offline-sign-circular-band-label-sticker.png')
    }
    return item.originalUrl
  }

  showCoverSection () {
    return this.items.length > 0
  }

  showSelectCoverTitle () {
    return this.items.length > 0
  }

  showSelectCoverIcon (item: IFBPhoto) {
    return item.originalUrl === this.lastCoverUrl
  }

  async onSelectCoverClick (item: IFBPhoto) {
    this.lastCoverUrl = item.originalUrl
    const nextRestaurant = ParseModelRestaurants.updateCover(this.restaurant, item.originalUrl)
    await FirestoreService.instance.setData(
      this.$fire.firestore,
      FBCollections.Restaurants,
      nextRestaurant
    )
  }

  async onSaveBtnClick () {
    if (this.displayName.trim().length === 0) {
      this.showAlertMessage = true
      return
    }
    this.showAlertMessage = false
    const lastRestaurant: IFBRestaurant = this.isNewRestaurant
      ? ParseModelRestaurants.emptyRestaurant((this.user as any), 0, 0) : this.restaurant

    const nextRestaurant: IFBRestaurant = ParseModelRestaurants.updateRestaurant(
      lastRestaurant,
      this.displayName,
      this.note
    )
    await FirestoreService.instance.setData(
      this.$fire.firestore,
      FBCollections.Restaurants,
      nextRestaurant
    )
    await this.$router.push(this.getDetailRestaurantUrl())
  }

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    const nextItem = this.items.concat([])
    await FirestoreService.instance.snapshotList({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Photos,
      queryBuilder: (query: any) => {
        return FirestoreService.instance.queryPhotoByGeoHashFromRestaurant({
          query,
          restaurant: this.restaurant
        })
      },
      iterateDocumentSnapshots: (data: IFBPhoto) => {
        nextItem.push(data)
      }
    })
    this.items = nextItem
    this.isLoading = false
  }

  async mounted () {
    if (!this.isNewRestaurant) {
      this.lastCoverUrl = this.restaurant.originalUrl
      this.displayName = this.restaurant.displayName
      this.note = this.restaurant.extraNote
      await this._fetchPage()
    }
  }
}
