"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GravatarSource = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _md = require("ts-md5/dist/md5");

var IS_RETINA = true;

var GravatarSource = function GravatarSource(_props) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, GravatarSource);
  this.props = void 0;

  this.isCompatible = function () {
    return !!_this.props.email || !!_this.props.md5Email;
  };

  this.get = function (setState) {
    var props = _this.props;

    var email = props.md5Email || _md.Md5.hashStr(props.email || '');

    var size = IS_RETINA ? props.size * 2 : props.size;
    var url = "https://secure.gravatar.com/avatar/".concat(email, "?s=").concat(size, "&d=404"); // console.log(' avatar, url: ', url)

    setState({
      sourceName: 'gravatar',
      src: url
    });
  };

  this.props = _props;
};

exports.GravatarSource = GravatarSource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VyY2VzL0dyYXZhdGFyLnRzIl0sIm5hbWVzIjpbIklTX1JFVElOQSIsIkdyYXZhdGFyU291cmNlIiwicHJvcHMiLCJpc0NvbXBhdGlibGUiLCJlbWFpbCIsIm1kNUVtYWlsIiwiZ2V0Iiwic2V0U3RhdGUiLCJNZDUiLCJoYXNoU3RyIiwic2l6ZSIsInVybCIsInNvdXJjZU5hbWUiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBV0EsSUFBTUEsU0FBUyxHQUFHLElBQWxCOztJQUVhQyxjLEdBR1gsd0JBQVlDLE1BQVosRUFBb0M7QUFBQTs7QUFBQTtBQUFBLE9BRjVCQSxLQUU0Qjs7QUFBQSxPQUlwQ0MsWUFKb0MsR0FJckIsWUFBTTtBQUNuQixXQUFPLENBQUMsQ0FBQyxLQUFJLENBQUNELEtBQUwsQ0FBV0UsS0FBYixJQUFzQixDQUFDLENBQUMsS0FBSSxDQUFDRixLQUFMLENBQVdHLFFBQTFDO0FBQ0QsR0FObUM7O0FBQUEsT0FRcENDLEdBUm9DLEdBUTlCLFVBQUNDLFFBQUQsRUFBbUI7QUFBQSxRQUNmTCxLQURlLEdBQ0wsS0FESyxDQUNmQSxLQURlOztBQUV2QixRQUFNRSxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csUUFBTixJQUFrQkcsUUFBSUMsT0FBSixDQUFZUCxLQUFLLENBQUNFLEtBQU4sSUFBZSxFQUEzQixDQUFoQzs7QUFDQSxRQUFNTSxJQUFJLEdBQUdWLFNBQVMsR0FBR0UsS0FBSyxDQUFDUSxJQUFOLEdBQWEsQ0FBaEIsR0FBb0JSLEtBQUssQ0FBQ1EsSUFBaEQ7QUFDQSxRQUFNQyxHQUFHLGdEQUF5Q1AsS0FBekMsZ0JBQW9ETSxJQUFwRCxXQUFULENBSnVCLENBTXZCOztBQUVBSCxJQUFBQSxRQUFRLENBQUM7QUFDUEssTUFBQUEsVUFBVSxFQUFFLFVBREw7QUFFUEMsTUFBQUEsR0FBRyxFQUFFRjtBQUZFLEtBQUQsQ0FBUjtBQUlELEdBcEJtQzs7QUFDbEMsT0FBS1QsS0FBTCxHQUFhQSxNQUFiO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1kNSB9IGZyb20gJ3RzLW1kNS9kaXN0L21kNSdcblxuZXhwb3J0IGludGVyZmFjZSBJR3JhdmF0YXJCYXNlU291cmNlIHtcbiAgZW1haWw/OiBzdHJpbmdcbiAgbWQ1RW1haWw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJR3JhdmF0YXJTb3VyY2UgZXh0ZW5kcyBJR3JhdmF0YXJCYXNlU291cmNlIHtcbiAgc2l6ZTogbnVtYmVyXG59XG5cbmNvbnN0IElTX1JFVElOQSA9IHRydWVcblxuZXhwb3J0IGNsYXNzIEdyYXZhdGFyU291cmNlIHtcbiAgcHJpdmF0ZSBwcm9wczogSUdyYXZhdGFyU291cmNlXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IElHcmF2YXRhclNvdXJjZSkge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wc1xuICB9XG5cbiAgaXNDb21wYXRpYmxlID0gKCkgPT4ge1xuICAgIHJldHVybiAhIXRoaXMucHJvcHMuZW1haWwgfHwgISF0aGlzLnByb3BzLm1kNUVtYWlsXG4gIH1cblxuICBnZXQgPSAoc2V0U3RhdGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXNcbiAgICBjb25zdCBlbWFpbCA9IHByb3BzLm1kNUVtYWlsIHx8IE1kNS5oYXNoU3RyKHByb3BzLmVtYWlsIHx8ICcnKVxuICAgIGNvbnN0IHNpemUgPSBJU19SRVRJTkEgPyBwcm9wcy5zaXplICogMiA6IHByb3BzLnNpemVcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9zZWN1cmUuZ3JhdmF0YXIuY29tL2F2YXRhci8ke2VtYWlsfT9zPSR7c2l6ZX0mZD00MDRgXG5cbiAgICAvLyBjb25zb2xlLmxvZygnIGF2YXRhciwgdXJsOiAnLCB1cmwpXG5cbiAgICBzZXRTdGF0ZSh7XG4gICAgICBzb3VyY2VOYW1lOiAnZ3JhdmF0YXInLFxuICAgICAgc3JjOiB1cmxcbiAgICB9KVxuICB9XG59XG4iXX0=