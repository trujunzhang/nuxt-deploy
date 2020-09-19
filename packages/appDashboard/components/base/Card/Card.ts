// Imported Types
import Vue from 'vue'

/**
 * Import the Vuetify components you plan to extend here.
 */
// @ts-ignore
import { VCard } from 'vuetify/es5'

// export default {
//   name: 'Card',

//   extends: VCard
// }

// Create Base Mixins and Define Custom Properties
const base = Vue.extend({ mixins: [VCard] })
interface options extends InstanceType<typeof base> {}
// Extend VAutocomplete to define the VStateSelect component
// @ts-ignore
export default base.extend<options>().extend({
  name: 'base-card',
  props: {},
  computed: {
    classes (): object {
      return {
        'base-card': true
      }
    }
  }
})
