import * as _ from 'underscore'

export class UnderscoreUtils {
  /**
   * A convenient version of what is perhaps the most common use-case for map: extracting a list of
   * property values.
   * @param list The list to pluck elements out of that have the property `propertyName`.
   * @param propertyName The property to look for on each element within `list`.
   * @return The list of elements within `list` that have the property `propertyName`.
   */
  static getFieldArray({ list, propertyName }: { list: _.List<any>; propertyName: string }) {
    return _.pluck(list, propertyName)
  }

  /**
   *
   * @param objectPropertyName such as 'creator.id', 'user.id'
   *
   */
  static getObjectFieldArray({
    list,
    objectPropertyName
  }: {
    list: _.List<any>
    objectPropertyName: string
  }) {
    const properties: string[] = objectPropertyName.split('.')

    let tmpArray: any = list
    for (var i = 0; i < properties.length; i++) {
      const propertyName = properties[i]
      tmpArray = UnderscoreUtils.getFieldArrayWithoutUndefined({
        list: tmpArray,
        propertyName
      })
    }

    return tmpArray
  }

  static findInArray({ array, iterator }: { array: _.List<any>; iterator: any }) {
    return _.find(array, iterator)
  }

  static unionArrays({ array, ids }: { array: _.List<any>; ids: any }) {
    return _.union(array, ids)
  }

  static findIndexInArray({ array, predicate }: { array: _.List<any>; predicate: any }) {
    return _.findIndex(array, predicate)
  }

  static findWhereInArray({ array, properties }: { array: _.List<any>; properties: any }) {
    return _.findWhere(array, properties)
  }

  static findLastIndex({ array, id }: { array: _.List<any>; id: string }) {
    return _.findLastIndex(array, {
      id
    })
  }

  static reduceForArray({ arrays }: { arrays: _.List<any> }) {
    return _.reduce(
      arrays,
      (result, arr) => {
        return result.concat(arr)
      },
      []
    )
  }

  static uniqueInArray({ array }: { array: _.List<any> }) {
    return _.unique(array)
  }

  static withoutInArray({ array, id }: { array: _.List<any>; id: string }) {
    return _.without(array, id)
  }

  /**
   * Get array filter without undefied.
   */
  static getFieldArrayWithoutUndefined({ list, propertyName }) {
    const array: any = _.pluck(list, propertyName)
    const data = array.filter((element) => {
      return element !== undefined
    })
    return data
  }
}
