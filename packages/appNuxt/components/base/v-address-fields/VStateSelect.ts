// Imported Types
import Vue from 'vue'

/**
 * Import the Vuetify components you plan to extend here.
 */
// @ts-ignore
import { VAutocomplete } from 'vuetify/es5'

// Create Base Mixins and Define Custom Properties
const base = Vue.extend({ mixins: [VAutocomplete] })
interface options extends InstanceType<typeof base> {
    /**
     * !Props unique to VStateSelect
     */
    contiguousOnly: boolean
    exclude: string[]
    includeTerritories: boolean
}
// Extend VAutocomplete to define the VStateSelect component
// @ts-ignore
export default base.extend<options>().extend({
  name: 'v-state-select',
  props: {
    contiguousOnly: {
      type: Boolean,
      default: false
    },
    exclude: {
      type: Array,
      default: () => []
    },
    includeTerritories: {
      type: Boolean,
      default: false
    },
    storedValue: {
      type: String,
      default: 'abbr'
    },
    text: {
      type: String,
      default: 'name'
    }
  },
  computed: {
    classes (): object {
      return {
        ...VAutocomplete.options.computed.classes.call(this),
        'v-state-select': true
      }
    }
  }
})
