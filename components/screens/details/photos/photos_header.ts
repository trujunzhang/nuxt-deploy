import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBPhoto } from 'ieattatypes'
import { IFBRestaurant } from 'ieattatypes/types/index'
import { loadPhotos } from '~/database/data/Photos'
import { FBCollections } from '~/database/constant'
import { PhotoHelper } from '~/database/photo_helper'

@Component({
  components: {}
})
export default class RestaurantPhotoHeader extends Vue {
  @Prop({}) restaurant!: IFBRestaurant
  // public items: Array<IFBPhoto> = loadPhotos()
  public items: Array<IFBPhoto> = []
  public photosLen: number | null = null
  private isLoading = false

  _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    PhotoHelper.fetchPage(
      this.restaurant,
      this.$fireStore,
      (items: Array<IFBPhoto>, len: number) => {
        this.items = items
        this.photosLen = len
        this.isLoading = false
      }
    )
  }

  /**
   * Example:
   *   href="/biz_photos/the-ramen-bar-san-francisco?select=J73NiWfGvXslEK2EMIPSbA"
   * @param item
   */
  getImageLink (item: IFBPhoto) {
    return `${this.getSeeAllLink()}?select=${item.uniqueId}`
  }

  /**
   * Example:
   *   href="/biz_photos/the-ramen-bar-san-francisco"
   * @param item
   */
  getSeeAllLink () {
    return `/biz_photos/${this.restaurant.slug}`
  }

  getPhotosLen () {
    if (this.photosLen === undefined ||
      !this.photosLen
    ) {
      return ''
    }
    return 'See All ' + this.photosLen
  }

  mounted () {
    this._fetchPage()
  }
}
