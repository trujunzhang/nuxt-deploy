/**
 * Nuxt Firebase: https://firebase.nuxtjs.org/
 * Full-configure: https://firebase.nuxtjs.org/guide/getting-started/#full-configuration
 * Demo: https://nuxt-fire-demo.herokuapp.com/
 *
 * ieatta-sec:
 * https://console.firebase.google.com/project/ieatta-sec/overview
 */
import { AuthServiceConfig, FirebaseModuleConfiguration, FirestoreServiceConfig, FunctionsServiceConfig } from '@nuxtjs/firebase'

const auth: AuthServiceConfig = {
  // emulatorPort: 9099,
  // emulatorHost: 'http://localhost'
}

const firestore: FirestoreServiceConfig = {
  // emulatorPort: 8080,
  // emulatorHost: 'localhost'
}

const functions: FunctionsServiceConfig = {
  // location: 'us-central1',
  // emulatorPort: 5001,
  // emulatorHost: 'http://localhost'
}

export const firebase: FirebaseModuleConfiguration = {
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
    auth,
    firestore,
    functions,
    storage: true
  }
}
