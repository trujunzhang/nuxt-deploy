
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Subheading extends Vue {
    @Prop({ default: '' }) readonly subheading!: string
    @Prop({ default: '' }) readonly text!: string
}

// export default {
//   name: 'Subheading',

//   props: {
//     subheading: {
//       type: String,
//       default: ''
//     },
//     text: {
//       type: String,
//       default: ''
//     }
//   }
// }
