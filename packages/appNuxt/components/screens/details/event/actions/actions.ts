import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBEvent } from 'ieattatypes/types/index'
import { getWriteReviewLink } from '~/utils/linkHelper/reviews'
import { ReviewType } from '~/database/constant'

@Component({
  components: {}
})
export default class EventActions extends Vue {
  @Prop({}) event!: IFBEvent

  getWriteReviewUrl () {
    return getWriteReviewLink(this.event, ReviewType.Event)
  }
}
