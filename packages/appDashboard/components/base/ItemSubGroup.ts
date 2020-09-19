
import { Component, Prop, Vue } from 'vue-property-decorator'

interface ISubGroupItem {
  avatar: any
  group: any
  title: any
  children: []
}
@Component({
  components: {
  }
})
export default class ItemSubGroup extends Vue {
  @Prop({
    default: {
      avatar: undefined,
      group: undefined,
      title: undefined,
      children: []
    }
  })
  readonly item!: ISubGroupItem
}
