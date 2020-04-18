
import { Component, Prop, Vue } from 'vue-property-decorator'
import Card from './Card'

@Component({
  components: {
  // inheritAttrs: false,
  }
})
export default class MaterialStatsCard extends Vue {
    @Prop({ default: true }) readonly icon!: string
    @Prop({ default: undefined }) readonly subIcon!: string
    @Prop({ default: undefined }) readonly subIconColor!: string
    @Prop({ default: undefined }) readonly subTextColor!: string
    @Prop({ default: undefined }) readonly subText!: string
    @Prop({ default: undefined }) readonly title!: string
    @Prop({ default: undefined }) readonly value!: string
    @Prop({ default: undefined }) readonly smallValue!: string
}

// export default {
//   name: 'MaterialStatsCard',

//   props: {
//     ...Card.props,
//     icon: {
//       type: String,
//       required: true
//     },
//     subIcon: {
//       type: String,
//       default: undefined
//     },
//     subIconColor: {
//       type: String,
//       default: undefined
//     },
//     subTextColor: {
//       type: String,
//       default: undefined
//     },
//     subText: {
//       type: String,
//       default: undefined
//     },
//     title: {
//       type: String,
//       default: undefined
//     },
//     value: {
//       type: String,
//       default: undefined
//     },
//     smallValue: {
//       type: String,
//       default: undefined
//     }
//   }
// }
