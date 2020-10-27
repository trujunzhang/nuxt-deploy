import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class NoResults extends Vue {
  public find_desc: string | null = null

  getNoResultTitle () {
    if (this.find_desc) {
      return `No Results for ${this.find_desc}`
    }
    return 'No Results'
  }

  mounted () {
    this.find_desc = this.$route.query.find_desc as any
  }
}
