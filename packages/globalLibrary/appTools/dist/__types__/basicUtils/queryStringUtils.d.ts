import * as queryString from 'query-string';
export declare class QueryStringUtils {
    static getQueryObject(url: string): any;
    static getParseFromBody(body: any): queryString.ParsedQuery<string>;
}
