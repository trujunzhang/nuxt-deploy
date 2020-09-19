"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RandTokenUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _nodeRandToken = require("../vendor/node-rand-token");

var RandTokenUtils = /*#__PURE__*/function () {
  function RandTokenUtils() {
    (0, _classCallCheck2["default"])(this, RandTokenUtils);
  }

  (0, _createClass2["default"])(RandTokenUtils, null, [{
    key: "secret",
    value: function secret(length) {
      var token = new _nodeRandToken.RandToken().generate(length);
      return token;
    }
  }]);
  return RandTokenUtils;
}();

exports.RandTokenUtils = RandTokenUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9yYW5kVG9rZW5VdGlscy50cyJdLCJuYW1lcyI6WyJSYW5kVG9rZW5VdGlscyIsImxlbmd0aCIsInRva2VuIiwiUmFuZFRva2VuIiwiZ2VuZXJhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFYUEsYzs7Ozs7OzsyQkFDR0MsTSxFQUFRO0FBQ3BCLFVBQU1DLEtBQUssR0FBRyxJQUFJQyx3QkFBSixHQUFnQkMsUUFBaEIsQ0FBeUJILE1BQXpCLENBQWQ7QUFDQSxhQUFPQyxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYW5kVG9rZW4gfSBmcm9tICcuLi92ZW5kb3Ivbm9kZS1yYW5kLXRva2VuJ1xuXG5leHBvcnQgY2xhc3MgUmFuZFRva2VuVXRpbHMge1xuICBzdGF0aWMgc2VjcmV0KGxlbmd0aCkge1xuICAgIGNvbnN0IHRva2VuID0gbmV3IFJhbmRUb2tlbigpLmdlbmVyYXRlKGxlbmd0aClcbiAgICByZXR1cm4gdG9rZW5cbiAgfVxufVxuIl19