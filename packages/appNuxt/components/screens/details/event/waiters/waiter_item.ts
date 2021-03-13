import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBPhoto, IFBRecipe } from 'ieattatypes/types/index'

@Component({
  components: {
  }
})
export default class WaiterItem extends Vue {
  @Prop({}) waiter!: IFBPhoto

  getWaiterPhotoUrl () {
    if (this.waiter.originalUrl === '') {
      return require('~/assets/images/business_large_square.png')
    }
    return this.waiter.originalUrl
  }

}
