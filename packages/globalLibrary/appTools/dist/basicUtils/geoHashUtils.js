"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeoHashUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _GeoHash = require("../vendor/GeoHash");

var GeoHashUtils = /*#__PURE__*/function () {
  function GeoHashUtils() {
    (0, _classCallCheck2["default"])(this, GeoHashUtils);
  }

  (0, _createClass2["default"])(GeoHashUtils, null, [{
    key: "encode",
    value: function encode(latitude, longitude) {
      var hash = (0, _GeoHash.encodeGeoHash)(latitude, longitude);
      return hash;
    }
  }]);
  return GeoHashUtils;
}();

exports.GeoHashUtils = GeoHashUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpY1V0aWxzL2dlb0hhc2hVdGlscy50cyJdLCJuYW1lcyI6WyJHZW9IYXNoVXRpbHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImhhc2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFYUEsWTs7Ozs7OzsyQkFDR0MsUSxFQUFlQyxTLEVBQWdCO0FBQzNDLFVBQU1DLElBQUksR0FBRyw0QkFBY0YsUUFBZCxFQUF3QkMsU0FBeEIsQ0FBYjtBQUNBLGFBQU9DLElBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVuY29kZUdlb0hhc2ggfSBmcm9tICcuLi92ZW5kb3IvR2VvSGFzaCdcblxuZXhwb3J0IGNsYXNzIEdlb0hhc2hVdGlscyB7XG4gIHN0YXRpYyBlbmNvZGUobGF0aXR1ZGU6IGFueSwgbG9uZ2l0dWRlOiBhbnkpIHtcbiAgICBjb25zdCBoYXNoID0gZW5jb2RlR2VvSGFzaChsYXRpdHVkZSwgbG9uZ2l0dWRlKVxuICAgIHJldHVybiBoYXNoXG4gIH1cbn1cbiJdfQ==