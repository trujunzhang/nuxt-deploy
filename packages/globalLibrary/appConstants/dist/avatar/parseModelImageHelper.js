"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParseModelImageHelper = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _constants = require("../constants");

var ParseModelImageHelper = /*#__PURE__*/function () {
  function ParseModelImageHelper() {
    (0, _classCallCheck2["default"])(this, ParseModelImageHelper);
  }

  (0, _createClass2["default"])(ParseModelImageHelper, null, [{
    key: "getUserCoverUrl",

    /**
     * @param user
     * @returns {*}
     */
    value: function getUserCoverUrl(user) {
      var coverUrls = user.coverUrls;

      if (!!coverUrls && coverUrls.length > 0) {
        return _constants.StatusConstants.adjustCloudinaryAndEmbedlyUrl(coverUrls[0].url);
      }

      return '';
    }
  }]);
  return ParseModelImageHelper;
}();

exports.ParseModelImageHelper = ParseModelImageHelper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdmF0YXIvcGFyc2VNb2RlbEltYWdlSGVscGVyLnRzIl0sIm5hbWVzIjpbIlBhcnNlTW9kZWxJbWFnZUhlbHBlciIsInVzZXIiLCJjb3ZlclVybHMiLCJsZW5ndGgiLCJTdGF0dXNDb25zdGFudHMiLCJhZGp1c3RDbG91ZGluYXJ5QW5kRW1iZWRseVVybCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVhQSxxQjs7Ozs7Ozs7QUFDWDs7OztvQ0FJdUJDLEksRUFBZ0M7QUFDckQsVUFBTUMsU0FBYyxHQUFHRCxJQUFJLENBQUNDLFNBQTVCOztBQUNBLFVBQUksQ0FBQyxDQUFDQSxTQUFGLElBQWVBLFNBQVMsQ0FBQ0MsTUFBVixHQUFtQixDQUF0QyxFQUF5QztBQUN2QyxlQUFPQywyQkFBZ0JDLDZCQUFoQixDQUE4Q0gsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhSSxHQUEzRCxDQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxFQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0dXNDb25zdGFudHMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5cbmV4cG9ydCBjbGFzcyBQYXJzZU1vZGVsSW1hZ2VIZWxwZXIge1xuICAvKipcbiAgICogQHBhcmFtIHVzZXJcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBzdGF0aWMgZ2V0VXNlckNvdmVyVXJsKHVzZXI6IElQYXJzZU1vZGVsVXNlcnMpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvdmVyVXJsczogYW55ID0gdXNlci5jb3ZlclVybHNcbiAgICBpZiAoISFjb3ZlclVybHMgJiYgY292ZXJVcmxzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBTdGF0dXNDb25zdGFudHMuYWRqdXN0Q2xvdWRpbmFyeUFuZEVtYmVkbHlVcmwoY292ZXJVcmxzWzBdLnVybClcbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cbiJdfQ==