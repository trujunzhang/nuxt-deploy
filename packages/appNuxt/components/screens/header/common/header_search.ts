import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class HeaderSearch extends Vue {
  public search: string | null = ''

  /**
   * https://www.yelp.com/search?find_desc=ros
   */
  getSearchUrl () {
    return `/search?find_desc=${this.search}`
  }

  onSearchClick () {
    this.$router.push(this.getSearchUrl(), () => {
    })
  }

  mounted () {
    if (this.$route.query.find_desc) {
      this.search = (this.$route.query.find_desc as string)
    }
  }
}
