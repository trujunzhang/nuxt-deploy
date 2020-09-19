import * as i18n from 'i18next';
/**
 *
 * type Callback = (error: any, t: TFunction) => void;
 *
 */
export declare type TranslationFunction = i18n.TFunction;
export declare type LocalI18nCallback = i18n.Callback;
import { withTranslation } from 'react-i18next';
export declare const withNamespaces: typeof withTranslation;
import { I18nextProvider } from 'react-i18next';
export { I18nextProvider };
