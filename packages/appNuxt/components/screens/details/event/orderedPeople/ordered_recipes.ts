import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBPeopleInEvent, IFBRecipe, IFBUser } from 'ieattatypes/types/index'
import RecipesList from '~/components/screens/details/recipes/recipes_list.vue'

@Component({
  components: {
    RecipesList
  }
})
export default class OrderedRecipes extends Vue {
  @Prop({}) peopleInEvent!: IFBPeopleInEvent
  @Prop({}) recipes!: Array<IFBRecipe>
  @Prop({}) user!: IFBUser

  getOrderedRecipes () {
    const orderedRecipes: Array<IFBRecipe> = []
    const getRecipes = (recipeId, index) => {
      const obj = this.recipes.find(obj => obj.uniqueId === recipeId)
      if (obj) {
        orderedRecipes.push(obj)
      }
    }
    this.peopleInEvent.recipes.forEach(getRecipes)
    return orderedRecipes
  }

  getOrderedCount () {
    return `${this.peopleInEvent.recipes.length} recipes ordered`
  }

  getUserPhotoUrl () {
    if (
      this.user.originalUrl === '' ||
      this.user.originalUrl === undefined
    ) {
      return require('~/assets/images/user_60_square.png')
    }
    return this.user.originalUrl
  }

  getUserProfileUrl () {
    return `/user_details?userid=${this.user.id}`
  }
}
