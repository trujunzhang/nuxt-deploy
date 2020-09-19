"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validation = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || value === '';
};

var join = function join(rules) {
  return function (value, data) {
    return rules.map(function (rule) {
      return rule(value, data);
    }).filter(function (error) {
      return !!error;
    })[0
    /* first error */
    ];
  };
};

var Validation = /*#__PURE__*/function () {
  function Validation() {
    (0, _classCallCheck2["default"])(this, Validation);
  }

  (0, _createClass2["default"])(Validation, null, [{
    key: "email",
    value: function email(value) {
      // Let's not start a debate on email regex. This is just for an example app!
      if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
      }

      return null;
    }
  }, {
    key: "required",
    value: function required(value) {
      if (isEmpty(value)) {
        return 'Required';
      }

      return null;
    }
  }, {
    key: "minLength",
    value: function minLength(min) {
      return function (value) {
        if (!isEmpty(value) && value.length < min) {
          return "Must be at least ".concat(min, " characters");
        }

        return null;
      };
    }
  }, {
    key: "maxLength",
    value: function maxLength(max) {
      return function (value) {
        if (!isEmpty(value) && value.length > max) {
          return "Must be no more than ".concat(max, " characters");
        }

        return null;
      };
    }
  }, {
    key: "integer",
    value: function integer(value) {
      if (!Number.isInteger(Number(value))) {
        return 'Must be an integer';
      }

      return null;
    }
  }, {
    key: "oneOf",
    value: function oneOf(enumeration) {
      return function (value) {
        // tslint:disable-next-line:no-bitwise
        if (!~enumeration.indexOf(value)) {
          return "Must be one of: ".concat(enumeration.join(', '));
        }

        return null;
      };
    }
  }, {
    key: "match",
    value: function match(field) {
      return function (value, data) {
        if (data) {
          if (value !== data[field]) {
            return 'Do not match';
          }
        }

        return null;
      };
    }
  }, {
    key: "createValidator",
    value: function createValidator(rules) {
      return function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var errors = {};
        Object.keys(rules).forEach(function (key) {
          var rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions

          var error = rule(data[key], data);

          if (error) {
            errors[key] = error;
          }
        });
        return errors;
      };
    }
  }]);
  return Validation;
}();

exports.Validation = Validation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy92YWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbImlzRW1wdHkiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImpvaW4iLCJydWxlcyIsImRhdGEiLCJtYXAiLCJydWxlIiwiZmlsdGVyIiwiZXJyb3IiLCJWYWxpZGF0aW9uIiwidGVzdCIsIm1pbiIsImxlbmd0aCIsIm1heCIsIk51bWJlciIsImlzSW50ZWdlciIsImVudW1lcmF0aW9uIiwiaW5kZXhPZiIsImZpZWxkIiwiZXJyb3JzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQWdCO0FBQzlCLFNBQU9BLEtBQUssS0FBS0MsU0FBVixJQUF1QkQsS0FBSyxLQUFLLElBQWpDLElBQXlDQSxLQUFLLEtBQUssRUFBMUQ7QUFDRCxDQUZEOztBQUdBLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQ7QUFBQSxTQUFXLFVBQUNILEtBQUQsRUFBUUksSUFBUjtBQUFBLFdBQ3RCRCxLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsYUFBZUEsSUFBSSxDQUFDTixLQUFELEVBQVFJLElBQVIsQ0FBbkI7QUFBQSxLQUFWLEVBQTRDRyxNQUE1QyxDQUFtRCxVQUFDQyxLQUFEO0FBQUEsYUFBZ0IsQ0FBQyxDQUFDQSxLQUFsQjtBQUFBLEtBQW5ELEVBQTRFO0FBQUU7QUFBOUUsS0FEc0I7QUFBQSxHQUFYO0FBQUEsQ0FBYjs7SUFHYUMsVTs7Ozs7OzswQkFDRVQsSyxFQUFPO0FBQ2xCO0FBQ0EsVUFBSSxDQUFDRCxPQUFPLENBQUNDLEtBQUQsQ0FBUixJQUFtQixDQUFDLDRDQUE0Q1UsSUFBNUMsQ0FBaURWLEtBQWpELENBQXhCLEVBQWlGO0FBQy9FLGVBQU8sdUJBQVA7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRDs7OzZCQUVlQSxLLEVBQU87QUFDckIsVUFBSUQsT0FBTyxDQUFDQyxLQUFELENBQVgsRUFBb0I7QUFDbEIsZUFBTyxVQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7Ozs4QkFFZ0JXLEcsRUFBSztBQUNwQixhQUFPLFVBQUNYLEtBQUQsRUFBZ0I7QUFDckIsWUFBSSxDQUFDRCxPQUFPLENBQUNDLEtBQUQsQ0FBUixJQUFtQkEsS0FBSyxDQUFDWSxNQUFOLEdBQWVELEdBQXRDLEVBQTJDO0FBQ3pDLDRDQUEyQkEsR0FBM0I7QUFDRDs7QUFDRCxlQUFPLElBQVA7QUFDRCxPQUxEO0FBTUQ7Ozs4QkFFZ0JFLEcsRUFBSztBQUNwQixhQUFPLFVBQUNiLEtBQUQsRUFBZ0I7QUFDckIsWUFBSSxDQUFDRCxPQUFPLENBQUNDLEtBQUQsQ0FBUixJQUFtQkEsS0FBSyxDQUFDWSxNQUFOLEdBQWVDLEdBQXRDLEVBQTJDO0FBQ3pDLGdEQUErQkEsR0FBL0I7QUFDRDs7QUFDRCxlQUFPLElBQVA7QUFDRCxPQUxEO0FBTUQ7Ozs0QkFFY2IsSyxFQUFPO0FBQ3BCLFVBQUksQ0FBQ2MsTUFBTSxDQUFDQyxTQUFQLENBQWlCRCxNQUFNLENBQUNkLEtBQUQsQ0FBdkIsQ0FBTCxFQUFzQztBQUNwQyxlQUFPLG9CQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0Q7OzswQkFFWWdCLFcsRUFBYTtBQUN4QixhQUFPLFVBQUNoQixLQUFELEVBQWdCO0FBQ3JCO0FBQ0EsWUFBSSxDQUFDLENBQUNnQixXQUFXLENBQUNDLE9BQVosQ0FBb0JqQixLQUFwQixDQUFOLEVBQWtDO0FBQ2hDLDJDQUEwQmdCLFdBQVcsQ0FBQ2QsSUFBWixDQUFpQixJQUFqQixDQUExQjtBQUNEOztBQUNELGVBQU8sSUFBUDtBQUNELE9BTkQ7QUFPRDs7OzBCQUVZZ0IsSyxFQUFPO0FBQ2xCLGFBQU8sVUFBQ2xCLEtBQUQsRUFBUUksSUFBUixFQUFpQjtBQUN0QixZQUFJQSxJQUFKLEVBQVU7QUFDUixjQUFJSixLQUFLLEtBQUtJLElBQUksQ0FBQ2MsS0FBRCxDQUFsQixFQUEyQjtBQUN6QixtQkFBTyxjQUFQO0FBQ0Q7QUFDRjs7QUFDRCxlQUFPLElBQVA7QUFDRCxPQVBEO0FBUUQ7OztvQ0FFc0JmLEssRUFBTztBQUM1QixhQUFPLFlBQWU7QUFBQSxZQUFkQyxJQUFjLHVFQUFQLEVBQU87QUFDcEIsWUFBTWUsTUFBTSxHQUFHLEVBQWY7QUFDQUMsUUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlsQixLQUFaLEVBQW1CbUIsT0FBbkIsQ0FBMkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2xDLGNBQU1qQixJQUFJLEdBQUdKLElBQUksQ0FBQyxHQUFHc0IsTUFBSCxDQUFVckIsS0FBSyxDQUFDb0IsR0FBRCxDQUFmLENBQUQsQ0FBakIsQ0FEa0MsQ0FDTzs7QUFDekMsY0FBTWYsS0FBSyxHQUFHRixJQUFJLENBQUNGLElBQUksQ0FBQ21CLEdBQUQsQ0FBTCxFQUFZbkIsSUFBWixDQUFsQjs7QUFDQSxjQUFJSSxLQUFKLEVBQVc7QUFDVFcsWUFBQUEsTUFBTSxDQUFDSSxHQUFELENBQU4sR0FBY2YsS0FBZDtBQUNEO0FBQ0YsU0FORDtBQU9BLGVBQU9XLE1BQVA7QUFDRCxPQVZEO0FBV0QiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc0VtcHR5ID0gKHZhbHVlOiBhbnkpID0+IHtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnXG59XG5jb25zdCBqb2luID0gKHJ1bGVzKSA9PiAodmFsdWUsIGRhdGEpID0+XG4gIHJ1bGVzLm1hcCgocnVsZTogYW55KSA9PiBydWxlKHZhbHVlLCBkYXRhKSkuZmlsdGVyKChlcnJvcjogYW55KSA9PiAhIWVycm9yKVswIC8qIGZpcnN0IGVycm9yICovXVxuXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbiB7XG4gIHN0YXRpYyBlbWFpbCh2YWx1ZSkge1xuICAgIC8vIExldCdzIG5vdCBzdGFydCBhIGRlYmF0ZSBvbiBlbWFpbCByZWdleC4gVGhpcyBpcyBqdXN0IGZvciBhbiBleGFtcGxlIGFwcCFcbiAgICBpZiAoIWlzRW1wdHkodmFsdWUpICYmICEvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBzdGF0aWMgcmVxdWlyZWQodmFsdWUpIHtcbiAgICBpZiAoaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAnUmVxdWlyZWQnXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBzdGF0aWMgbWluTGVuZ3RoKG1pbikge1xuICAgIHJldHVybiAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgaWYgKCFpc0VtcHR5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPCBtaW4pIHtcbiAgICAgICAgcmV0dXJuIGBNdXN0IGJlIGF0IGxlYXN0ICR7bWlufSBjaGFyYWN0ZXJzYFxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbWF4TGVuZ3RoKG1heCkge1xuICAgIHJldHVybiAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgaWYgKCFpc0VtcHR5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiBtYXgpIHtcbiAgICAgICAgcmV0dXJuIGBNdXN0IGJlIG5vIG1vcmUgdGhhbiAke21heH0gY2hhcmFjdGVyc2BcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGludGVnZXIodmFsdWUpIHtcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoTnVtYmVyKHZhbHVlKSkpIHtcbiAgICAgIHJldHVybiAnTXVzdCBiZSBhbiBpbnRlZ2VyJ1xuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc3RhdGljIG9uZU9mKGVudW1lcmF0aW9uKSB7XG4gICAgcmV0dXJuICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgaWYgKCF+ZW51bWVyYXRpb24uaW5kZXhPZih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGBNdXN0IGJlIG9uZSBvZjogJHtlbnVtZXJhdGlvbi5qb2luKCcsICcpfWBcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG1hdGNoKGZpZWxkKSB7XG4gICAgcmV0dXJuICh2YWx1ZSwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBkYXRhW2ZpZWxkXSkge1xuICAgICAgICAgIHJldHVybiAnRG8gbm90IG1hdGNoJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVWYWxpZGF0b3IocnVsZXMpIHtcbiAgICByZXR1cm4gKGRhdGEgPSB7fSkgPT4ge1xuICAgICAgY29uc3QgZXJyb3JzID0ge31cbiAgICAgIE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZSA9IGpvaW4oW10uY29uY2F0KHJ1bGVzW2tleV0pKSAvLyBjb25jYXQgZW5hYmxlcyBib3RoIGZ1bmN0aW9ucyBhbmQgYXJyYXlzIG9mIGZ1bmN0aW9uc1xuICAgICAgICBjb25zdCBlcnJvciA9IHJ1bGUoZGF0YVtrZXldLCBkYXRhKVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBlcnJvcnNba2V5XSA9IGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gZXJyb3JzXG4gICAgfVxuICB9XG59XG4iXX0=