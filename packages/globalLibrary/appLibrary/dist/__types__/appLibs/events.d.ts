export declare class Events {
    static config: {
        dateFormat: string;
        editDateTimeFormat: string;
    };
    /**
     * format is "Saturday, 1 Jul, 12:00 am – Monday, 31 Jul, 12:00 am"
     * @param item
     */
    static getDateInfo(item: any): {
        startFormat: string;
        endFormat: string;
    };
    static updateDate(oldValue: any, value: any, mode: any): Date;
    static getWantBody(event: any): {
        __html: any;
    };
    static toEditDateTimeString(date: any): string;
}
