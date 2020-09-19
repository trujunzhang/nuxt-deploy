"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeRandTokenUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

// const randtoken = require('rand-token')

/**
 * Package: node-rand-token: 
 *   https://github.com/sehrope/node-rand-token
 * 
 * Usage: 
 * // Create a token generator with the default settings:
 *  var randtoken = require('rand-token');

 *  // Generate a 16 character alpha-numeric token:
 *  var token = randtoken.generate(16);

 *  // Use it as a replacement for uid:
 *  var uid = require('rand-token').uid;
 *  var token = uid(16);

 *  // Generate mostly sequential tokens:
 *  var suid = require('rand-token').suid;
 *  var token = suid(16);
 */
var NodeRandTokenUtils = /*#__PURE__*/function () {
  function NodeRandTokenUtils() {
    (0, _classCallCheck2["default"])(this, NodeRandTokenUtils);
  }

  (0, _createClass2["default"])(NodeRandTokenUtils, null, [{
    key: "generate",
    value: function generate(number) {
      // const token = randtoken.generate(number)
      var token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      return token;
    }
  }]);
  return NodeRandTokenUtils;
}();

exports.NodeRandTokenUtils = NodeRandTokenUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpY1V0aWxzL25vZGVSYW5kVG9rZW5VdGlscy50cyJdLCJuYW1lcyI6WyJOb2RlUmFuZFRva2VuVXRpbHMiLCJudW1iZXIiLCJ0b2tlbiIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbUJhQSxrQjs7Ozs7Ozs2QkFDS0MsTSxFQUFnQjtBQUM5QjtBQUNBLFVBQU1DLEtBQUssR0FDVEMsSUFBSSxDQUFDQyxNQUFMLEdBQ0dDLFFBREgsQ0FDWSxFQURaLEVBRUdDLFNBRkgsQ0FFYSxDQUZiLEVBRWdCLEVBRmhCLElBR0FILElBQUksQ0FBQ0MsTUFBTCxHQUNHQyxRQURILENBQ1ksRUFEWixFQUVHQyxTQUZILENBRWEsQ0FGYixFQUVnQixFQUZoQixDQUpGO0FBT0EsYUFBT0osS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgcmFuZHRva2VuID0gcmVxdWlyZSgncmFuZC10b2tlbicpXG5cbi8qKlxuICogUGFja2FnZTogbm9kZS1yYW5kLXRva2VuOiBcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL3NlaHJvcGUvbm9kZS1yYW5kLXRva2VuXG4gKiBcbiAqIFVzYWdlOiBcbiAqIC8vIENyZWF0ZSBhIHRva2VuIGdlbmVyYXRvciB3aXRoIHRoZSBkZWZhdWx0IHNldHRpbmdzOlxuICogIHZhciByYW5kdG9rZW4gPSByZXF1aXJlKCdyYW5kLXRva2VuJyk7XG5cbiAqICAvLyBHZW5lcmF0ZSBhIDE2IGNoYXJhY3RlciBhbHBoYS1udW1lcmljIHRva2VuOlxuICogIHZhciB0b2tlbiA9IHJhbmR0b2tlbi5nZW5lcmF0ZSgxNik7XG5cbiAqICAvLyBVc2UgaXQgYXMgYSByZXBsYWNlbWVudCBmb3IgdWlkOlxuICogIHZhciB1aWQgPSByZXF1aXJlKCdyYW5kLXRva2VuJykudWlkO1xuICogIHZhciB0b2tlbiA9IHVpZCgxNik7XG5cbiAqICAvLyBHZW5lcmF0ZSBtb3N0bHkgc2VxdWVudGlhbCB0b2tlbnM6XG4gKiAgdmFyIHN1aWQgPSByZXF1aXJlKCdyYW5kLXRva2VuJykuc3VpZDtcbiAqICB2YXIgdG9rZW4gPSBzdWlkKDE2KTtcbiAqL1xuZXhwb3J0IGNsYXNzIE5vZGVSYW5kVG9rZW5VdGlscyB7XG4gIHN0YXRpYyBnZW5lcmF0ZShudW1iZXI6IG51bWJlcikge1xuICAgIC8vIGNvbnN0IHRva2VuID0gcmFuZHRva2VuLmdlbmVyYXRlKG51bWJlcilcbiAgICBjb25zdCB0b2tlbiA9XG4gICAgICBNYXRoLnJhbmRvbSgpXG4gICAgICAgIC50b1N0cmluZygzNilcbiAgICAgICAgLnN1YnN0cmluZygyLCAxNSkgK1xuICAgICAgTWF0aC5yYW5kb20oKVxuICAgICAgICAudG9TdHJpbmcoMzYpXG4gICAgICAgIC5zdWJzdHJpbmcoMiwgMTUpXG4gICAgcmV0dXJuIHRva2VuXG4gIH1cbn1cbiJdfQ==