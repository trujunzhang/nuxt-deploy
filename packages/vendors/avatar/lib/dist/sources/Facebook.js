"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FacebookSource = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var FacebookSource = function FacebookSource(props) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, FacebookSource);
  this.props = void 0;

  this.isCompatible = function () {
    return !!_this.props.facebookId;
  };

  this.get = function (setState) {
    var _this$props = _this.props,
        size = _this$props.size,
        facebookId = _this$props.facebookId;
    var url = 'https://graph.facebook.com/' + "".concat(facebookId, "/picture?width=").concat(size, "&height=").concat(size);
    setState({
      sourceName: 'facebook',
      src: url
    });
  };

  this.props = props;
};

exports.FacebookSource = FacebookSource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VyY2VzL0ZhY2Vib29rLnRzIl0sIm5hbWVzIjpbIkZhY2Vib29rU291cmNlIiwicHJvcHMiLCJpc0NvbXBhdGlibGUiLCJmYWNlYm9va0lkIiwiZ2V0Iiwic2V0U3RhdGUiLCJzaXplIiwidXJsIiwic291cmNlTmFtZSIsInNyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFPYUEsYyxHQUdYLHdCQUFZQyxLQUFaLEVBQW9DO0FBQUE7O0FBQUE7QUFBQSxPQUY1QkEsS0FFNEI7O0FBQUEsT0FJcENDLFlBSm9DLEdBSXJCO0FBQUEsV0FBTSxDQUFDLENBQUMsS0FBSSxDQUFDRCxLQUFMLENBQVdFLFVBQW5CO0FBQUEsR0FKcUI7O0FBQUEsT0FNcENDLEdBTm9DLEdBTTlCLFVBQUNDLFFBQUQsRUFBbUI7QUFBQSxzQkFDTSxLQUFJLENBQUNKLEtBRFg7QUFBQSxRQUNmSyxJQURlLGVBQ2ZBLElBRGU7QUFBQSxRQUNUSCxVQURTLGVBQ1RBLFVBRFM7QUFFdkIsUUFBTUksR0FBRyxHQUFHLDBDQUFtQ0osVUFBbkMsNEJBQStERyxJQUEvRCxxQkFBOEVBLElBQTlFLENBQVo7QUFFQUQsSUFBQUEsUUFBUSxDQUFDO0FBQ1BHLE1BQUFBLFVBQVUsRUFBRSxVQURMO0FBRVBDLE1BQUFBLEdBQUcsRUFBRUY7QUFGRSxLQUFELENBQVI7QUFJRCxHQWRtQzs7QUFDbEMsT0FBS04sS0FBTCxHQUFhQSxLQUFiO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSUZhY2Vib29rQmFzZVNvdXJjZSB7XG4gIGZhY2Vib29rSWQ/OiBzdHJpbmdcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUZhY2Vib29rU291cmNlIGV4dGVuZHMgSUZhY2Vib29rQmFzZVNvdXJjZSB7XG4gIHNpemU6IG51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgRmFjZWJvb2tTb3VyY2Uge1xuICBwcml2YXRlIHByb3BzOiBJRmFjZWJvb2tTb3VyY2VcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSUZhY2Vib29rU291cmNlKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXG4gIH1cblxuICBpc0NvbXBhdGlibGUgPSAoKSA9PiAhIXRoaXMucHJvcHMuZmFjZWJvb2tJZFxuXG4gIGdldCA9IChzZXRTdGF0ZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBzaXplLCBmYWNlYm9va0lkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tLycgKyBgJHtmYWNlYm9va0lkfS9waWN0dXJlP3dpZHRoPSR7c2l6ZX0maGVpZ2h0PSR7c2l6ZX1gXG5cbiAgICBzZXRTdGF0ZSh7XG4gICAgICBzb3VyY2VOYW1lOiAnZmFjZWJvb2snLFxuICAgICAgc3JjOiB1cmxcbiAgICB9KVxuICB9XG59XG4iXX0=