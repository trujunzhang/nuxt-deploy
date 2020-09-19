"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlugifyUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _slugify = _interopRequireDefault(require("slugify"));

var SlugifyUtils = /*#__PURE__*/function () {
  function SlugifyUtils() {
    (0, _classCallCheck2["default"])(this, SlugifyUtils);
  }

  (0, _createClass2["default"])(SlugifyUtils, null, [{
    key: "toSlugifyString",
    value: function toSlugifyString(value) {
      // const s=  slugify(value, '_')
      var s = (0, _slugify["default"])(value, '_');
      return s;
    }
  }]);
  return SlugifyUtils;
}();

exports.SlugifyUtils = SlugifyUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9zbHVnaWZ5VXRpbHMudHMiXSwibmFtZXMiOlsiU2x1Z2lmeVV0aWxzIiwidmFsdWUiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRWFBLFk7Ozs7Ozs7b0NBQ1lDLEssRUFBZTtBQUNwQztBQUNBLFVBQU1DLENBQUMsR0FBRyx5QkFBUUQsS0FBUixFQUFlLEdBQWYsQ0FBVjtBQUNBLGFBQU9DLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzbHVnaWZ5IGZyb20gJ3NsdWdpZnknXG5cbmV4cG9ydCBjbGFzcyBTbHVnaWZ5VXRpbHMge1xuICBzdGF0aWMgdG9TbHVnaWZ5U3RyaW5nKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAvLyBjb25zdCBzPSAgc2x1Z2lmeSh2YWx1ZSwgJ18nKVxuICAgIGNvbnN0IHMgPSBzbHVnaWZ5KHZhbHVlLCAnXycpXG4gICAgcmV0dXJuIHNcbiAgfVxufVxuIl19