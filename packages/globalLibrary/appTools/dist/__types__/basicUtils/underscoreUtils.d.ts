import * as _ from 'underscore';
export declare class UnderscoreUtils {
    /**
     * A convenient version of what is perhaps the most common use-case for map: extracting a list of
     * property values.
     * @param list The list to pluck elements out of that have the property `propertyName`.
     * @param propertyName The property to look for on each element within `list`.
     * @return The list of elements within `list` that have the property `propertyName`.
     */
    static getFieldArray({ list, propertyName }: {
        list: _.List<any>;
        propertyName: string;
    }): any[];
    /**
     *
     * @param objectPropertyName such as 'creator.id', 'user.id'
     *
     */
    static getObjectFieldArray({ list, objectPropertyName }: {
        list: _.List<any>;
        objectPropertyName: string;
    }): any;
    static findInArray({ array, iterator }: {
        array: _.List<any>;
        iterator: any;
    }): any;
    static unionArrays({ array, ids }: {
        array: _.List<any>;
        ids: any;
    }): any[];
    static findIndexInArray({ array, predicate }: {
        array: _.List<any>;
        predicate: any;
    }): number;
    static findWhereInArray({ array, properties }: {
        array: _.List<any>;
        properties: any;
    }): any;
    static findLastIndex({ array, id }: {
        array: _.List<any>;
        id: string;
    }): number;
    static reduceForArray({ arrays }: {
        arrays: _.List<any>;
    }): never[];
    static reduceWithIterator({ arrays, iterator, memo }: {
        arrays: _.List<any>;
        iterator: any;
        memo?: any;
    }): any;
    static makeRangeArray(stop: number): number[];
    static uniqueInArray({ array }: {
        array: _.List<any>;
    }): any[];
    static withoutInArray({ array, id }: {
        array: _.List<any>;
        id: string;
    }): any[];
    static cloneObject(object: any): any;
    static convertArrayToObject(array: any): {};
    static isUndefined(value: any): boolean;
    static isDefined(value: any): boolean;
    static containsInArray({ list, propertyName }: {
        list: _.List<any>;
        propertyName: string;
    }): boolean;
    static includeInArray({ list, propertyName }: {
        list: _.List<any>;
        propertyName: string;
    }): boolean;
    static flattenArray(array: any): any[];
    static pickFromObject(object: any, ...keys: any[]): Pick<any, any>;
    static mapJoin({ list, predicate }: {
        list: _.List<any>;
        predicate: any;
    }): unknown[];
    static getFieldArrayRemovedValue({ list, propertyName, removedValue }: {
        list: any;
        propertyName: any;
        removedValue: any;
    }): string[];
    /**
     * Get array filter without undefied.
     */
    static getFieldArrayWithoutUndefined({ list, propertyName }: {
        list: any;
        propertyName: any;
    }): any;
    static invertObject(object: any): any;
}
