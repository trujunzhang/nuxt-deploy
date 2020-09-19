export declare class Restaurants {
    /**
     * @summary Restaurants config namespace
     * @type {Object}
     */
    static config: {
        dateFormat: string;
    };
    static TOP_MENUS: IHomeMoreItemModel[];
    /**
     * @summary generate 15 days as the day filter for Restaurants list admin
     */
    static getDateSelectors(): any;
    static showReady(results: any, hasMore: any, ready: any, totalCount: any, limit: any, firstPagination: any): boolean;
    static getAddress(restaurant: any): any;
}
