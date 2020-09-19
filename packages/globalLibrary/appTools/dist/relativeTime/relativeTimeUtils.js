"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelativeTimeUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var RelativeTimeUtils = /*#__PURE__*/function () {
  function RelativeTimeUtils() {
    (0, _classCallCheck2["default"])(this, RelativeTimeUtils);
  }

  (0, _createClass2["default"])(RelativeTimeUtils, null, [{
    key: "defineCachedGetter",
    value: function defineCachedGetter(obj, prop, get) {
      // defineGetter(obj, prop, () => {
      //     if (!obj[prop]) {
      //         obj[prop] = get()
      //     }
      //     return obj[prop]
      // })
      Object.defineProperty(obj, prop, {
        get: get
      });
    }
  }, {
    key: "defineGetter",
    value: function defineGetter(obj, prop, get) {
      Object.defineProperty(obj, prop, {
        get: get
      });
    }
  }, {
    key: "startOf",
    value: function startOf(date, unit) {
      // date =
      //     date instanceof ZonedDateTime ? date.clone() : new Date(date.getTime())
      date = new Date(date.getTime());

      switch (unit) {
        case 'year':
          date.setMonth(0);
        // falls through

        case 'month':
          date.setDate(1);
        // falls through

        case 'day':
          date.setHours(0);
        // falls through

        case 'hour':
          date.setMinutes(0);
        // falls through

        case 'minute':
          date.setSeconds(0);
        // falls through

        case 'second':
          date.setMilliseconds(0);
      }

      return date;
    }
  }]);
  return RelativeTimeUtils;
}();

exports.RelativeTimeUtils = RelativeTimeUtils;
RelativeTimeUtils.second = 1e3;
RelativeTimeUtils.minute = 6e4;
RelativeTimeUtils.hour = 36e5;
RelativeTimeUtils.day = 864e5;
RelativeTimeUtils.week = 6048e5;
RelativeTimeUtils.month = 2592e6;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGl2ZVRpbWUvcmVsYXRpdmVUaW1lVXRpbHMudHMiXSwibmFtZXMiOlsiUmVsYXRpdmVUaW1lVXRpbHMiLCJvYmoiLCJwcm9wIiwiZ2V0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJkYXRlIiwidW5pdCIsIkRhdGUiLCJnZXRUaW1lIiwic2V0TW9udGgiLCJzZXREYXRlIiwic2V0SG91cnMiLCJzZXRNaW51dGVzIiwic2V0U2Vjb25kcyIsInNldE1pbGxpc2Vjb25kcyIsInNlY29uZCIsIm1pbnV0ZSIsImhvdXIiLCJkYXkiLCJ3ZWVrIiwibW9udGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBYUEsaUI7Ozs7Ozs7dUNBUWVDLEcsRUFBS0MsSSxFQUFNQyxHLEVBQUs7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLE1BQUFBLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkosR0FBdEIsRUFBMkJDLElBQTNCLEVBQWlDO0FBQUVDLFFBQUFBLEdBQUcsRUFBSEE7QUFBRixPQUFqQztBQUNEOzs7aUNBRW1CRixHLEVBQUtDLEksRUFBTUMsRyxFQUFLO0FBQ2xDQyxNQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JKLEdBQXRCLEVBQTJCQyxJQUEzQixFQUFpQztBQUFFQyxRQUFBQSxHQUFHLEVBQUhBO0FBQUYsT0FBakM7QUFDRDs7OzRCQUVjRyxJLEVBQU1DLEksRUFBTTtBQUN6QjtBQUNBO0FBQ0FELE1BQUFBLElBQUksR0FBRyxJQUFJRSxJQUFKLENBQVNGLElBQUksQ0FBQ0csT0FBTCxFQUFULENBQVA7O0FBQ0EsY0FBUUYsSUFBUjtBQUNFLGFBQUssTUFBTDtBQUNFRCxVQUFBQSxJQUFJLENBQUNJLFFBQUwsQ0FBYyxDQUFkO0FBQ0Y7O0FBQ0EsYUFBSyxPQUFMO0FBQ0VKLFVBQUFBLElBQUksQ0FBQ0ssT0FBTCxDQUFhLENBQWI7QUFDRjs7QUFDQSxhQUFLLEtBQUw7QUFDRUwsVUFBQUEsSUFBSSxDQUFDTSxRQUFMLENBQWMsQ0FBZDtBQUNGOztBQUNBLGFBQUssTUFBTDtBQUNFTixVQUFBQSxJQUFJLENBQUNPLFVBQUwsQ0FBZ0IsQ0FBaEI7QUFDRjs7QUFDQSxhQUFLLFFBQUw7QUFDRVAsVUFBQUEsSUFBSSxDQUFDUSxVQUFMLENBQWdCLENBQWhCO0FBQ0Y7O0FBQ0EsYUFBSyxRQUFMO0FBQ0VSLFVBQUFBLElBQUksQ0FBQ1MsZUFBTCxDQUFxQixDQUFyQjtBQWpCSjs7QUFtQkEsYUFBT1QsSUFBUDtBQUNEOzs7Ozs7QUE5Q1VOLGlCLENBQ0pnQixNLEdBQVMsRztBQURMaEIsaUIsQ0FFSmlCLE0sR0FBUyxHO0FBRkxqQixpQixDQUdKa0IsSSxHQUFPLEk7QUFISGxCLGlCLENBSUptQixHLEdBQU0sSztBQUpGbkIsaUIsQ0FLSm9CLEksR0FBTyxNO0FBTEhwQixpQixDQU1KcUIsSyxHQUFRLE0iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUmVsYXRpdmVUaW1lVXRpbHMge1xuICBzdGF0aWMgc2Vjb25kID0gMWUzXG4gIHN0YXRpYyBtaW51dGUgPSA2ZTRcbiAgc3RhdGljIGhvdXIgPSAzNmU1XG4gIHN0YXRpYyBkYXkgPSA4NjRlNVxuICBzdGF0aWMgd2VlayA9IDYwNDhlNVxuICBzdGF0aWMgbW9udGggPSAyNTkyZTZcblxuICBzdGF0aWMgZGVmaW5lQ2FjaGVkR2V0dGVyKG9iaiwgcHJvcCwgZ2V0KSB7XG4gICAgLy8gZGVmaW5lR2V0dGVyKG9iaiwgcHJvcCwgKCkgPT4ge1xuICAgIC8vICAgICBpZiAoIW9ialtwcm9wXSkge1xuICAgIC8vICAgICAgICAgb2JqW3Byb3BdID0gZ2V0KClcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gb2JqW3Byb3BdXG4gICAgLy8gfSlcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCB7IGdldCB9KVxuICB9XG5cbiAgc3RhdGljIGRlZmluZUdldHRlcihvYmosIHByb3AsIGdldCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHsgZ2V0IH0pXG4gIH1cblxuICBzdGF0aWMgc3RhcnRPZihkYXRlLCB1bml0KSB7XG4gICAgLy8gZGF0ZSA9XG4gICAgLy8gICAgIGRhdGUgaW5zdGFuY2VvZiBab25lZERhdGVUaW1lID8gZGF0ZS5jbG9uZSgpIDogbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKVxuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgIGRhdGUuc2V0TW9udGgoMClcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgZGF0ZS5zZXREYXRlKDEpXG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlICdkYXknOlxuICAgICAgICBkYXRlLnNldEhvdXJzKDApXG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgZGF0ZS5zZXRNaW51dGVzKDApXG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICBkYXRlLnNldFNlY29uZHMoMClcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgIGRhdGUuc2V0TWlsbGlzZWNvbmRzKDApXG4gICAgfVxuICAgIHJldHVybiBkYXRlXG4gIH1cbn1cbiJdfQ==