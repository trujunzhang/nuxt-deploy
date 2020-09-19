import Vue, { VNode } from 'vue'

// Components
import { VHover, VListItem } from 'vuetify/lib' // Using 'lib', not 'es5'.

export const AppBarItem = Vue.extend({
  render (h): VNode {
    return h(VHover, {
      scopedSlots: {
        default: ({ hover }) => h(VListItem, {
          attrs: this.$attrs,
          class: {
            'black--text': !hover,
            'white--text secondary elevation-12': hover
          },
          props: {
            activeClass: '',
            dark: hover,
            link: true,
            ...this.$attrs
          }
        },
        this.$slots.default)
      }
    })
  }
})
