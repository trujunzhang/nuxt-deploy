const path = require('path')
const glob = require('glob')

const withPlugins = require('next-compose-plugins');

const optimizedImages = require('next-optimized-images');

const sass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')

const publicRuntimeConfig = {
  localeSubpaths:
    typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'none'
}

const nextConfiguration = {
  publicRuntimeConfig,
  imageTypes: ['jpg', 'png'],
  webpack: (config, options) => {
    config.resolve.extensions = ['.web.ts', '.web.js', ...config.resolve.extensions]
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web'
    }

    if (!!options && options.isServer) {
      // config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }
    return config
  }
}

const plugins= [ 
   // add a plugin with specific configuration
  //  [sass, {
  //   cssModules: true,
  //   cssLoaderOptions: {
  //     localIdentName: '[local]___[hash:base64:5]',
  //   },
  // }], 
  withCSS,
  [optimizedImages, {
    /* config for next-optimized-images */
  }]
]

module.exports =  withPlugins(plugins, nextConfiguration);
