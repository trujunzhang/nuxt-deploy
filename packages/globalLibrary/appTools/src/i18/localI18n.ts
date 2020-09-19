import i18n from 'i18next'

// import { reactI18nextModule } from './i18'

export type LanguageDetectorCBFunc = (callback: () => any) => any
import { LocalI18nCallback } from './i18base'

export const getLocalI18n = (
  resources: any,
  languageDetectorCB: LanguageDetectorCBFunc,
  fallbackLng: string = 'en',
  callback?: LocalI18nCallback
) => {
  // creating a language detection plugin using expo
  // http://i18next.com/docs/ownplugin/#languagedetector
  const languageDetector = {
    type: 'languageDetector',
    async: true, // flags below detection to be async
    detect: languageDetectorCB,
    init: () => {},
    cacheUserLanguage: () => {}
  }

  // const options: i18n.InitOptions = {
  //   fallbackLng,
  //   resources,

  //   // have a common namespace used around the full app
  //   ns: ['common'],
  //   defaultNS: 'common',

  //   debug: false,

  //   // cache: {
  //   //   enabled: true
  //   // },

  //   interpolation: {
  //     escapeValue: false // not needed for react as it does escape per default to prevent xss!
  //   }
  // }

  // // const cb: i18n.Callback = (error: any, t: i18n.TFunction) => {}

  // i18n
  //   .use(languageDetector)
  //   .use(reactI18nextModule)
  //   .init(options, callback)

  return i18n
}
