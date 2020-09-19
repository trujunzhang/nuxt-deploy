import { TranslationFunction } from './i18base';
export declare type GetMockedI18nCallback = (t: TranslationFunction) => any;
export declare const getI18nextMockerWithResources: (resources: any, cb: GetMockedI18nCallback, ln?: string) => void;
