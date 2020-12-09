import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'

@Component({
  components: {}
})
export default class RestaurantTitle extends Vue {
  @Prop({}) restaurant!: IFBRestaurant

  getDetailRestaurantUrl () {
    return `/biz/${this.restaurant.slug}`
  }

  /**
   * Example:
   *   href="/biz_photos/the-ramen-bar-san-francisco"
   * @param item
   */
  getSeeAllLink () {
    return `/biz_photos/${this.restaurant.slug}`
  }

  getTitle () {
    return `${this.restaurant.displayName}`
  }
}
