import { Component, Vue } from 'vue-property-decorator'
import vClickOutside from 'v-click-outside'
import ReviewPop from '~/components/screens/details/reviews/review_pop.vue'

@Component({
  directives: {
    clickOutside: vClickOutside.directive
  },
  components: {
    ReviewPop
  }
})
export default class ReviewSort extends Vue {
  public sortTitle: string = 'Yelp Sort'
  public showPopMenu: boolean = false

  onClickOutside (event) {
    // console.log('Clicked outside. Event: ', event)
    this.showPopMenu = false
  }

  onSortIconClick () {
    this.showPopMenu = true
  }

  private sortTitles = {
    default: 'Yelp Sort',
    date_desc: 'Newest First',
    date_asc: 'Oldest First',
    rating_desc: 'Highest Rated',
    rating_asc: 'Lowest Rated'
  }

  onSortItemChanged (tag: string) {
    this.showPopMenu = false
    this.sortTitle = this.sortTitles[tag]
  }

  mounted () {
    const tag: string = (this.$route.query.sort_by as any) || 'default'
    this.sortTitle = this.sortTitles[tag]
  }
}
