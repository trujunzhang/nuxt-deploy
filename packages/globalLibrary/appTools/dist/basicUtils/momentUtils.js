"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MomentUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _moment = _interopRequireDefault(require("moment"));

/*
 * issue:  TypeError: moment_1.default is not a function
 *  http://paginaswebpublicidad.com/questions/55915/loi-khi-su-dung-momentjs-trong-thu-vien-angular-typescript
 */

/**
 *
 * Globally manage how to new a moment instance.
 *
 * default, Date is now.
 *
 * @param inp
 * @param format
 * @param strict
 */
function newMomentInstance(inp, format, strict) {
  return (0, _moment["default"])(inp || new Date(), format, strict);
}

var MomentUtils = /*#__PURE__*/function () {
  function MomentUtils() {
    (0, _classCallCheck2["default"])(this, MomentUtils);
  }

  (0, _createClass2["default"])(MomentUtils, null, [{
    key: "getDate",
    value: function getDate(inp) {
      return newMomentInstance(inp).toDate();
    }
  }, {
    key: "getValidTokenDate",
    value: function getValidTokenDate(dayNumber) {
      var validDate = newMomentInstance();
      validDate = validDate.add(dayNumber, 'day');
      return validDate.toDate();
    }
  }, {
    key: "convertToEventDate",
    value: function convertToEventDate(inp) {
      return newMomentInstance(inp).toDate();
    }
  }, {
    key: "toDateIOSString",
    value: function toDateIOSString(inp) {
      return newMomentInstance(inp).toISOString();
    }
    /**
     * Issue(22/01/2019)
     *   Deprecation warning: value provided is not in a recognized RFC2822 or ISO format
     * @param date
     * @param dateFormat
     */

  }, {
    key: "toDateString",
    value: function toDateString(inp, dateFormat) {
      return newMomentInstance(inp, dateFormat).format(dateFormat);
    }
  }, {
    key: "getThisYearString",
    value: function getThisYearString() {
      return newMomentInstance().format('YYYY');
    }
  }, {
    key: "getToday",
    value: function getToday() {
      return newMomentInstance().startOf('day');
    }
  }, {
    key: "createMomentInstance",
    value: function createMomentInstance(inp, format) {
      return newMomentInstance(inp, format);
    }
  }, {
    key: "createTodayMomentInstance",
    value: function createTodayMomentInstance() {
      return newMomentInstance(); // today
    }
  }, {
    key: "getYearDurationDate",
    value: function getYearDurationDate(year, month) {
      var startDate = (0, _moment["default"])([year, month]).startOf('month');
      var endDate = (0, _moment["default"])(startDate).endOf('month');
      return {
        startDate: startDate,
        endDate: endDate
      };
    }
  }, {
    key: "getEndOfDayDate",
    value: function getEndOfDayDate(before, dateFormat) {
      var mBefore = (0, _moment["default"])(before, dateFormat);
      var endOfDay = mBefore.endOf('day');
      return endOfDay.toDate();
    }
  }, {
    key: "getStartOfDayDate",
    value: function getStartOfDayDate(after, dateFormat) {
      var mAfter = (0, _moment["default"])(after, dateFormat);
      var startOfDay = mAfter.startOf('day');
      return startOfDay.toDate();
    }
  }, {
    key: "isSame",
    value: function isSame(first, second) {
      return newMomentInstance(first).isSame(newMomentInstance(second));
    }
  }, {
    key: "isBefore",
    value: function isBefore(first, second) {
      return newMomentInstance(first).isBefore(newMomentInstance(second));
    }
  }, {
    key: "isAfter",
    value: function isAfter(first, second) {
      return newMomentInstance(first).isAfter(newMomentInstance(second));
    }
  }, {
    key: "getSubtractDayFromNow",
    value: function getSubtractDayFromNow(amount) {
      return newMomentInstance().subtract(amount, 'days').toDate();
    }
  }, {
    key: "getBeforeOneDate",
    value: function getBeforeOneDate(amount) {
      return newMomentInstance().subtract(amount, 'days').startOf('day').toDate();
    }
  }, {
    key: "getDuringDateString",
    value: function getDuringDateString(beforeAmount, afterAmount, dateFormat) {
      var beforeDate = newMomentInstance() // today
      .subtract(beforeAmount, 'days').startOf('day').toDate();
      var afterDate = newMomentInstance() // before week
      .subtract(afterAmount, 'days').startOf('day').toDate();
      return {
        after: newMomentInstance(afterDate).format(dateFormat),
        before: newMomentInstance(beforeDate).format(dateFormat)
      };
    }
  }]);
  return MomentUtils;
}();

exports.MomentUtils = MomentUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpY1V0aWxzL21vbWVudFV0aWxzLnRzIl0sIm5hbWVzIjpbIm5ld01vbWVudEluc3RhbmNlIiwiaW5wIiwiZm9ybWF0Iiwic3RyaWN0IiwiRGF0ZSIsIk1vbWVudFV0aWxzIiwidG9EYXRlIiwiZGF5TnVtYmVyIiwidmFsaWREYXRlIiwiYWRkIiwidG9JU09TdHJpbmciLCJkYXRlRm9ybWF0Iiwic3RhcnRPZiIsInllYXIiLCJtb250aCIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJlbmRPZiIsImJlZm9yZSIsIm1CZWZvcmUiLCJlbmRPZkRheSIsImFmdGVyIiwibUFmdGVyIiwic3RhcnRPZkRheSIsImZpcnN0Iiwic2Vjb25kIiwiaXNTYW1lIiwiaXNCZWZvcmUiLCJpc0FmdGVyIiwiYW1vdW50Iiwic3VidHJhY3QiLCJiZWZvcmVBbW91bnQiLCJhZnRlckFtb3VudCIsImJlZm9yZURhdGUiLCJhZnRlckRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFKQTs7Ozs7QUFVQTs7Ozs7Ozs7OztBQVVBLFNBQVNBLGlCQUFULENBQ0VDLEdBREYsRUFFRUMsTUFGRixFQUdFQyxNQUhGLEVBSWtCO0FBQ2hCLFNBQU8sd0JBQU9GLEdBQUcsSUFBSSxJQUFJRyxJQUFKLEVBQWQsRUFBMEJGLE1BQTFCLEVBQWtDQyxNQUFsQyxDQUFQO0FBQ0Q7O0lBRVlFLFc7Ozs7Ozs7NEJBQ0lKLEcsRUFBeUI7QUFDdEMsYUFBT0QsaUJBQWlCLENBQUNDLEdBQUQsQ0FBakIsQ0FBdUJLLE1BQXZCLEVBQVA7QUFDRDs7O3NDQUV3QkMsUyxFQUF5QjtBQUNoRCxVQUFJQyxTQUF5QixHQUFHUixpQkFBaUIsRUFBakQ7QUFDQVEsTUFBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNDLEdBQVYsQ0FBY0YsU0FBZCxFQUF5QixLQUF6QixDQUFaO0FBQ0EsYUFBT0MsU0FBUyxDQUFDRixNQUFWLEVBQVA7QUFDRDs7O3VDQUV5QkwsRyxFQUF5QjtBQUNq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UixLQUZRLEVBR2hCTixNQUhnQixFQUFuQjtBQUtBLFVBQU00QixTQUFTLEdBQUdsQyxpQkFBaUIsR0FBRztBQUFILE9BQ2hDOEIsUUFEZSxDQUNORSxXQURNLEVBQ08sTUFEUCxFQUVmcEIsT0FGZSxDQUVQLEtBRk8sRUFHZk4sTUFIZSxFQUFsQjtBQUtBLGFBQU87QUFDTGUsUUFBQUEsS0FBSyxFQUFFckIsaUJBQWlCLENBQUNrQyxTQUFELENBQWpCLENBQTZCaEMsTUFBN0IsQ0FBb0NTLFVBQXBDLENBREY7QUFFTE8sUUFBQUEsTUFBTSxFQUFFbEIsaUJBQWlCLENBQUNpQyxVQUFELENBQWpCLENBQThCL0IsTUFBOUIsQ0FBcUNTLFVBQXJDO0FBRkgsT0FBUDtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIGlzc3VlOiAgVHlwZUVycm9yOiBtb21lbnRfMS5kZWZhdWx0IGlzIG5vdCBhIGZ1bmN0aW9uXG4gKiAgaHR0cDovL3BhZ2luYXN3ZWJwdWJsaWNpZGFkLmNvbS9xdWVzdGlvbnMvNTU5MTUvbG9pLWtoaS1zdS1kdW5nLW1vbWVudGpzLXRyb25nLXRodS12aWVuLWFuZ3VsYXItdHlwZXNjcmlwdFxuICovXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCcgLy8gTm8gcmVxdWlyZSAnKiBhcycuXG5cbmV4cG9ydCB0eXBlIE1vbWVudEluc3RhbmNlID0gbW9tZW50Lk1vbWVudFxuZXhwb3J0IHR5cGUgTW9tZW50SW5wdXQgPSBtb21lbnQuTW9tZW50SW5wdXRcbmV4cG9ydCB0eXBlIE1vbWVudEZvcm1hdCA9IG1vbWVudC5Nb21lbnRGb3JtYXRTcGVjaWZpY2F0aW9uXG5cbi8qKlxuICpcbiAqIEdsb2JhbGx5IG1hbmFnZSBob3cgdG8gbmV3IGEgbW9tZW50IGluc3RhbmNlLlxuICpcbiAqIGRlZmF1bHQsIERhdGUgaXMgbm93LlxuICpcbiAqIEBwYXJhbSBpbnBcbiAqIEBwYXJhbSBmb3JtYXRcbiAqIEBwYXJhbSBzdHJpY3RcbiAqL1xuZnVuY3Rpb24gbmV3TW9tZW50SW5zdGFuY2UoXG4gIGlucD86IE1vbWVudElucHV0LFxuICBmb3JtYXQ/OiBNb21lbnRGb3JtYXQsXG4gIHN0cmljdD86IGJvb2xlYW5cbik6IE1vbWVudEluc3RhbmNlIHtcbiAgcmV0dXJuIG1vbWVudChpbnAgfHwgbmV3IERhdGUoKSwgZm9ybWF0LCBzdHJpY3QpXG59XG5cbmV4cG9ydCBjbGFzcyBNb21lbnRVdGlscyB7XG4gIHN0YXRpYyBnZXREYXRlKGlucD86IE1vbWVudElucHV0KTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ld01vbWVudEluc3RhbmNlKGlucCkudG9EYXRlKClcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYWxpZFRva2VuRGF0ZShkYXlOdW1iZXI6IG51bWJlcik6IERhdGUge1xuICAgIGxldCB2YWxpZERhdGU6IE1vbWVudEluc3RhbmNlID0gbmV3TW9tZW50SW5zdGFuY2UoKVxuICAgIHZhbGlkRGF0ZSA9IHZhbGlkRGF0ZS5hZGQoZGF5TnVtYmVyLCAnZGF5JylcbiAgICByZXR1cm4gdmFsaWREYXRlLnRvRGF0ZSgpXG4gIH1cblxuICBzdGF0aWMgY29udmVydFRvRXZlbnREYXRlKGlucD86IE1vbWVudElucHV0KTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ld01vbWVudEluc3RhbmNlKGlucCkudG9EYXRlKClcbiAgfVxuXG4gIHN0YXRpYyB0b0RhdGVJT1NTdHJpbmcoaW5wPzogTW9tZW50SW5wdXQpIHtcbiAgICByZXR1cm4gbmV3TW9tZW50SW5zdGFuY2UoaW5wKS50b0lTT1N0cmluZygpXG4gIH1cblxuICAvKipcbiAgICogSXNzdWUoMjIvMDEvMjAxOSlcbiAgICogICBEZXByZWNhdGlvbiB3YXJuaW5nOiB2YWx1ZSBwcm92aWRlZCBpcyBub3QgaW4gYSByZWNvZ25pemVkIFJGQzI4MjIgb3IgSVNPIGZvcm1hdFxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcGFyYW0gZGF0ZUZvcm1hdFxuICAgKi9cbiAgc3RhdGljIHRvRGF0ZVN0cmluZyhpbnA6IE1vbWVudElucHV0LCBkYXRlRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXdNb21lbnRJbnN0YW5jZShpbnAsIGRhdGVGb3JtYXQpLmZvcm1hdChkYXRlRm9ybWF0KVxuICB9XG5cbiAgc3RhdGljIGdldFRoaXNZZWFyU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ld01vbWVudEluc3RhbmNlKCkuZm9ybWF0KCdZWVlZJylcbiAgfVxuXG4gIHN0YXRpYyBnZXRUb2RheSgpOiBNb21lbnRJbnN0YW5jZSB7XG4gICAgcmV0dXJuIG5ld01vbWVudEluc3RhbmNlKCkuc3RhcnRPZignZGF5JylcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVNb21lbnRJbnN0YW5jZShpbnA6IE1vbWVudElucHV0LCBmb3JtYXQ/OiBNb21lbnRGb3JtYXQpOiBNb21lbnRJbnN0YW5jZSB7XG4gICAgcmV0dXJuIG5ld01vbWVudEluc3RhbmNlKGlucCwgZm9ybWF0KVxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVRvZGF5TW9tZW50SW5zdGFuY2UoKTogTW9tZW50SW5zdGFuY2Uge1xuICAgIHJldHVybiBuZXdNb21lbnRJbnN0YW5jZSgpIC8vIHRvZGF5XG4gIH1cblxuICBzdGF0aWMgZ2V0WWVhckR1cmF0aW9uRGF0ZSh5ZWFyOiBhbnksIG1vbnRoOiBhbnkpIHtcbiAgICBjb25zdCBzdGFydERhdGUgPSBtb21lbnQoW3llYXIsIG1vbnRoXSkuc3RhcnRPZignbW9udGgnKVxuICAgIGNvbnN0IGVuZERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5lbmRPZignbW9udGgnKVxuICAgIHJldHVybiB7XG4gICAgICBzdGFydERhdGUsXG4gICAgICBlbmREYXRlXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldEVuZE9mRGF5RGF0ZShiZWZvcmU6IE1vbWVudElucHV0LCBkYXRlRm9ybWF0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBtQmVmb3JlID0gbW9tZW50KGJlZm9yZSwgZGF0ZUZvcm1hdClcbiAgICBjb25zdCBlbmRPZkRheSA9IG1CZWZvcmUuZW5kT2YoJ2RheScpXG4gICAgcmV0dXJuIGVuZE9mRGF5LnRvRGF0ZSgpXG4gIH1cblxuICBzdGF0aWMgZ2V0U3RhcnRPZkRheURhdGUoYWZ0ZXI6IE1vbWVudElucHV0LCBkYXRlRm9ybWF0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBtQWZ0ZXIgPSBtb21lbnQoYWZ0ZXIsIGRhdGVGb3JtYXQpXG4gICAgY29uc3Qgc3RhcnRPZkRheSA9IG1BZnRlci5zdGFydE9mKCdkYXknKVxuICAgIHJldHVybiBzdGFydE9mRGF5LnRvRGF0ZSgpXG4gIH1cblxuICBzdGF0aWMgaXNTYW1lKGZpcnN0OiBNb21lbnRJbnB1dCwgc2Vjb25kOiBNb21lbnRJbnB1dCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBuZXdNb21lbnRJbnN0YW5jZShmaXJzdCkuaXNTYW1lKG5ld01vbWVudEluc3RhbmNlKHNlY29uZCkpXG4gIH1cblxuICBzdGF0aWMgaXNCZWZvcmUoZmlyc3Q6IE1vbWVudElucHV0LCBzZWNvbmQ6IE1vbWVudElucHV0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG5ld01vbWVudEluc3RhbmNlKGZpcnN0KS5pc0JlZm9yZShuZXdNb21lbnRJbnN0YW5jZShzZWNvbmQpKVxuICB9XG5cbiAgc3RhdGljIGlzQWZ0ZXIoZmlyc3Q6IE1vbWVudElucHV0LCBzZWNvbmQ6IE1vbWVudElucHV0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG5ld01vbWVudEluc3RhbmNlKGZpcnN0KS5pc0FmdGVyKG5ld01vbWVudEluc3RhbmNlKHNlY29uZCkpXG4gIH1cblxuICBzdGF0aWMgZ2V0U3VidHJhY3REYXlGcm9tTm93KGFtb3VudDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ld01vbWVudEluc3RhbmNlKClcbiAgICAgIC5zdWJ0cmFjdChhbW91bnQsICdkYXlzJylcbiAgICAgIC50b0RhdGUoKVxuICB9XG5cbiAgc3RhdGljIGdldEJlZm9yZU9uZURhdGUoYW1vdW50OiBudW1iZXIpOiBEYXRlIHtcbiAgICByZXR1cm4gbmV3TW9tZW50SW5zdGFuY2UoKVxuICAgICAgLnN1YnRyYWN0KGFtb3VudCwgJ2RheXMnKVxuICAgICAgLnN0YXJ0T2YoJ2RheScpXG4gICAgICAudG9EYXRlKClcbiAgfVxuXG4gIHN0YXRpYyBnZXREdXJpbmdEYXRlU3RyaW5nKGJlZm9yZUFtb3VudDogbnVtYmVyLCBhZnRlckFtb3VudDogbnVtYmVyLCBkYXRlRm9ybWF0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBiZWZvcmVEYXRlID0gbmV3TW9tZW50SW5zdGFuY2UoKSAvLyB0b2RheVxuICAgICAgLnN1YnRyYWN0KGJlZm9yZUFtb3VudCwgJ2RheXMnKVxuICAgICAgLnN0YXJ0T2YoJ2RheScpXG4gICAgICAudG9EYXRlKClcblxuICAgIGNvbnN0IGFmdGVyRGF0ZSA9IG5ld01vbWVudEluc3RhbmNlKCkgLy8gYmVmb3JlIHdlZWtcbiAgICAgIC5zdWJ0cmFjdChhZnRlckFtb3VudCwgJ2RheXMnKVxuICAgICAgLnN0YXJ0T2YoJ2RheScpXG4gICAgICAudG9EYXRlKClcblxuICAgIHJldHVybiB7XG4gICAgICBhZnRlcjogbmV3TW9tZW50SW5zdGFuY2UoYWZ0ZXJEYXRlKS5mb3JtYXQoZGF0ZUZvcm1hdCksXG4gICAgICBiZWZvcmU6IG5ld01vbWVudEluc3RhbmNlKGJlZm9yZURhdGUpLmZvcm1hdChkYXRlRm9ybWF0KVxuICAgIH1cbiAgfVxufVxuIl19