"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnderscoreUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ = _interopRequireWildcard(require("underscore"));

var UnderscoreUtils = /*#__PURE__*/function () {
  function UnderscoreUtils() {
    (0, _classCallCheck2["default"])(this, UnderscoreUtils);
  }

  (0, _createClass2["default"])(UnderscoreUtils, null, [{
    key: "getFieldArray",

    /**
     * A convenient version of what is perhaps the most common use-case for map: extracting a list of
     * property values.
     * @param list The list to pluck elements out of that have the property `propertyName`.
     * @param propertyName The property to look for on each element within `list`.
     * @return The list of elements within `list` that have the property `propertyName`.
     */
    value: function getFieldArray(_ref) {
      var list = _ref.list,
          propertyName = _ref.propertyName;
      return _.pluck(list, propertyName);
    }
    /**
     *
     * @param objectPropertyName such as 'creator.id', 'user.id'
     *
     */

  }, {
    key: "getObjectFieldArray",
    value: function getObjectFieldArray(_ref2) {
      var list = _ref2.list,
          objectPropertyName = _ref2.objectPropertyName;
      var properties = objectPropertyName.split('.');
      var tmpArray = list;

      for (var i = 0; i < properties.length; i++) {
        var propertyName = properties[i];
        tmpArray = UnderscoreUtils.getFieldArrayWithoutUndefined({
          list: tmpArray,
          propertyName: propertyName
        });
      }

      return tmpArray;
    }
  }, {
    key: "findInArray",
    value: function findInArray(_ref3) {
      var array = _ref3.array,
          iterator = _ref3.iterator;
      return _.find(array, iterator);
    }
  }, {
    key: "unionArrays",
    value: function unionArrays(_ref4) {
      var array = _ref4.array,
          ids = _ref4.ids;
      return _.union(array, ids);
    }
  }, {
    key: "findIndexInArray",
    value: function findIndexInArray(_ref5) {
      var array = _ref5.array,
          predicate = _ref5.predicate;
      return _.findIndex(array, predicate);
    }
  }, {
    key: "findWhereInArray",
    value: function findWhereInArray(_ref6) {
      var array = _ref6.array,
          properties = _ref6.properties;
      return _.findWhere(array, properties);
    }
  }, {
    key: "findLastIndex",
    value: function findLastIndex(_ref7) {
      var array = _ref7.array,
          id = _ref7.id;
      return _.findLastIndex(array, {
        id: id
      });
    }
  }, {
    key: "reduceForArray",
    value: function reduceForArray(_ref8) {
      var arrays = _ref8.arrays;
      return _.reduce(arrays, function (result, arr) {
        return result.concat(arr);
      }, []);
    }
  }, {
    key: "uniqueInArray",
    value: function uniqueInArray(_ref9) {
      var array = _ref9.array;
      return _.unique(array);
    }
  }, {
    key: "withoutInArray",
    value: function withoutInArray(_ref10) {
      var array = _ref10.array,
          id = _ref10.id;
      return _.without(array, id);
    }
    /**
     * Get array filter without undefied.
     */

  }, {
    key: "getFieldArrayWithoutUndefined",
    value: function getFieldArrayWithoutUndefined(_ref11) {
      var list = _ref11.list,
          propertyName = _ref11.propertyName;

      var array = _.pluck(list, propertyName);

      var data = array.filter(function (element) {
        return element !== undefined;
      });
      return data;
    }
  }]);
  return UnderscoreUtils;
}();

exports.UnderscoreUtils = UnderscoreUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy91bmRlcnNjb3JlVXRpbHMudHMiXSwibmFtZXMiOlsiVW5kZXJzY29yZVV0aWxzIiwibGlzdCIsInByb3BlcnR5TmFtZSIsIl8iLCJwbHVjayIsIm9iamVjdFByb3BlcnR5TmFtZSIsInByb3BlcnRpZXMiLCJzcGxpdCIsInRtcEFycmF5IiwiaSIsImxlbmd0aCIsImdldEZpZWxkQXJyYXlXaXRob3V0VW5kZWZpbmVkIiwiYXJyYXkiLCJpdGVyYXRvciIsImZpbmQiLCJpZHMiLCJ1bmlvbiIsInByZWRpY2F0ZSIsImZpbmRJbmRleCIsImZpbmRXaGVyZSIsImlkIiwiZmluZExhc3RJbmRleCIsImFycmF5cyIsInJlZHVjZSIsInJlc3VsdCIsImFyciIsImNvbmNhdCIsInVuaXF1ZSIsIndpdGhvdXQiLCJkYXRhIiwiZmlsdGVyIiwiZWxlbWVudCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRWFBLGU7Ozs7Ozs7O0FBQ1g7Ozs7Ozs7d0NBTzBGO0FBQUEsVUFBbkVDLElBQW1FLFFBQW5FQSxJQUFtRTtBQUFBLFVBQTdEQyxZQUE2RCxRQUE3REEsWUFBNkQ7QUFDeEYsYUFBT0MsQ0FBQyxDQUFDQyxLQUFGLENBQVFILElBQVIsRUFBY0MsWUFBZCxDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7K0NBV0c7QUFBQSxVQUxERCxJQUtDLFNBTERBLElBS0M7QUFBQSxVQUpESSxrQkFJQyxTQUpEQSxrQkFJQztBQUNELFVBQU1DLFVBQW9CLEdBQUdELGtCQUFrQixDQUFDRSxLQUFuQixDQUF5QixHQUF6QixDQUE3QjtBQUVBLFVBQUlDLFFBQWEsR0FBR1AsSUFBcEI7O0FBQ0EsV0FBSyxJQUFJUSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxVQUFVLENBQUNJLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDLFlBQU1QLFlBQVksR0FBR0ksVUFBVSxDQUFDRyxDQUFELENBQS9CO0FBQ0FELFFBQUFBLFFBQVEsR0FBR1IsZUFBZSxDQUFDVyw2QkFBaEIsQ0FBOEM7QUFDdkRWLFVBQUFBLElBQUksRUFBRU8sUUFEaUQ7QUFFdkROLFVBQUFBLFlBQVksRUFBWkE7QUFGdUQsU0FBOUMsQ0FBWDtBQUlEOztBQUVELGFBQU9NLFFBQVA7QUFDRDs7O3VDQUU4RTtBQUFBLFVBQTFESSxLQUEwRCxTQUExREEsS0FBMEQ7QUFBQSxVQUFuREMsUUFBbUQsU0FBbkRBLFFBQW1EO0FBQzdFLGFBQU9WLENBQUMsQ0FBQ1csSUFBRixDQUFPRixLQUFQLEVBQWNDLFFBQWQsQ0FBUDtBQUNEOzs7dUNBRW9FO0FBQUEsVUFBaERELEtBQWdELFNBQWhEQSxLQUFnRDtBQUFBLFVBQXpDRyxHQUF5QyxTQUF6Q0EsR0FBeUM7QUFDbkUsYUFBT1osQ0FBQyxDQUFDYSxLQUFGLENBQVFKLEtBQVIsRUFBZUcsR0FBZixDQUFQO0FBQ0Q7Ozs0Q0FFcUY7QUFBQSxVQUE1REgsS0FBNEQsU0FBNURBLEtBQTREO0FBQUEsVUFBckRLLFNBQXFELFNBQXJEQSxTQUFxRDtBQUNwRixhQUFPZCxDQUFDLENBQUNlLFNBQUYsQ0FBWU4sS0FBWixFQUFtQkssU0FBbkIsQ0FBUDtBQUNEOzs7NENBRXVGO0FBQUEsVUFBOURMLEtBQThELFNBQTlEQSxLQUE4RDtBQUFBLFVBQXZETixVQUF1RCxTQUF2REEsVUFBdUQ7QUFDdEYsYUFBT0gsQ0FBQyxDQUFDZ0IsU0FBRixDQUFZUCxLQUFaLEVBQW1CTixVQUFuQixDQUFQO0FBQ0Q7Ozt5Q0FFdUU7QUFBQSxVQUFqRE0sS0FBaUQsU0FBakRBLEtBQWlEO0FBQUEsVUFBMUNRLEVBQTBDLFNBQTFDQSxFQUEwQztBQUN0RSxhQUFPakIsQ0FBQyxDQUFDa0IsYUFBRixDQUFnQlQsS0FBaEIsRUFBdUI7QUFDNUJRLFFBQUFBLEVBQUUsRUFBRkE7QUFENEIsT0FBdkIsQ0FBUDtBQUdEOzs7MENBRTBEO0FBQUEsVUFBbkNFLE1BQW1DLFNBQW5DQSxNQUFtQztBQUN6RCxhQUFPbkIsQ0FBQyxDQUFDb0IsTUFBRixDQUNMRCxNQURLLEVBRUwsVUFBQ0UsTUFBRCxFQUFTQyxHQUFULEVBQWlCO0FBQ2YsZUFBT0QsTUFBTSxDQUFDRSxNQUFQLENBQWNELEdBQWQsQ0FBUDtBQUNELE9BSkksRUFLTCxFQUxLLENBQVA7QUFPRDs7O3lDQUV1RDtBQUFBLFVBQWpDYixLQUFpQyxTQUFqQ0EsS0FBaUM7QUFDdEQsYUFBT1QsQ0FBQyxDQUFDd0IsTUFBRixDQUFTZixLQUFULENBQVA7QUFDRDs7OzJDQUV3RTtBQUFBLFVBQWpEQSxLQUFpRCxVQUFqREEsS0FBaUQ7QUFBQSxVQUExQ1EsRUFBMEMsVUFBMUNBLEVBQTBDO0FBQ3ZFLGFBQU9qQixDQUFDLENBQUN5QixPQUFGLENBQVVoQixLQUFWLEVBQWlCUSxFQUFqQixDQUFQO0FBQ0Q7QUFFRDs7Ozs7OzBEQUc2RDtBQUFBLFVBQXRCbkIsSUFBc0IsVUFBdEJBLElBQXNCO0FBQUEsVUFBaEJDLFlBQWdCLFVBQWhCQSxZQUFnQjs7QUFDM0QsVUFBTVUsS0FBVSxHQUFHVCxDQUFDLENBQUNDLEtBQUYsQ0FBUUgsSUFBUixFQUFjQyxZQUFkLENBQW5COztBQUNBLFVBQU0yQixJQUFJLEdBQUdqQixLQUFLLENBQUNrQixNQUFOLENBQWEsVUFBQ0MsT0FBRCxFQUFhO0FBQ3JDLGVBQU9BLE9BQU8sS0FBS0MsU0FBbkI7QUFDRCxPQUZZLENBQWI7QUFHQSxhQUFPSCxJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnXG5cbmV4cG9ydCBjbGFzcyBVbmRlcnNjb3JlVXRpbHMge1xuICAvKipcbiAgICogQSBjb252ZW5pZW50IHZlcnNpb24gb2Ygd2hhdCBpcyBwZXJoYXBzIHRoZSBtb3N0IGNvbW1vbiB1c2UtY2FzZSBmb3IgbWFwOiBleHRyYWN0aW5nIGEgbGlzdCBvZlxuICAgKiBwcm9wZXJ0eSB2YWx1ZXMuXG4gICAqIEBwYXJhbSBsaXN0IFRoZSBsaXN0IHRvIHBsdWNrIGVsZW1lbnRzIG91dCBvZiB0aGF0IGhhdmUgdGhlIHByb3BlcnR5IGBwcm9wZXJ0eU5hbWVgLlxuICAgKiBAcGFyYW0gcHJvcGVydHlOYW1lIFRoZSBwcm9wZXJ0eSB0byBsb29rIGZvciBvbiBlYWNoIGVsZW1lbnQgd2l0aGluIGBsaXN0YC5cbiAgICogQHJldHVybiBUaGUgbGlzdCBvZiBlbGVtZW50cyB3aXRoaW4gYGxpc3RgIHRoYXQgaGF2ZSB0aGUgcHJvcGVydHkgYHByb3BlcnR5TmFtZWAuXG4gICAqL1xuICBzdGF0aWMgZ2V0RmllbGRBcnJheSh7IGxpc3QsIHByb3BlcnR5TmFtZSB9OiB7IGxpc3Q6IF8uTGlzdDxhbnk+OyBwcm9wZXJ0eU5hbWU6IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIF8ucGx1Y2sobGlzdCwgcHJvcGVydHlOYW1lKVxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBvYmplY3RQcm9wZXJ0eU5hbWUgc3VjaCBhcyAnY3JlYXRvci5pZCcsICd1c2VyLmlkJ1xuICAgKlxuICAgKi9cbiAgc3RhdGljIGdldE9iamVjdEZpZWxkQXJyYXkoe1xuICAgIGxpc3QsXG4gICAgb2JqZWN0UHJvcGVydHlOYW1lXG4gIH06IHtcbiAgICBsaXN0OiBfLkxpc3Q8YW55PlxuICAgIG9iamVjdFByb3BlcnR5TmFtZTogc3RyaW5nXG4gIH0pIHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiBzdHJpbmdbXSA9IG9iamVjdFByb3BlcnR5TmFtZS5zcGxpdCgnLicpXG5cbiAgICBsZXQgdG1wQXJyYXk6IGFueSA9IGxpc3RcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHByb3BlcnRpZXNbaV1cbiAgICAgIHRtcEFycmF5ID0gVW5kZXJzY29yZVV0aWxzLmdldEZpZWxkQXJyYXlXaXRob3V0VW5kZWZpbmVkKHtcbiAgICAgICAgbGlzdDogdG1wQXJyYXksXG4gICAgICAgIHByb3BlcnR5TmFtZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdG1wQXJyYXlcbiAgfVxuXG4gIHN0YXRpYyBmaW5kSW5BcnJheSh7IGFycmF5LCBpdGVyYXRvciB9OiB7IGFycmF5OiBfLkxpc3Q8YW55PjsgaXRlcmF0b3I6IGFueSB9KSB7XG4gICAgcmV0dXJuIF8uZmluZChhcnJheSwgaXRlcmF0b3IpXG4gIH1cblxuICBzdGF0aWMgdW5pb25BcnJheXMoeyBhcnJheSwgaWRzIH06IHsgYXJyYXk6IF8uTGlzdDxhbnk+OyBpZHM6IGFueSB9KSB7XG4gICAgcmV0dXJuIF8udW5pb24oYXJyYXksIGlkcylcbiAgfVxuXG4gIHN0YXRpYyBmaW5kSW5kZXhJbkFycmF5KHsgYXJyYXksIHByZWRpY2F0ZSB9OiB7IGFycmF5OiBfLkxpc3Q8YW55PjsgcHJlZGljYXRlOiBhbnkgfSkge1xuICAgIHJldHVybiBfLmZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKVxuICB9XG5cbiAgc3RhdGljIGZpbmRXaGVyZUluQXJyYXkoeyBhcnJheSwgcHJvcGVydGllcyB9OiB7IGFycmF5OiBfLkxpc3Q8YW55PjsgcHJvcGVydGllczogYW55IH0pIHtcbiAgICByZXR1cm4gXy5maW5kV2hlcmUoYXJyYXksIHByb3BlcnRpZXMpXG4gIH1cblxuICBzdGF0aWMgZmluZExhc3RJbmRleCh7IGFycmF5LCBpZCB9OiB7IGFycmF5OiBfLkxpc3Q8YW55PjsgaWQ6IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIF8uZmluZExhc3RJbmRleChhcnJheSwge1xuICAgICAgaWRcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIHJlZHVjZUZvckFycmF5KHsgYXJyYXlzIH06IHsgYXJyYXlzOiBfLkxpc3Q8YW55PiB9KSB7XG4gICAgcmV0dXJuIF8ucmVkdWNlKFxuICAgICAgYXJyYXlzLFxuICAgICAgKHJlc3VsdCwgYXJyKSA9PiB7XG4gICAgICAgIHJldHVybiByZXN1bHQuY29uY2F0KGFycilcbiAgICAgIH0sXG4gICAgICBbXVxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyB1bmlxdWVJbkFycmF5KHsgYXJyYXkgfTogeyBhcnJheTogXy5MaXN0PGFueT4gfSkge1xuICAgIHJldHVybiBfLnVuaXF1ZShhcnJheSlcbiAgfVxuXG4gIHN0YXRpYyB3aXRob3V0SW5BcnJheSh7IGFycmF5LCBpZCB9OiB7IGFycmF5OiBfLkxpc3Q8YW55PjsgaWQ6IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIF8ud2l0aG91dChhcnJheSwgaWQpXG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IGZpbHRlciB3aXRob3V0IHVuZGVmaWVkLlxuICAgKi9cbiAgc3RhdGljIGdldEZpZWxkQXJyYXlXaXRob3V0VW5kZWZpbmVkKHsgbGlzdCwgcHJvcGVydHlOYW1lIH0pIHtcbiAgICBjb25zdCBhcnJheTogYW55ID0gXy5wbHVjayhsaXN0LCBwcm9wZXJ0eU5hbWUpXG4gICAgY29uc3QgZGF0YSA9IGFycmF5LmZpbHRlcigoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnQgIT09IHVuZGVmaW5lZFxuICAgIH0pXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuIl19