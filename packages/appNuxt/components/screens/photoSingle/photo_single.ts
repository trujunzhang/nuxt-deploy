import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBPhoto, IFBRestaurant } from 'ieattatypes/types/index'
import TopTitle from '~/components/screens/photoSingle/topTitle/top_title.vue'
import { PhotoHelper } from '~/database/photo_helper'
import { formatDateForPhoto } from '~/database/utils/timeago_helper'
import { FirestoreService } from '~/database/services/firestore_service'
import { FirestorePath } from '~/database/services/firestore_path'
import { getSeeAllPhotoLink, getSinglePhotoLink } from '~/utils/linkHelper/photos'

@Component({
  components: {
    TopTitle
  }
})
export default class PhotoSingle extends Vue {
  @Prop({}) relatedModel!: IFBRestaurant
  public items: Array<IFBPhoto> = []
  public photosLen: number | null = null
  public photoIndex: number = 0
  public currentImage: IFBPhoto | null = null
  public currentImageUrl: string | null = null
  private isLoading = false

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const nextItem = this.items.concat([])
    const photoType = this.$route.query.type as string
    await FirestoreService.instance.collectionStream({
      query: new FirestorePath(this.$fire.firestore).getPhotosList(this.relatedModel.uniqueId, photoType),
      queryBuilder: (query: any) => {
        return query.orderBy('updatedAt', 'desc')
      },
      iterateDocumentSnapshots: (data: IFBPhoto) => {
        nextItem.push(data)
      }
    })
    this.items = nextItem
    this.photosLen = nextItem.length
    const photoIndex = PhotoHelper.getSelectedIndex(
      this.$route,
      nextItem
    )
    this.photoIndex = photoIndex
    this.currentImage = nextItem[photoIndex]
    this.currentImageUrl = this.getPhotoUrl(nextItem[photoIndex])
    this.isLoading = false
  }

  getPhotoUrl (item: IFBPhoto) {
    if (item.originalUrl === '') {
      return require('~/assets/images/offline-sign-circular-band-label-sticker.png')
    }
    return item.originalUrl
  }

  /**
   * Example:
   *   href="/biz_photos/the-ramen-bar-san-francisco?select=J73NiWfGvXslEK2EMIPSbA"
   * @param item
   */
  getImageLink (item: IFBPhoto) {
    const photoType = this.$route.query.type as string
    return getSinglePhotoLink(this.relatedModel, photoType, item.uniqueId)
  }

  getPhotoPublishedAt () {
    if (!this.currentImage) {
      throw new Error('not found current image')
    }
    return formatDateForPhoto(this.currentImage.createdAt)
  }

  getUserPhotoUrl () {
    if (!this.currentImage) {
      throw new Error('not found current image')
    }
    if (
      this.currentImage.avatarUrl === '' ||
      this.currentImage.avatarUrl === undefined
    ) {
      return require('~/assets/images/user_60_square.png')
    }
    return this.currentImage.avatarUrl
  }

  getUserProfileUrl () {
    if (!this.currentImage) {
      throw new Error('not found current image')
    }
    return `/user_details?userid=${this.currentImage.creatorId}`
  }

  /**
   * Example:
   *   href="/biz_photos/the-ramen-bar-san-francisco"
   */
  getSeeAllLink () {
    const photoType = this.$route.query.type as string
    return getSeeAllPhotoLink(this.relatedModel, photoType)
  }

  getCurrentImageUrl () {
    return this.items[this.photoIndex].originalUrl
  }

  getCurrentPhotoIndex () {
    return this.photoIndex + 1
  }

  /**
   *  class="media-nav_link media-nav_link--prev js-media-nav_link--prev"
   */
  getPreLinkClassName () {
    const className = this.photoIndex === 0 ? ' is-disabled' : ''
    return `media-nav_link media-nav_link--prev js-media-nav_link--prev${className}`
  }

  onPreClick () {
    if (this.photoIndex === 0) {
      return
    }
    const preIndex = this.photoIndex - 1
    this.photoIndex = preIndex
    this.currentImage = this.items[this.photoIndex]
    this.currentImageUrl = this.getPhotoUrl(this.items[this.photoIndex])
  }

  getPreUrl () {
    if (this.photoIndex === 0) {
      return null
    }
    const preIndex = this.photoIndex - 1
    const currentImage = this.items[preIndex]

    return `${this.$route.path}?select=${currentImage.uniqueId}`
  }

  // prevSelectedImageUrl () {
  //   const preIndex = this.photoIndex - 1
  //   if (preIndex >= 0) {
  //     return this.getImageLink(this.items[preIndex])
  //   }
  //   return null
  // }

  /**
   *  class="media-nav_link media-nav_link--next js-media-nav_link--next is-hovered"
   */
  getNextLinkClassName () {
    const className = this.photoIndex === (this.photosLen || 0) - 1 ? ' is-disabled' : ''
    return `media-nav_link media-nav_link--next js-media-nav_link--next is-hovered${className}`
  }

  onNextClick () {
    if (this.photoIndex === (this.photosLen || 0) - 1) {
      return
    }
    const nextIndex = this.photoIndex + 1
    this.photoIndex = nextIndex
    this.currentImage = this.items[this.photoIndex]
    this.currentImageUrl = this.getPhotoUrl(this.items[this.photoIndex])
  }

  // nextSelectedImageUrl () {
  //   const nextIndex = this.photoIndex + 1
  //   if (nextIndex <= (this.photosLen || 0) - 1) {
  //     return this.getImageLink(this.items[nextIndex])
  //   }
  //   return null
  // }

  async mounted () {
    await this._fetchPage()
  }
}
