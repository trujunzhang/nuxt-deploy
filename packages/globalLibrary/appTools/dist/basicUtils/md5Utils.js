"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Md5Utils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _md = require("../vendor/md5");

// const md5 = require('blueimp-md5') // should use 'require'.
var Md5Utils = /*#__PURE__*/function () {
  function Md5Utils() {
    (0, _classCallCheck2["default"])(this, Md5Utils);
  }

  (0, _createClass2["default"])(Md5Utils, null, [{
    key: "getMd5String",
    value: function getMd5String(value) {
      var toLowerCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var nextString = toLowerCase ? value.toLowerCase() : value;
      return (0, _md.md5)(nextString);
    }
  }]);
  return Md5Utils;
}();

exports.Md5Utils = Md5Utils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpY1V0aWxzL21kNVV0aWxzLnRzIl0sIm5hbWVzIjpbIk1kNVV0aWxzIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsIm5leHRTdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFEQTtJQUdhQSxROzs7Ozs7O2lDQUNTQyxLLEVBQTZDO0FBQUEsVUFBOUJDLFdBQThCLHVFQUFQLEtBQU87QUFDL0QsVUFBTUMsVUFBVSxHQUFHRCxXQUFXLEdBQUdELEtBQUssQ0FBQ0MsV0FBTixFQUFILEdBQXlCRCxLQUF2RDtBQUNBLGFBQU8sYUFBSUUsVUFBSixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBtZDUgPSByZXF1aXJlKCdibHVlaW1wLW1kNScpIC8vIHNob3VsZCB1c2UgJ3JlcXVpcmUnLlxuaW1wb3J0IHsgbWQ1IH0gZnJvbSAnLi4vdmVuZG9yL21kNSdcblxuZXhwb3J0IGNsYXNzIE1kNVV0aWxzIHtcbiAgc3RhdGljIGdldE1kNVN0cmluZyh2YWx1ZTogc3RyaW5nLCB0b0xvd2VyQ2FzZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgY29uc3QgbmV4dFN0cmluZyA9IHRvTG93ZXJDYXNlID8gdmFsdWUudG9Mb3dlckNhc2UoKSA6IHZhbHVlXG4gICAgcmV0dXJuIG1kNShuZXh0U3RyaW5nKVxuICB9XG59XG4iXX0=