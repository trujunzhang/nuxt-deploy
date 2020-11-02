import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBUser } from 'ieattatypes/types/index'
import {
  USER_MENU_PATH_DEFAULT, USER_MENU_PATH_PHOTOS, USER_MENU_PATH_RESTAURANTS, USER_MENU_PATH_REVIEWS
} from '~/components/screens/userDetail/menu'

@Component({
  components: {}
})
export default class UserLeft extends Vue {
  @Prop({}) user!: IFBUser

  getLeftTitle () {
    return `${this.user.username}'s Profile`
  }

  getUserProfileUrl () {
    return `${USER_MENU_PATH_DEFAULT}?userid=${this.user.id}`
  }

  getUserRestaurantsUrl () {
    return `${USER_MENU_PATH_RESTAURANTS}?userid=${this.user.id}`
  }

  getUserReviewsUrl () {
    return `${USER_MENU_PATH_REVIEWS}?userid=${this.user.id}`
  }

  getUserPhotosUrl () {
    return `${USER_MENU_PATH_PHOTOS}?userid=${this.user.id}`
  }

  /**
   * class="titled-nav_link is-active"
   */
  getMenuClassName (activePath) {
    const { path } = this.$route
    return (path === activePath) ? 'titled-nav_link is-active' : 'titled-nav_link'
  }

  mounted () {
  }
}
