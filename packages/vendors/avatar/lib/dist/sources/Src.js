"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SrcSource = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var SrcSource = function SrcSource(props) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, SrcSource);
  this.props = void 0;

  this.isCompatible = function () {
    return !!_this.props.src;
  };

  this.get = function (setState) {
    setState({
      sourceName: 'src',
      src: _this.props.src
    });
  };

  this.props = props;
};

exports.SrcSource = SrcSource;
SrcSource.propTypes = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VyY2VzL1NyYy50cyJdLCJuYW1lcyI6WyJTcmNTb3VyY2UiLCJwcm9wcyIsImlzQ29tcGF0aWJsZSIsInNyYyIsImdldCIsInNldFN0YXRlIiwic291cmNlTmFtZSIsInByb3BUeXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFJYUEsUyxHQUtYLG1CQUFZQyxLQUFaLEVBQStCO0FBQUE7O0FBQUE7QUFBQSxPQUZ2QkEsS0FFdUI7O0FBQUEsT0FJL0JDLFlBSitCLEdBSWhCO0FBQUEsV0FBTSxDQUFDLENBQUMsS0FBSSxDQUFDRCxLQUFMLENBQVdFLEdBQW5CO0FBQUEsR0FKZ0I7O0FBQUEsT0FNL0JDLEdBTitCLEdBTXpCLFVBQUNDLFFBQUQsRUFBbUI7QUFDdkJBLElBQUFBLFFBQVEsQ0FBQztBQUNQQyxNQUFBQSxVQUFVLEVBQUUsS0FETDtBQUVQSCxNQUFBQSxHQUFHLEVBQUUsS0FBSSxDQUFDRixLQUFMLENBQVdFO0FBRlQsS0FBRCxDQUFSO0FBSUQsR0FYOEI7O0FBQzdCLE9BQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNELEM7OztBQVBVRCxTLENBQ0pPLFMsR0FBWSxFIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJU3JjU291cmNlIHtcbiAgc3JjPzogc3RyaW5nIHwgbnVsbFxufVxuXG5leHBvcnQgY2xhc3MgU3JjU291cmNlIHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHt9XG5cbiAgcHJpdmF0ZSBwcm9wczogSVNyY1NvdXJjZVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJU3JjU291cmNlKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzXG4gIH1cblxuICBpc0NvbXBhdGlibGUgPSAoKSA9PiAhIXRoaXMucHJvcHMuc3JjXG5cbiAgZ2V0ID0gKHNldFN0YXRlOiBhbnkpID0+IHtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBzb3VyY2VOYW1lOiAnc3JjJyxcbiAgICAgIHNyYzogdGhpcy5wcm9wcy5zcmNcbiAgICB9KVxuICB9XG59XG4iXX0=