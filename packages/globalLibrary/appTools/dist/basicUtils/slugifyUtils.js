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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpY1V0aWxzL3NsdWdpZnlVdGlscy50cyJdLCJuYW1lcyI6WyJTbHVnaWZ5VXRpbHMiLCJ2YWx1ZSIsInMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFYUEsWTs7Ozs7OztvQ0FDWUMsSyxFQUFlO0FBQ3BDO0FBQ0EsVUFBTUMsQ0FBQyxHQUFHLHlCQUFRRCxLQUFSLEVBQWUsR0FBZixDQUFWO0FBQ0EsYUFBT0MsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSdcblxuZXhwb3J0IGNsYXNzIFNsdWdpZnlVdGlscyB7XG4gIHN0YXRpYyB0b1NsdWdpZnlTdHJpbmcodmFsdWU6IHN0cmluZykge1xuICAgIC8vIGNvbnN0IHM9ICBzbHVnaWZ5KHZhbHVlLCAnXycpXG4gICAgY29uc3QgcyA9IHNsdWdpZnkodmFsdWUsICdfJylcbiAgICByZXR1cm4gc1xuICB9XG59XG4iXX0=