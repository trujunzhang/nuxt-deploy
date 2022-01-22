import { Configuration as NuxtConfiguration } from '@nuxt/types'
import { vuetify } from './config/vuetify'
import { firebase } from './config/firebase'
import en from './locales/en.json'

const config: NuxtConfiguration = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        /**
         * Material Icon(Not Material design icon)
         * Doc: https://google.github.io/material-design-icons/
         */
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/sass/overrides.sass',
    '~/assets/css/app.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/base.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // https://firebase.nuxtjs.org/guide/getting-started/
    '@nuxtjs/firebase',
    [
      'nuxt-i18n',
      {
        locales: ['en', 'es'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en,
            es: {
              greeting: '¡Hola mundo!'
            }
          }
        }
      }
    ]
  ],
  /*
   ** Vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify,
  /*
   ** Firebase module configuration
   ** https://firebase.nuxtjs.org/guide/getting-started/
   */
  firebase,
  /*
   ** Build configuration
   */
  build: {
    extractCSS: false,
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  },
  typescript: {
    typeCheck: true
  }
}

module.exports = config
