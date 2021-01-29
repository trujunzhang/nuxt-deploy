import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBRestaurant } from 'ieattatypes/types/index'

@Component({
  components: {
  }
})
export default class RestaurantActions extends Vue {
  @Prop({}) restaurant!: IFBRestaurant
}
