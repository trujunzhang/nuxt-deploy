import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBUser } from 'ieattatypes/types/index'
import {
  USER_MENU_PATH_DEFAULT, USER_MENU_PATH_PHOTOS, USER_MENU_PATH_RESTAURANTS, USER_MENU_PATH_REVIEWS
} from '~/components/screens/userDetail/menu'

@Component({
  components: {}
})
export default class UserLeft extends Vue {
  @Prop({}) detailUser!: IFBUser

  getLeftTitle () {
    return `${this.detailUser.username}'s Profile`
  }

  onMenuClick (tag: string) {
    switch (tag) {
      case 'profile': {
        this.$router.push(`${USER_MENU_PATH_DEFAULT}?userid=${this.detailUser.id}`, () => {
        })
        break
      }
      case 'restaurants': {
        this.$router.push(`${USER_MENU_PATH_DEFAULT}?menu=restaurants&userid=${this.detailUser.id}`, () => {
        })
        break
      }
      case 'reviews': {
        this.$router.push(`${USER_MENU_PATH_DEFAULT}?menu=reviews&userid=${this.detailUser.id}`, () => {
        })
        break
      }
      case 'photos': {
        this.$router.push(`${USER_MENU_PATH_DEFAULT}?menu=photos&userid=${this.detailUser.id}`, () => {
        })
        break
      }
    }
  }

  /**
   * class="titled-nav_link is-active"
   */
  getMenuClassName (activePath: string) {
    // const { path } = this.$route
    const menu = this.$route.query.menu || 'profile'
    return (menu === activePath) ? 'titled-nav_link is-active' : 'titled-nav_link'
  }

  mounted () {
  }
}
