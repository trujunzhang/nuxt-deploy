import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRecipe } from 'ieattatypes/types'
import { IFBPhoto } from 'ieattatypes/types/index'
import { starLargeDict } from '~/database/star_helper'
import { formatByTimeAgo } from '~/database/utils/timeago_helper'
import { calcRateForRestaurant } from '~/database/rate_utils'
import { FirestoreService } from '~/database/services/firestore_service'
import { PhotoType } from '~/database/constant'
import { FirestorePath } from '~/database/services/firestore_path'
import { getSeeAllPhotoLink, getSinglePhotoLink } from '~/utils/linkHelper/photos'

@Component({
  components: {}
})
export default class RecipeInfo extends Vue {
  @Prop({}) recipe!: IFBRecipe

  /**
   * Example:
   *   href="/recipe_attribute?r_id=3YVy-af7Ipl7TVft3kquWg"
   */
  getEditLink () {
    return `/recipe_attribute?r_id=${this.recipe.uniqueId}`
  }

  getRecipePriceTitle () {
    return `$${this.recipe.price}`
  }

  /**
   *  class=" i-stars__373c0__1BRrc i-stars--large-3__373c0__JLUyg border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK"
   */
  getRateStarClassName () {
    return `i-stars__373c0__1BRrc  ${
      starLargeDict[
        calcRateForRestaurant(
          this.recipe.rate,
          this.recipe.reviewCount
        )
        ]
    }  border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK`
  }

  getRateCountStr () {
    return `${this.recipe.reviewCount} reviews`
  }

  /**
   * Hours updated 2 weeks ago
   */
  getUpdatedDateStr () {
    const timeAgo: string = formatByTimeAgo(this.recipe.updatedAt)
    // return `Hours updated ${timeAgo}`
    return `Updated ${timeAgo}`
  }

  public items: Array<IFBPhoto> = []
  public photoItems: Array<number> = [0, 1, 2, 3]
  public photosLen: number | null = null
  private isLoading = false

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const nextItem = this.items.concat([])
    await FirestoreService.instance.collectionStream({
      query: new FirestorePath(this.$fire.firestore).getPhotosList(this.recipe.uniqueId, PhotoType.Recipe),
      queryBuilder: (query: any) => {
        return query.orderBy('updatedAt', 'desc')
      },
      iterateDocumentSnapshots: (data: IFBPhoto) => {
        nextItem.push(data)
      }
    })
    this.items = nextItem
    this.photosLen = nextItem.length
    this.isLoading = false
  }

  showPhotoItem (index: number) {
    return index < this.items.length
  }

  /**
   * Example:
   *   href="/biz_photos/the-ramen-bar-san-francisco?select=J73NiWfGvXslEK2EMIPSbA"
   */
  getImageLink (index: number) {
    const item: IFBPhoto = this.items[index]
    return getSinglePhotoLink(this.recipe, PhotoType.Recipe, item.uniqueId)
  }

  /**
   * Example:
   *   href="/biz_photos/the-ramen-bar-san-francisco"
   */
  getSeeAllLink () {
    return getSeeAllPhotoLink(this.recipe, PhotoType.Recipe)
  }

  getPhotoUrl (index: number) {
    const item: IFBPhoto = this.items[index]
    if (item.originalUrl === '') {
      return require('~/assets/images/offline-sign-circular-band-label-sticker.png')
    }
    return item.originalUrl
  }

  /**
   * See 924 photos
   */
  getPhotosLen () {
    if (this.photosLen === undefined ||
      !this.photosLen
    ) {
      return ''
    }
    return 'See ' + this.photosLen + ' photos'
  }

  async mounted () {
    await this._fetchPage()
  }
}
