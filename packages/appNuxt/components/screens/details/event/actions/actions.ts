import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBEvent } from 'ieattatypes/types/index'

@Component({
  components: {}
})
export default class EventActions extends Vue {
  @Prop({}) event!: IFBEvent
}
