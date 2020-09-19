"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LodashUtilsxxx = exports.LodashUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _lodash = _interopRequireDefault(require("lodash"));

var LodashUtils = _lodash["default"];
exports.LodashUtils = LodashUtils;

var LodashUtilsxxx = /*#__PURE__*/function () {
  function LodashUtilsxxx() {
    (0, _classCallCheck2["default"])(this, LodashUtilsxxx);
  }

  (0, _createClass2["default"])(LodashUtilsxxx, null, [{
    key: "merge",
    value: function merge(object) {
      for (var _len = arguments.length, otherArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        otherArgs[_key - 1] = arguments[_key];
      }

      return _lodash["default"].merge(object, otherArgs);
    }
  }, {
    key: "clone",
    value: function clone(value) {
      return _lodash["default"].clone(value);
    }
  }, {
    key: "remove",
    value: function remove(array, predicate) {
      return _lodash["default"].remove(array, predicate);
    }
  }, {
    key: "reverse",
    value: function reverse(array) {
      return _lodash["default"].reverse(array);
    }
  }, {
    key: "find",
    value: function find(collection, predicate, fromIndex) {
      return _lodash["default"].find(collection, predicate, fromIndex);
    }
  }, {
    key: "get",
    value: function get(object, path) {
      return _lodash["default"].get(object, path);
    }
  }, {
    key: "random",
    value: function random(min, max, floating) {
      return _lodash["default"].random(min, max, floating);
    }
  }, {
    key: "isString",
    value: function isString(value) {
      return _lodash["default"].isString(value);
    }
  }, {
    key: "toUpper",
    value: function toUpper(string) {
      return _lodash["default"].toUpper(string);
    }
  }, {
    key: "forEach",
    value: function forEach(collection, iteratee) {
      return _lodash["default"].forEach(collection, iteratee);
    }
  }, {
    key: "assign",
    value: function assign(object) {
      for (var _len2 = arguments.length, otherArgs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        otherArgs[_key2 - 1] = arguments[_key2];
      }

      return _lodash["default"].assign(object, otherArgs);
    }
  }, {
    key: "values",
    value: function values(object) {
      return _lodash["default"].values(object);
    } // static xxx() {
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

  }, {
    key: "difference",
    value: function difference(object, base) {
      function changes(object, base) {
        return _lodash["default"].transform(object, function (result, value, key) {
          if (!_lodash["default"].isEqual(value, base[key])) {
            result[key] = _lodash["default"].isObject(value) && _lodash["default"].isObject(base[key]) ? changes(value, base[key]) : value;
          }
        });
      }

      return changes(object, base);
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

  }, {
    key: "getObjectDiff",
    value: function getObjectDiff(obj1, obj2) {
      var diff = Object.keys(obj1).reduce(function (result, key) {
        if (!obj2.hasOwnProperty(key)) {
          result.push(key);
        } else if (_lodash["default"].isEqual(obj1[key], obj2[key])) {
          var resultKeyIndex = result.indexOf(key);
          result.splice(resultKeyIndex, 1);
        }

        return result;
      }, Object.keys(obj2));
      return diff;
    }
  }, {
    key: "isEqual",
    value: function isEqual(value, other) {
      return _lodash["default"].isEqual(value, other);
    }
  }, {
    key: "keys",
    value: function keys(object) {
      return _lodash["default"].keys(object);
    }
  }]);
  return LodashUtilsxxx;
}();

exports.LodashUtilsxxx = LodashUtilsxxx;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpY1V0aWxzL2xvZGFzaFV0aWxzLnRzIl0sIm5hbWVzIjpbIkxvZGFzaFV0aWxzIiwiXyIsIkxvZGFzaFV0aWxzeHh4Iiwib2JqZWN0Iiwib3RoZXJBcmdzIiwibWVyZ2UiLCJ2YWx1ZSIsImNsb25lIiwiYXJyYXkiLCJwcmVkaWNhdGUiLCJyZW1vdmUiLCJyZXZlcnNlIiwiY29sbGVjdGlvbiIsImZyb21JbmRleCIsImZpbmQiLCJwYXRoIiwiZ2V0IiwibWluIiwibWF4IiwiZmxvYXRpbmciLCJyYW5kb20iLCJpc1N0cmluZyIsInN0cmluZyIsInRvVXBwZXIiLCJpdGVyYXRlZSIsImZvckVhY2giLCJhc3NpZ24iLCJ2YWx1ZXMiLCJiYXNlIiwiY2hhbmdlcyIsInRyYW5zZm9ybSIsInJlc3VsdCIsImtleSIsImlzRXF1YWwiLCJpc09iamVjdCIsIm9iajEiLCJvYmoyIiwiZGlmZiIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJyZXN1bHRLZXlJbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJvdGhlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdPLElBQU1BLFdBQWdCLEdBQUdDLGtCQUF6Qjs7O0lBRU1DLGM7Ozs7Ozs7MEJBQ0VDLE0sRUFBdUM7QUFBQSx3Q0FBdkJDLFNBQXVCO0FBQXZCQSxRQUFBQSxTQUF1QjtBQUFBOztBQUNsRCxhQUFPSCxtQkFBRUksS0FBRixDQUFRRixNQUFSLEVBQWdCQyxTQUFoQixDQUFQO0FBQ0Q7OzswQkFFZUUsSyxFQUFhO0FBQzNCLGFBQU9MLG1CQUFFTSxLQUFGLENBQVFELEtBQVIsQ0FBUDtBQUNEOzs7MkJBRWdCRSxLLEVBQWdCQyxTLEVBQWtDO0FBQ2pFLGFBQU9SLG1CQUFFUyxNQUFGLENBQVNGLEtBQVQsRUFBZ0JDLFNBQWhCLENBQVA7QUFDRDs7OzRCQUV1Q0QsSyxFQUFxQjtBQUMzRCxhQUFPUCxtQkFBRVUsT0FBRixD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TSxDQUFDQyxJQUFQLENBQVlILElBQVosQ0FSVSxDQUFiO0FBVUEsYUFBT0MsSUFBUDtBQUNEOzs7NEJBRWMvQixLLEVBQVl3QyxLLEVBQXFCO0FBQzlDLGFBQU83QyxtQkFBRWdDLE9BQUYsQ0FBVTNCLEtBQVYsRUFBaUJ3QyxLQUFqQixDQUFQO0FBQ0Q7Ozt5QkFFVzNDLE0sRUFBd0I7QUFDbEMsYUFBT0YsbUJBQUVzQyxJQUFGLENBQU9wQyxNQUFQLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IExpc3QsIExpc3RJdGVyYXRlZSwgTGlzdEl0ZXJhdG9yVHlwZUd1YXJkLCBPYmplY3RJdGVyYXRvciB9IGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGNvbnN0IExvZGFzaFV0aWxzOiBhbnkgPSBfXG5cbmV4cG9ydCBjbGFzcyBMb2Rhc2hVdGlsc3h4eCB7XG4gIHN0YXRpYyBtZXJnZShvYmplY3Q6IGFueSwgLi4ub3RoZXJBcmdzOiBhbnlbXSk6IGFueSB7XG4gICAgcmV0dXJuIF8ubWVyZ2Uob2JqZWN0LCBvdGhlckFyZ3MpXG4gIH1cblxuICBzdGF0aWMgY2xvbmU8VD4odmFsdWU6IFQpOiBUIHtcbiAgICByZXR1cm4gXy5jbG9uZSh2YWx1ZSlcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmU8VD4oYXJyYXk6IExpc3Q8VD4sIHByZWRpY2F0ZT86IExpc3RJdGVyYXRlZTxUPik6IFRbXSB7XG4gICAgcmV0dXJuIF8ucmVtb3ZlKGFycmF5LCBwcmVkaWNhdGUpXG4gIH1cblxuICBzdGF0aWMgcmV2ZXJzZTxUTGlzdCBleHRlbmRzIExpc3Q8YW55Pj4oYXJyYXk6IFRMaXN0KTogVExpc3Qge1xuICAgIHJldHVybiBfLnJldmVyc2UoYXJyYXkpXG4gIH1cblxuICBzdGF0aWMgZmluZDxULCBTIGV4dGVuZHMgVD4oXG4gICAgY29sbGVjdGlvbjogTGlzdDxUPiB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgcHJlZGljYXRlOiBMaXN0SXRlcmF0b3JUeXBlR3VhcmQ8VCwgUz4sXG4gICAgZnJvbUluZGV4PzogbnVtYmVyXG4gICk6IFMgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiBfLmZpbmQoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBmcm9tSW5kZXgpXG4gIH1cblxuICBzdGF0aWMgZ2V0PFRPYmplY3QgZXh0ZW5kcyBvYmplY3QsIFRLZXkgZXh0ZW5kcyBrZXlvZiBUT2JqZWN0PihcbiAgICBvYmplY3Q6IFRPYmplY3QsXG4gICAgcGF0aDogVEtleSB8IFtUS2V5XVxuICApOiBUT2JqZWN0W1RLZXldIHtcbiAgICByZXR1cm4gXy5nZXQob2JqZWN0LCBwYXRoKVxuICB9XG5cbiAgc3RhdGljIHJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIGZsb2F0aW5nPzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgcmV0dXJuIF8ucmFuZG9tKG1pbiwgbWF4LCBmbG9hdGluZylcbiAgfVxuXG4gIHN0YXRpYyBpc1N0cmluZyh2YWx1ZT86IGFueSk6IHZhbHVlIGlzIHN0cmluZyB7XG4gICAgcmV0dXJuIF8uaXNTdHJpbmcodmFsdWUpXG4gIH1cbiAgc3RhdGljIHRvVXBwZXIoc3RyaW5nPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXy50b1VwcGVyKHN0cmluZylcbiAgfVxuICBzdGF0aWMgZm9yRWFjaDxUIGV4dGVuZHMgb2JqZWN0Pihjb2xsZWN0aW9uOiBULCBpdGVyYXRlZT86IE9iamVjdEl0ZXJhdG9yPFQsIGFueT4pOiBUIHtcbiAgICByZXR1cm4gXy5mb3JFYWNoKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKVxuICB9XG4gIHN0YXRpYyBhc3NpZ24ob2JqZWN0OiBhbnksIC4uLm90aGVyQXJnczogYW55W10pOiBhbnkge1xuICAgIHJldHVybiBfLmFzc2lnbihvYmplY3QsIG90aGVyQXJncylcbiAgfVxuXG4gIHN0YXRpYyB2YWx1ZXMob2JqZWN0OiBhbnkpOiBhbnlbXSB7XG4gICAgcmV0dXJuIF8udmFsdWVzKG9iamVjdClcbiAgfVxuXG4gIC8vIHN0YXRpYyB4eHgoKSB7XG4gIC8vICAgICByZXR1cm4gXy5yZXZlcnNlKGFycmF5KVxuICAvLyB9XG4gIC8vIHN0YXRpYyB4eHgoKSB7XG4gIC8vICAgICByZXR1cm4gXy5yZXZlcnNlKGFycmF5KVxuICAvLyB9XG4gIC8vIHN0YXRpYyB4eHgoKSB7XG4gIC8vICAgICByZXR1cm4gXy5yZXZlcnNlKGFycmF5KVxuICAvLyB9XG4gIC8vIHN0YXRpYyB4eHgoKSB7XG4gIC8vICAgICByZXR1cm4gXy5yZXZlcnNlKGFycmF5KVxuICAvLyB9XG5cbiAgLy8gc3RhdGljIHh4eCgpIHtcbiAgLy8gcmV0dXJuIF8ucmV2ZXJzZShhcnJheSlcbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBEZWVwIGRpZmYgYmV0d2VlbiB0d28gb2JqZWN0LCB1c2luZyBsb2Rhc2hcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3QgT2JqZWN0IGNvbXBhcmVkXG4gICAqIEBwYXJhbSAge09iamVjdH0gYmFzZSAgIE9iamVjdCB0byBjb21wYXJlIHdpdGhcbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgUmV0dXJuIGEgbmV3IG9iamVjdCB3aG8gcmVwcmVzZW50IHRoZSBkaWZmXG4gICAqL1xuICBzdGF0aWMgZGlmZmVyZW5jZShvYmplY3Q6IG9iamVjdCwgYmFzZTogb2JqZWN0KSB7XG4gICAgZnVuY3Rpb24gY2hhbmdlcyhvYmplY3Q6IGFueSwgYmFzZTogYW55KSB7XG4gICAgICByZXR1cm4gXy50cmFuc2Zvcm0ob2JqZWN0LCBmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKCFfLmlzRXF1YWwodmFsdWUsIGJhc2Vba2V5XSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9XG4gICAgICAgICAgICBfLmlzT2JqZWN0KHZhbHVlKSAmJiBfLmlzT2JqZWN0KGJhc2Vba2V5XSkgPyBjaGFuZ2VzKHZhbHVlLCBiYXNlW2tleV0pIDogdmFsdWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGNoYW5nZXMob2JqZWN0LCBiYXNlKVxuICB9XG5cbiAgLypcbiAgICogQ29tcGFyZSB0d28gb2JqZWN0cyBieSByZWR1Y2luZyBhbiBhcnJheSBvZiBrZXlzIGluIG9iajEsIGhhdmluZyB0aGVcbiAgICoga2V5cyBpbiBvYmoyIGFzIHRoZSBpbnRpYWwgdmFsdWUgb2YgdGhlIHJlc3VsdC4gS2V5IHBvaW50czpcbiAgICpcbiAgICogLSBBbGwga2V5cyBvZiBvYmoyIGFyZSBpbml0aWFsbHkgaW4gdGhlIHJlc3VsdC5cbiAgICpcbiAgICogLSBJZiB0aGUgbG9vcCBmaW5kcyBhIGtleSAoZnJvbSBvYmoxLCByZW1lbWJlcikgbm90IGluIG9iajIsIGl0IGFkZHNcbiAgICogICBpdCB0byB0aGUgcmVzdWx0LlxuICAgKlxuICAgKiAtIElmIHRoZSBsb29wIGZpbmRzIGEga2V5IHRoYXQgYXJlIGJvdGggaW4gb2JqMSBhbmQgb2JqMiwgaXQgY29tcGFyZXNcbiAgICogICB0aGUgdmFsdWUuIElmIGl0J3MgdGhlIHNhbWUgdmFsdWUsIHRoZSBrZXkgaXMgcmVtb3ZlZCBmcm9tIHRoZSByZXN1bHQuXG4gICAqL1xuICBzdGF0aWMgZ2V0T2JqZWN0RGlmZihvYmoxOiBvYmplY3QsIG9iajI6IG9iamVjdCkge1xuICAgIGNvbnN0IGRpZmYgPSBPYmplY3Qua2V5cyhvYmoxKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgICBpZiAoIW9iajIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICByZXN1bHQucHVzaChrZXkpXG4gICAgICB9IGVsc2UgaWYgKF8uaXNFcXVhbChvYmoxW2tleV0sIG9iajJba2V5XSkpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0S2V5SW5kZXggPSByZXN1bHQuaW5kZXhPZihrZXkpXG4gICAgICAgIHJlc3VsdC5zcGxpY2UocmVzdWx0S2V5SW5kZXgsIDEpXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSwgT2JqZWN0LmtleXMob2JqMikpXG5cbiAgICByZXR1cm4gZGlmZlxuICB9XG5cbiAgc3RhdGljIGlzRXF1YWwodmFsdWU6IGFueSwgb3RoZXI6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBfLmlzRXF1YWwodmFsdWUsIG90aGVyKVxuICB9XG5cbiAgc3RhdGljIGtleXMob2JqZWN0PzogYW55KTogc3RyaW5nW10ge1xuICAgIHJldHVybiBfLmtleXMob2JqZWN0KVxuICB9XG59XG4iXX0=