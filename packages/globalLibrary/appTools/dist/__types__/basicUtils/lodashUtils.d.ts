import { List, ListIteratee, ListIteratorTypeGuard, ObjectIterator } from 'lodash';
export declare const LodashUtils: any;
export declare class LodashUtilsxxx {
    static merge(object: any, ...otherArgs: any[]): any;
    static clone<T>(value: T): T;
    static remove<T>(array: List<T>, predicate?: ListIteratee<T>): T[];
    static reverse<TList extends List<any>>(array: TList): TList;
    static find<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S | undefined;
    static get<TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): TObject[TKey];
    static random(min: number, max: number, floating?: boolean): number;
    static isString(value?: any): value is string;
    static toUpper(string?: string): string;
    static forEach<T extends object>(collection: T, iteratee?: ObjectIterator<T, any>): T;
    static assign(object: any, ...otherArgs: any[]): any;
    static values(object: any): any[];
    /**
     * Deep diff between two object, using lodash
     * @param  {Object} object Object compared
     * @param  {Object} base   Object to compare with
     * @return {Object}        Return a new object who represent the diff
     */
    static difference(object: object, base: object): any;
    static getObjectDiff(obj1: object, obj2: object): string[];
    static isEqual(value: any, other: any): boolean;
    static keys(object?: any): string[];
}
