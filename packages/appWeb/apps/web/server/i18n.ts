import NextI18Next, { InitConfig, Config } from 'next-i18next'

const config: Config = {
  fallbackLng: false,
  allLanguages: ['en', 'de', 'es'],
  whitelist: [],
  preload: [],
  defaultLanguage: 'en',
  otherLanguages: ['de', 'es']
}

const NextI18NextInstance = new NextI18Next(config)

export default NextI18NextInstance

/* Optionally, export class methods as named exports */
export const { appWithTranslation, withTranslation } = NextI18NextInstance
