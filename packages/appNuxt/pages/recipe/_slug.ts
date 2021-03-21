import { Component, Vue } from 'vue-property-decorator'
import { IFBRecipe } from 'ieattatypes/types'
import { namespace } from 'vuex-class'
import PhotoFooter from '~/components/screens/footer/footer_photo.vue'
import ReviewsList from '~/components/screens/details/reviews/reviewList/review_list.vue'
import RecipeInfo from '~/components/screens/details/recipe/info/info.vue'
import RecipeActions from '~/components/screens/details/recipe/actions/actions.vue'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections, ReviewType } from '~/database/constant'

const ieattaConfigure = namespace('ieattaConfigure')

@Component({
  components: {
    PhotoFooter,
    RecipeInfo,
    RecipeActions,
    ReviewsList
  }
})
export default class RecipeDetailPage extends Vue {
  public recipe: IFBRecipe | null = null
  private isLoading = false

  @ieattaConfigure.Mutation
  public SET_SHOW_404!: (payload: boolean) => void

  getReviewType () {
    return ReviewType.Recipe
  }

  getRelatedId () {
    if (this.recipe === null) {
      return ''
    }
    return this.recipe.uniqueId
  }

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const recipeSlug = this.$route.params.slug as string
    await FirestoreService.instance.snapshotList({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Recipes,
      queryBuilder: (query: any) => {
        return query.where('slug', '==', recipeSlug)
      },
      iterateDocumentSnapshots: (data: IFBRecipe) => {
        this.recipe = data
      },
      emptyHint: () => {
        this.SET_SHOW_404(true)
      }
    })
    this.isLoading = false
  }

  async mounted () {
    await this._fetchPage()
  }
}
