import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBUser, IFBUserStatistics } from 'ieattatypes/types/index'
import { namespace } from 'vuex-class'
import { IAuthUser } from '~/database/models/auth_user_model'
import { FirestoreService } from '~/database/services/firestore_service'
import { UserHelper } from '~/database/user_helper'
import { FirestoreParams } from '~/database/services/firestore_params'

const auth = namespace('auth')

@Component({
  components: {}
})
export default class UserTop extends Vue {
  @Prop({}) detailUser!: IFBUser

  @auth.State
  public user!: IAuthUser | null

  public userStatistics: IFBUserStatistics = UserHelper.defaultUserStatistics

  getPhotoUrl () {
    if (this.detailUser.originalUrl === '') {
      return require('~/assets/images/user_60_square.png')
    }
    return this.detailUser.originalUrl
  }

  shouldShowActionPanel () {
    return this.detailUser.id === this.user?.uid
  }

  /**
   * href="/user_photos/add"
   */
  getUserAddPhotoUrl () {
    const { fullPath } = this.$route
    return `/user_photos/add?return_url=${fullPath}`
  }

  /**
   * href="/profile?return_url=/user_details?userid=kIEHaO2vd6Lic4rwkMgH6Q"
   */
  getUserProfileUrl () {
    const { fullPath } = this.$route
    return `/profile?return_url=${fullPath}`
  }

  getRestaurantsCount () {
    return this.userStatistics[FirestoreParams.KEY_RESTAURANTS]
  }

  getPhotosCount () {
    return this.userStatistics[FirestoreParams.KEY_PHOTOS]
  }

  getReviewsCount () {
    return this.userStatistics[FirestoreParams.KEY_REVIEWS]
  }

  async _fetchUserStatistics () {
    const _userStatistics: IFBUserStatistics | undefined =
      await FirestoreService.instance.queryUserStatisticsByCreatorId(
        this.$fire.functions,
        this.detailUser.id
      )
    if (_userStatistics !== undefined && _userStatistics !== null) {
      this.userStatistics = _userStatistics
    }
  }

  async mounted () {
    await this._fetchUserStatistics()
  }
}
