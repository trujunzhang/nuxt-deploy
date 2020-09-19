"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryStringUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var queryString = _interopRequireWildcard(require("query-string"));

var QueryStringUtils = /*#__PURE__*/function () {
  function QueryStringUtils() {
    (0, _classCallCheck2["default"])(this, QueryStringUtils);
  }

  (0, _createClass2["default"])(QueryStringUtils, null, [{
    key: "getQueryObject",
    value: function getQueryObject(url) {
      var newRouterUrl = queryString.parseUrl(url);
      return newRouterUrl.query;
    }
  }, {
    key: "getParseFromBody",
    value: function getParseFromBody(body) {
      return queryString.parse(body);
    }
  }]);
  return QueryStringUtils;
}();

exports.QueryStringUtils = QueryStringUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpY1V0aWxzL3F1ZXJ5U3RyaW5nVXRpbHMudHMiXSwibmFtZXMiOlsiUXVlcnlTdHJpbmdVdGlscyIsInVybCIsIm5ld1JvdXRlclVybCIsInF1ZXJ5U3RyaW5nIiwicGFyc2VVcmwiLCJxdWVyeSIsImJvZHkiLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBQ2FBLGdCOzs7Ozs7O21DQUNXQyxHLEVBQWE7QUFDakMsVUFBTUMsWUFBaUIsR0FBR0MsV0FBVyxDQUFDQyxRQUFaLENBQXFCSCxHQUFyQixDQUExQjtBQUNBLGFBQU9DLFlBQVksQ0FBQ0csS0FBcEI7QUFDRDs7O3FDQUV1QkMsSSxFQUFXO0FBQ2pDLGFBQU9ILFdBQVcsQ0FBQ0ksS0FBWixDQUFrQkQsSUFBbEIsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJ1xuZXhwb3J0IGNsYXNzIFF1ZXJ5U3RyaW5nVXRpbHMge1xuICBzdGF0aWMgZ2V0UXVlcnlPYmplY3QodXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCBuZXdSb3V0ZXJVcmw6IGFueSA9IHF1ZXJ5U3RyaW5nLnBhcnNlVXJsKHVybClcbiAgICByZXR1cm4gbmV3Um91dGVyVXJsLnF1ZXJ5XG4gIH1cblxuICBzdGF0aWMgZ2V0UGFyc2VGcm9tQm9keShib2R5OiBhbnkpIHtcbiAgICByZXR1cm4gcXVlcnlTdHJpbmcucGFyc2UoYm9keSlcbiAgfVxufVxuIl19