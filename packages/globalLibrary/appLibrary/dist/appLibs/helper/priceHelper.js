"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PriceHelper = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PriceHelper = /*#__PURE__*/function () {
  function PriceHelper() {
    (0, _classCallCheck2["default"])(this, PriceHelper);
  }

  (0, _createClass2["default"])(PriceHelper, null, [{
    key: "fixPriceAsString",
    value: function fixPriceAsString(price) {
      return price.replace('$', '').replace(',', '');
    }
  }]);
  return PriceHelper;
}();

exports.PriceHelper = PriceHelper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHBMaWJzL2hlbHBlci9wcmljZUhlbHBlci50cyJdLCJuYW1lcyI6WyJQcmljZUhlbHBlciIsInByaWNlIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFhQSxXOzs7Ozs7O3FDQUNhQyxLLEVBQWU7QUFDckMsYUFBT0EsS0FBSyxDQUFDQyxPQUFOLENBQWMsR0FBZCxFQUFtQixFQUFuQixFQUF1QkEsT0FBdkIsQ0FBK0IsR0FBL0IsRUFBb0MsRUFBcEMsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByaWNlSGVscGVyIHtcbiAgc3RhdGljIGZpeFByaWNlQXNTdHJpbmcocHJpY2U6IHN0cmluZykge1xuICAgIHJldHVybiBwcmljZS5yZXBsYWNlKCckJywgJycpLnJlcGxhY2UoJywnLCAnJylcbiAgfVxufVxuIl19