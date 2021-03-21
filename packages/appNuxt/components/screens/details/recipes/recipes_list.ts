import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRecipe } from 'ieattatypes/types'
import RecipeItem from '~/components/screens/details/recipes/recipe_item.vue'

@Component({
  components: {
    RecipeItem
  }
})
export default class RecipesList extends Vue {
  @Prop({}) recipes!: Array<IFBRecipe>
  @Prop({}) showTitle!: boolean
}
