import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'
import { getRelatedDetailInPhotoLink } from '~/utils/linkHelper/detail'
import { getSeeAllPhotoLink } from '~/utils/linkHelper/photos'

@Component({
  components: {}
})
export default class TopTitle extends Vue {
  @Prop({}) relatedModel!: IFBRestaurant

  getRelatedDetailUrl () {
    const photoType = this.$route.query.type as string
    return getRelatedDetailInPhotoLink(this.relatedModel, photoType)
  }

  /**
   * Example:
   *   href="/biz_photos/the-ramen-bar-san-francisco"
   */
  getSeeAllLink () {
    const photoType = this.$route.query.type as string
    return getSeeAllPhotoLink(this.relatedModel, photoType)
  }

  getTitle () {
    return `${this.relatedModel.displayName}`
  }
}
