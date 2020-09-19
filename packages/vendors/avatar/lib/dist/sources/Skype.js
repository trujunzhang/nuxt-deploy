"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkypeSource = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var SkypeSource = function SkypeSource(props) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, SkypeSource);
  this.props = void 0;

  this.isCompatible = function () {
    return !!_this.props.skypeId;
  };

  this.get = function (setState) {
    var skypeId = _this.props.skypeId;

    var onError = function onError() {
      return setState(null);
    };

    if (!skypeId) {
      return onError();
    }

    var url = "https://api.skype.com/users/".concat(skypeId, "/profile/avatar");
    setState({
      sourceName: 'skype',
      src: url
    });
  };

  this.props = props;
};

exports.SkypeSource = SkypeSource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VyY2VzL1NreXBlLnRzIl0sIm5hbWVzIjpbIlNreXBlU291cmNlIiwicHJvcHMiLCJpc0NvbXBhdGlibGUiLCJza3lwZUlkIiwiZ2V0Iiwic2V0U3RhdGUiLCJvbkVycm9yIiwidXJsIiwic291cmNlTmFtZSIsInNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFJYUEsVyxHQUdYLHFCQUFZQyxLQUFaLEVBQWlDO0FBQUE7O0FBQUE7QUFBQSxPQUZ6QkEsS0FFeUI7O0FBQUEsT0FJakNDLFlBSmlDLEdBSWxCLFlBQU07QUFDbkIsV0FBTyxDQUFDLENBQUMsS0FBSSxDQUFDRCxLQUFMLENBQVdFLE9BQXBCO0FBQ0QsR0FOZ0M7O0FBQUEsT0FRakNDLEdBUmlDLEdBUTNCLFVBQUNDLFFBQUQsRUFBbUI7QUFBQSxRQUNmRixPQURlLEdBQ0gsS0FBSSxDQUFDRixLQURGLENBQ2ZFLE9BRGU7O0FBRXZCLFFBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsYUFBTUQsUUFBUSxDQUFDLElBQUQsQ0FBZDtBQUFBLEtBQWhCOztBQUNBLFFBQUksQ0FBQ0YsT0FBTCxFQUFjO0FBQ1osYUFBT0csT0FBTyxFQUFkO0FBQ0Q7O0FBQ0QsUUFBTUMsR0FBRyx5Q0FBa0NKLE9BQWxDLG9CQUFUO0FBRUFFLElBQUFBLFFBQVEsQ0FBQztBQUNQRyxNQUFBQSxVQUFVLEVBQUUsT0FETDtBQUVQQyxNQUFBQSxHQUFHLEVBQUVGO0FBRkUsS0FBRCxDQUFSO0FBSUQsR0FwQmdDOztBQUMvQixPQUFLTixLQUFMLEdBQWFBLEtBQWI7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJU2t5cGVTb3VyY2Uge1xuICBza3lwZUlkPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBTa3lwZVNvdXJjZSB7XG4gIHByaXZhdGUgcHJvcHM6IElTa3lwZVNvdXJjZVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJU2t5cGVTb3VyY2UpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHNcbiAgfVxuXG4gIGlzQ29tcGF0aWJsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gISF0aGlzLnByb3BzLnNreXBlSWRcbiAgfVxuXG4gIGdldCA9IChzZXRTdGF0ZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBza3lwZUlkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgb25FcnJvciA9ICgpID0+IHNldFN0YXRlKG51bGwpXG4gICAgaWYgKCFza3lwZUlkKSB7XG4gICAgICByZXR1cm4gb25FcnJvcigpXG4gICAgfVxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5za3lwZS5jb20vdXNlcnMvJHtza3lwZUlkfS9wcm9maWxlL2F2YXRhcmBcblxuICAgIHNldFN0YXRlKHtcbiAgICAgIHNvdXJjZU5hbWU6ICdza3lwZScsXG4gICAgICBzcmM6IHVybFxuICAgIH0pXG4gIH1cbn1cbiJdfQ==