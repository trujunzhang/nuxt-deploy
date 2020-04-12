module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "prettier/vue",
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:vue/essential",
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    'vuetify'
  ],
  globals: {
    $nuxt: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // vuetify
    'vuetify/no-deprecated-classes': 'off',
    // Add the grid-unknown-attributes and no-legacy-grid rules
    // and the plugin will automatically update your templates.
    'vuetify/grid-unknown-attributes': 'off',
    'vuetify/no-legacy-grid': 'off',
    // common
    "vue/html-self-closing": "off",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  overrides: [
    {
      files: [
        "**/test/*.{j,t}s?(x)",
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
