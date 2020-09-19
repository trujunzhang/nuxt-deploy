import { VueConstructor } from 'vue'
import Card from './Card'

const VCustomCard = {
  install (Vue: VueConstructor, options?: any) {
    Vue.component('v-state-select', Card)
  }
}

export { Card }
export default VCustomCard

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VCustomCard)
}
