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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9nZW9IYXNoVXRpbHMudHMiXSwibmFtZXMiOlsiR2VvSGFzaFV0aWxzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJoYXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRWFBLFk7Ozs7Ozs7MkJBQ0dDLFEsRUFBZUMsUyxFQUFnQjtBQUMzQyxVQUFNQyxJQUFJLEdBQUcsNEJBQWNGLFFBQWQsRUFBd0JDLFNBQXhCLENBQWI7QUFDQSxhQUFPQyxJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbmNvZGVHZW9IYXNoIH0gZnJvbSAnLi4vdmVuZG9yL0dlb0hhc2gnXG5cbmV4cG9ydCBjbGFzcyBHZW9IYXNoVXRpbHMge1xuICBzdGF0aWMgZW5jb2RlKGxhdGl0dWRlOiBhbnksIGxvbmdpdHVkZTogYW55KSB7XG4gICAgY29uc3QgaGFzaCA9IGVuY29kZUdlb0hhc2gobGF0aXR1ZGUsIGxvbmdpdHVkZSlcbiAgICByZXR1cm4gaGFzaFxuICB9XG59XG4iXX0=