import { namespace } from 'vuex-class'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBPhoto, IFBRecipe } from 'ieattatypes/types/index'
import { IAuthUser } from '~/database/models/auth_user_model'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections, PhotoType } from '~/database/constant'
import { getDetailRecipeLink } from '~/utils/linkHelper/detail'
import { FirestorePath } from '~/database/services/firestore_path'
import { ParseModelRecipes } from '~/database/appModel/recipe'

const auth = namespace('auth')

@Component({
  components: {}
})
export default class RecipeForm extends Vue {
  @Prop({}) recipe!: IFBRecipe
  @Prop({}) isNewRecipe!: boolean
  public items: Array<IFBPhoto> = []
  private isLoading = false
  private lastCoverUrl = ''
  public displayName: string = ''
  public price: string = ''
  public showAlertMessage: boolean = false

  @auth.State
  public user!: IAuthUser | null

  getDetailRecipeUrl () {
    return getDetailRecipeLink(this.recipe)
  }

  getCoverUrl () {
    if (this.lastCoverUrl === '') {
      return require('~/assets/images/business_large_square.png')
    }
    return this.lastCoverUrl
  }

  getPhotoUrl (item: IFBPhoto) {
    if (item.originalUrl === '') {
      return require('~/assets/images/offline-sign-circular-band-label-sticker.png')
    }
    return item.originalUrl
  }

  showCoverSection () {
    return this.items.length > 0
  }

  showSelectCoverTitle () {
    return this.items.length > 0
  }

  showSelectCoverIcon (item: IFBPhoto) {
    return item.originalUrl === this.lastCoverUrl
  }

  async onSelectCoverClick (item: IFBPhoto) {
    this.lastCoverUrl = item.originalUrl
    const nextRecipe = ParseModelRecipes.updateCover(this.recipe, item.originalUrl)
    await FirestoreService.instance.setData(
      this.$fire.firestore,
      FBCollections.Recipes,
      nextRecipe
    )
  }

  async onSaveBtnClick () {
    if (this.displayName.trim().length === 0) {
      this.showAlertMessage = true
      return
    }
    this.showAlertMessage = false
    const lastRecipe: IFBRecipe = this.isNewRecipe
      ? ParseModelRecipes.emptyRecipe((this.user as any), 'xxx') : this.recipe

    const nextRecipe: IFBRecipe = ParseModelRecipes.updateRecipe(
      lastRecipe,
      this.displayName,
      this.price
    )
    await FirestoreService.instance.setData(
      this.$fire.firestore,
      FBCollections.Recipes,
      nextRecipe
    )
    await this.$router.push(this.getDetailRecipeUrl())
  }

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
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
    this.isLoading = false
  }

  async mounted () {
    if (!this.isNewRecipe) {
      this.lastCoverUrl = this.recipe.originalUrl
      this.displayName = this.recipe.displayName
      this.price = this.recipe.price
      await this._fetchPage()
    }
  }
}
