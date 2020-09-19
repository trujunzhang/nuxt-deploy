"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_i18next_1 = __importDefault(require("next-i18next"));
const config = {
    fallbackLng: false,
    allLanguages: ['en', 'de', 'es'],
    whitelist: [],
    preload: [],
    defaultLanguage: 'en',
    otherLanguages: ['de', 'es']
};
const NextI18NextInstance = new next_i18next_1.default(config);
exports.default = NextI18NextInstance;
/* Optionally, export class methods as named exports */
exports.appWithTranslation = NextI18NextInstance.appWithTranslation, exports.withTranslation = NextI18NextInstance.withTranslation;
