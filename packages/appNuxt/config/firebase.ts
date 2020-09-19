/**
 * Nuxt Firebase: https://firebase.nuxtjs.org/
 * Full-configure: https://firebase.nuxtjs.org/guide/getting-started/#full-configuration
 * Demo: https://nuxt-fire-demo.herokuapp.com/
 *
 * ieatta-sec:
 * https://console.firebase.google.com/project/ieatta-sec/overview
 */
export const firebase = {
  config: {
    apiKey: 'AIzaSyAkRjWt1cG5-3M6sYR_2cMP-jy7qqxNVpE',
    authDomain: 'ieatta-sec.firebaseapp.com',
    databaseURL: 'https://ieatta-sec.firebaseio.com',
    projectId: 'ieatta-sec',
    storageBucket: 'ieatta-sec.appspot.com',
    messagingSenderId: '252900163423',
    appId: '1:252900163423:web:22cab2b143558bbac700ea',
    measurementId: 'G-MP3LJF51D3'
  },
  services: {
    auth: {
      persistence: 'local', // default

      // it is recommended to configure either a mutation or action but you can set both
      initialize: {
        // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION'
        // onAuthStateChangedAction: 'onAuthStateChangedAction'
      },

      ssr: false // default
    },
    firestore: true,
    storage: true
  }
}
