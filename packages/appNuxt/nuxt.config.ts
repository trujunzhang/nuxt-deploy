import { Configuration as NuxtConfiguration } from '@nuxt/types'
import { firebase } from './config/firebase'
import en from './locales/en.json'

const config: NuxtConfiguration = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'IEATTA – Eating Restaurant Tracker!',
    title: 'IEATTA – Eating Restaurant Tracker!',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    // Yelp
    '~/assets/yelp/www-pkg.css',
    '~/assets/yelp/yelp_main.yji-22eb7ca37aa9c2a9e02e.chunk.css',
    '~/assets/yelp/yelp_main.yji-271f16fc22e123af321d.chunk.css',
    '~/assets/yelp/yelp_main.yji-3393ab2dfef4b4a2df57.chunk.css',
    '~/assets/yelp/yelp_main.yji-35d8cb3d82a3f152ac86.chunk.css',
    '~/assets/yelp/yelp_main.yji-69de53e80a135072510a.chunk.css',
    '~/assets/yelp/yelp_main.yji-7dab32cd9c7f313e550f.chunk.css',
    '~/assets/yelp/yelp_main.yji-8d5d29ca662edc2d28e7.chunk.css',
    '~/assets/yelp/yelp_main.yji-c53383bd1d24b6f19dcf.chunk.css',
    '~/assets/yelp/yelp_main.yji-d75a74553877eb75e644.chunk.css',
    '~/assets/yelp/yelp_main.yji-e48f2f3c5e0c7959125c.chunk.css',
    '~/assets/yelp/yelp_main.yji-16c7642bdab4851d24ad.chunk.css',
    '~/assets/yelp/yelp_main.yji-1b0bf22928eb6fb7052f.chunk.css', // detail
    '~/assets/yelp/yelp_main.yji-80a57628ccb8d19d0d64.chunk.css', // detail
    '~/assets/yelp/yelp_main.yji-114a96eff735dad9a39c.chunk.css', // detail-pagination
    '~/assets/yelp/yelp_main.yji-1229993919c737dc372d.chunk.css', // login
    '~/assets/yelp/yelp-frontend-gondola-war-compose-pkg.yji-64bc3df24d391f8b0102.css', // write review
    '~/assets/yelp/user_details-pkg.css', // user-detail
    '~/assets/yelp/yelp_main.yji-40a04d475db89a3254a2.chunk.css',// header pop menu
    '~/assets/yelp/header-pop.css' // header pop menu
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/v-waypoint.js',
      mode: 'client'
    },
    { src: '~/plugins/localStorage.js', ssr: false },
    '@/plugins/google-maps.js'
  ],
  // /middleware/authenticated
  router: {
    middleware: [
      'authenticated'
    ]
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxt/typescript-build'
  ],
  /**
   * https://levelup.gitconnected.com/what-are-env-files-and-how-to-use-them-in-nuxt-7f194f083e3d
   * console.log(process.env.TEST_VARIABLE)
   */
  dotenv: {
    /* module options */
  },
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
   ** Firebase module configuration
   ** https://firebase.nuxtjs.org/guide/getting-started/
   */
  firebase,
  /*
   ** Build configuration
   */
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  },
  typescript: {
    typeCheck: false
  }
}

module.exports = config
