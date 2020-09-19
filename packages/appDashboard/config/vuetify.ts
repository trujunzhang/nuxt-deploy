import colors from 'vuetify/es5/util/colors'
// eslint-disable-next-line import/named
import { Options } from '@nuxtjs/vuetify'
import { Theme, VuetifyThemeVariant } from 'vuetify/types/services/theme'

const commonTheme: VuetifyThemeVariant = {
  primary: '#e91e63',
  secondary: '#9C27b0',
  accent: '#9C27b0',
  info: '#00CAE3',
  warning: colors.amber.base,
  error: colors.deepOrange.accent4,
  success: colors.green.accent3
}

const vuetify : Options = {
  treeShake: true,
  // treeShake: false,
  customVariables: ['~/assets/sass/variables.scss'],
  theme: {
    dark: false,
    themes: {
      dark: commonTheme,
      light: commonTheme
    }
  } as Theme
}

export {
  vuetify
}
