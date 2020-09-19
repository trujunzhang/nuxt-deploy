"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpperCaseStringUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _camelcase = _interopRequireDefault(require("camelcase"));

var UpperCaseStringUtils = /*#__PURE__*/function () {
  function UpperCaseStringUtils() {
    (0, _classCallCheck2["default"])(this, UpperCaseStringUtils);
  }

  (0, _createClass2["default"])(UpperCaseStringUtils, null, [{
    key: "toCamelClassName",
    value: function toCamelClassName(name) {
      return (0, _camelcase["default"])(name, {
        pascalCase: true
      });
    }
  }]);
  return UpperCaseStringUtils;
}();

exports.UpperCaseStringUtils = UpperCaseStringUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpY1V0aWxzL3VwcGVyQ2FzZVN0cmluZ1V0aWxzLnRzIl0sIm5hbWVzIjpbIlVwcGVyQ2FzZVN0cmluZ1V0aWxzIiwibmFtZSIsInBhc2NhbENhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFYUEsb0I7Ozs7Ozs7cUNBQ2FDLEksRUFBYztBQUNwQyxhQUFPLDJCQUFVQSxJQUFWLEVBQWdCO0FBQUVDLFFBQUFBLFVBQVUsRUFBRTtBQUFkLE9BQWhCLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYW1lbENhc2UgZnJvbSAnY2FtZWxjYXNlJ1xuXG5leHBvcnQgY2xhc3MgVXBwZXJDYXNlU3RyaW5nVXRpbHMge1xuICBzdGF0aWMgdG9DYW1lbENsYXNzTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gQ2FtZWxDYXNlKG5hbWUsIHsgcGFzY2FsQ2FzZTogdHJ1ZSB9KVxuICB9XG59XG4iXX0=