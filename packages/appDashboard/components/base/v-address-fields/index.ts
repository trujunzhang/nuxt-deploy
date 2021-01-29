import { VueConstructor } from 'vue'
import VStateSelect from './VStateSelect'

const VAddressFields = {
  install (Vue: VueConstructor, options?: any) {
    Vue.component('VStateSelect', VStateSelect)
  }
}

/**
 * https://github.com/morphatic/v-address-fields/blob/master/src/index.ts
 */
export { VStateSelect }
export default VAddressFields

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VAddressFields)
}
