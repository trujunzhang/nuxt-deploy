"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconSource = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _utils = require("../utils");

var IconSource = function IconSource(props) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, IconSource);
  this.props = void 0;
  this.icon = '✷';

  this.isCompatible = function () {
    return true;
  };

  this.get = function (setState) {
    var _this$props = _this.props,
        color = _this$props.color,
        colors = _this$props.colors;
    setState({
      sourceName: 'icon',
      value: _this.icon,
      color: color || (0, _utils.getRandomColor)(_this.icon, colors)
    });
  };

  this.props = props;
};

exports.IconSource = IconSource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VyY2VzL0ljb24udHMiXSwibmFtZXMiOlsiSWNvblNvdXJjZSIsInByb3BzIiwiaWNvbiIsImlzQ29tcGF0aWJsZSIsImdldCIsInNldFN0YXRlIiwiY29sb3IiLCJjb2xvcnMiLCJzb3VyY2VOYW1lIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0lBT2FBLFUsR0FJWCxvQkFBWUMsS0FBWixFQUFnQztBQUFBOztBQUFBO0FBQUEsT0FIeEJBLEtBR3dCO0FBQUEsT0FGeEJDLElBRXdCLEdBRmpCLEdBRWlCOztBQUFBLE9BSWhDQyxZQUpnQyxHQUlqQjtBQUFBLFdBQU0sSUFBTjtBQUFBLEdBSmlCOztBQUFBLE9BTWhDQyxHQU5nQyxHQU0xQixVQUFDQyxRQUFELEVBQW1CO0FBQUEsc0JBQ0csS0FBSSxDQUFDSixLQURSO0FBQUEsUUFDZkssS0FEZSxlQUNmQSxLQURlO0FBQUEsUUFDUkMsTUFEUSxlQUNSQSxNQURRO0FBRXZCRixJQUFBQSxRQUFRLENBQUM7QUFDUEcsTUFBQUEsVUFBVSxFQUFFLE1BREw7QUFFUEMsTUFBQUEsS0FBSyxFQUFFLEtBQUksQ0FBQ1AsSUFGTDtBQUdQSSxNQUFBQSxLQUFLLEVBQUVBLEtBQUssSUFBSSwyQkFBZSxLQUFJLENBQUNKLElBQXBCLEVBQTBCSyxNQUExQjtBQUhULEtBQUQsQ0FBUjtBQUtELEdBYitCOztBQUM5QixPQUFLTixLQUFMLEdBQWFBLEtBQWI7QUFDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UmFuZG9tQ29sb3IgfSBmcm9tICcuLi91dGlscydcblxuZXhwb3J0IGludGVyZmFjZSBJSWNvblNvdXJjZSB7XG4gIGNvbG9yPzogc3RyaW5nXG4gIGNvbG9ycz86IHN0cmluZ1tdXG59XG5cbmV4cG9ydCBjbGFzcyBJY29uU291cmNlIHtcbiAgcHJpdmF0ZSBwcm9wczogSUljb25Tb3VyY2VcbiAgcHJpdmF0ZSBpY29uID0gJ+KctydcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogSUljb25Tb3VyY2UpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHNcbiAgfVxuXG4gIGlzQ29tcGF0aWJsZSA9ICgpID0+IHRydWVcblxuICBnZXQgPSAoc2V0U3RhdGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgY29sb3IsIGNvbG9ycyB9ID0gdGhpcy5wcm9wc1xuICAgIHNldFN0YXRlKHtcbiAgICAgIHNvdXJjZU5hbWU6ICdpY29uJyxcbiAgICAgIHZhbHVlOiB0aGlzLmljb24sXG4gICAgICBjb2xvcjogY29sb3IgfHwgZ2V0UmFuZG9tQ29sb3IodGhpcy5pY29uLCBjb2xvcnMpXG4gICAgfSlcbiAgfVxufVxuIl19