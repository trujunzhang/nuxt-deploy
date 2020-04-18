// Mixins
import Themeable from 'vuetify/es5/mixins/themeable'

import { Component, Prop, Vue, Mixins } from 'vue-property-decorator'

interface IItem {
    href: any
    icon: any
    subtitle: any
    title: any
    to: any
}
@Component({
  components: {}
})
export default class Item extends Mixins(Themeable) {
    @Prop({
      default: {
        href: undefined,
        icon: undefined,
        subtitle: undefined,
        title: undefined,
        to: undefined
      }
    })
    readonly item!: IItem

    @Prop({ default: false }) text!: boolean

    /**
     * Property in the Themeable.
     * mixins: [Themeable],
     * https://class-component.vuejs.org/guide/extend-and-mixins.html#extend
     * https://github.com/kaorun343/vue-property-decorator/issues/113
     */
    // @Prop({ default: true }) readonly isDark!: boolean

    get computedText () {
      if (!this.item || !this.item.title) {
        return ''
      }

      let text = ''

      this.item.title.split(' ').forEach((val) => {
        text += val.substring(0, 1)
      })

      return text
    }

    get href () {
      return this.item.href || (!this.item.to ? '#' : undefined)
    }
}
