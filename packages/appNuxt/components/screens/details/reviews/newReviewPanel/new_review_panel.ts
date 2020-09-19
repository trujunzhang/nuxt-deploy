import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'

@Component({
  components: {}
})
export default class NewReviewPanel extends Vue {
  @Prop({}) restaurant!: IFBRestaurant

  getTitle () {
    return `The ${this.restaurant.displayName}`
  }

  /**
   * Example:
   *   href="/writeareview/biz/3YVy-af7Ipl7TVft3kquWg?return_url=%2Fbiz%2F3YVy-af7Ipl7TVft3kquWg&amp;source=biz_details_war_button"
   */
  getWriteReviewLink () {
    return `/writeareview/biz/${this.restaurant.uniqueId}`
  }
}
