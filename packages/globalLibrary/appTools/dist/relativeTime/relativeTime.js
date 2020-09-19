"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelativeTime = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _globalizeFormatter = require("./globalizeFormatter");

var _relativeTimeUtils = require("./relativeTimeUtils");

var RelativeTime = /*#__PURE__*/function () {
  function RelativeTime(t) {
    (0, _classCallCheck2["default"])(this, RelativeTime);
    this.threshold = {
      month: 6,
      // at least 2 months before using year.
      // week: 4, // at least 4 weeks before using month.
      day: 6,
      // at least 6 days before using month.
      hour: 6,
      // at least 6 hours before using day.
      minute: 59,
      // at least 59 minutes before using hour.
      second: 59 // at least 59 seconds before using minute.

    };
    this.formatters = void 0;
    this.formatters = new _globalizeFormatter.GlobalizeFormatter(t);
  }

  (0, _createClass2["default"])(RelativeTime, [{
    key: "bestFit",
    value: function bestFit(absDiff) {
      var threshold = this.threshold;

      switch (true) {
        case absDiff.years > 0 && absDiff.months > threshold.month:
          return 'year';

        case absDiff.months > 0 && absDiff.days > threshold.day:
          return 'month';
        // case absDiff.months > 0 && absDiff.weeks > threshold.week: return "month";
        // case absDiff.weeks > 0 && absDiff.days > threshold.day: return "week";

        case absDiff.days > 0 && absDiff.hours > threshold.hour:
          return 'day';

        case absDiff.hours > 0 && absDiff.minutes > threshold.minute:
          return 'hour';

        case absDiff.minutes > 0 && absDiff.seconds > threshold.second:
          return 'minute';

        default:
          return 'second';
      }
    }
  }, {
    key: "format",
    value: function format(date) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$timeZoneData = _ref.timeZoneData,
          timeZoneData = _ref$timeZoneData === void 0 ? null : _ref$timeZoneData,
          _ref$unit = _ref.unit,
          unit = _ref$unit === void 0 ? 'best-fit' : _ref$unit;

      var formatters = this.formatters;
      var now = new Date();
      var diff = {
        _: {},
        ms: date.getTime() - now.getTime(),
        years: date.getFullYear() - now.getFullYear()
      };
      var round = Math[diff.ms > 0 ? 'floor' : 'ceil'];

      _relativeTimeUtils.RelativeTimeUtils.defineCachedGetter(diff, 'months', function () {
        return diff.years * 12 + date.getMonth() - now.getMonth();
      });

      _relativeTimeUtils.RelativeTimeUtils.defineCachedGetter(diff, 'days', function () {
        return round((_relativeTimeUtils.RelativeTimeUtils.startOf(date, 'day') - _relativeTimeUtils.RelativeTimeUtils.startOf(now, 'day')) / _relativeTimeUtils.RelativeTimeUtils.day);
      });

      _relativeTimeUtils.RelativeTimeUtils.defineCachedGetter(diff, 'hours', function () {
        return round((_relativeTimeUtils.RelativeTimeUtils.startOf(date, 'hour') - _relativeTimeUtils.RelativeTimeUtils.startOf(now, 'hour')) / _relativeTimeUtils.RelativeTimeUtils.hour);
      });

      _relativeTimeUtils.RelativeTimeUtils.defineCachedGetter(diff, 'minutes', function () {
        return round((_relativeTimeUtils.RelativeTimeUtils.startOf(date, 'minute') - _relativeTimeUtils.RelativeTimeUtils.startOf(now, 'minute')) / _relativeTimeUtils.RelativeTimeUtils.minute);
      });

      _relativeTimeUtils.RelativeTimeUtils.defineCachedGetter(diff, 'seconds', function () {
        return round((_relativeTimeUtils.RelativeTimeUtils.startOf(date, 'second') - _relativeTimeUtils.RelativeTimeUtils.startOf(now, 'second')) / _relativeTimeUtils.RelativeTimeUtils.second);
      });

      var absDiff = {
        _: {}
      };

      _relativeTimeUtils.RelativeTimeUtils.defineGetter(absDiff, 'years', function () {
        return Math.abs(diff.years);
      });

      _relativeTimeUtils.RelativeTimeUtils.defineGetter(absDiff, 'months', function () {
        return Math.abs(diff.months);
      });

      _relativeTimeUtils.RelativeTimeUtils.defineGetter(absDiff, 'days', function () {
        return Math.abs(diff.days);
      });

      _relativeTimeUtils.RelativeTimeUtils.defineGetter(absDiff, 'hours', function () {
        return Math.abs(diff.hours);
      });

      _relativeTimeUtils.RelativeTimeUtils.defineGetter(absDiff, 'minutes', function () {
        return Math.abs(diff.minutes);
      });

      _relativeTimeUtils.RelativeTimeUtils.defineGetter(absDiff, 'seconds', function () {
        return Math.abs(diff.seconds);
      });

      if (unit === 'best-fit') {
        unit = this.bestFit(absDiff);
      }

      switch (unit) {
        case 'year':
          return formatters.year(diff.years);

        case 'month':
          return formatters.month(diff.months);
        // case "week": return formatters.week(diff.weeks);

        case 'day':
          return formatters.day(diff.days);

        case 'hour':
          return formatters.hour(diff.hours);

        case 'minute':
          return formatters.minute(diff.minutes);

        default:
          return formatters.second(diff.seconds);
      }
    }
  }]);
  return RelativeTime;
}();

exports.RelativeTime = RelativeTime;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWxhdGl2ZVRpbWUvcmVsYXRpdmVUaW1lLnRzIl0sIm5hbWVzIjpbIlJlbGF0aXZlVGltZSIsInQiLCJ0aHJlc2hvbGQiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJzZWNvbmQiLCJmb3JtYXR0ZXJzIiwiR2xvYmFsaXplRm9ybWF0dGVyIiwiYWJzRGlmZiIsInllYXJzIiwibW9udGhzIiwiZGF5cyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJkYXRlIiwidGltZVpvbmVEYXRhIiwidW5pdCIsIm5vdyIsIkRhdGUiLCJkaWZmIiwiXyIsIm1zIiwiZ2V0VGltZSIsImdldEZ1bGxZZWFyIiwicm91bmQiLCJNYXRoIiwiUmVsYXRpdmVUaW1lVXRpbHMiLCJkZWZpbmVDYWNoZWRHZXR0ZXIiLCJnZXRNb250aCIsInN0YXJ0T2YiLCJkZWZpbmVHZXR0ZXIiLCJhYnMiLCJiZXN0Rml0IiwieWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztJQU1hQSxZO0FBV1gsd0JBQVlDLENBQVosRUFBb0M7QUFBQTtBQUFBLFNBVjVCQyxTQVU0QixHQVZoQjtBQUNsQkMsTUFBQUEsS0FBSyxFQUFFLENBRFc7QUFDUjtBQUNWO0FBQ0FDLE1BQUFBLEdBQUcsRUFBRSxDQUhhO0FBR1Y7QUFDUkMsTUFBQUEsSUFBSSxFQUFFLENBSlk7QUFJVDtBQUNUQyxNQUFBQSxNQUFNLEVBQUUsRUFMVTtBQUtOO0FBQ1pDLE1BQUFBLE1BQU0sRUFBRSxFQU5VLENBTVA7O0FBTk8sS0FVZ0I7QUFBQSxTQUQ1QkMsVUFDNEI7QUFDbEMsU0FBS0EsVUFBTCxHQUFrQixJQUFJQyxzQ0FBSixDQUF1QlIsQ0FBdkIsQ0FBbEI7QUFDRDs7Ozs0QkFFZVMsTyxFQUFTO0FBQ3ZCLFVBQU1SLFNBQVMsR0FBRyxLQUFLQSxTQUF2Qjs7QUFDQSxjQUFRLElBQVI7QUFDRSxhQUFLUSxPQUFPLENBQUNDLEtBQVIsR0FBZ0IsQ0FBaEIsSUFB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a0JJLFlBQWxCLENBQStCdkIsT0FBL0IsRUFBd0MsU0FBeEMsRUFBbUQsWUFBTTtBQUN2RCxlQUFPa0IsSUFBSSxDQUFDTSxHQUFMLENBQVNaLElBQUksQ0FBQ04sT0FBZCxDQUFQO0FBQ0QsT0FGRDs7QUFJQSxVQUFJRyxJQUFJLEtBQUssVUFBYixFQUF5QjtBQUN2QkEsUUFBQUEsSUFBSSxHQUFHLEtBQUtnQixPQUFMLENBQWF6QixPQUFiLENBQVA7QUFDRDs7QUFFRCxjQUFRUyxJQUFSO0FBQ0UsYUFBSyxNQUFMO0FBQ0UsaUJBQU9YLFVBQVUsQ0FBQzRCLElBQVgsQ0FBZ0JkLElBQUksQ0FBQ1gsS0FBckIsQ0FBUDs7QUFDRixhQUFLLE9BQUw7QUFDRSxpQkFBT0gsVUFBVSxDQUFDTCxLQUFYLENBQWlCbUIsSUFBSSxDQUFDVixNQUF0QixDQUFQO0FBQ0Y7O0FBQ0EsYUFBSyxLQUFMO0FBQ0UsaUJBQU9KLFVBQVUsQ0FBQ0osR0FBWCxDQUFla0IsSUFBSSxDQUFDVCxJQUFwQixDQUFQOztBQUNGLGFBQUssTUFBTDtBQUNFLGlCQUFPTCxVQUFVLENBQUNILElBQVgsQ0FBZ0JpQixJQUFJLENBQUNSLEtBQXJCLENBQVA7O0FBQ0YsYUFBSyxRQUFMO0FBQ0UsaUJBQU9OLFVBQVUsQ0FBQ0YsTUFBWCxDQUFrQmdCLElBQUksQ0FBQ1AsT0FBdkIsQ0FBUDs7QUFDRjtBQUNFLGlCQUFPUCxVQUFVLENBQUNELE1BQVgsQ0FBa0JlLElBQUksQ0FBQ04sT0FBdkIsQ0FBUDtBQWJKO0FBZUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxpemVGb3JtYXR0ZXIgfSBmcm9tICcuL2dsb2JhbGl6ZUZvcm1hdHRlcidcbmltcG9ydCB7IFJlbGF0aXZlVGltZVV0aWxzIH0gZnJvbSAnLi9yZWxhdGl2ZVRpbWVVdGlscydcblxuaW1wb3J0IHsgSUdsb2JhbGl6ZUZvcm1hdHRlciB9IGZyb20gJy4vaVJlbGF0aXZlVGltZSdcblxuaW1wb3J0IHsgVHJhbnNsYXRpb25GdW5jdGlvbiB9IGZyb20gJy4uL2kxOCdcblxuZXhwb3J0IGNsYXNzIFJlbGF0aXZlVGltZSB7XG4gIHByaXZhdGUgdGhyZXNob2xkID0ge1xuICAgIG1vbnRoOiA2LCAvLyBhdCBsZWFzdCAyIG1vbnRocyBiZWZvcmUgdXNpbmcgeWVhci5cbiAgICAvLyB3ZWVrOiA0LCAvLyBhdCBsZWFzdCA0IHdlZWtzIGJlZm9yZSB1c2luZyBtb250aC5cbiAgICBkYXk6IDYsIC8vIGF0IGxlYXN0IDYgZGF5cyBiZWZvcmUgdXNpbmcgbW9udGguXG4gICAgaG91cjogNiwgLy8gYXQgbGVhc3QgNiBob3VycyBiZWZvcmUgdXNpbmcgZGF5LlxuICAgIG1pbnV0ZTogNTksIC8vIGF0IGxlYXN0IDU5IG1pbnV0ZXMgYmVmb3JlIHVzaW5nIGhvdXIuXG4gICAgc2Vjb25kOiA1OSAvLyBhdCBsZWFzdCA1OSBzZWNvbmRzIGJlZm9yZSB1c2luZyBtaW51dGUuXG4gIH1cblxuICBwcml2YXRlIGZvcm1hdHRlcnM6IElHbG9iYWxpemVGb3JtYXR0ZXJcbiAgY29uc3RydWN0b3IodDogVHJhbnNsYXRpb25GdW5jdGlvbikge1xuICAgIHRoaXMuZm9ybWF0dGVycyA9IG5ldyBHbG9iYWxpemVGb3JtYXR0ZXIodClcbiAgfVxuXG4gIHByaXZhdGUgYmVzdEZpdChhYnNEaWZmKSB7XG4gICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy50aHJlc2hvbGRcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgYWJzRGlmZi55ZWFycyA+IDAgJiYgYWJzRGlmZi5tb250aHMgPiB0aHJlc2hvbGQubW9udGg6XG4gICAgICAgIHJldHVybiAneWVhcidcbiAgICAgIGNhc2UgYWJzRGlmZi5tb250aHMgPiAwICYmIGFic0RpZmYuZGF5cyA+IHRocmVzaG9sZC5kYXk6XG4gICAgICAgIHJldHVybiAnbW9udGgnXG4gICAgICAvLyBjYXNlIGFic0RpZmYubW9udGhzID4gMCAmJiBhYnNEaWZmLndlZWtzID4gdGhyZXNob2xkLndlZWs6IHJldHVybiBcIm1vbnRoXCI7XG4gICAgICAvLyBjYXNlIGFic0RpZmYud2Vla3MgPiAwICYmIGFic0RpZmYuZGF5cyA+IHRocmVzaG9sZC5kYXk6IHJldHVybiBcIndlZWtcIjtcbiAgICAgIGNhc2UgYWJzRGlmZi5kYXlzID4gMCAmJiBhYnNEaWZmLmhvdXJzID4gdGhyZXNob2xkLmhvdXI6XG4gICAgICAgIHJldHVybiAnZGF5J1xuICAgICAgY2FzZSBhYnNEaWZmLmhvdXJzID4gMCAmJiBhYnNEaWZmLm1pbnV0ZXMgPiB0aHJlc2hvbGQubWludXRlOlxuICAgICAgICByZXR1cm4gJ2hvdXInXG4gICAgICBjYXNlIGFic0RpZmYubWludXRlcyA+IDAgJiYgYWJzRGlmZi5zZWNvbmRzID4gdGhyZXNob2xkLnNlY29uZDpcbiAgICAgICAgcmV0dXJuICdtaW51dGUnXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ3NlY29uZCdcbiAgICB9XG4gIH1cblxuICBmb3JtYXQoZGF0ZSwgeyB0aW1lWm9uZURhdGEgPSBudWxsLCB1bml0ID0gJ2Jlc3QtZml0JyB9ID0ge30pIHtcbiAgICBjb25zdCBmb3JtYXR0ZXJzOiBJR2xvYmFsaXplRm9ybWF0dGVyID0gdGhpcy5mb3JtYXR0ZXJzXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxuXG4gICAgY29uc3QgZGlmZjogYW55ID0ge1xuICAgICAgXzoge30sXG4gICAgICBtczogZGF0ZS5nZXRUaW1lKCkgLSBub3cuZ2V0VGltZSgpLFxuICAgICAgeWVhcnM6IGRhdGUuZ2V0RnVsbFllYXIoKSAtIG5vdy5nZXRGdWxsWWVhcigpXG4gICAgfVxuICAgIGNvbnN0IHJvdW5kID0gTWF0aFtkaWZmLm1zID4gMCA/ICdmbG9vcicgOiAnY2VpbCddXG5cbiAgICBSZWxhdGl2ZVRpbWVVdGlscy5kZWZpbmVDYWNoZWRHZXR0ZXIoZGlmZiwgJ21vbnRocycsICgpID0+IHtcbiAgICAgIHJldHVybiBkaWZmLnllYXJzICogMTIgKyBkYXRlLmdldE1vbnRoKCkgLSBub3cuZ2V0TW9udGgoKVxuICAgIH0pXG4gICAgUmVsYXRpdmVUaW1lVXRpbHMuZGVmaW5lQ2FjaGVkR2V0dGVyKGRpZmYsICdkYXlzJywgKCkgPT4ge1xuICAgICAgcmV0dXJuIHJvdW5kKFxuICAgICAgICAoUmVsYXRpdmVUaW1lVXRpbHMuc3RhcnRPZihkYXRlLCAnZGF5JykgLSBSZWxhdGl2ZVRpbWVVdGlscy5zdGFydE9mKG5vdywgJ2RheScpKSAvXG4gICAgICAgICAgUmVsYXRpdmVUaW1lVXRpbHMuZGF5XG4gICAgICApXG4gICAgfSlcbiAgICBSZWxhdGl2ZVRpbWVVdGlscy5kZWZpbmVDYWNoZWRHZXR0ZXIoZGlmZiwgJ2hvdXJzJywgKCkgPT4ge1xuICAgICAgcmV0dXJuIHJvdW5kKFxuICAgICAgICAoUmVsYXRpdmVUaW1lVXRpbHMuc3RhcnRPZihkYXRlLCAnaG91cicpIC0gUmVsYXRpdmVUaW1lVXRpbHMuc3RhcnRPZihub3csICdob3VyJykpIC9cbiAgICAgICAgICBSZWxhdGl2ZVRpbWVVdGlscy5ob3VyXG4gICAgICApXG4gICAgfSlcbiAgICBSZWxhdGl2ZVRpbWVVdGlscy5kZWZpbmVDYWNoZWRHZXR0ZXIoZGlmZiwgJ21pbnV0ZXMnLCAoKSA9PiB7XG4gICAgICByZXR1cm4gcm91bmQoXG4gICAgICAgIChSZWxhdGl2ZVRpbWVVdGlscy5zdGFydE9mKGRhdGUsICdtaW51dGUnKSAtIFJlbGF0aXZlVGltZVV0aWxzLnN0YXJ0T2Yobm93LCAnbWludXRlJykpIC9cbiAgICAgICAgICBSZWxhdGl2ZVRpbWVVdGlscy5taW51dGVcbiAgICAgIClcbiAgICB9KVxuICAgIFJlbGF0aXZlVGltZVV0aWxzLmRlZmluZUNhY2hlZEdldHRlcihkaWZmLCAnc2Vjb25kcycsICgpID0+IHtcbiAgICAgIHJldHVybiByb3VuZChcbiAgICAgICAgKFJlbGF0aXZlVGltZVV0aWxzLnN0YXJ0T2YoZGF0ZSwgJ3NlY29uZCcpIC0gUmVsYXRpdmVUaW1lVXRpbHMuc3RhcnRPZihub3csICdzZWNvbmQnKSkgL1xuICAgICAgICAgIFJlbGF0aXZlVGltZVV0aWxzLnNlY29uZFxuICAgICAgKVxuICAgIH0pXG5cbiAgICBjb25zdCBhYnNEaWZmID0ge1xuICAgICAgXzoge31cbiAgICB9XG5cbiAgICBSZWxhdGl2ZVRpbWVVdGlscy5kZWZpbmVHZXR0ZXIoYWJzRGlmZiwgJ3llYXJzJywgKCkgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKGRpZmYueWVhcnMpXG4gICAgfSlcbiAgICBSZWxhdGl2ZVRpbWVVdGlscy5kZWZpbmVHZXR0ZXIoYWJzRGlmZiwgJ21vbnRocycsICgpID0+IHtcbiAgICAgIHJldHVybiBNYXRoLmFicyhkaWZmLm1vbnRocylcbiAgICB9KVxuICAgIFJlbGF0aXZlVGltZVV0aWxzLmRlZmluZUdldHRlcihhYnNEaWZmLCAnZGF5cycsICgpID0+IHtcbiAgICAgIHJldHVybiBNYXRoLmFicyhkaWZmLmRheXMpXG4gICAgfSlcbiAgICBSZWxhdGl2ZVRpbWVVdGlscy5kZWZpbmVHZXR0ZXIoYWJzRGlmZiwgJ2hvdXJzJywgKCkgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKGRpZmYuaG91cnMpXG4gICAgfSlcbiAgICBSZWxhdGl2ZVRpbWVVdGlscy5kZWZpbmVHZXR0ZXIoYWJzRGlmZiwgJ21pbnV0ZXMnLCAoKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5hYnMoZGlmZi5taW51dGVzKVxuICAgIH0pXG4gICAgUmVsYXRpdmVUaW1lVXRpbHMuZGVmaW5lR2V0dGVyKGFic0RpZmYsICdzZWNvbmRzJywgKCkgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKGRpZmYuc2Vjb25kcylcbiAgICB9KVxuXG4gICAgaWYgKHVuaXQgPT09ICdiZXN0LWZpdCcpIHtcbiAgICAgIHVuaXQgPSB0aGlzLmJlc3RGaXQoYWJzRGlmZilcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICByZXR1cm4gZm9ybWF0dGVycy55ZWFyKGRpZmYueWVhcnMpXG4gICAgICBjYXNlICdtb250aCc6XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZXJzLm1vbnRoKGRpZmYubW9udGhzKVxuICAgICAgLy8gY2FzZSBcIndlZWtcIjogcmV0dXJuIGZvcm1hdHRlcnMud2VlayhkaWZmLndlZWtzKTtcbiAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZXJzLmRheShkaWZmLmRheXMpXG4gICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlcnMuaG91cihkaWZmLmhvdXJzKVxuICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlcnMubWludXRlKGRpZmYubWludXRlcylcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZXJzLnNlY29uZChkaWZmLnNlY29uZHMpXG4gICAgfVxuICB9XG59XG4iXX0=