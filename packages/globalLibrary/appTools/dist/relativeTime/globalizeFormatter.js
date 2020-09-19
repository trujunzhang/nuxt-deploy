"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalizeFormatter = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _numeralUtils = require("../basicUtils/numeralUtils");

var GlobalizeFormatter = /*#__PURE__*/function () {
  function GlobalizeFormatter(t) {
    (0, _classCallCheck2["default"])(this, GlobalizeFormatter);
    this.t = void 0;
    this.t = t;
  }

  (0, _createClass2["default"])(GlobalizeFormatter, [{
    key: "getPostValue",
    value: function getPostValue(key, value, shouldCompact) {
      if (value === 1 || value === -1) {
        if (shouldCompact) {
          return '';
        }

        return 'one';
      }

      return 'other';
    }
  }, {
    key: "getMiddleValue",
    value: function getMiddleValue(key, value, shouldCompact) {
      if (value > 0) {
        if (shouldCompact && value === 1) {
          return 'next';
        }

        return 'future.';
      }

      if (value < 0) {
        if (shouldCompact && value === -1) {
          return 'previous';
        }

        return 'past.';
      }

      return '';
    }
  }, {
    key: "format",
    value: function format(key, value) {
      var shouldCompact = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (value !== 0) {
        var postValue = this.getPostValue(key, value, shouldCompact);
        var middleValue = this.getMiddleValue(key, value, shouldCompact);
        var formatValue = value < 0 ? -value : value;

        var nextValue = _numeralUtils.NumeralUtils.format(formatValue, '');

        return this.t("long:".concat(key, ".").concat(middleValue).concat(postValue), {
          0: nextValue
        });
      }

      return this.t("long:".concat(key, ".current"));
    }
  }, {
    key: "year",
    value: function year(years) {
      return this.format('year', years, true);
    }
  }, {
    key: "month",
    value: function month(months) {
      return this.format('month', months, true);
    }
  }, {
    key: "day",
    value: function day(days) {
      return this.format('day', days, true);
    }
  }, {
    key: "hour",
    value: function hour(hours) {
      return this.format('hour', hours);
    }
  }, {
    key: "minute",
    value: function minute(minutes) {
      return this.format('minute', minutes);
    }
  }, {
    key: "second",
    value: function second(seconds) {
      return this.format('second', seconds);
    }
  }]);
  return GlobalizeFormatter;
}();

exports.GlobalizeFormatter = GlobalizeFormatter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGl2ZVRpbWUvZ2xvYmFsaXplRm9ybWF0dGVyLnRzIl0sIm5hbWVzIjpbIkdsb2JhbGl6ZUZvcm1hdHRlciIsInQiLCJrZXkiLCJ2YWx1ZSIsInNob3VsZENvbXBhY3QiLCJwb3N0VmFsdWUiLCJnZXRQb3N0VmFsdWUiLCJtaWRkbGVWYWx1ZSIsImdldE1pZGRsZVZhbHVlIiwiZm9ybWF0VmFsdWUiLCJuZXh0VmFsdWUiLCJOdW1lcmFsVXRpbHMiLCJmb3JtYXQiLCJ5ZWFycyIsIm1vbnRocyIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBSWFBLGtCO0FBRVgsOEJBQVlDLENBQVosRUFBb0M7QUFBQTtBQUFBLFNBRDVCQSxDQUM0QjtBQUNsQyxTQUFLQSxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7OztpQ0FDb0JDLEcsRUFBS0MsSyxFQUFPQyxhLEVBQWU7QUFDOUMsVUFBSUQsS0FBSyxLQUFLLENBQVYsSUFBZUEsS0FBSyxLQUFLLENBQUMsQ0FBOUIsRUFBaUM7QUFDL0IsWUFBSUMsYUFBSixFQUFtQjtBQUNqQixpQkFBTyxFQUFQO0FBQ0Q7O0FBQ0QsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxPQUFQO0FBQ0Q7OzttQ0FFc0JGLEcsRUFBS0MsSyxFQUFPQyxhLEVBQWU7QUFDaEQsVUFBSUQsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNiLFlBQUlDLGFBQWEsSUFBSUQsS0FBSyxLQUFLLENBQS9CLEVBQWtDO0FBQ2hDLGlCQUFPLE1BQVA7QUFDRDs7QUFDRCxlQUFPLFNBQVA7QUFDRDs7QUFFRCxVQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ2IsWUFBSUMsYUFBYSxJQUFJRCxLQUFLLEtBQUssQ0FBQyxDQUFoQyxFQUFtQztBQUNqQyxpQkFBTyxVQUFQO0FBQ0Q7O0FBQ0QsZUFBTyxPQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxFQUFQO0FBQ0Q7OzsyQkFFY0QsRyxFQUFLQyxLLEVBQThCO0FBQUEsVUFBdkJDLGFBQXVCLHVFQUFQLEtBQU87O0FBQ2hELFVBQUlELEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2YsWUFBTUUsU0FBUyxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JKLEdBQWxCLEVBQXVCQyxLQUF2QixFQUE4QkMsYUFBOUIsQ0FBbEI7QUFDQSxZQUFNRyxXQUFXLEdBQUcsS0FBS0MsY0FBTCxDQUFvQk4sR0FBcEIsRUFBeUJDLEtBQXpCLEVBQWdDQyxhQUFoQyxDQUFwQjtBQUNBLFlBQU1LLFdBQVcsR0FBR04sS0FBSyxHQUFHLENBQVIsR0FBWSxDQUFDQSxLQUFiLEdBQXFCQSxLQUF6Qzs7QUFDQSxZQUFNTyxTQUFTLEdBQUdDLDJCQUFhQyxNQUFiLENBQW9CSCxXQUFwQixFQUFpQyxFQUFqQyxDQUFsQjs7QUFDQSxlQUFPLEtBQUtSLENBQUwsZ0JBQWVDLEdBQWYsY0FBc0JLLFdBQXRCLFNBQW9DRixTQUFwQyxHQUFpRDtBQUN0RCxhQUFHSztBQURtRCxTQUFqRCxDQUFQO0FBR0Q7O0FBQ0QsYUFBTyxLQUFLVCxDQUFMLGdCQUFlQyxHQUFmLGNBQVA7QUFDRDs7O3lCQUNJVyxLLEVBQU87QUFDVixhQUFPLEtBQUtELE1BQUwsQ0FBWSxNQUFaLEVBQW9CQyxLQUFwQixFQUEyQixJQUEzQixDQUFQO0FBQ0Q7OzswQkFDS0MsTSxFQUFRO0FBQ1osYUFBTyxLQUFLRixNQUFMLENBQVksT0FBWixFQUFxQkUsTUFBckIsRUFBNkIsSUFBN0IsQ0FBUDtBQUNEOzs7d0JBQ0dDLEksRUFBTTtBQUNSLGFBQU8sS0FBS0gsTUFBTCxDQUFZLEtBQVosRUFBbUJHLElBQW5CLEVBQXlCLElBQXpCLENBQVA7QUFDRDs7O3lCQUNJQyxLLEVBQU87QUFDVixhQUFPLEtBQUtKLE1BQUwsQ0FBWSxNQUFaLEVBQW9CSSxLQUFwQixDQUFQO0FBQ0Q7OzsyQkFDTUMsTyxFQUFTO0FBQ2QsYUFBTyxLQUFLTCxNQUFMLENBQVksUUFBWixFQUFzQkssT0FBdEIsQ0FBUDtBQUNEOzs7MkJBQ01DLE8sRUFBUztBQUNkLGFBQU8sS0FBS04sTUFBTCxDQUFZLFFBQVosRUFBc0JNLE9BQXRCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElHbG9iYWxpemVGb3JtYXR0ZXIgfSBmcm9tICcuL2lSZWxhdGl2ZVRpbWUnXG5pbXBvcnQgeyBOdW1lcmFsVXRpbHMgfSBmcm9tICcuLi9iYXNpY1V0aWxzL251bWVyYWxVdGlscydcblxuaW1wb3J0IHsgVHJhbnNsYXRpb25GdW5jdGlvbiB9IGZyb20gJy4uL2kxOCdcblxuZXhwb3J0IGNsYXNzIEdsb2JhbGl6ZUZvcm1hdHRlciBpbXBsZW1lbnRzIElHbG9iYWxpemVGb3JtYXR0ZXIge1xuICBwcml2YXRlIHQ6IFRyYW5zbGF0aW9uRnVuY3Rpb25cbiAgY29uc3RydWN0b3IodDogVHJhbnNsYXRpb25GdW5jdGlvbikge1xuICAgIHRoaXMudCA9IHRcbiAgfVxuICBwcml2YXRlIGdldFBvc3RWYWx1ZShrZXksIHZhbHVlLCBzaG91bGRDb21wYWN0KSB7XG4gICAgaWYgKHZhbHVlID09PSAxIHx8IHZhbHVlID09PSAtMSkge1xuICAgICAgaWYgKHNob3VsZENvbXBhY3QpIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICByZXR1cm4gJ29uZSdcbiAgICB9XG4gICAgcmV0dXJuICdvdGhlcidcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWlkZGxlVmFsdWUoa2V5LCB2YWx1ZSwgc2hvdWxkQ29tcGFjdCkge1xuICAgIGlmICh2YWx1ZSA+IDApIHtcbiAgICAgIGlmIChzaG91bGRDb21wYWN0ICYmIHZhbHVlID09PSAxKSB7XG4gICAgICAgIHJldHVybiAnbmV4dCdcbiAgICAgIH1cbiAgICAgIHJldHVybiAnZnV0dXJlLidcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgICBpZiAoc2hvdWxkQ29tcGFjdCAmJiB2YWx1ZSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuICdwcmV2aW91cydcbiAgICAgIH1cbiAgICAgIHJldHVybiAncGFzdC4nXG4gICAgfVxuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXQoa2V5LCB2YWx1ZSwgc2hvdWxkQ29tcGFjdCA9IGZhbHNlKSB7XG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICBjb25zdCBwb3N0VmFsdWUgPSB0aGlzLmdldFBvc3RWYWx1ZShrZXksIHZhbHVlLCBzaG91bGRDb21wYWN0KVxuICAgICAgY29uc3QgbWlkZGxlVmFsdWUgPSB0aGlzLmdldE1pZGRsZVZhbHVlKGtleSwgdmFsdWUsIHNob3VsZENvbXBhY3QpXG4gICAgICBjb25zdCBmb3JtYXRWYWx1ZSA9IHZhbHVlIDwgMCA/IC12YWx1ZSA6IHZhbHVlXG4gICAgICBjb25zdCBuZXh0VmFsdWUgPSBOdW1lcmFsVXRpbHMuZm9ybWF0KGZvcm1hdFZhbHVlLCAnJylcbiAgICAgIHJldHVybiB0aGlzLnQoYGxvbmc6JHtrZXl9LiR7bWlkZGxlVmFsdWV9JHtwb3N0VmFsdWV9YCwge1xuICAgICAgICAwOiBuZXh0VmFsdWVcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnQoYGxvbmc6JHtrZXl9LmN1cnJlbnRgKVxuICB9XG4gIHllYXIoeWVhcnMpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXQoJ3llYXInLCB5ZWFycywgdHJ1ZSlcbiAgfVxuICBtb250aChtb250aHMpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXQoJ21vbnRoJywgbW9udGhzLCB0cnVlKVxuICB9XG4gIGRheShkYXlzKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0KCdkYXknLCBkYXlzLCB0cnVlKVxuICB9XG4gIGhvdXIoaG91cnMpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXQoJ2hvdXInLCBob3VycylcbiAgfVxuICBtaW51dGUobWludXRlcykge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdCgnbWludXRlJywgbWludXRlcylcbiAgfVxuICBzZWNvbmQoc2Vjb25kcykge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdCgnc2Vjb25kJywgc2Vjb25kcylcbiAgfVxufVxuIl19