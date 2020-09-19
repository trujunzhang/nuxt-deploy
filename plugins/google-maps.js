import Vue from 'vue'

/**
 * https://github.com/xkjyeah/vue-google-maps
 *
 * https://console.developers.google.com/apis/credentials?project=ieatta-sec
 */

import * as VueGoogleMaps from '@/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: { key: 'AIzaSyBK2-Z4caYdMAl0kYhcoFrDfz7Ak6OGVlY' }
})
