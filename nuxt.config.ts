import { Configuration as NuxtConfiguration } from '@nuxt/types'
import { vuetify } from './config/vuetify'
import en from './locales/en.json'

const config: NuxtConfiguration = {
  mode: 'universal',
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
    '@/plugins/base.js',
    '@/plugins/chartist.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: [
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
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify,
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
    typeCheck: {
      eslint: true
    }
  }
}

module.exports = config
