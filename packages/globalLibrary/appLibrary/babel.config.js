const presets = [
    [
      "@babel/preset-env",
      {
      }
    ],
    [
      '@babel/preset-react',
      {
        development: process.env.BABEL_ENV === 'development'
      }
    ],
    "@babel/preset-typescript"
  ]
  const commonPlugins = 
  [
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }],
    [
      "@babel/plugin-transform-runtime", { }
    ]
  ]
  
  
  const plugins = commonPlugins.slice(0);
  plugins.push(
   [
      "module-resolver",
      {
        "cwd": "babelrc",
        root: ['.'],
        "alias": {
          '@appComponentEvents': './src/appCompEvents',
          '@appDatabase': './src/appDatabase',
          '@appLibs': './src/appLibs',
          '@appModels': './src/appModels',
          '@appParameters': './src/appParameters',
          '@appParse': './src/appParse',
          '@appRedux': './src/appRedux',
          '@appImmutableModels': './src/appImmutable',
          '@appActions': './src/appActions',
          '@appActionsUtils': './src/appActionUtils',
        },
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx',
          '.sketch.jsx',
          '.sketch.js',
          '.sketch.ts',
          '.sketch.tsx',
          '.ios.jsx',
          '.ios.js',
          '.ios.ts',
          '.ios.tsx'
        ],
      }
    ]
  )
  
  
  module.exports = { presets,  plugins };
  