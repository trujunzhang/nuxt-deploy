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
    '~/assets/nextYelp/home/commons.yji-f7d7b4bddd5f87d22059.chunk.css',
    // Detail(Restsurant)
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-de96676004b9da813ea2.chunk.css', // first
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-0b2c399a119f11ac0c23.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-13eaf71b82d506b2186a.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-145d7f9712c3bf1b11b5.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-2704259869135d92a982.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-486cfbaafb47f9bfcf96.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-4b60f4155d191dc93e13.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-556e28a81efca75243ce.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-72b88d09d7327326cf19.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-7c0186d4db9fafb8d6ac.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-8e5a6a523b96573ee040.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-bc25e4695ae555d148d3.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-d3f8df1e32dd9002b298.chunk.css',
    '~/assets/nextYelp/detail/restaurant/yelp_main.yji-f1220e1f35c9aed79322.chunk.css',
    // Detail(Eventlist in the Restsurant)
    '~/assets/nextYelp/detail/event/events-pkg.css'
    // '~/assets/nextYelp/detail/event/yelp_main.yji-556e28a81efca75243ce.chunk.css', // the same
    // '~/assets/nextYelp/detail/event/yelp_main.yji-de96676004b9da813ea2.chunk.css' // the same
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
