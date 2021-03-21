import { Component, Vue } from 'vue-property-decorator'
import { IFBRecipe } from 'ieattatypes/types/index'
import { namespace } from 'vuex-class'
import RecipeForm from '~/components/screens/edit/recipe/recipe_form.vue'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'

const ieattaConfigure = namespace('ieattaConfigure')

@Component({
  components: {
    RecipeForm
  }
})
export default class EditRecipe extends Vue {
  public recipe: IFBRecipe | null = null
  private isLoading = false
  private isNewRecipe = false

  @ieattaConfigure.Mutation
  public SET_SHOW_404!: (payload: boolean) => void

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const recipeId = this.$route.query.r_id as string
    this.recipe = await FirestoreService.instance.getData({
      $fireStore: this.$fire.firestore,
      path: FBCollections.Recipes,
      uniqueId: recipeId,
      emptyHint: () => {
        this.SET_SHOW_404(true)
      }
    })
    this.isLoading = false
  }

  shouldShowPage () {
    if (this.isNewRecipe) {
      return true
    } else if (this.recipe) {
      return true
    }
    return false
  }

  checkNewRecipePage () {
    const recipeId = this.$route.query.r_id as string
    return recipeId === undefined || recipeId === null
  }

  async mounted () {
    this.isNewRecipe = this.checkNewRecipePage()
    await this._fetchPage()
  }
}
