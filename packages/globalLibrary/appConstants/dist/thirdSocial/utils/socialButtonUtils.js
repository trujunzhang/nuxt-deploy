"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialButtonUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Types = _interopRequireWildcard(require("./constants"));

var SocialButtonUtils = /*#__PURE__*/function () {
  function SocialButtonUtils() {
    (0, _classCallCheck2["default"])(this, SocialButtonUtils);
  }

  (0, _createClass2["default"])(SocialButtonUtils, [{
    key: "getConnectionTitle",
    value: function getConnectionTitle(buttonType) {
      switch (buttonType) {
        case Types.social.SOCIAL_BUTTON_TYPE_FACEBOOK:
          return 'Connect to Facebook';

        case Types.social.SOCIAL_BUTTON_TYPE_TWITTER:
          return 'Connect to Twitter';
      }

      return '';
    }
  }, {
    key: "getLoggedTitle",
    value: function getLoggedTitle(buttonType, typeTitle) {
      switch (buttonType) {
        case Types.social.SOCIAL_BUTTON_TYPE_FACEBOOK:
          return "".concat(typeTitle, " with facebook");

        case Types.social.SOCIAL_BUTTON_TYPE_TWITTER:
          return "".concat(typeTitle, " with twitter", '     ');
      }

      return '';
    }
  }, {
    key: "getTitle",
    value: function getTitle(socialButtonType, buttonType, typeTitle) {
      switch (socialButtonType) {
        case Types.social.SOCIAL_BUTTON_FOR_CONNECTION:
          return this.getConnectionTitle(buttonType);

        case Types.social.SOCIAL_BUTTON_FOR_LOGIN:
          return this.getLoggedTitle(buttonType, typeTitle);
      }

      return '';
    }
  }]);
  return SocialButtonUtils;
}();

exports.SocialButtonUtils = SocialButtonUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGlyZFNvY2lhbC91dGlscy9zb2NpYWxCdXR0b25VdGlscy50cyJdLCJuYW1lcyI6WyJTb2NpYWxCdXR0b25VdGlscyIsImJ1dHRvblR5cGUiLCJUeXBlcyIsInNvY2lhbCIsIlNPQ0lBTF9CVVRUT05fVFlQRV9GQUNFQk9PSyIsIlNPQ0lBTF9CVVRUT05fVFlQRV9UV0lUVEVSIiwidHlwZVRpdGxlIiwic29jaWFsQnV0dG9uVHlwZSIsIlNPQ0lBTF9CVVRUT05fRk9SX0NPTk5FQ1RJT04iLCJnZXRDb25uZWN0aW9uVGl0bGUiLCJTT0NJQUxfQlVUVE9OX0ZPUl9MT0dJTiIsImdldExvZ2dlZFRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFYUEsaUI7Ozs7Ozs7dUNBQ1FDLFUsRUFBb0I7QUFDckMsY0FBUUEsVUFBUjtBQUNFLGFBQUtDLEtBQUssQ0FBQ0MsTUFBTixDQUFhQywyQkFBbEI7QUFDRSxpQkFBTyxxQkFBUDs7QUFDRixhQUFLRixLQUFLLENBQUNDLE1BQU4sQ0FBYUUsMEJBQWxCO0FBQ0UsaUJBQU8sb0JBQVA7QUFKSjs7QUFPQSxhQUFPLEVBQVA7QUFDRDs7O21DQUVjSixVLEVBQW9CSyxTLEVBQW1CO0FBQ3BELGNBQVFMLFVBQVI7QUFDRSxhQUFLQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsMkJBQWxCO0FBQ0UsMkJBQVVFLFNBQVY7O0FBQ0YsYUFBS0osS0FBSyxDQUFDQyxNQUFOLENBQWFFLDBCQUFsQjtBQUNFLDJCQUFVQyxTQUFWLG1CQUFtQyxPQUFuQztBQUpKOztBQU9BLGFBQU8sRUFBUDtBQUNEOzs7NkJBRVFDLGdCLEVBQTBCTixVLEVBQW9CSyxTLEVBQW1CO0FBQ3hFLGNBQVFDLGdCQUFSO0FBQ0UsYUFBS0wsS0FBSyxDQUFDQyxNQUFOLENBQWFLLDRCQUFsQjtBQUNFLGlCQUFPLEtBQUtDLGtCQUFMLENBQXdCUixVQUF4QixDQUFQOztBQUNGLGFBQUtDLEtBQUssQ0FBQ0MsTUFBTixDQUFhTyx1QkFBbEI7QUFDRSxpQkFBTyxLQUFLQyxjQUFMLENBQW9CVixVQUFwQixFQUFnQ0ssU0FBaEMsQ0FBUDtBQUpKOztBQU9BLGFBQU8sRUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVHlwZXMgZnJvbSAnLi9jb25zdGFudHMnXG5cbmV4cG9ydCBjbGFzcyBTb2NpYWxCdXR0b25VdGlscyB7XG4gIGdldENvbm5lY3Rpb25UaXRsZShidXR0b25UeXBlOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGJ1dHRvblR5cGUpIHtcbiAgICAgIGNhc2UgVHlwZXMuc29jaWFsLlNPQ0lBTF9CVVRUT05fVFlQRV9GQUNFQk9PSzpcbiAgICAgICAgcmV0dXJuICdDb25uZWN0IHRvIEZhY2Vib29rJ1xuICAgICAgY2FzZSBUeXBlcy5zb2NpYWwuU09DSUFMX0JVVFRPTl9UWVBFX1RXSVRURVI6XG4gICAgICAgIHJldHVybiAnQ29ubmVjdCB0byBUd2l0dGVyJ1xuICAgIH1cblxuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgZ2V0TG9nZ2VkVGl0bGUoYnV0dG9uVHlwZTogc3RyaW5nLCB0eXBlVGl0bGU6IHN0cmluZykge1xuICAgIHN3aXRjaCAoYnV0dG9uVHlwZSkge1xuICAgICAgY2FzZSBUeXBlcy5zb2NpYWwuU09DSUFMX0JVVFRPTl9UWVBFX0ZBQ0VCT09LOlxuICAgICAgICByZXR1cm4gYCR7dHlwZVRpdGxlfSB3aXRoIGZhY2Vib29rYFxuICAgICAgY2FzZSBUeXBlcy5zb2NpYWwuU09DSUFMX0JVVFRPTl9UWVBFX1RXSVRURVI6XG4gICAgICAgIHJldHVybiBgJHt0eXBlVGl0bGV9IHdpdGggdHdpdHRlciR7JyAgICAgJ31gXG4gICAgfVxuXG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBnZXRUaXRsZShzb2NpYWxCdXR0b25UeXBlOiBzdHJpbmcsIGJ1dHRvblR5cGU6IHN0cmluZywgdHlwZVRpdGxlOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHNvY2lhbEJ1dHRvblR5cGUpIHtcbiAgICAgIGNhc2UgVHlwZXMuc29jaWFsLlNPQ0lBTF9CVVRUT05fRk9SX0NPTk5FQ1RJT046XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbm5lY3Rpb25UaXRsZShidXR0b25UeXBlKVxuICAgICAgY2FzZSBUeXBlcy5zb2NpYWwuU09DSUFMX0JVVFRPTl9GT1JfTE9HSU46XG4gICAgICAgIHJldHVybiB0aGlzLmdldExvZ2dlZFRpdGxlKGJ1dHRvblR5cGUsIHR5cGVUaXRsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gJydcbiAgfVxufVxuIl19