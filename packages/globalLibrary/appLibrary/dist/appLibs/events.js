"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _tools = require("@app/tools");

var Events = /*#__PURE__*/function () {
  function Events() {
    (0, _classCallCheck2["default"])(this, Events);
  }

  (0, _createClass2["default"])(Events, null, [{
    key: "getDateInfo",

    /**
     * format is "Saturday, 1 Jul, 12:00 am – Monday, 31 Jul, 12:00 am"
     * @param item
     */
    value: function getDateInfo(item) {
      var start = item.start;
      var end = item.end; // for example: "Saturday, 1 Jul, 12:00 am"

      return {
        startFormat: _tools.MomentUtils.toDateString(start, Events.config.dateFormat),
        endFormat: _tools.MomentUtils.toDateString(end, Events.config.dateFormat)
      };
    }
  }, {
    key: "updateDate",
    value: function updateDate(oldValue, value, mode) {
      var mDate = _tools.MomentUtils.createMomentInstance(oldValue);

      if (mode === 'time') {
        mDate.hour(value.hour);
        mDate.minute(value.minute);
      } else {
        mDate.year(value.year);
        mDate.month(value.month);
        mDate.date(value.day);
      } // const x = mDate.toISOString()


      return mDate.toDate();
    }
  }, {
    key: "getWantBody",
    value: function getWantBody(event) {
      var html = event.want;

      if (html) {
        html = '<p>' + html.replace('\n' + '\n', '</p><p>') + '</p>';
      }

      var htmlBody = {
        __html: html
      };
      return htmlBody;
    }
  }, {
    key: "toEditDateTimeString",
    value: function toEditDateTimeString(date) {
      return _tools.MomentUtils.toDateString(date, Events.config.editDateTimeFormat);
    }
  }]);
  return Events;
}();

exports.Events = Events;
Events.config = {
  dateFormat: 'dddd, DD MMM, h:mm a',
  // datetime1: '2016-05-05 20:00'
  editDateTimeFormat: 'YYYY-MM-DD HH:mm'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHBMaWJzL2V2ZW50cy50cyJdLCJuYW1lcyI6WyJFdmVudHMiLCJpdGVtIiwic3RhcnQiLCJlbmQiLCJzdGFydEZvcm1hdCIsIk1vbWVudFV0aWxzIiwidG9EYXRlU3RyaW5nIiwiY29uZmlnIiwiZGF0ZUZvcm1hdCIsImVuZEZvcm1hdCIsIm9sZFZhbHVlIiwidmFsdWUiLCJtb2RlIiwibURhdGUiLCJjcmVhdGVNb21lbnRJbnN0YW5jZSIsImhvdXIiLCJtaW51dGUiLCJ5ZWFyIiwibW9udGgiLCJkYXRlIiwiZGF5IiwidG9EYXRlIiwiZXZlbnQiLCJodG1sIiwid2FudCIsInJlcGxhY2UiLCJodG1sQm9keSIsIl9faHRtbCIsImVkaXREYXRlVGltZUZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVhQSxNOzs7Ozs7OztBQU9YOzs7O2dDQUltQkMsSSxFQUFNO0FBQ3ZCLFVBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDQyxLQUFuQjtBQUNBLFVBQU1DLEdBQUcsR0FBR0YsSUFBSSxDQUFDRSxHQUFqQixDQUZ1QixDQUd2Qjs7QUFDQSxhQUFPO0FBQ0xDLFFBQUFBLFdBQVcsRUFBRUMsbUJBQVlDLFlBQVosQ0FBeUJKLEtBQXpCLEVBQWdDRixNQUFNLENBQUNPLE1BQVAsQ0FBY0MsVUFBOUMsQ0FEUjtBQUVMQyxRQUFBQSxTQUFTLEVBQUVKLG1CQUFZQyxZQUFaLENBQXlCSCxHQUF6QixFQUE4QkgsTUFBTSxDQUFDTyxNQUFQLENBQWNDLFVBQTVDO0FBRk4sT0FBUDtBQUlEOzs7K0JBRWlCRSxRLEVBQVVDLEssRUFBT0MsSSxFQUFNO0FBQ3ZDLFVBQU1DLEtBQUssR0FBR1IsbUJBQVlTLG9CQUFaLENBQWlDSixRQUFqQyxDQUFkOztBQUNBLFVBQUlFLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CQyxRQUFBQSxLQUFLLENBQUNFLElBQU4sQ0FBV0osS0FBSyxDQUFDSSxJQUFqQjtBQUNBRixRQUFBQSxLQUFLLENBQUNHLE1BQU4sQ0FBYUwsS0FBSyxDQUFDSyxNQUFuQjtBQUNELE9BSEQsTUFHTztBQUNMSCxRQUFBQSxLQUFLLENBQUNJLElBQU4sQ0FBV04sS0FBSyxDQUFDTSxJQUFqQjtBQUNBSixRQUFBQSxLQUFLLENBQUNLLEtBQU4sQ0FBWVAsS0FBSyxDQUFDTyxLQUFsQjtBQUNBTCxRQUFBQSxLQUFLLENBQUNNLElBQU4sQ0FBV1IsS0FBSyxDQUFDUyxHQUFqQjtBQUNELE9BVHNDLENBVXZDOzs7QUFDQSxhQUFPUCxLQUFLLENBQUNRLE1BQU4sRUFBUDtBQUNEOzs7Z0NBRWtCQyxLLEVBQU87QUFDeEIsVUFBSUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLElBQWpCOztBQUNBLFVBQUlELElBQUosRUFBVTtBQUNSQSxRQUFBQSxJQUFJLEdBQUcsUUFBUUEsSUFBSSxDQUFDRSxPQUFMLENBQWEsT0FBTyxJQUFwQixFQUEwQixTQUExQixDQUFSLEdBQStDLE1BQXREO0FBQ0Q7O0FBQ0QsVUFBTUMsUUFBUSxHQUFHO0FBQUVDLFFBQUFBLE1BQU0sRUFBRUo7QUFBVixPQUFqQjtBQUNBLGFBQU9HLFFBQVA7QUFDRDs7O3lDQUUyQlAsSSxFQUFjO0FBQ3hDLGFBQU9kLG1CQUFZQyxZQUFaLENBQXlCYSxJQUF6QixFQUErQm5CLE1BQU0sQ0FBQ08sTUFBUCxDQUFjcUIsa0JBQTdDLENBQVA7QUFDRDs7Ozs7O0FBOUNVNUIsTSxDQUNKTyxNLEdBQVM7QUFDZEMsRUFBQUEsVUFBVSxFQUFFLHNCQURFO0FBRWQ7QUFDQW9CLEVBQUFBLGtCQUFrQixFQUFFO0FBSE4sQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbWVudFV0aWxzIH0gZnJvbSAnQGFwcC90b29scydcblxuZXhwb3J0IGNsYXNzIEV2ZW50cyB7XG4gIHN0YXRpYyBjb25maWcgPSB7XG4gICAgZGF0ZUZvcm1hdDogJ2RkZGQsIEREIE1NTSwgaDptbSBhJyxcbiAgICAvLyBkYXRldGltZTE6ICcyMDE2LTA1LTA1IDIwOjAwJ1xuICAgIGVkaXREYXRlVGltZUZvcm1hdDogJ1lZWVktTU0tREQgSEg6bW0nXG4gIH1cblxuICAvKipcbiAgICogZm9ybWF0IGlzIFwiU2F0dXJkYXksIDEgSnVsLCAxMjowMCBhbSDigJMgTW9uZGF5LCAzMSBKdWwsIDEyOjAwIGFtXCJcbiAgICogQHBhcmFtIGl0ZW1cbiAgICovXG4gIHN0YXRpYyBnZXREYXRlSW5mbyhpdGVtKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBpdGVtLnN0YXJ0XG4gICAgY29uc3QgZW5kID0gaXRlbS5lbmRcbiAgICAvLyBmb3IgZXhhbXBsZTogXCJTYXR1cmRheSwgMSBKdWwsIDEyOjAwIGFtXCJcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnRGb3JtYXQ6IE1vbWVudFV0aWxzLnRvRGF0ZVN0cmluZyhzdGFydCwgRXZlbnRzLmNvbmZpZy5kYXRlRm9ybWF0KSxcbiAgICAgIGVuZEZvcm1hdDogTW9tZW50VXRpbHMudG9EYXRlU3RyaW5nKGVuZCwgRXZlbnRzLmNvbmZpZy5kYXRlRm9ybWF0KVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVEYXRlKG9sZFZhbHVlLCB2YWx1ZSwgbW9kZSkge1xuICAgIGNvbnN0IG1EYXRlID0gTW9tZW50VXRpbHMuY3JlYXRlTW9tZW50SW5zdGFuY2Uob2xkVmFsdWUpXG4gICAgaWYgKG1vZGUgPT09ICd0aW1lJykge1xuICAgICAgbURhdGUuaG91cih2YWx1ZS5ob3VyKVxuICAgICAgbURhdGUubWludXRlKHZhbHVlLm1pbnV0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgbURhdGUueWVhcih2YWx1ZS55ZWFyKVxuICAgICAgbURhdGUubW9udGgodmFsdWUubW9udGgpXG4gICAgICBtRGF0ZS5kYXRlKHZhbHVlLmRheSlcbiAgICB9XG4gICAgLy8gY29uc3QgeCA9IG1EYXRlLnRvSVNPU3RyaW5nKClcbiAgICByZXR1cm4gbURhdGUudG9EYXRlKClcbiAgfVxuXG4gIHN0YXRpYyBnZXRXYW50Qm9keShldmVudCkge1xuICAgIGxldCBodG1sID0gZXZlbnQud2FudFxuICAgIGlmIChodG1sKSB7XG4gICAgICBodG1sID0gJzxwPicgKyBodG1sLnJlcGxhY2UoJ1xcbicgKyAnXFxuJywgJzwvcD48cD4nKSArICc8L3A+J1xuICAgIH1cbiAgICBjb25zdCBodG1sQm9keSA9IHsgX19odG1sOiBodG1sIH1cbiAgICByZXR1cm4gaHRtbEJvZHlcbiAgfVxuXG4gIHN0YXRpYyB0b0VkaXREYXRlVGltZVN0cmluZyhkYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gTW9tZW50VXRpbHMudG9EYXRlU3RyaW5nKGRhdGUsIEV2ZW50cy5jb25maWcuZWRpdERhdGVUaW1lRm9ybWF0KSBhcyBzdHJpbmdcbiAgfVxufVxuIl19