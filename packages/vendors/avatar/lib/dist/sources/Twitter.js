"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwitterSource = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var TwitterSource = /*#__PURE__*/function () {
  function TwitterSource(props) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, TwitterSource);
    this.props = void 0;

    this.isCompatible = function () {
      return !!_this.props.twitterHandle;
    };

    this.get = function (setState) {
      var twitterHandle = _this.props.twitterHandle;

      var size = _this.getImageSize();

      var url = "https://twitter.com/".concat(twitterHandle, "/profile_image?size=").concat(size);
      setState({
        sourceName: 'twitter',
        src: url
      });
    };

    this.props = props;
  }

  (0, _createClass2["default"])(TwitterSource, [{
    key: "getImageSize",
    value: function getImageSize() {
      var size = this.props.size;

      if (size <= 24) {
        return 'mini';
      }

      if (size <= 48) {
        return 'normal';
      }

      if (size <= 73) {
        return 'bigger';
      }

      return 'original';
    }
  }]);
  return TwitterSource;
}();

exports.TwitterSource = TwitterSource;
TwitterSource.propTypes = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VyY2VzL1R3aXR0ZXIudHMiXSwibmFtZXMiOlsiVHdpdHRlclNvdXJjZSIsInByb3BzIiwiaXNDb21wYXRpYmxlIiwidHdpdHRlckhhbmRsZSIsImdldCIsInNldFN0YXRlIiwic2l6ZSIsImdldEltYWdlU2l6ZSIsInVybCIsInNvdXJjZU5hbWUiLCJzcmMiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFRYUEsYTtBQUtYLHlCQUFZQyxLQUFaLEVBQW1DO0FBQUE7O0FBQUE7QUFBQSxTQUYzQkEsS0FFMkI7O0FBQUEsU0FJbkNDLFlBSm1DLEdBSXBCLFlBQU07QUFDbkIsYUFBTyxDQUFDLENBQUMsS0FBSSxDQUFDRCxLQUFMLENBQVdFLGFBQXBCO0FBQ0QsS0FOa0M7O0FBQUEsU0EwQm5DQyxHQTFCbUMsR0EwQjdCLFVBQUNDLFFBQUQsRUFBbUI7QUFBQSxVQUNmRixhQURlLEdBQ0csS0FBSSxDQUFDRixLQURSLENBQ2ZFLGFBRGU7O0FBRXZCLFVBQU1HLElBQUksR0FBRyxLQUFJLENBQUNDLFlBQUwsRUFBYjs7QUFFQSxVQUFNQyxHQUFHLGlDQUEwQkwsYUFBMUIsaUNBQThERyxJQUE5RCxDQUFUO0FBRUFELE1BQUFBLFFBQVEsQ0FBQztBQUNQSSxRQUFBQSxVQUFVLEVBQUUsU0FETDtBQUVQQyxRQUFBQSxHQUFHLEVBQUVGO0FBRkUsT0FBRCxDQUFSO0FBSUQsS0FwQ2tDOztBQUNqQyxTQUFLUCxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzttQ0FNYztBQUFBLFVBQ0xLLElBREssR0FDSSxLQUFLTCxLQURULENBQ0xLLElBREs7O0FBR2IsVUFBSUEsSUFBSSxJQUFJLEVBQVosRUFBZ0I7QUFDZCxlQUFPLE1BQVA7QUFDRDs7QUFFRCxVQUFJQSxJQUFJLElBQUksRUFBWixFQUFnQjtBQUNkLGVBQU8sUUFBUDtBQUNEOztBQUVELFVBQUlBLElBQUksSUFBSSxFQUFaLEVBQWdCO0FBQ2QsZUFBTyxRQUFQO0FBQ0Q7O0FBRUQsYUFBTyxVQUFQO0FBQ0Q7Ozs7OztBQTdCVU4sYSxDQUNKVyxTLEdBQVksRSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSVR3aXR0ZXJCYXNlU291cmNlIHtcbiAgdHdpdHRlckhhbmRsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUd2l0dGVyU291cmNlIGV4dGVuZHMgSVR3aXR0ZXJCYXNlU291cmNlIHtcbiAgc2l6ZTogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBUd2l0dGVyU291cmNlIHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHt9XG5cbiAgcHJpdmF0ZSBwcm9wczogSVR3aXR0ZXJTb3VyY2VcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSVR3aXR0ZXJTb3VyY2UpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHNcbiAgfVxuXG4gIGlzQ29tcGF0aWJsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gISF0aGlzLnByb3BzLnR3aXR0ZXJIYW5kbGVcbiAgfVxuXG4gIGdldEltYWdlU2l6ZSgpIHtcbiAgICBjb25zdCB7IHNpemUgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChzaXplIDw9IDI0KSB7XG4gICAgICByZXR1cm4gJ21pbmknXG4gICAgfVxuXG4gICAgaWYgKHNpemUgPD0gNDgpIHtcbiAgICAgIHJldHVybiAnbm9ybWFsJ1xuICAgIH1cblxuICAgIGlmIChzaXplIDw9IDczKSB7XG4gICAgICByZXR1cm4gJ2JpZ2dlcidcbiAgICB9XG5cbiAgICByZXR1cm4gJ29yaWdpbmFsJ1xuICB9XG5cbiAgZ2V0ID0gKHNldFN0YXRlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IHR3aXR0ZXJIYW5kbGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzaXplID0gdGhpcy5nZXRJbWFnZVNpemUoKVxuXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vdHdpdHRlci5jb20vJHt0d2l0dGVySGFuZGxlfS9wcm9maWxlX2ltYWdlP3NpemU9JHtzaXplfWBcblxuICAgIHNldFN0YXRlKHtcbiAgICAgIHNvdXJjZU5hbWU6ICd0d2l0dGVyJyxcbiAgICAgIHNyYzogdXJsXG4gICAgfSlcbiAgfVxufVxuIl19