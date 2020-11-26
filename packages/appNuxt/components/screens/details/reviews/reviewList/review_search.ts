import { Component, Vue } from 'vue-property-decorator'
import { RouteHelper } from '~/database/utils/route_helper'

@Component({
  components: {}
})
export default class ReviewSearch extends Vue {
  public searchReviews: string = ''

  onSearchReviewsClick () {
    this.$router.push(RouteHelper.getReviewSearchLocation(this.$route, this.searchReviews), () => {
    })
  }

  mounted () {
    this.searchReviews = (this.$route.query.q as any) || ''
  }
}
