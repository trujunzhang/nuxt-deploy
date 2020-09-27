import { namespace } from 'vuex-class'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant, IFBReview } from 'ieattatypes/types/index'
import { ParseModelRestaurants } from '~/database/appModel/restaurant'
import { RestaurantHelper } from '~/database/restaurant_helper'
import { IAuthUser } from '~/database/models/auth_user_model'

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
    const result = await RestaurantHelper.saveRestaurant(
      this.$fireStore,
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
