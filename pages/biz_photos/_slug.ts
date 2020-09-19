import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'
import PhotoSingle from '~/components/screens/photoSingle/photo_single.vue'
import PhotoGrid from '~/components/screens/photoGrid/photo_grid.vue'
import PhotoFooter from '~/components/screens/footer/footer_photo.vue'
import { RestaurantHelper } from '~/database/restaurant_helper'

@Component({
  components: {
    PhotoFooter,
    PhotoGrid,
    PhotoSingle
  }
})
export default class PhotoBrowse extends Vue {
  public restaurant: IFBRestaurant | null = null
  private isLoading = false
  private photoSelectId: string | null = null

  _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    RestaurantHelper.getSingleRestaurantFromSlug(this.$route,
      this.$fireStore,
      (restaurant: IFBRestaurant | null) => {
        this.restaurant = restaurant
        this.isLoading = false
      })
  }

  mounted () {
    this._fetchPage()
    this.photoSelectId = this.$route.query.select as string
  }
}
