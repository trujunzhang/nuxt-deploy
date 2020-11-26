import { Component, Prop, Vue } from 'vue-property-decorator'
import { RouteHelper } from '~/database/utils/route_helper'

@Component({
  components: {
  }
})
export default class ReviewSearch extends Vue {
  public searchReviews: string = ''

  onSearchReviewsClick () {
    // const query: any = Object.assign(
    //   this.$route.query,
    //   {
    //     q: this.searchReviews
    //   }
    // )
    // if (this.searchReviews === '') {
    //   delete query.q
    // }
    const location = RouteHelper.getReviewSearchLocation(this.$route, this.searchReviews)
    this.$router.push(location, () => {})
    // this.$router.push({
    //   path: this.$route.path,
    //   query: {
    //     wh: 'djzhang'
    //   }
    // }, () => {
    // })
  }
}
