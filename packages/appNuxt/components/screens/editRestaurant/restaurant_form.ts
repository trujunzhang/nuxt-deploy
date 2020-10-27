import { namespace } from 'vuex-class'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant} from 'ieattatypes/types/index'
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
  public displayName: string = ''
  public note: string = ''
  public showAlertMessage: boolean = false

  @auth.State
  public user!: IAuthUser | null

  getDetailRestaurantUrl () {
    return `/biz/${this.restaurant.slug}`
  }

  async onSaveBtnClick () {
    if (this.displayName.trim().length === 0) {
      this.showAlertMessage = true
      return
    }
    this.showAlertMessage = false
    const lastRestaurant : IFBRestaurant = this.isNewRestaurant
      ? ParseModelRestaurants.emptyRestaurant(
        (this.user as any),
        0, 0
      ) : this.restaurant
    const nextRestaurant: IFBRestaurant = ParseModelRestaurants.updateRestaurant(
      lastRestaurant,
      this.displayName,
      this.note
    )
    await FirestoreService.instance.setData(
      this.$fireStore,
      FBCollections.Restaurants,
      nextRestaurant
    )
    await this.$router.push(this.getDetailRestaurantUrl())
  }

  mounted () {
    if (!this.isNewRestaurant) {
      this.displayName = this.restaurant.displayName
      this.note = this.restaurant.extraNote
    }
  }
}
