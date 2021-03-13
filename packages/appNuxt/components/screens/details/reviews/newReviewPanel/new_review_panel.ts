import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant, IFBEvent, IFBRecipe } from 'ieattatypes/types'
import { ReviewType } from '~/database/constant'

@Component({
  components: {}
})
export default class NewReviewPanel extends Vue {
  @Prop({}) reviewType!: ReviewType
  @Prop({}) relatedId!: string
  @Prop({}) relatedModel!: IFBRestaurant | IFBEvent | IFBRecipe

  getTitle () {
    return `${this.relatedModel.displayName}`
  }

  /**
   * Example:
   *   href="/writeareview/biz/3YVy-af7Ipl7TVft3kquWg?return_url=%2Fbiz%2F3YVy-af7Ipl7TVft3kquWg&amp;source=biz_details_war_button"
   */
  getWriteReviewLink () {
    return `/writeareview/biz/${this.relatedModel.uniqueId}?type=${this.reviewType}`
  }
}
