import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBUser } from 'ieattatypes/types/index'

@Component({
  components: {}
})
export default class UserLeft extends Vue {
  @Prop({}) user!: IFBUser

  getLeftTitle () {
    return `${this.user.username}'s Profile`
  }

  getUserProfileUrl () {
    return `/user_details?userid=${this.user.id}`
  }

  getUserReviewsUrl () {
    return `/user_details_reviews_self?userid=${this.user.id}`
  }

  getUserPhotosUrl () {
    return `/user_details_photos_self?userid=${this.user.id}`
  }

  mounted () {
  }
}
