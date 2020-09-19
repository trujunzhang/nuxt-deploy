import moment from 'moment';
export declare type MomentInstance = moment.Moment;
export declare type MomentInput = moment.MomentInput;
export declare type MomentFormat = moment.MomentFormatSpecification;
export declare class MomentUtils {
    static getDate(inp?: MomentInput): Date;
    static getValidTokenDate(dayNumber: number): Date;
    static convertToEventDate(inp?: MomentInput): Date;
    static toDateIOSString(inp?: MomentInput): string;
    /**
     * Issue(22/01/2019)
     *   Deprecation warning: value provided is not in a recognized RFC2822 or ISO format
     * @param date
     * @param dateFormat
     */
    static toDateString(inp: MomentInput, dateFormat: string): string;
    static getThisYearString(): string;
    static getToday(): MomentInstance;
    static createMomentInstance(inp: MomentInput, format?: MomentFormat): MomentInstance;
    static createTodayMomentInstance(): MomentInstance;
    static getYearDurationDate(year: any, month: any): {
        startDate: moment.Moment;
        endDate: moment.Moment;
    };
    static getEndOfDayDate(before: MomentInput, dateFormat: string): Date;
    static getStartOfDayDate(after: MomentInput, dateFormat: string): Date;
    static isSame(first: MomentInput, second: MomentInput): boolean;
    static isBefore(first: MomentInput, second: MomentInput): boolean;
    static isAfter(first: MomentInput, second: MomentInput): boolean;
    static getSubtractDayFromNow(amount: number): Date;
    static getBeforeOneDate(amount: number): Date;
    static getDuringDateString(beforeAmount: number, afterAmount: number, dateFormat: string): {
        after: string;
        before: string;
    };
}
