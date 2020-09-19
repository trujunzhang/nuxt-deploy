"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerHelper = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ServerHelper = /*#__PURE__*/function () {
  function ServerHelper(appDirName) {
    (0, _classCallCheck2["default"])(this, ServerHelper);
    this.projectRootPath = void 0;
    this.projectRootPath = appDirName.replace('/production-server', '');
    console.log('');
    console.log('dirname: ', appDirName);
    console.log('projectRootPath: ', this.projectRootPath);
    console.log('');
  }

  (0, _createClass2["default"])(ServerHelper, [{
    key: "getProjectRootPath",
    value: function getProjectRootPath() {
      return this.projectRootPath;
    }
  }, {
    key: "resolve",
    value: function resolve(path) {
      return this.projectRootPath + '/' + path;
    }
  }, {
    key: "getCloudPath",
    value: function getCloudPath() {
      return this.projectRootPath + '/production-cloud/main.js';
    }
  }, {
    key: "getPublicPath",
    value: function getPublicPath(path) {
      return path.join(this.projectRootPath, 'public');
    }
  }, {
    key: "getStaticPath",
    value: function getStaticPath(path) {
      return path.join(this.projectRootPath, 'static');
    }
  }, {
    key: "getUploadFilesPath",
    value: function getUploadFilesPath(path) {
      return path.join(this.projectRootPath, 'uploads');
    }
  }]);
  return ServerHelper;
}();

exports.ServerHelper = ServerHelper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy93ZWJVdGlscy9zZXJ2ZXJIZWxwZXIudHMiXSwibmFtZXMiOlsiU2VydmVySGVscGVyIiwiYXBwRGlyTmFtZSIsInByb2plY3RSb290UGF0aCIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwicGF0aCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFTYUEsWTtBQUdYLHdCQUFZQyxVQUFaLEVBQXdCO0FBQUE7QUFBQSxTQUZoQkMsZUFFZ0I7QUFDdEIsU0FBS0EsZUFBTCxHQUF1QkQsVUFBVSxDQUFDRSxPQUFYLENBQW1CLG9CQUFuQixFQUF5QyxFQUF6QyxDQUF2QjtBQUVBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxFQUFaO0FBQ0FELElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJKLFVBQXpCO0FBQ0FHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDLEtBQUtILGVBQXRDO0FBQ0FFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEVBQVo7QUFDRDs7Ozt5Q0FFb0I7QUFDbkIsYUFBTyxLQUFLSCxlQUFaO0FBQ0Q7Ozs0QkFFT0ksSSxFQUFjO0FBQ3BCLGFBQU8sS0FBS0osZUFBTCxHQUF1QixHQUF2QixHQUE2QkksSUFBcEM7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLSixlQUFMLEdBQXVCLDJCQUE5QjtBQUNEOzs7a0NBRWFJLEksRUFBVztBQUN2QixhQUFPQSxJQUFJLENBQUNDLElBQUwsQ0FBVSxLQUFLTCxlQUFmLEVBQWdDLFFBQWhDLENBQVA7QUFDRDs7O2tDQUNhSSxJLEVBQVc7QUFDdkIsYUFBT0EsSUFBSSxDQUFDQyxJQUFMLENBQVUsS0FBS0wsZUFBZixFQUFnQyxRQUFoQyxDQUFQO0FBQ0Q7Ozt1Q0FDa0JJLEksRUFBVztBQUM1QixhQUFPQSxJQUFJLENBQUNDLElBQUwsQ0FBVSxLQUFLTCxlQUFmLEVBQWdDLFNBQWhDLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJU2VydmVySGVscGVyIHtcbiAgZ2V0UHJvamVjdFJvb3RQYXRoKCk6IHN0cmluZ1xuICByZXNvbHZlKHBhdGg6IHN0cmluZyk6IHN0cmluZ1xuICBnZXRDbG91ZFBhdGgoKTogc3RyaW5nXG4gIGdldFB1YmxpY1BhdGgocGF0aDogYW55KTogc3RyaW5nXG4gIGdldFN0YXRpY1BhdGgocGF0aDogYW55KTogc3RyaW5nXG4gIGdldFVwbG9hZEZpbGVzUGF0aChwYXRoOiBhbnkpOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIFNlcnZlckhlbHBlciBpbXBsZW1lbnRzIElTZXJ2ZXJIZWxwZXIge1xuICBwcml2YXRlIHByb2plY3RSb290UGF0aDogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoYXBwRGlyTmFtZSkge1xuICAgIHRoaXMucHJvamVjdFJvb3RQYXRoID0gYXBwRGlyTmFtZS5yZXBsYWNlKCcvcHJvZHVjdGlvbi1zZXJ2ZXInLCAnJylcblxuICAgIGNvbnNvbGUubG9nKCcnKVxuICAgIGNvbnNvbGUubG9nKCdkaXJuYW1lOiAnLCBhcHBEaXJOYW1lKVxuICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0Um9vdFBhdGg6ICcsIHRoaXMucHJvamVjdFJvb3RQYXRoKVxuICAgIGNvbnNvbGUubG9nKCcnKVxuICB9XG5cbiAgZ2V0UHJvamVjdFJvb3RQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3RSb290UGF0aFxuICB9XG5cbiAgcmVzb2x2ZShwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0Um9vdFBhdGggKyAnLycgKyBwYXRoXG4gIH1cblxuICBnZXRDbG91ZFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdFJvb3RQYXRoICsgJy9wcm9kdWN0aW9uLWNsb3VkL21haW4uanMnXG4gIH1cblxuICBnZXRQdWJsaWNQYXRoKHBhdGg6IGFueSkge1xuICAgIHJldHVybiBwYXRoLmpvaW4odGhpcy5wcm9qZWN0Um9vdFBhdGgsICdwdWJsaWMnKVxuICB9XG4gIGdldFN0YXRpY1BhdGgocGF0aDogYW55KSB7XG4gICAgcmV0dXJuIHBhdGguam9pbih0aGlzLnByb2plY3RSb290UGF0aCwgJ3N0YXRpYycpXG4gIH1cbiAgZ2V0VXBsb2FkRmlsZXNQYXRoKHBhdGg6IGFueSkge1xuICAgIHJldHVybiBwYXRoLmpvaW4odGhpcy5wcm9qZWN0Um9vdFBhdGgsICd1cGxvYWRzJylcbiAgfVxufVxuIl19