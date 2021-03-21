import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRecipe } from 'ieattatypes/types'
import { starRegularDict } from '~/database/star_helper'
import { calcRateForRestaurant } from '~/database/rate_utils'
import { getDetailRecipeLink } from '~/utils/linkHelper/detail'

@Component({
  components: {}
})
export default class RecipeItem extends Vue {
  @Prop({}) recipe!: IFBRecipe

  getRecipePhotoUrl () {
    if (this.recipe.originalUrl === '') {
      return require('~/assets/images/business_large_square.png')
    }
    return this.recipe.originalUrl
  }

  /**
   * class=" i-stars__373c0__1BRrc i-stars--regular-3-half__373c0__IqMdX border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK"
   */
  getRateStarClassName () {
    return `i-stars__373c0__1BRrc ${
      starRegularDict[
        calcRateForRestaurant(
          this.recipe.rate,
          this.recipe.reviewCount
        )
        ]
    } border-color--default__373c0__3-ifU overflow--hidden__373c0__2y4YK`
  }

  getDetailRecipeUrl () {
    return getDetailRecipeLink(this.recipe)
  }
}
