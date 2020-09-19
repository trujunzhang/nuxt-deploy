const presets = ['next/babel']
const plugins = [
  ['@babel/plugin-proposal-object-rest-spread', { loose: true, useBuiltIns: true }],
  [
    '@babel/plugin-transform-runtime',
    {
    }
  ],
  [
    '@babel/plugin-proposal-decorators',
    {
      legacy: true
    }
  ],
  [
    'module-resolver',
    {
      cwd: 'babelrc',
      root: ['.'],
      alias: {
        '@appActions': './apps/appActions',
        '@appActionUtils': './apps/appActionUtils',
        '@appCompEvents': './apps/appCompEvents',
        '@appDatabase': './apps/appDatabase',
        '@appModels': './apps/appModels',
        '@appParameters': './apps/appParameters',
        '@appParse': './apps/appParse',
        '@appRedux': './apps/appRedux',
        '@src': './src',
        '@config': './config',
        '@assets': './static',
        '@web': './apps/web',
        '@appUtils': './apps/utils',
        '@appFilter': './apps/filter',
        '@appComponents': './apps/components',
        '@appStyled': './apps/styled',
        '@appShared': './apps/sharedComponents',
        'reakit': './apps/reakit',
        "react-native": "react-native-web"
      },
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.web.js',
        '.web.jsx',
        '.web.ts',
        '.web.tsx',
        '.json'
      ]
    }
  ]
]

if (process.env["ENV"] === "test") {
  plugins.push(
    [
      '@babel/plugin-transform-runtime',
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ]
  )
}

module.exports = { presets, plugins };
