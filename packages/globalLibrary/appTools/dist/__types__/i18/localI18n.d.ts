export declare type LanguageDetectorCBFunc = (callback: () => any) => any;
export declare const getLocalI18n: (resources: any, languageDetectorCB: LanguageDetectorCBFunc, fallbackLng?: string, callback?: import("i18next").Callback | undefined) => import("i18next").i18n;
