
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class BaseMaterialSnackbar extends Vue {
    @Prop({ default: true }) readonly dismissible!: boolean
    @Prop({ default: '' }) readonly type!: string
    @Prop() readonly value!: boolean

    //  data () {
    //     return {
    //       internalValue: this.value
    //     }
    //   }
    get internalValue () {
      return this.value
    }

  // watch: {
  //   internalValue (val, oldVal) {
  //     if (val === oldVal) { return }

  //     this.$emit('input', val)
  //   },
  //   value (val, oldVal) {
  //     if (val === oldVal) { return }

  //     this.internalValue = val
  //   }
  // }
}
