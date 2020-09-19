"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Normalize = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Normalize = /*#__PURE__*/function () {
  function Normalize() {
    (0, _classCallCheck2["default"])(this, Normalize);
  }

  (0, _createClass2["default"])(Normalize, null, [{
    key: "url",
    value: function url(_url) {
      if (!_url || typeof _url !== 'string') {
        return null;
      }

      return _url.trim().toLowerCase();
    }
  }, {
    key: "options",
    value: function options(_options) {
      var normalized = !_options || (0, _typeof2["default"])(_options) !== 'object' ? Object.create(null) : _options;

      if ('privateTlds' in normalized === false) {
        normalized.privateTlds = false;
      }

      if ('customTlds' in normalized && normalized.customTlds instanceof RegExp === false) {
        normalized.customTlds = new RegExp('\\.(' + normalized.customTlds.join('|') + ')$');
      }

      return normalized;
    }
  }]);
  return Normalize;
}();

exports.Normalize = Normalize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZW5kb3IvcGFyc2UtZG9tYWluL25vcm1hbGl6ZS50cyJdLCJuYW1lcyI6WyJOb3JtYWxpemUiLCJ1cmwiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJvcHRpb25zIiwibm9ybWFsaXplZCIsIk9iamVjdCIsImNyZWF0ZSIsInByaXZhdGVUbGRzIiwiY3VzdG9tVGxkcyIsIlJlZ0V4cCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxTOzs7Ozs7O3dCQUNBQyxJLEVBQWE7QUFDdEIsVUFBSSxDQUFDQSxJQUFELElBQVEsT0FBT0EsSUFBUCxLQUFlLFFBQTNCLEVBQXFDO0FBQ25DLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQU9BLElBQUcsQ0FBQ0MsSUFBSixHQUFXQyxXQUFYLEVBQVA7QUFDRDs7OzRCQUVjQyxRLEVBQWM7QUFDM0IsVUFBTUMsVUFBVSxHQUFHLENBQUNELFFBQUQsSUFBWSx5QkFBT0EsUUFBUCxNQUFtQixRQUEvQixHQUEwQ0UsTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxDQUExQyxHQUFnRUgsUUFBbkY7O0FBRUEsVUFBSSxpQkFBaUJDLFVBQWpCLEtBQWdDLEtBQXBDLEVBQTJDO0FBQ3pDQSxRQUFBQSxVQUFVLENBQUNHLFdBQVgsR0FBeUIsS0FBekI7QUFDRDs7QUFDRCxVQUFJLGdCQUFnQkgsVUFBaEIsSUFBOEJBLFVBQVUsQ0FBQ0ksVUFBWCxZQUFpQ0MsTUFBakMsS0FBNEMsS0FBOUUsRUFBcUY7QUFDbkZMLFFBQUFBLFVBQVUsQ0FBQ0ksVUFBWCxHQUF3QixJQUFJQyxNQUFKLENBQVcsU0FBU0wsVUFBVSxDQUFDSSxVQUFYLENBQXNCRSxJQUF0QixDQUEyQixHQUEzQixDQUFULEdBQTJDLElBQXRELENBQXhCO0FBQ0Q7O0FBRUQsYUFBT04sVUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5vcm1hbGl6ZSB7XG4gIHN0YXRpYyB1cmwodXJsOiBzdHJpbmcpIHtcbiAgICBpZiAoIXVybCB8fCB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsLnRyaW0oKS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBzdGF0aWMgb3B0aW9ucyhvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gIW9wdGlvbnMgfHwgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IG9wdGlvbnNcblxuICAgIGlmICgncHJpdmF0ZVRsZHMnIGluIG5vcm1hbGl6ZWQgPT09IGZhbHNlKSB7XG4gICAgICBub3JtYWxpemVkLnByaXZhdGVUbGRzID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKCdjdXN0b21UbGRzJyBpbiBub3JtYWxpemVkICYmIG5vcm1hbGl6ZWQuY3VzdG9tVGxkcyBpbnN0YW5jZW9mIFJlZ0V4cCA9PT0gZmFsc2UpIHtcbiAgICAgIG5vcm1hbGl6ZWQuY3VzdG9tVGxkcyA9IG5ldyBSZWdFeHAoJ1xcXFwuKCcgKyBub3JtYWxpemVkLmN1c3RvbVRsZHMuam9pbignfCcpICsgJykkJylcbiAgICB9XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZFxuICB9XG59XG4iXX0=