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
    } // static reduceWithIterator({ arrays, iterator }: { arrays: _.List<any>; iterator: any }) {
    //   return _.reduce(arrays, iterator, [])
    // }

  }, {
    key: "reduceWithIterator",
    value: function reduceWithIterator(_ref9) {
      var arrays = _ref9.arrays,
          iterator = _ref9.iterator,
          memo = _ref9.memo;
      return _.reduce(arrays, iterator, memo || []);
    }
  }, {
    key: "makeRangeArray",
    value: function makeRangeArray(stop) {
      var array = _.range(stop);

      return array;
    }
  }, {
    key: "uniqueInArray",
    value: function uniqueInArray(_ref10) {
      var array = _ref10.array;
      return _.unique(array);
    }
  }, {
    key: "withoutInArray",
    value: function withoutInArray(_ref11) {
      var array = _ref11.array,
          id = _ref11.id;
      return _.without(array, id);
    }
  }, {
    key: "cloneObject",
    value: function cloneObject(object) {
      return _.clone(object);
    }
  }, {
    key: "convertArrayToObject",
    value: function convertArrayToObject(array) {
      return _.object(array);
    }
  }, {
    key: "isUndefined",
    value: function isUndefined(value) {
      return _.isUndefined(value);
    }
  }, {
    key: "isDefined",
    value: function isDefined(value) {
      return UnderscoreUtils.isUndefined(value) === false;
    }
  }, {
    key: "containsInArray",
    value: function containsInArray(_ref12) {
      var list = _ref12.list,
          propertyName = _ref12.propertyName;
      return _.contains(list, propertyName);
    }
  }, {
    key: "includeInArray",
    value: function includeInArray(_ref13) {
      var list = _ref13.list,
          propertyName = _ref13.propertyName;
      return _.include(list, propertyName);
    }
  }, {
    key: "flattenArray",
    value: function flattenArray(array) {
      return _.flatten(array);
    }
  }, {
    key: "pickFromObject",
    value: function pickFromObject(object) {
      for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        keys[_key - 1] = arguments[_key];
      }

      return _.pick(object, keys);
    }
  }, {
    key: "mapJoin",
    value: function mapJoin(_ref14) {
      var list = _ref14.list,
          predicate = _ref14.predicate;
      return _.map(list, predicate);
    }
  }, {
    key: "getFieldArrayRemovedValue",
    value: function getFieldArrayRemovedValue(_ref15) {
      var list = _ref15.list,
          propertyName = _ref15.propertyName,
          removedValue = _ref15.removedValue;

      var ids = _.pluck(list, propertyName);

      ids = _.without(ids, removedValue);
      return ids;
    }
    /**
     * Get array filter without undefied.
     */

  }, {
    key: "getFieldArrayWithoutUndefined",
    value: function getFieldArrayWithoutUndefined(_ref16) {
      var list = _ref16.list,
          propertyName = _ref16.propertyName;

      var array = _.pluck(list, propertyName);

      var data = array.filter(function (element) {
        return element !== undefined;
      });
      return data;
    }
  }, {
    key: "invertObject",
    value: function invertObject(object) {
      return _.invert(object);
    }
  }]);
  return UnderscoreUtils;
}();

exports.UnderscoreUtils = UnderscoreUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpY1V0aWxzL3VuZGVyc2NvcmVVdGlscy50cyJdLCJuYW1lcyI6WyJVbmRlcnNjb3JlVXRpbHMiLCJsaXN0IiwicHJvcGVydHlOYW1lIiwiXyIsInBsdWNrIiwib2JqZWN0UHJvcGVydHlOYW1lIiwicHJvcGVydGllcyIsInNwbGl0IiwidG1wQXJyYXkiLCJpIiwibGVuZ3RoIiwiZ2V0RmllbGRBcnJheVdpdGhvdXRVbmRlZmluZWQiLCJhcnJheSIsIml0ZXJhdG9yIiwiZmluZCIsImlkcyIsInVuaW9uIiwicHJlZGljYXRlIiwiZmluZEluZGV4IiwiZmluZFdoZXJlIiwiaWQiLCJmaW5kTGFzdEluZGV4IiwiYXJyYXlzIiwicmVkdWNlIiwicmVzdWx0IiwiYXJyIiwiY29uY2F0IiwibWVtbyIsInN0b3AiLCJyYW5nZSIsInVuaXF1ZSIsIndpdGhvdXQiLCJvYmplY3QiLCJjbG9uZSIsInZhbHVlIiwiaXNVbmRlZmluZWQiLCJjb250YWlucyIsImluY2x1ZGUiLCJmbGF0dGVuIiwia2V5cyIsInBpY2siLCJtYXAiLCJyZW1vdmVkVmFsdWUiLCJkYXRhIiwiZmlsdGVyIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsImludmVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRWFBLGU7Ozs7Ozs7O0FBQ1g7Ozs7Ozs7d0NBTzBGO0FBQUEsVUFBbkVDLElBQW1FLFFBQW5FQSxJQUFtRTtBQUFBLFVBQTdEQyxZQUE2RCxRQUE3REEsWUFBNkQ7QUFDeEYsYUFBT0MsQ0FBQyxDQUFDQyxLQUFGLENBQVFILElBQVIsRUFBY0MsWUFBZCxDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7K0NBV0c7QUFBQSxVQUxERCxJQUtDLFNBTERBLElBS0M7QUFBQSxVQUpESSxrQkFJQyxTQUpEQSxrQkFJQztBQUNELFVBQU1DLFVBQW9CLEdBQUdELGtCQUFrQixDQUFDRSxLQUFuQixDQUF5QixHQUF6QixDQUE3QjtBQUVBLFVBQUlDLFFBQWEsR0FB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UUgsSUFBUixFQUFjQyxZQUFkLENBQXBCOztBQUNBYSxNQUFBQSxHQUFHLEdBQUdaLENBQUMsQ0FBQzRCLE9BQUYsQ0FBVWhCLEdBQVYsRUFBZTJCLFlBQWYsQ0FBTjtBQUNBLGFBQU8zQixHQUFQO0FBQ0Q7QUFFRDs7Ozs7OzBEQUc2RDtBQUFBLFVBQXRCZCxJQUFzQixVQUF0QkEsSUFBc0I7QUFBQSxVQUFoQkMsWUFBZ0IsVUFBaEJBLFlBQWdCOztBQUMzRCxVQUFNVSxLQUFVLEdBQUdULENBQUMsQ0FBQ0MsS0FBRixDQUFRSCxJQUFSLEVBQWNDLFlBQWQsQ0FBbkI7O0FBQ0EsVUFBTXlDLElBQUksR0FBRy9CLEtBQUssQ0FBQ2dDLE1BQU4sQ0FBYSxVQUFDQyxPQUFELEVBQWE7QUFDckMsZUFBT0EsT0FBTyxLQUFLQyxTQUFuQjtBQUNELE9BRlksQ0FBYjtBQUdBLGFBQU9ILElBQVA7QUFDRDs7O2lDQUVtQlgsTSxFQUFhO0FBQy9CLGFBQU83QixDQUFDLENBQUM0QyxNQUFGLENBQVNmLE1BQVQsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJ1xuXG5leHBvcnQgY2xhc3MgVW5kZXJzY29yZVV0aWxzIHtcbiAgLyoqXG4gICAqIEEgY29udmVuaWVudCB2ZXJzaW9uIG9mIHdoYXQgaXMgcGVyaGFwcyB0aGUgbW9zdCBjb21tb24gdXNlLWNhc2UgZm9yIG1hcDogZXh0cmFjdGluZyBhIGxpc3Qgb2ZcbiAgICogcHJvcGVydHkgdmFsdWVzLlxuICAgKiBAcGFyYW0gbGlzdCBUaGUgbGlzdCB0byBwbHVjayBlbGVtZW50cyBvdXQgb2YgdGhhdCBoYXZlIHRoZSBwcm9wZXJ0eSBgcHJvcGVydHlOYW1lYC5cbiAgICogQHBhcmFtIHByb3BlcnR5TmFtZSBUaGUgcHJvcGVydHkgdG8gbG9vayBmb3Igb24gZWFjaCBlbGVtZW50IHdpdGhpbiBgbGlzdGAuXG4gICAqIEByZXR1cm4gVGhlIGxpc3Qgb2YgZWxlbWVudHMgd2l0aGluIGBsaXN0YCB0aGF0IGhhdmUgdGhlIHByb3BlcnR5IGBwcm9wZXJ0eU5hbWVgLlxuICAgKi9cbiAgc3RhdGljIGdldEZpZWxkQXJyYXkoeyBsaXN0LCBwcm9wZXJ0eU5hbWUgfTogeyBsaXN0OiBfLkxpc3Q8YW55PjsgcHJvcGVydHlOYW1lOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiBfLnBsdWNrKGxpc3QsIHByb3BlcnR5TmFtZSlcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gb2JqZWN0UHJvcGVydHlOYW1lIHN1Y2ggYXMgJ2NyZWF0b3IuaWQnLCAndXNlci5pZCdcbiAgICpcbiAgICovXG4gIHN0YXRpYyBnZXRPYmplY3RGaWVsZEFycmF5KHtcbiAgICBsaXN0LFxuICAgIG9iamVjdFByb3BlcnR5TmFtZVxuICB9OiB7XG4gICAgbGlzdDogXy5MaXN0PGFueT5cbiAgICBvYmplY3RQcm9wZXJ0eU5hbWU6IHN0cmluZ1xuICB9KSB7XG4gICAgY29uc3QgcHJvcGVydGllczogc3RyaW5nW10gPSBvYmplY3RQcm9wZXJ0eU5hbWUuc3BsaXQoJy4nKVxuXG4gICAgbGV0IHRtcEFycmF5OiBhbnkgPSBsaXN0XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0aWVzW2ldXG4gICAgICB0bXBBcnJheSA9IFVuZGVyc2NvcmVVdGlscy5nZXRGaWVsZEFycmF5V2l0aG91dFVuZGVmaW5lZCh7XG4gICAgICAgIGxpc3Q6IHRtcEFycmF5LFxuICAgICAgICBwcm9wZXJ0eU5hbWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRtcEFycmF5XG4gIH1cblxuICBzdGF0aWMgZmluZEluQXJyYXkoeyBhcnJheSwgaXRlcmF0b3IgfTogeyBhcnJheTogXy5MaXN0PGFueT47IGl0ZXJhdG9yOiBhbnkgfSkge1xuICAgIHJldHVybiBfLmZpbmQoYXJyYXksIGl0ZXJhdG9yKVxuICB9XG5cbiAgc3RhdGljIHVuaW9uQXJyYXlzKHsgYXJyYXksIGlkcyB9OiB7IGFycmF5OiBfLkxpc3Q8YW55PjsgaWRzOiBhbnkgfSkge1xuICAgIHJldHVybiBfLnVuaW9uKGFycmF5LCBpZHMpXG4gIH1cblxuICBzdGF0aWMgZmluZEluZGV4SW5BcnJheSh7IGFycmF5LCBwcmVkaWNhdGUgfTogeyBhcnJheTogXy5MaXN0PGFueT47IHByZWRpY2F0ZTogYW55IH0pIHtcbiAgICByZXR1cm4gXy5maW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSlcbiAgfVxuXG4gIHN0YXRpYyBmaW5kV2hlcmVJbkFycmF5KHsgYXJyYXksIHByb3BlcnRpZXMgfTogeyBhcnJheTogXy5MaXN0PGFueT47IHByb3BlcnRpZXM6IGFueSB9KSB7XG4gICAgcmV0dXJuIF8uZmluZFdoZXJlKGFycmF5LCBwcm9wZXJ0aWVzKVxuICB9XG5cbiAgc3RhdGljIGZpbmRMYXN0SW5kZXgoeyBhcnJheSwgaWQgfTogeyBhcnJheTogXy5MaXN0PGFueT47IGlkOiBzdHJpbmcgfSkge1xuICAgIHJldHVybiBfLmZpbmRMYXN0SW5kZXgoYXJyYXksIHtcbiAgICAgIGlkXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyByZWR1Y2VGb3JBcnJheSh7IGFycmF5cyB9OiB7IGFycmF5czogXy5MaXN0PGFueT4gfSkge1xuICAgIHJldHVybiBfLnJlZHVjZShcbiAgICAgIGFycmF5cyxcbiAgICAgIChyZXN1bHQsIGFycikgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0LmNvbmNhdChhcnIpXG4gICAgICB9LFxuICAgICAgW11cbiAgICApXG4gIH1cblxuICAvLyBzdGF0aWMgcmVkdWNlV2l0aEl0ZXJhdG9yKHsgYXJyYXlzLCBpdGVyYXRvciB9OiB7IGFycmF5czogXy5MaXN0PGFueT47IGl0ZXJhdG9yOiBhbnkgfSkge1xuICAvLyAgIHJldHVybiBfLnJlZHVjZShhcnJheXMsIGl0ZXJhdG9yLCBbXSlcbiAgLy8gfVxuXG4gIHN0YXRpYyByZWR1Y2VXaXRoSXRlcmF0b3Ioe1xuICAgIGFycmF5cyxcbiAgICBpdGVyYXRvcixcbiAgICBtZW1vXG4gIH06IHtcbiAgICBhcnJheXM6IF8uTGlzdDxhbnk+XG4gICAgaXRlcmF0b3I6IGFueVxuICAgIG1lbW8/OiBhbnlcbiAgfSkge1xuICAgIHJldHVybiBfLnJlZHVjZShhcnJheXMsIGl0ZXJhdG9yLCBtZW1vIHx8IFtdKVxuICB9XG5cbiAgc3RhdGljIG1ha2VSYW5nZUFycmF5KHN0b3A6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICBjb25zdCBhcnJheSA9IF8ucmFuZ2Uoc3RvcClcbiAgICByZXR1cm4gYXJyYXlcbiAgfVxuXG4gIHN0YXRpYyB1bmlxdWVJbkFycmF5KHsgYXJyYXkgfTogeyBhcnJheTogXy5MaXN0PGFueT4gfSkge1xuICAgIHJldHVybiBfLnVuaXF1ZShhcnJheSlcbiAgfVxuXG4gIHN0YXRpYyB3aXRob3V0SW5BcnJheSh7IGFycmF5LCBpZCB9OiB7IGFycmF5OiBfLkxpc3Q8YW55PjsgaWQ6IHN0cmluZyB9KSB7XG4gICAgcmV0dXJuIF8ud2l0aG91dChhcnJheSwgaWQpXG4gIH1cblxuICBzdGF0aWMgY2xvbmVPYmplY3Qob2JqZWN0OiBhbnkpIHtcbiAgICByZXR1cm4gXy5jbG9uZShvYmplY3QpXG4gIH1cblxuICBzdGF0aWMgY29udmVydEFycmF5VG9PYmplY3QoYXJyYXk6IGFueSkge1xuICAgIHJldHVybiBfLm9iamVjdChhcnJheSlcbiAgfVxuXG4gIHN0YXRpYyBpc1VuZGVmaW5lZCh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIF8uaXNVbmRlZmluZWQodmFsdWUpXG4gIH1cblxuICBzdGF0aWMgaXNEZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gVW5kZXJzY29yZVV0aWxzLmlzVW5kZWZpbmVkKHZhbHVlKSA9PT0gZmFsc2VcbiAgfVxuXG4gIHN0YXRpYyBjb250YWluc0luQXJyYXkoe1xuICAgIGxpc3QsXG4gICAgcHJvcGVydHlOYW1lXG4gIH06IHtcbiAgICBsaXN0OiBfLkxpc3Q8YW55PlxuICAgIHByb3BlcnR5TmFtZTogc3RyaW5nXG4gIH0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gXy5jb250YWlucyhsaXN0LCBwcm9wZXJ0eU5hbWUpXG4gIH1cblxuICBzdGF0aWMgaW5jbHVkZUluQXJyYXkoe1xuICAgIGxpc3QsXG4gICAgcHJvcGVydHlOYW1lXG4gIH06IHtcbiAgICBsaXN0OiBfLkxpc3Q8YW55PlxuICAgIHByb3BlcnR5TmFtZTogc3RyaW5nXG4gIH0pOiBib29sZWFuIHtcbiAgICByZXR1cm4gXy5pbmNsdWRlKGxpc3QsIHByb3BlcnR5TmFtZSlcbiAgfVxuXG4gIHN0YXRpYyBmbGF0dGVuQXJyYXkoYXJyYXk6IGFueSkge1xuICAgIHJldHVybiBfLmZsYXR0ZW4oYXJyYXkpXG4gIH1cblxuICBzdGF0aWMgcGlja0Zyb21PYmplY3Qob2JqZWN0OiBhbnksIC4uLmtleXM6IGFueVtdKSB7XG4gICAgcmV0dXJuIF8ucGljayhvYmplY3QsIGtleXMpXG4gIH1cblxuICBzdGF0aWMgbWFwSm9pbih7IGxpc3QsIHByZWRpY2F0ZSB9OiB7IGxpc3Q6IF8uTGlzdDxhbnk+OyBwcmVkaWNhdGU6IGFueSB9KSB7XG4gICAgcmV0dXJuIF8ubWFwKGxpc3QsIHByZWRpY2F0ZSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRGaWVsZEFycmF5UmVtb3ZlZFZhbHVlKHsgbGlzdCwgcHJvcGVydHlOYW1lLCByZW1vdmVkVmFsdWUgfSk6IHN0cmluZ1tdIHtcbiAgICBsZXQgaWRzOiBzdHJpbmdbXSA9IF8ucGx1Y2sobGlzdCwgcHJvcGVydHlOYW1lKVxuICAgIGlkcyA9IF8ud2l0aG91dChpZHMsIHJlbW92ZWRWYWx1ZSlcbiAgICByZXR1cm4gaWRzXG4gIH1cblxuICAvKipcbiAgICogR2V0IGFycmF5IGZpbHRlciB3aXRob3V0IHVuZGVmaWVkLlxuICAgKi9cbiAgc3RhdGljIGdldEZpZWxkQXJyYXlXaXRob3V0VW5kZWZpbmVkKHsgbGlzdCwgcHJvcGVydHlOYW1lIH0pIHtcbiAgICBjb25zdCBhcnJheTogYW55ID0gXy5wbHVjayhsaXN0LCBwcm9wZXJ0eU5hbWUpXG4gICAgY29uc3QgZGF0YSA9IGFycmF5LmZpbHRlcigoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnQgIT09IHVuZGVmaW5lZFxuICAgIH0pXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIHN0YXRpYyBpbnZlcnRPYmplY3Qob2JqZWN0OiBhbnkpIHtcbiAgICByZXR1cm4gXy5pbnZlcnQob2JqZWN0KVxuICB9XG59XG4iXX0=