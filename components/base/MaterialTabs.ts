// Mixins
import Proxyable from 'vuetify/es5/mixins/proxyable'

import { Component, Prop, Vue, Mixins } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class MaterialTabs extends Mixins(Proxyable) {
    @Prop({ default: 'primary' }) readonly color!: string
}

// export default {
//   name: 'MaterialTabs',

//   mixins: [Proxyable],

//   props: {
//     color: {
//       type: String,
//       default: 'primary'
//     }
//   }
// }
