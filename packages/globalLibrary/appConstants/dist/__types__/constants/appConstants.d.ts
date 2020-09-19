export declare class AppConstants {
    static parseApi: {
        applicationId: string;
        javaScriptKey: string;
        masterKey: string;
        restAPIKey: string;
    };
    static get ieattaWeb(): string;
    static get parseServerURL(): string;
    static realmObjects: {
        user: {
            objectSchemaName: string;
            sort: number;
            relateds: never[];
        };
        record: {
            objectSchemaName: string;
            sort: number;
            relateds: never[];
        };
        restaurant: {
            objectSchemaName: string;
            sort: number;
            relateds: never[];
        };
        event: {
            objectSchemaName: string;
            sort: number;
            relateds: string[];
        };
        recipe: {
            objectSchemaName: string;
            sort: number;
            relateds: string[];
        };
        peopleInEvent: {
            objectSchemaName: string;
            sort: number;
            relateds: string[];
        };
        photo: {
            objectSchemaName: string;
            sort: number;
            relateds: string[];
        };
        review: {
            objectSchemaName: string;
            sort: number;
            relateds: string[];
        };
    };
    static realmTypes: {
        PARSE_RECORDS: string;
        PARSE_RESTAURANTS: string;
        PARSE_EVENTS: string;
        PARSE_PEOPLE_IN_EVENTS: string;
        PARSE_USERS: string;
        PARSE_RECIPES: string;
        PARSE_PHOTOS: string;
        PARSE_REVIEWS: string;
    };
    static realmObjectTypes: {
        PARSE_RECORDS: string;
        PARSE_RESTAURANTS: string;
        PARSE_EVENTS: string;
        PARSE_PEOPLE_IN_EVENTS: string;
        PARSE_USERS: string;
        PARSE_RECIPES: string;
        PARSE_PHOTOS: string;
        PARSE_REVIEWS: string;
    };
    static pageDetailsPages: {
        PARSE_RESTAURANTS: string;
        PARSE_EVENTS: string;
        PARSE_RECORDS: string;
        PARSE_PEOPLE_IN_EVENTS: string;
        PARSE_USERS: string;
        PARSE_RECIPES: string;
        PARSE_PHOTOS: string;
        PARSE_REVIEWS: string;
    };
    static SubDomainRecipesList: {
        PARSE_RESTAURANTS: string;
    };
    static SubDomainPhotos: {
        PARSE_RESTAURANTS: string;
        PARSE_RECIPES: string;
        PARSE_USERS: string;
    };
    static getRealmRecordSortType(recordType: any): number;
}
