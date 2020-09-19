"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialAuthHelper = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _tools = require("@app/tools");

var _authApi = require("../authApi");

var SocialAuthHelper = /*#__PURE__*/function () {
  function SocialAuthHelper() {
    (0, _classCallCheck2["default"])(this, SocialAuthHelper);
  }

  (0, _createClass2["default"])(SocialAuthHelper, null, [{
    key: "getFacebookSdk",
    // =====================================
    // Facebook ============================
    // =====================================
    value: function getFacebookSdk(params) {
      var route = new _tools.RouteParserUtils("https://connect.facebook.net/:language/sdk.js");
      return route.reverse(params);
    } // =====================================
    // Twitter =============================
    // =====================================

  }, {
    key: "getTwitterOauthTokenUrl",
    value: function getTwitterOauthTokenUrl(params) {
      var route = new _tools.RouteParserUtils("".concat(_authApi.twitterServerConfigure.loginUrl, "?oauth_verifier=:oAuthVerifier&oauth_token=:oauthToken"));
      return route.reverse(params);
    }
  }, {
    key: "getTwitterRequestTokenUrl",
    value: function getTwitterRequestTokenUrl(params) {
      var route = new _tools.RouteParserUtils("https://api.twitter.com/oauth/authenticate?oauth_token=:oauth_token");
      return route.reverse(params);
    }
  }]);
  return SocialAuthHelper;
}();

exports.SocialAuthHelper = SocialAuthHelper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGlyZFNvY2lhbC91dGlscy9zb2NpYWxBdXRoSGVscGVyLnRzIl0sIm5hbWVzIjpbIlNvY2lhbEF1dGhIZWxwZXIiLCJwYXJhbXMiLCJyb3V0ZSIsIlJvdXRlIiwicmV2ZXJzZSIsInR3aXR0ZXJTZXJ2ZXJDb25maWd1cmUiLCJsb2dpblVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztJQVFhQSxnQjs7Ozs7OztBQUNYO0FBQ0E7QUFDQTttQ0FDc0JDLE0sRUFBK0M7QUFDbkUsVUFBTUMsS0FBSyxHQUFHLElBQUlDLHVCQUFKLGlEQUFkO0FBQ0EsYUFBT0QsS0FBSyxDQUFDRSxPQUFOLENBQWNILE1BQWQsQ0FBUDtBQUNELEssQ0FFRDtBQUNBO0FBQ0E7Ozs7NENBQytCQSxNLEVBQXdEO0FBQ3JGLFVBQU1DLEtBQUssR0FBRyxJQUFJQyx1QkFBSixXQUNURSxnQ0FBdUJDLFFBRGQsNERBQWQ7QUFHQSxhQUFPSixLQUFLLENBQUNFLE9BQU4sQ0FBY0gsTUFBZCxDQUFQO0FBQ0Q7Ozs4Q0FFZ0NBLE0sRUFBMEQ7QUFDekYsVUFBTUMsS0FBSyxHQUFHLElBQUlDLHVCQUFKLHVFQUFkO0FBQ0EsYUFBT0QsS0FBSyxDQUFDRSxPQUFOLENBQWNILE1BQWQsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVQYXJzZXJVdGlscyBhcyBSb3V0ZSB9IGZyb20gJ0BhcHAvdG9vbHMnXG5cbmltcG9ydCB7IHR3aXR0ZXJTZXJ2ZXJDb25maWd1cmUgfSBmcm9tICcuLi9hdXRoQXBpJ1xuXG5pbXBvcnQge1xuICBJU29jaWFsQXV0aEhlbHBlckdldEZhY2Vib29rU2RrUGFyYW1zLFxuICBJU29jaWFsQXV0aEhlbHBlckdldFR3aXR0ZXJPYXV0aFRva2VuVXJsUGFyYW1zLFxuICBJU29jaWFsQXV0aEhlbHBlckdldFR3aXR0ZXJSZXF1ZXN0VG9rZW5VcmxQYXJhbXNcbn0gZnJvbSAnLi9zb2NpYWxBdXRoSGVscGVyLmQnXG5cbmV4cG9ydCBjbGFzcyBTb2NpYWxBdXRoSGVscGVyIHtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBGYWNlYm9vayA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc3RhdGljIGdldEZhY2Vib29rU2RrKHBhcmFtczogSVNvY2lhbEF1dGhIZWxwZXJHZXRGYWNlYm9va1Nka1BhcmFtcykge1xuICAgIGNvbnN0IHJvdXRlID0gbmV3IFJvdXRlKGBodHRwczovL2Nvbm5lY3QuZmFjZWJvb2submV0LzpsYW5ndWFnZS9zZGsuanNgKVxuICAgIHJldHVybiByb3V0ZS5yZXZlcnNlKHBhcmFtcylcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gVHdpdHRlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHN0YXRpYyBnZXRUd2l0dGVyT2F1dGhUb2tlblVybChwYXJhbXM6IElTb2NpYWxBdXRoSGVscGVyR2V0VHdpdHRlck9hdXRoVG9rZW5VcmxQYXJhbXMpIHtcbiAgICBjb25zdCByb3V0ZSA9IG5ldyBSb3V0ZShcbiAgICAgIGAke3R3aXR0ZXJTZXJ2ZXJDb25maWd1cmUubG9naW5Vcmx9P29hdXRoX3ZlcmlmaWVyPTpvQXV0aFZlcmlmaWVyJm9hdXRoX3Rva2VuPTpvYXV0aFRva2VuYFxuICAgIClcbiAgICByZXR1cm4gcm91dGUucmV2ZXJzZShwYXJhbXMpXG4gIH1cblxuICBzdGF0aWMgZ2V0VHdpdHRlclJlcXVlc3RUb2tlblVybChwYXJhbXM6IElTb2NpYWxBdXRoSGVscGVyR2V0VHdpdHRlclJlcXVlc3RUb2tlblVybFBhcmFtcykge1xuICAgIGNvbnN0IHJvdXRlID0gbmV3IFJvdXRlKGBodHRwczovL2FwaS50d2l0dGVyLmNvbS9vYXV0aC9hdXRoZW50aWNhdGU/b2F1dGhfdG9rZW49Om9hdXRoX3Rva2VuYClcbiAgICByZXR1cm4gcm91dGUucmV2ZXJzZShwYXJhbXMpXG4gIH1cbn1cbiJdfQ==