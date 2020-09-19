"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Md5Utils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var md5 = require('blueimp-md5'); // should use 'require'.


var Md5Utils = /*#__PURE__*/function () {
  function Md5Utils() {
    (0, _classCallCheck2["default"])(this, Md5Utils);
  }

  (0, _createClass2["default"])(Md5Utils, null, [{
    key: "getMd5String",
    value: function getMd5String(value) {
      var toLowerCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var nextString = toLowerCase ? value.toLowerCase() : value;
      return md5(nextString);
    }
  }]);
  return Md5Utils;
}();

exports.Md5Utils = Md5Utils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9tZDVVdGlscy50cyJdLCJuYW1lcyI6WyJtZDUiLCJyZXF1aXJlIiwiTWQ1VXRpbHMiLCJ2YWx1ZSIsInRvTG93ZXJDYXNlIiwibmV4dFN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEdBQUcsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBbkIsQyxDQUFtQzs7O0lBRXRCQyxROzs7Ozs7O2lDQUNTQyxLLEVBQTZDO0FBQUEsVUFBOUJDLFdBQThCLHVFQUFQLEtBQU87QUFDL0QsVUFBTUMsVUFBVSxHQUFHRCxXQUFXLEdBQUdELEtBQUssQ0FBQ0MsV0FBTixFQUFILEdBQXlCRCxLQUF2RDtBQUNBLGFBQU9ILEdBQUcsQ0FBQ0ssVUFBRCxDQUFWO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZDUgPSByZXF1aXJlKCdibHVlaW1wLW1kNScpIC8vIHNob3VsZCB1c2UgJ3JlcXVpcmUnLlxuXG5leHBvcnQgY2xhc3MgTWQ1VXRpbHMge1xuICBzdGF0aWMgZ2V0TWQ1U3RyaW5nKHZhbHVlOiBzdHJpbmcsIHRvTG93ZXJDYXNlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBjb25zdCBuZXh0U3RyaW5nID0gdG9Mb3dlckNhc2UgPyB2YWx1ZS50b0xvd2VyQ2FzZSgpIDogdmFsdWVcbiAgICByZXR1cm4gbWQ1KG5leHRTdHJpbmcpXG4gIH1cbn1cbiJdfQ==