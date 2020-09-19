import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

/**
 * Initialize a i18next instance.
 * @function startI18n
 * @param {object} files - Translation files.
 * @param {string} lang - Active language.
 */
export const startI18n = (files: any, lang: string) =>
  i18n.use(LanguageDetector).init({
    lng: lang, // active language http://i18next.com/translate/
    fallbackLng: 'pt',
    resources: files,
    ns: ['common'],
    defaultNS: 'common',
    debug: false
  })
