export declare class StatusConstants {
    static fetchedGoogleReverseModelError: string;
    static reviewDefaultSortTag: string;
    static SORT_TAGS: {
        REVIEW_SORT_NORMAL: string;
        REVIEW_SORT_NEWEST: string;
        REVIEW_SORT_OLDEST: string;
        REVIEW_SORT_HIGHEST: string;
        REVIEW_SORT_LOWEST: string;
    };
    static getDefaultReviewSort(): any;
    static getSortTag(sort: any): any;
    static FLAGS: {
        FLAGS_STATUS_SUBMITTED: string;
        FLAGS_STATUS_DELETED: string;
    };
    static parseObjectFlags: {
        PARSE_OBJECT_FLAG_NORMAL: string;
        PARSE_OBJECT_FLAG_REMOVED: string;
    };
    static appDefaultLoginType: string;
    static adjustCloudinaryAndEmbedlyUrl(source: string): string;
    static APP_DEFAULT_USER: IParseModelUsers;
    static USERS: {
        TYPE_EMAIL: number;
        TYPE_TWITTER: number;
        TYPE_FACEBOOK: number;
        TYPE_GOOGLE: number;
        TYPE_GITHUB: number;
        TYPE_LINKEDIN: number;
        TYPE_TITLES: string[];
    };
    static emptyLocation: {
        latitude: number;
        longitude: number;
    };
}
