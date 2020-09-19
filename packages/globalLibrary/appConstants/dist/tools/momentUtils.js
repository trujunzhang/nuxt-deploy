"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MomentUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var moment = _interopRequireWildcard(require("moment"));

var _parse = require("../parse");

var MomentUtils = /*#__PURE__*/function () {
  function MomentUtils() {
    (0, _classCallCheck2["default"])(this, MomentUtils);
  }

  (0, _createClass2["default"])(MomentUtils, null, [{
    key: "getDate",
    value: function getDate(dateString) {
      return moment(dateString).toDate();
    }
  }, {
    key: "getValidTokenDate",
    value: function getValidTokenDate() {
      var dayNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      var validDate = moment(new Date());
      validDate = validDate.add(dayNumber, 'day');
      return validDate.toDate();
    }
  }, {
    key: "convertToEventDate",
    value: function convertToEventDate(value) {
      return moment(value).toDate();
    }
  }, {
    key: "toDateString",
    value: function toDateString(date, dateFormat) {
      return moment(date).format(dateFormat);
    }
  }, {
    key: "getThisYearString",
    value: function getThisYearString() {
      return moment(new Date()).format('YYYY');
    }
  }, {
    key: "createMomentInstance",
    value: function createMomentInstance(value) {
      return moment(value);
    }
  }, {
    key: "createTodayMomentInstance",
    value: function createTodayMomentInstance() {
      return moment(new Date()); // today
    }
  }, {
    key: "isSame",
    value: function isSame(first, second) {
      return moment(first).isSame(moment(second));
    }
  }, {
    key: "isBefore",
    value: function isBefore(params) {
      var lastRealmObject = params.lastRealmObject,
          recordedParseModel = params.recordedParseModel;
      var serverSyncPostedAt = recordedParseModel.syncPostedAt;
      var localSyncPostedAt = lastRealmObject.syncPostedAt;
      var result = moment(localSyncPostedAt).isBefore(serverSyncPostedAt);
      return result;
    }
  }, {
    key: "isAfter",
    value: function isAfter(params) {
      var localRealmModelObject = params.localRealmModelObject,
          onlineParseObject = params.onlineParseObject;

      var serverSyncPostedAt = _parse.ParseModelsHelper.getSyncPostedAt(onlineParseObject);

      var localSyncPostedAt = localRealmModelObject.syncPostedAt;
      var result = moment(localSyncPostedAt).isAfter(serverSyncPostedAt);
      return result;
    }
  }]);
  return MomentUtils;
}();

exports.MomentUtils = MomentUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9tb21lbnRVdGlscy50cyJdLCJuYW1lcyI6WyJNb21lbnRVdGlscyIsImRhdGVTdHJpbmciLCJtb21lbnQiLCJ0b0RhdGUiLCJkYXlOdW1iZXIiLCJ2YWxpZERhdGUiLCJEYXRlIiwiYWRkIiwidmFsdWUiLCJkYXRlIiwiZGF0ZUZvcm1hdCIsImZvcm1hdCIsImZpcnN0Iiwic2Vjb25kIiwiaXNTYW1lIiwicGFyYW1zIiwibGFzdFJlYWxtT2JqZWN0IiwicmVjb3JkZWRQYXJzZU1vZGVsIiwic2VydmVyU3luY1Bvc3RlZEF0Iiwic3luY1Bvc3RlZEF0IiwibG9jYWxTeW5jUG9zdGVkQXQiLCJyZXN1bHQiLCJpc0JlZm9yZSIsImxvY2FsUmVhbG1Nb2RlbE9iamVjdCIsIm9ubGluZVBhcnNlT2JqZWN0IiwiUGFyc2VNb2RlbHNIZWxwZXIiLCJnZXRTeW5jUG9zdGVkQXQiLCJpc0FmdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7SUFFYUEsVzs7Ozs7Ozs0QkFDSUMsVSxFQUEwQjtBQUN2QyxhQUFPQyxNQUFNLENBQUNELFVBQUQsQ0FBTixDQUFtQkUsTUFBbkIsRUFBUDtBQUNEOzs7d0NBRXFEO0FBQUEsVUFBN0JDLFNBQTZCLHVFQUFULENBQVM7QUFDcEQsVUFBSUMsU0FBUyxHQUFHSCxNQUFNLENBQUMsSUFBSUksSUFBSixFQUFELENBQXRCO0FBQ0FELE1BQUFBLFNBQVMsR0FBR0EsU0FBUyxDQUFDRSxHQUFWLENBQWNILFNBQWQsRUFBeUIsS0FBekIsQ0FBWjtBQUNBLGFBQU9DLFNBQVMsQ0FBQ0YsTUFBVixFQUFQO0FBQ0Q7Ozt1Q0FFeUJLLEssRUFBYTtBQUNyQyxhQUFPTixNQUFNLENBQUNNLEtBQUQsQ0FBTixDQUFjTCxNQUFkLEVBQVA7QUFDRDs7O2lDQUVtQk0sSSxFQUFZQyxVLEVBQTRCO0FBQzFELGFBQU9SLE1BQU0sQ0FBQ08sSUFBRCxDQUFOLENBQWFFLE1BQWIsQ0FBb0JELFVBQXBCLENBQVA7QUFDRDs7O3dDQUVrQztBQUNqQyxhQUFPUixNQUFNLENBQUMsSUFBSUksSUFBSixFQUFELENBQU4sQ0FBbUJLLE1BQW5CLENBQTBCLE1BQTFCLENBQVA7QUFDRDs7O3lDQUUyQkgsSyxFQUFzQjtBQUNoRCxhQUFPTixNQUFNLENBQUNNLEtBQUQsQ0FBYjtBQUNEOzs7Z0RBRWlEO0FBQ2hELGFBQU9OLE1BQU0sQ0FBQyxJQUFJSSxJQUFKLEVBQUQsQ0FBYixDQURnRCxDQUN0QjtBQUMzQjs7OzJCQUVhTSxLLEVBQU9DLE0sRUFBaUI7QUFDcEMsYUFBT1gsTUFBTSxDQUFDVSxLQUFELENBQU4sQ0FBY0UsTUFBZCxDQUFxQlosTUFBTSxDQUFDVyxNQUFELENBQTNCLENBQVA7QUFDRDs7OzZCQUVlRSxNLEVBQXNFO0FBQUEsVUFDNUVDLGVBRDRFLEdBQ3BDRCxNQURvQyxDQUM1RUMsZUFENEU7QUFBQSxVQUMzREMsa0JBRDJELEdBQ3BDRixNQURvQyxDQUMzREUsa0JBRDJEO0FBRXBGLFVBQU1DLGtCQUFrQixHQUFHRCxrQkFBa0IsQ0FBQ0UsWUFBOUM7QUFDQSxVQUFNQyxpQkFBaUIsR0FBR0osZUFBZSxDQUFDRyxZQUExQztBQUVBLFVBQU1FLE1BQU0sR0FBR25CLE1BQU0sQ0FBQ2tCLGlCQUFELENBQU4sQ0FBMEJFLFFBQTFCLENBQW1DSixrQkFBbkMsQ0FBZjtBQUNBLGFBQU9HLE1BQVA7QUFDRDs7OzRCQUVjTixNLEVBQXVFO0FBQUEsVUFDNUVRLHFCQUQ0RSxHQUMvQlIsTUFEK0IsQ0FDNUVRLHFCQUQ0RTtBQUFBLFVBQ3JEQyxpQkFEcUQsR0FDL0JULE1BRCtCLENBQ3JEUyxpQkFEcUQ7O0FBRXBGLFVBQU1OLGtCQUFrQixHQUFHTyx5QkFBa0JDLGVBQWxCLENBQWtDRixpQkFBbEMsQ0FBM0I7O0FBQ0EsVUFBTUosaUJBQWlCLEdBQUdHLHFCQUFxQixDQUFDSixZQUFoRDtBQUVBLFVBQU1FLE1BQU0sR0FBR25CLE1BQU0sQ0FBQ2tCLGlCQUFELENBQU4sQ0FBMEJPLE9BQTFCLENBQWtDVCxrQkFBbEMsQ0FBZjtBQUNBLGFBQU9HLE1BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmltcG9ydCB7IFBhcnNlTW9kZWxzSGVscGVyIH0gZnJvbSAnLi4vcGFyc2UnXG5cbmV4cG9ydCBjbGFzcyBNb21lbnRVdGlscyB7XG4gIHN0YXRpYyBnZXREYXRlKGRhdGVTdHJpbmc6IHN0cmluZyk6IERhdGUge1xuICAgIHJldHVybiBtb21lbnQoZGF0ZVN0cmluZykudG9EYXRlKClcbiAgfVxuXG4gIHN0YXRpYyBnZXRWYWxpZFRva2VuRGF0ZShkYXlOdW1iZXI6IG51bWJlciA9IDIpOiBEYXRlIHtcbiAgICBsZXQgdmFsaWREYXRlID0gbW9tZW50KG5ldyBEYXRlKCkpXG4gICAgdmFsaWREYXRlID0gdmFsaWREYXRlLmFkZChkYXlOdW1iZXIsICdkYXknKVxuICAgIHJldHVybiB2YWxpZERhdGUudG9EYXRlKClcbiAgfVxuXG4gIHN0YXRpYyBjb252ZXJ0VG9FdmVudERhdGUodmFsdWUpOiBEYXRlIHtcbiAgICByZXR1cm4gbW9tZW50KHZhbHVlKS50b0RhdGUoKVxuICB9XG5cbiAgc3RhdGljIHRvRGF0ZVN0cmluZyhkYXRlOiBEYXRlLCBkYXRlRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KGRhdGVGb3JtYXQpXG4gIH1cblxuICBzdGF0aWMgZ2V0VGhpc1llYXJTdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnWVlZWScpXG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTW9tZW50SW5zdGFuY2UodmFsdWUpOiBtb21lbnQuTW9tZW50IHtcbiAgICByZXR1cm4gbW9tZW50KHZhbHVlKVxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZVRvZGF5TW9tZW50SW5zdGFuY2UoKTogbW9tZW50Lk1vbWVudCB7XG4gICAgcmV0dXJuIG1vbWVudChuZXcgRGF0ZSgpKSAvLyB0b2RheVxuICB9XG5cbiAgc3RhdGljIGlzU2FtZShmaXJzdCwgc2Vjb25kKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1vbWVudChmaXJzdCkuaXNTYW1lKG1vbWVudChzZWNvbmQpKVxuICB9XG5cbiAgc3RhdGljIGlzQmVmb3JlKHBhcmFtczogSVN5bmNQb3N0ZWRBdEhlbHBlck5lZWRVcGRhdGVMb2NhbFJlYWxtT2JqZWN0UGFyYW1zKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBsYXN0UmVhbG1PYmplY3QsIHJlY29yZGVkUGFyc2VNb2RlbCB9ID0gcGFyYW1zXG4gICAgY29uc3Qgc2VydmVyU3luY1Bvc3RlZEF0ID0gcmVjb3JkZWRQYXJzZU1vZGVsLnN5bmNQb3N0ZWRBdFxuICAgIGNvbnN0IGxvY2FsU3luY1Bvc3RlZEF0ID0gbGFzdFJlYWxtT2JqZWN0LnN5bmNQb3N0ZWRBdFxuXG4gICAgY29uc3QgcmVzdWx0ID0gbW9tZW50KGxvY2FsU3luY1Bvc3RlZEF0KS5pc0JlZm9yZShzZXJ2ZXJTeW5jUG9zdGVkQXQpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgc3RhdGljIGlzQWZ0ZXIocGFyYW1zOiBJU3luY1Bvc3RlZEF0SGVscGVyTmVlZFVwZGF0ZU9ubGluZVBhcnNlT2JqZWN0UGFyYW1zKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBsb2NhbFJlYWxtTW9kZWxPYmplY3QsIG9ubGluZVBhcnNlT2JqZWN0IH0gPSBwYXJhbXNcbiAgICBjb25zdCBzZXJ2ZXJTeW5jUG9zdGVkQXQgPSBQYXJzZU1vZGVsc0hlbHBlci5nZXRTeW5jUG9zdGVkQXQob25saW5lUGFyc2VPYmplY3QpXG4gICAgY29uc3QgbG9jYWxTeW5jUG9zdGVkQXQgPSBsb2NhbFJlYWxtTW9kZWxPYmplY3Quc3luY1Bvc3RlZEF0XG5cbiAgICBjb25zdCByZXN1bHQgPSBtb21lbnQobG9jYWxTeW5jUG9zdGVkQXQpLmlzQWZ0ZXIoc2VydmVyU3luY1Bvc3RlZEF0KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuIl19