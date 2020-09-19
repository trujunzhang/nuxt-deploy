import { IGlobalizeFormatter } from './iRelativeTime';
import { TranslationFunction } from '../i18';
export declare class GlobalizeFormatter implements IGlobalizeFormatter {
    private t;
    constructor(t: TranslationFunction);
    private getPostValue;
    private getMiddleValue;
    private format;
    year(years: any): string;
    month(months: any): string;
    day(days: any): string;
    hour(hours: any): string;
    minute(minutes: any): string;
    second(seconds: any): string;
}
