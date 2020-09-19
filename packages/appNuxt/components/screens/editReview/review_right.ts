
import { Component, Prop, Vue } from 'vue-property-decorator'
import ReviewsList from '~/components/screens/details/reviews/reviewList/review_list.vue'
import { IFBRestaurant } from 'ieattatypes/types/index'

@Component({
  components: {
    ReviewsList
  }
})
export default class ReviewRight extends Vue {
  @Prop({}) restaurant!: IFBRestaurant

}
