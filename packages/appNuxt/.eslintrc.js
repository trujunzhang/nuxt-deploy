module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "prettier",
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
  ],
  globals: {
    $nuxt: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // common
    camelcase: 'off',
    'vue/html-self-closing': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    '@typescript-eslint/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'vue/singleline-html-element-content-newline': ['off', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea']
    }],
    'multiline-ternary': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  overrides: [
    {
      files: [
        '**/test/*.{j,t}s?(x)',
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
