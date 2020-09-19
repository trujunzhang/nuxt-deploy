
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
  // inheritAttrs: false,
  }
})
export default class MaterialChartCard extends Vue {
    @Prop({ default: () => ({}) }) readonly data!:object
    @Prop({ default: () => ([]) }) readonly eventHandlers!: Array<any>
    @Prop({ default: () => ({}) }) readonly options!: object
    @Prop({ default: undefined }) readonly ratio!: string
    @Prop({ default: () => ([]) }) readonly responsiveOptions!: Array<any>
    //  type: {
    // type: String,
    // required: true,
    // validator: v => ['Bar', 'Line', 'Pie'].includes(v)
    // }
    @Prop({ required: true, default: '' }) readonly type!: string
}
