"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VkontakteSource = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _utils = require("../utils");

var VkontakteSource = /*#__PURE__*/function () {
  function VkontakteSource(props) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, VkontakteSource);
    this.props = void 0;

    this.isCompatible = function () {
      return !!_this.props.vkontakteId;
    };

    this.get = function (setState) {
      var vkontakteId = _this.props.vkontakteId;

      var size = _this.getImageSize();

      var url = "https://api.vk.com/method/users.get?user_id=".concat(vkontakteId, "&v=5.8&fields=").concat(size);

      var onError = function onError() {
        return setState(null);
      };

      (0, _utils.fetchJSONP)(url, function (data) {
        var src = data && data.response && data.response[0];

        if (!src) {
          return onError();
        }

        setState({
          sourceName: 'vkontakte',
          src: src
        });
      }, onError);
    };

    this.props = props;
  }

  (0, _createClass2["default"])(VkontakteSource, [{
    key: "getImageSize",
    value: function getImageSize() {
      var size = this.props.size;

      if (size <= 50) {
        return 'photo_50';
      }

      if (size <= 100) {
        return 'photo_100';
      }

      if (size <= 200) {
        return 'photo_200';
      }

      return 'photo_max';
    }
  }]);
  return VkontakteSource;
}();

exports.VkontakteSource = VkontakteSource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VyY2VzL1Zrb250YWt0ZS50cyJdLCJuYW1lcyI6WyJWa29udGFrdGVTb3VyY2UiLCJwcm9wcyIsImlzQ29tcGF0aWJsZSIsInZrb250YWt0ZUlkIiwiZ2V0Iiwic2V0U3RhdGUiLCJzaXplIiwiZ2V0SW1hZ2VTaXplIiwidXJsIiwib25FcnJvciIsImRhdGEiLCJzcmMiLCJyZXNwb25zZSIsInNvdXJjZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFVYUEsZTtBQUdYLDJCQUFZQyxLQUFaLEVBQXFDO0FBQUE7O0FBQUE7QUFBQSxTQUY3QkEsS0FFNkI7O0FBQUEsU0FJckNDLFlBSnFDLEdBSXRCO0FBQUEsYUFBTSxDQUFDLENBQUMsS0FBSSxDQUFDRCxLQUFMLENBQVdFLFdBQW5CO0FBQUEsS0FKc0I7O0FBQUEsU0F3QnJDQyxHQXhCcUMsR0F3Qi9CLFVBQUNDLFFBQUQsRUFBbUI7QUFBQSxVQUNmRixXQURlLEdBQ0MsS0FBSSxDQUFDRixLQUROLENBQ2ZFLFdBRGU7O0FBRXZCLFVBQU1HLElBQUksR0FBRyxLQUFJLENBQUNDLFlBQUwsRUFBYjs7QUFDQSxVQUFNQyxHQUFHLHlEQUFrREwsV0FBbEQsMkJBQThFRyxJQUE5RSxDQUFUOztBQUNBLFVBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsZUFBTUosUUFBUSxDQUFDLElBQUQsQ0FBZDtBQUFBLE9BQWhCOztBQUVBLDZCQUNFRyxHQURGLEVBRUUsVUFBQ0UsSUFBRCxFQUFlO0FBQ2IsWUFBTUMsR0FBRyxHQUFHRCxJQUFJLElBQUlBLElBQUksQ0FBQ0UsUUFBYixJQUF5QkYsSUFBSSxDQUFDRSxRQUFMLENBQWMsQ0FBZCxDQUFyQzs7QUFFQSxZQUFJLENBQUNELEdBQUwsRUFBVTtBQUNSLGlCQUFPRixPQUFPLEVBQWQ7QUFDRDs7QUFFREosUUFBQUEsUUFBUSxDQUFDO0FBQ1BRLFVBQUFBLFVBQVUsRUFBRSxXQURMO0FBRVBGLFVBQUFBLEdBQUcsRUFBSEE7QUFGTyxTQUFELENBQVI7QUFJRCxPQWJILEVBY0VGLE9BZEY7QUFnQkQsS0E5Q29DOztBQUNuQyxTQUFLUixLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzttQ0FJYztBQUFBLFVBQ0xLLElBREssR0FDSSxLQUFLTCxLQURULENBQ0xLLElBREs7O0FBR2IsVUFBSUEsSUFBSSxJQUFJLEVBQVosRUFBZ0I7QUFDZCxlQUFPLFVBQVA7QUFDRDs7QUFFRCxVQUFJQSxJQUFJLElBQUksR0FBWixFQUFpQjtBQUNmLGVBQU8sV0FBUDtBQUNEOztBQUVELFVBQUlBLElBQUksSUFBSSxHQUFaLEVBQWlCO0FBQ2YsZUFBTyxXQUFQO0FBQ0Q7O0FBRUQsYUFBTyxXQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaEpTT05QIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVZrb250YWt0ZUJhc2VTb3VyY2Uge1xuICB2a29udGFrdGVJZD86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElWa29udGFrdGVTb3VyY2UgZXh0ZW5kcyBJVmtvbnRha3RlQmFzZVNvdXJjZSB7XG4gIHNpemU6IG51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgVmtvbnRha3RlU291cmNlIHtcbiAgcHJpdmF0ZSBwcm9wczogSVZrb250YWt0ZVNvdXJjZVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJVmtvbnRha3RlU291cmNlKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXG4gIH1cblxuICBpc0NvbXBhdGlibGUgPSAoKSA9PiAhIXRoaXMucHJvcHMudmtvbnRha3RlSWRcblxuICBnZXRJbWFnZVNpemUoKSB7XG4gICAgY29uc3QgeyBzaXplIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoc2l6ZSA8PSA1MCkge1xuICAgICAgcmV0dXJuICdwaG90b181MCdcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA8PSAxMDApIHtcbiAgICAgIHJldHVybiAncGhvdG9fMTAwJ1xuICAgIH1cblxuICAgIGlmIChzaXplIDw9IDIwMCkge1xuICAgICAgcmV0dXJuICdwaG90b18yMDAnXG4gICAgfVxuXG4gICAgcmV0dXJuICdwaG90b19tYXgnXG4gIH1cblxuICBnZXQgPSAoc2V0U3RhdGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgdmtvbnRha3RlSWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzaXplID0gdGhpcy5nZXRJbWFnZVNpemUoKVxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS52ay5jb20vbWV0aG9kL3VzZXJzLmdldD91c2VyX2lkPSR7dmtvbnRha3RlSWR9JnY9NS44JmZpZWxkcz0ke3NpemV9YFxuICAgIGNvbnN0IG9uRXJyb3IgPSAoKSA9PiBzZXRTdGF0ZShudWxsKVxuXG4gICAgZmV0Y2hKU09OUChcbiAgICAgIHVybCxcbiAgICAgIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3Qgc3JjID0gZGF0YSAmJiBkYXRhLnJlc3BvbnNlICYmIGRhdGEucmVzcG9uc2VbMF1cblxuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgIHJldHVybiBvbkVycm9yKClcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBzb3VyY2VOYW1lOiAndmtvbnRha3RlJyxcbiAgICAgICAgICBzcmNcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBvbkVycm9yXG4gICAgKVxuICB9XG59XG4iXX0=