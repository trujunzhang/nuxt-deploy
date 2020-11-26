import { Component, Prop, Vue } from 'vue-property-decorator'
import { RouteHelper } from '~/database/utils/route_helper'

@Component({
  components: {}
})
export default class ReviewPop extends Vue {
  @Prop({}) onSortItemChanged!: (tag: string) => void

  onSortItemClick (tag: string) {
    this.onSortItemChanged(tag)
    this.$router.push(RouteHelper.getReviewSortLocation(this.$route, tag), () => {
    })
    // if (tag === 'default') {
    //   this.$router.push(this.$route.path, () => {
    //   })
    // } else {
    //   this.$router.push({
    //     path: this.$route.path,
    //     query: { sort_by: tag }
    //   }, () => {
    //   })
    // }
  }
}
