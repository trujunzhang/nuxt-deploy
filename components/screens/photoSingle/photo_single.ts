import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBPhoto, IFBRestaurant } from 'ieattatypes/types/index'
import RestaurantTitle from '~/components/screens/photoSingle/restaurantTitle/restaurant_title.vue'
import { PhotoHelper } from '~/database/photo_helper'

@Component({
  components: {
    RestaurantTitle
  }
})
export default class PhotoSingle extends Vue {
  @Prop({}) restaurant!: IFBRestaurant
  // public items: Array<IFBPhoto> = loadPhotos()
  public items: Array<IFBPhoto> = []
  public photosLen: number | null = null
  public photoIndex: number = 0
  public currentImageUrl: string | null = null
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
        const photoIndex = PhotoHelper.getSelectedIndex(
          this.$route,
          items
        )
        this.photoIndex = photoIndex
        this.currentImageUrl = items[photoIndex].originalUrl
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
   */
  getSeeAllLink () {
    return `/biz_photos/${this.restaurant.slug}`
  }

  getDetailRestaurantUrl () {
    return `/biz/${this.restaurant.slug}`
  }

  getCurrentImageUrl () {
    return this.items[this.photoIndex].originalUrl
  }

  getCurrentPhotoIndex () {
    return this.photoIndex + 1
  }

  onPreClick () {
    const preIndex = this.photoIndex - 1
    this.photoIndex = preIndex
    this.currentImageUrl = this.items[this.photoIndex].originalUrl
  }

  // prevSelectedImageUrl () {
  //   const preIndex = this.photoIndex - 1
  //   if (preIndex >= 0) {
  //     return this.getImageLink(this.items[preIndex])
  //   }
  //   return null
  // }

  onNextClick () {
    const nextIndex = this.photoIndex + 1
    this.photoIndex = nextIndex
    this.currentImageUrl = this.items[this.photoIndex].originalUrl
  }

  // nextSelectedImageUrl () {
  //   const nextIndex = this.photoIndex + 1
  //   if (nextIndex <= (this.photosLen || 0) - 1) {
  //     return this.getImageLink(this.items[nextIndex])
  //   }
  //   return null
  // }

  mounted () {
    this._fetchPage()
  }
}
