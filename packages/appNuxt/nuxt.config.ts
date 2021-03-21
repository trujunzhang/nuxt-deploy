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
    // All pages
    '~/assets/nextYelp/www-pkg.css',
    '~/assets/nextYelp/inline.css',
    // Home
    '~/assets/nextYelp/home/commons.yji-fbb79d3e4417bf4bcaab.chunk.css',
    // Detail(Restsurant)
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-0b2c399a119f11ac0c23.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-126769d73c6b0af86825.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-209dcc516156687f98d4.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-256790039b66e6095768.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-2572f9e4356b1b134ecc.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-2704259869135d92a982.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-3160a9076269c6f9259d.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-3a10d0d60edf4463ca56.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-3b195866d8f5c80eebbf.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-486cfbaafb47f9bfcf96.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-72b88d09d7327326cf19.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-a319b2a55541fefad13c.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-c429511094753ca2e1e9.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-f1220e1f35c9aed79322.chunk.css',
    // Detail(Eventlist in the Restsurant)
    '~/assets/nextYelp/detail/event/events-pkg.css',
    // Detail(user)
    '~/assets/nextYelp/detail/user/user_details-pkg.css',
    // Upload(photo)
    '~/assets/nextYelp/upload/shared-95c6e8b3bc52716f5b6cf7a7345609239b35aa17.yji-3453bf8cedd22ced5a10.chunk.css',
    // Edit(review)
    '~/assets/nextYelp/edit/review/commons.yji-8028c29a577202181adb.chunk.css',
    '~/assets/nextYelp/edit/review/gondola-war-compose.yji-1689adbe421f3873d4be.chunk.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/lazyload.client.js',
      mode: 'client'
    },
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
    '@nuxt/typescript-build',
    '@nuxtjs/google-fonts'
  ],
  /**
   * https://www.npmjs.com/package/@nuxtjs/google-fonts
   */
  googleFonts: {
    /* module options */
    families: {
      // https://fonts.google.com/specimen/Poppins
      Poppins: true
    }
  },
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
    extend (config, ctx) {
    }
  },
  typescript: {
    typeCheck: false
  }
}

module.exports = config
