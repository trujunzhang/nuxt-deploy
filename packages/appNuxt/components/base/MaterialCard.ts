
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class MaterialCard extends Vue {
    @Prop({ default: '' }) readonly avatar!: string
    @Prop({ default: 'success' }) readonly color!: string
    @Prop({ default: undefined }) readonly icon!: string
    @Prop({ default: false }) readonly image!: boolean
    @Prop({ default: '' }) readonly text!: string
    @Prop({ default: '' }) readonly title!: string

    classes () {
      return {
        'v-card--material--has-heading': this.hasHeading
      }
    }

    hasHeading () {
      return Boolean(this.$slots.heading || this.title || this.icon)
    }

    hasAltHeading () {
      return Boolean(this.$slots.heading || (this.title && this.icon))
    }
}
