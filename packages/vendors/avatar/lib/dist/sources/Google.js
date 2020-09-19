"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleSource = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _utils = require("../utils");

var GoogleSource = function GoogleSource(props) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, GoogleSource);
  this.props = void 0;

  this.isCompatible = function () {
    return !!_this.props.googleId;
  };

  this.get = function (setState) {
    var _this$props = _this.props,
        size = _this$props.size,
        googleId = _this$props.googleId;
    var url = "https://picasaweb.google.com/data/entry/api/user/".concat(googleId, "?alt=json"); // if (cache.hasSourceFailedBefore(url)) {
    // setState(null)
    // return
    // }

    (0, _utils.fetchJson)(url, function (data) {
      var src = data.entry.gphoto$thumbnail.$t;
      var srcWithCorrectSize = src.replace('s64', 's' + size);
      setState({
        sourceName: 'google',
        src: srcWithCorrectSize
      });
    }, function () {
      // on error
      // cache.sourceFailed(url);
      setState(null);
    });
  };

  this.props = props;
};

exports.GoogleSource = GoogleSource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VyY2VzL0dvb2dsZS50cyJdLCJuYW1lcyI6WyJHb29nbGVTb3VyY2UiLCJwcm9wcyIsImlzQ29tcGF0aWJsZSIsImdvb2dsZUlkIiwiZ2V0Iiwic2V0U3RhdGUiLCJzaXplIiwidXJsIiwiZGF0YSIsInNyYyIsImVudHJ5IiwiZ3Bob3RvJHRodW1ibmFpbCIsIiR0Iiwic3JjV2l0aENvcnJlY3RTaXplIiwicmVwbGFjZSIsInNvdXJjZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0lBV2FBLFksR0FHWCxzQkFBWUMsS0FBWixFQUFrQztBQUFBOztBQUFBO0FBQUEsT0FGMUJBLEtBRTBCOztBQUFBLE9BSWxDQyxZQUprQyxHQUluQjtBQUFBLFdBQU0sQ0FBQyxDQUFDLEtBQUksQ0FBQ0QsS0FBTCxDQUFXRSxRQUFuQjtBQUFBLEdBSm1COztBQUFBLE9BTWxDQyxHQU5rQyxHQU01QixVQUFDQyxRQUFELEVBQW1CO0FBQUEsc0JBQ0ksS0FBSSxDQUFDSixLQURUO0FBQUEsUUFDZkssSUFEZSxlQUNmQSxJQURlO0FBQUEsUUFDVEgsUUFEUyxlQUNUQSxRQURTO0FBRXZCLFFBQU1JLEdBQUcsOERBQXVESixRQUF2RCxjQUFULENBRnVCLENBSXZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUNFSSxHQURGLEVBRUUsVUFBQ0MsSUFBRCxFQUFlO0FBQ2IsVUFBTUMsR0FBRyxHQUFHRCxJQUFJLENBQUNFLEtBQUwsQ0FBV0MsZ0JBQVgsQ0FBNEJDLEVBQXhDO0FBQ0EsVUFBTUMsa0JBQWtCLEdBQUdKLEdBQUcsQ0FBQ0ssT0FBSixDQUFZLEtBQVosRUFBbUIsTUFBTVIsSUFBekIsQ0FBM0I7QUFDQUQsTUFBQUEsUUFBUSxDQUFDO0FBQ1BVLFFBQUFBLFVBQVUsRUFBRSxRQURMO0FBRVBOLFFBQUFBLEdBQUcsRUFBRUk7QUFGRSxPQUFELENBQVI7QUFJRCxLQVRILEVBVUUsWUFBTTtBQUNKO0FBQ0E7QUFDQVIsTUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNELEtBZEg7QUFnQkQsR0EvQmlDOztBQUNoQyxPQUFLSixLQUFMLEdBQWFBLEtBQWI7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hKc29uIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdvb2dsZUJhc2VTb3VyY2Uge1xuICBnb29nbGVJZD86IHN0cmluZ1xuICBjYWNoZT86IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElHb29nbGVTb3VyY2UgZXh0ZW5kcyBJR29vZ2xlQmFzZVNvdXJjZSB7XG4gIHNpemU6IG51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgR29vZ2xlU291cmNlIHtcbiAgcHJpdmF0ZSBwcm9wczogSUdvb2dsZVNvdXJjZVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJR29vZ2xlU291cmNlKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXG4gIH1cblxuICBpc0NvbXBhdGlibGUgPSAoKSA9PiAhIXRoaXMucHJvcHMuZ29vZ2xlSWRcblxuICBnZXQgPSAoc2V0U3RhdGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgc2l6ZSwgZ29vZ2xlSWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9waWNhc2F3ZWIuZ29vZ2xlLmNvbS9kYXRhL2VudHJ5L2FwaS91c2VyLyR7Z29vZ2xlSWR9P2FsdD1qc29uYFxuXG4gICAgLy8gaWYgKGNhY2hlLmhhc1NvdXJjZUZhaWxlZEJlZm9yZSh1cmwpKSB7XG4gICAgLy8gc2V0U3RhdGUobnVsbClcbiAgICAvLyByZXR1cm5cbiAgICAvLyB9XG5cbiAgICBmZXRjaEpzb24oXG4gICAgICB1cmwsXG4gICAgICAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHNyYyA9IGRhdGEuZW50cnkuZ3Bob3RvJHRodW1ibmFpbC4kdFxuICAgICAgICBjb25zdCBzcmNXaXRoQ29ycmVjdFNpemUgPSBzcmMucmVwbGFjZSgnczY0JywgJ3MnICsgc2l6ZSlcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIHNvdXJjZU5hbWU6ICdnb29nbGUnLFxuICAgICAgICAgIHNyYzogc3JjV2l0aENvcnJlY3RTaXplXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBvbiBlcnJvclxuICAgICAgICAvLyBjYWNoZS5zb3VyY2VGYWlsZWQodXJsKTtcbiAgICAgICAgc2V0U3RhdGUobnVsbClcbiAgICAgIH1cbiAgICApXG4gIH1cbn1cbiJdfQ==