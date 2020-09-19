import * as i18n from 'i18next'

/**
 *
 * type Callback = (error: any, t: TFunction) => void;
 *
 */
export declare type TranslationFunction = i18n.TFunction
export type LocalI18nCallback = i18n.Callback

import { withTranslation } from 'react-i18next'

export const withNamespaces = withTranslation;

// import { I18nextProvider, reactI18nextModule } from 'react-i18next'
// export { I18nextProvider, reactI18nextModule }

import { I18nextProvider } from 'react-i18next'
export { I18nextProvider }