"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRedirectSource = createRedirectSource;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

// export interface  IAvatarRedirectSourceProps {
// string
// }
function createRedirectSource(network, property) {
  var _temp;

  return _temp = function AvatarRedirectSource(props) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, AvatarRedirectSource);
    this.props = void 0;

    this.isCompatible = function () {
      return !!_this.props.avatarRedirectUrl && !!_this.props[property];
    };

    this.get = function (setState) {
      var _this$props = _this.props,
          size = _this$props.size,
          avatarRedirectUrl = _this$props.avatarRedirectUrl;
      var baseUrl = avatarRedirectUrl.replace(/\/*$/, '/');
      var id = _this.props[property];
      var query = size ? '' : "size=".concat(size);
      var src = "".concat(baseUrl).concat(network, "/").concat(id, "?").concat(query);
      setState({
        source: 'network',
        src: src
      });
    };

    this.props = props;
  }, _temp;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VyY2VzL0F2YXRhclJlZGlyZWN0LnRzIl0sIm5hbWVzIjpbImNyZWF0ZVJlZGlyZWN0U291cmNlIiwibmV0d29yayIsInByb3BlcnR5IiwicHJvcHMiLCJpc0NvbXBhdGlibGUiLCJhdmF0YXJSZWRpcmVjdFVybCIsImdldCIsInNldFN0YXRlIiwic2l6ZSIsImJhc2VVcmwiLCJyZXBsYWNlIiwiaWQiLCJxdWVyeSIsInNyYyIsInNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxvQkFBVCxDQUE4QkMsT0FBOUIsRUFBNENDLFFBQTVDLEVBQTJEO0FBQUE7O0FBQ2hFLGlCQUdFLDhCQUFZQyxLQUFaLEVBQXdCO0FBQUE7O0FBQUE7QUFBQSxTQUZqQkEsS0FFaUI7O0FBQUEsU0FJeEJDLFlBSndCLEdBSVQsWUFBTTtBQUNuQixhQUFPLENBQUMsQ0FBQyxLQUFJLENBQUNELEtBQUwsQ0FBV0UsaUJBQWIsSUFBa0MsQ0FBQyxDQUFDLEtBQUksQ0FBQ0YsS0FBTCxDQUFXRCxRQUFYLENBQTNDO0FBQ0QsS0FOdUI7O0FBQUEsU0FReEJJLEdBUndCLEdBUWxCLFVBQUNDLFFBQUQsRUFBbUI7QUFBQSx3QkFDYSxLQUFJLENBQUNKLEtBRGxCO0FBQUEsVUFDZkssSUFEZSxlQUNmQSxJQURlO0FBQUEsVUFDVEgsaUJBRFMsZUFDVEEsaUJBRFM7QUFFdkIsVUFBTUksT0FBTyxHQUFHSixpQkFBaUIsQ0FBQ0ssT0FBbEIsQ0FBMEIsTUFBMUIsRUFBa0MsR0FBbEMsQ0FBaEI7QUFDQSxVQUFNQyxFQUFFLEdBQUcsS0FBSSxDQUFDUixLQUFMLENBQVdELFFBQVgsQ0FBWDtBQUNBLFVBQU1VLEtBQUssR0FBR0osSUFBSSxHQUFHLEVBQUgsa0JBQWdCQSxJQUFoQixDQUFsQjtBQUNBLFVBQU1LLEdBQUcsYUFBTUosT0FBTixTQUFnQlIsT0FBaEIsY0FBMkJVLEVBQTNCLGNBQWlDQyxLQUFqQyxDQUFUO0FBQ0FMLE1BQUFBLFFBQVEsQ0FBQztBQUFFTyxRQUFBQSxNQUFNLEVBQUUsU0FBVjtBQUFxQkQsUUFBQUEsR0FBRyxFQUFIQTtBQUFyQixPQUFELENBQVI7QUFDRCxLQWZ1Qjs7QUFDdEIsU0FBS1YsS0FBTCxHQUFhQSxLQUFiO0FBQ0QsR0FMSDtBQW9CRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBpbnRlcmZhY2UgIElBdmF0YXJSZWRpcmVjdFNvdXJjZVByb3BzIHtcbi8vIHN0cmluZ1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVkaXJlY3RTb3VyY2UobmV0d29yazogYW55LCBwcm9wZXJ0eTogYW55KSB7XG4gIHJldHVybiBjbGFzcyBBdmF0YXJSZWRpcmVjdFNvdXJjZSB7XG4gICAgcHVibGljIHByb3BzOiBhbnlcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wc1xuICAgIH1cblxuICAgIGlzQ29tcGF0aWJsZSA9ICgpID0+IHtcbiAgICAgIHJldHVybiAhIXRoaXMucHJvcHMuYXZhdGFyUmVkaXJlY3RVcmwgJiYgISF0aGlzLnByb3BzW3Byb3BlcnR5XVxuICAgIH1cblxuICAgIGdldCA9IChzZXRTdGF0ZTogYW55KSA9PiB7XG4gICAgICBjb25zdCB7IHNpemUsIGF2YXRhclJlZGlyZWN0VXJsIH0gPSB0aGlzLnByb3BzXG4gICAgICBjb25zdCBiYXNlVXJsID0gYXZhdGFyUmVkaXJlY3RVcmwucmVwbGFjZSgvXFwvKiQvLCAnLycpXG4gICAgICBjb25zdCBpZCA9IHRoaXMucHJvcHNbcHJvcGVydHldXG4gICAgICBjb25zdCBxdWVyeSA9IHNpemUgPyAnJyA6IGBzaXplPSR7c2l6ZX1gXG4gICAgICBjb25zdCBzcmMgPSBgJHtiYXNlVXJsfSR7bmV0d29ya30vJHtpZH0/JHtxdWVyeX1gXG4gICAgICBzZXRTdGF0ZSh7IHNvdXJjZTogJ25ldHdvcmsnLCBzcmMgfSlcbiAgICB9XG4gIH1cbn1cbiJdfQ==