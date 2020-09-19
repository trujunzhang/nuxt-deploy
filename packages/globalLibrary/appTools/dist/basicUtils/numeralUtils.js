"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumeralUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _numeral = _interopRequireDefault(require("numeral"));

var NumeralUtils = /*#__PURE__*/function () {
  function NumeralUtils() {
    (0, _classCallCheck2["default"])(this, NumeralUtils);
  }

  (0, _createClass2["default"])(NumeralUtils, null, [{
    key: "newInstance",
    value: function newInstance(value) {
      return (0, _numeral["default"])(value);
    }
    /**
     * Format a number by format.
     * @example
     * Giving format:
     *    var value = NumeralUtils.format('12345','0,0'); // => '12,2345'
     * @example
     * Using default format:
     *    var value = NumeralUtils.format('123',''); // => '123'
     */

  }, {
    key: "format",
    value: function format(value, inputString) {
      return (0, _numeral["default"])(value).format(inputString);
    }
  }, {
    key: "reset",
    value: function reset() {
      _numeral["default"].reset();
    }
  }]);
  return NumeralUtils;
}();

exports.NumeralUtils = NumeralUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpY1V0aWxzL251bWVyYWxVdGlscy50cyJdLCJuYW1lcyI6WyJOdW1lcmFsVXRpbHMiLCJ2YWx1ZSIsImlucHV0U3RyaW5nIiwiZm9ybWF0IiwibnVtZXJhbCIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRWFBLFk7Ozs7Ozs7Z0NBQ1FDLEssRUFBYTtBQUM5QixhQUFPLHlCQUFRQSxLQUFSLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7MkJBU2NBLEssRUFBWUMsVyxFQUFrQjtBQUMxQyxhQUFPLHlCQUFRRCxLQUFSLEVBQWVFLE1BQWYsQ0FBc0JELFdBQXRCLENBQVA7QUFDRDs7OzRCQUVjO0FBQ2JFLDBCQUFRQyxLQUFSO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbnVtZXJhbCBmcm9tICdudW1lcmFsJ1xuXG5leHBvcnQgY2xhc3MgTnVtZXJhbFV0aWxzIHtcbiAgc3RhdGljIG5ld0luc3RhbmNlKHZhbHVlPzogYW55KSB7XG4gICAgcmV0dXJuIG51bWVyYWwodmFsdWUpXG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGEgbnVtYmVyIGJ5IGZvcm1hdC5cbiAgICogQGV4YW1wbGVcbiAgICogR2l2aW5nIGZvcm1hdDpcbiAgICogICAgdmFyIHZhbHVlID0gTnVtZXJhbFV0aWxzLmZvcm1hdCgnMTIzNDUnLCcwLDAnKTsgLy8gPT4gJzEyLDIzNDUnXG4gICAqIEBleGFtcGxlXG4gICAqIFVzaW5nIGRlZmF1bHQgZm9ybWF0OlxuICAgKiAgICB2YXIgdmFsdWUgPSBOdW1lcmFsVXRpbHMuZm9ybWF0KCcxMjMnLCcnKTsgLy8gPT4gJzEyMydcbiAgICovXG4gIHN0YXRpYyBmb3JtYXQodmFsdWU6IGFueSwgaW5wdXRTdHJpbmc6IGFueSkge1xuICAgIHJldHVybiBudW1lcmFsKHZhbHVlKS5mb3JtYXQoaW5wdXRTdHJpbmcpXG4gIH1cblxuICBzdGF0aWMgcmVzZXQoKSB7XG4gICAgbnVtZXJhbC5yZXNldCgpXG4gIH1cbn1cbiJdfQ==