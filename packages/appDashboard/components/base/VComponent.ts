
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class VComponent extends Vue {
    @Prop({ default: '' }) readonly heading!: string
    @Prop({ default: '' }) readonly link!: string
}

// export default {
//   name: 'VComponent',

//   props: {
//     heading: {
//       type: String,
//       default: ''
//     },
//     link: {
//       type: String,
//       default: ''
//     }
//   }
// }
