
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class BaseMaterialTestimony extends Vue {
    @Prop({ default: '' }) readonly author!: string
    @Prop({
      default: 'https://demos.creative-tim.com/material-dashboard/assets/img/faces/card-profile1-square.jpg'
    }) readonly avatar!: string

    @Prop({ default: '' }) readonly blurb!: string
    @Prop({ default: '' }) readonly text!: string
}

// export default {
//   name: 'BaseMaterialTestimony',

//   props: {
//     author: {
//       type: String,
//       default: ''
//     },
//     avatar: {
//       type: String,
//       default: 'https://demos.creative-tim.com/material-dashboard/assets/img/faces/card-profile1-square.jpg'
//     },
//     blurb: {
//       type: String,
//       default: ''
//     },
//     handle: {
//       type: String,
//       default: ''
//     }
//   }
// }
