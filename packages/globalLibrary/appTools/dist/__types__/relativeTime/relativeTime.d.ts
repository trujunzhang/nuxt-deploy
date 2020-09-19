import { TranslationFunction } from '../i18';
export declare class RelativeTime {
    private threshold;
    private formatters;
    constructor(t: TranslationFunction);
    private bestFit;
    format(date: any, { timeZoneData, unit }?: {
        timeZoneData?: null | undefined;
        unit?: string | undefined;
    }): string;
}
