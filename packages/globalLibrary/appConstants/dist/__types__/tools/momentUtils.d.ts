import * as moment from 'moment';
export declare class MomentUtils {
    static getDate(dateString: string): Date;
    static getValidTokenDate(dayNumber?: number): Date;
    static convertToEventDate(value: any): Date;
    static toDateString(date: Date, dateFormat: string): string;
    static getThisYearString(): string;
    static createMomentInstance(value: any): moment.Moment;
    static createTodayMomentInstance(): moment.Moment;
    static isSame(first: any, second: any): boolean;
    static isBefore(params: ISyncPostedAtHelperNeedUpdateLocalRealmObjectParams): boolean;
    static isAfter(params: ISyncPostedAtHelperNeedUpdateOnlineParseObjectParams): boolean;
}
