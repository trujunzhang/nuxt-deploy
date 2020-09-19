import _ from 'lodash'
import { List, ListIteratee, ListIteratorTypeGuard, ObjectIterator } from 'lodash'

export const LodashUtils: any = _

export class LodashUtilsxxx {
  static merge(object: any, ...otherArgs: any[]): any {
    return _.merge(object, otherArgs)
  }

  static clone<T>(value: T): T {
    return _.clone(value)
  }

  static remove<T>(array: List<T>, predicate?: ListIteratee<T>): T[] {
    return _.remove(array, predicate)
  }

  static reverse<TList extends List<any>>(array: TList): TList {
    return _.reverse(array)
  }

  static find<T, S extends T>(
    collection: List<T> | null | undefined,
    predicate: ListIteratorTypeGuard<T, S>,
    fromIndex?: number
  ): S | undefined {
    return _.find(collection, predicate, fromIndex)
  }

  static get<TObject extends object, TKey extends keyof TObject>(
    object: TObject,
    path: TKey | [TKey]
  ): TObject[TKey] {
    return _.get(object, path)
  }

  static random(min: number, max: number, floating?: boolean): number {
    return _.random(min, max, floating)
  }

  static isString(value?: any): value is string {
    return _.isString(value)
  }
  static toUpper(string?: string): string {
    return _.toUpper(string)
  }
  static forEach<T extends object>(collection: T, iteratee?: ObjectIterator<T, any>): T {
    return _.forEach(collection, iteratee)
  }
  static assign(object: any, ...otherArgs: any[]): any {
    return _.assign(object, otherArgs)
  }

  static values(object: any): any[] {
    return _.values(object)
  }

  // static xxx() {
  //     return _.reverse(array)
  // }
  // static xxx() {
  //     return _.reverse(array)
  // }
  // static xxx() {
  //     return _.reverse(array)
  // }
  // static xxx() {
  //     return _.reverse(array)
  // }

  // static xxx() {
  // return _.reverse(array)
  // }

  /**
   * Deep diff between two object, using lodash
   * @param  {Object} object Object compared
   * @param  {Object} base   Object to compare with
   * @return {Object}        Return a new object who represent the diff
   */
  static difference(object: object, base: object) {
    function changes(object: any, base: any) {
      return _.transform(object, function(result, value, key) {
        if (!_.isEqual(value, base[key])) {
          result[key] =
            _.isObject(value) && _.isObject(base[key]) ? changes(value, base[key]) : value
        }
      })
    }
    return changes(object, base)
  }

  /*
   * Compare two objects by reducing an array of keys in obj1, having the
   * keys in obj2 as the intial value of the result. Key points:
   *
   * - All keys of obj2 are initially in the result.
   *
   * - If the loop finds a key (from obj1, remember) not in obj2, it adds
   *   it to the result.
   *
   * - If the loop finds a key that are both in obj1 and obj2, it compares
   *   the value. If it's the same value, the key is removed from the result.
   */
  static getObjectDiff(obj1: object, obj2: object) {
    const diff = Object.keys(obj1).reduce((result, key) => {
      if (!obj2.hasOwnProperty(key)) {
        result.push(key)
      } else if (_.isEqual(obj1[key], obj2[key])) {
        const resultKeyIndex = result.indexOf(key)
        result.splice(resultKeyIndex, 1)
      }
      return result
    }, Object.keys(obj2))

    return diff
  }

  static isEqual(value: any, other: any): boolean {
    return _.isEqual(value, other)
  }

  static keys(object?: any): string[] {
    return _.keys(object)
  }
}
