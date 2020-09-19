"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValueSource = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _utils = require("../utils");

var ValueSource = /*#__PURE__*/function () {
  function ValueSource(props) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, ValueSource);
    this.props = void 0;

    this.isCompatible = function () {
      return !!(_this.props.name || _this.props.value || _this.props.email);
    };

    this.get = function (setState) {
      var value = _this.getValue();

      if (!value) {
        return setState(null);
      }

      setState({
        sourceName: 'text',
        value: value,
        color: _this.getColor()
      });
    };

    this.props = props;
  }

  (0, _createClass2["default"])(ValueSource, [{
    key: "getInitials",
    value: function getInitials() {
      var _this$props = this.props,
          name = _this$props.name,
          initials = _this$props.initials;

      if (typeof initials === 'string') {
        return initials;
      }

      if (typeof initials === 'function') {
        return initials(name, this.props);
      }

      return (0, _utils.defaultInitials)(name || '', this.props);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if (this.props.name) {
        return this.getInitials();
      }

      if (this.props.value) {
        return this.props.value;
      }

      return null;
    }
  }, {
    key: "getColor",
    value: function getColor() {
      var _this$props2 = this.props,
          color = _this$props2.color,
          colors = _this$props2.colors,
          name = _this$props2.name,
          email = _this$props2.email,
          value = _this$props2.value;
      var colorValue = name || email || value;
      return color || (0, _utils.getRandomColor)(colorValue, colors);
    }
  }]);
  return ValueSource;
}();

exports.ValueSource = ValueSource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VyY2VzL1ZhbHVlLnRzIl0sIm5hbWVzIjpbIlZhbHVlU291cmNlIiwicHJvcHMiLCJpc0NvbXBhdGlibGUiLCJuYW1lIiwidmFsdWUiLCJlbWFpbCIsImdldCIsInNldFN0YXRlIiwiZ2V0VmFsdWUiLCJzb3VyY2VOYW1lIiwiY29sb3IiLCJnZXRDb2xvciIsImluaXRpYWxzIiwiZ2V0SW5pdGlhbHMiLCJjb2xvcnMiLCJjb2xvclZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0lBYWFBLFc7QUFHWCx1QkFBWUMsS0FBWixFQUFpQztBQUFBOztBQUFBO0FBQUEsU0FGekJBLEtBRXlCOztBQUFBLFNBSWpDQyxZQUppQyxHQUlsQixZQUFNO0FBQ25CLGFBQU8sQ0FBQyxFQUFFLEtBQUksQ0FBQ0QsS0FBTCxDQUFXRSxJQUFYLElBQW1CLEtBQUksQ0FBQ0YsS0FBTCxDQUFXRyxLQUE5QixJQUF1QyxLQUFJLENBQUNILEtBQUwsQ0FBV0ksS0FBcEQsQ0FBUjtBQUNELEtBTmdDOztBQUFBLFNBd0NqQ0MsR0F4Q2lDLEdBd0MzQixVQUFDQyxRQUFELEVBQW1CO0FBQ3ZCLFVBQU1ILEtBQUssR0FBRyxLQUFJLENBQUNJLFFBQUwsRUFBZDs7QUFFQSxVQUFJLENBQUNKLEtBQUwsRUFBWTtBQUNWLGVBQU9HLFFBQVEsQ0FBQyxJQUFELENBQWY7QUFDRDs7QUFFREEsTUFBQUEsUUFBUSxDQUFDO0FBQ1BFLFFBQUFBLFVBQVUsRUFBRSxNQURMO0FBRVBMLFFBQUFBLEtBQUssRUFBTEEsS0FGTztBQUdQTSxRQUFBQSxLQUFLLEVBQUUsS0FBSSxDQUFDQyxRQUFMO0FBSEEsT0FBRCxDQUFSO0FBS0QsS0FwRGdDOztBQUMvQixTQUFLVixLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OztrQ0FNYTtBQUFBLHdCQUNlLEtBQUtBLEtBRHBCO0FBQUEsVUFDSkUsSUFESSxlQUNKQSxJQURJO0FBQUEsVUFDRVMsUUFERixlQUNFQSxRQURGOztBQUdaLFVBQUksT0FBT0EsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQyxlQUFPQSxRQUFQO0FBQ0Q7O0FBRUQsVUFBSSxPQUFPQSxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2xDLGVBQU9BLFFBQVEsQ0FBQ1QsSUFBRCxFQUFPLEtBQUtGLEtBQVosQ0FBZjtBQUNEOztBQUVELGFBQU8sNEJBQWdCRSxJQUFJLElBQUksRUFBeEIsRUFBNEIsS0FBS0YsS0FBakMsQ0FBUDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJLEtBQUtBLEtBQUwsQ0FBV0UsSUFBZixFQUFxQjtBQUNuQixlQUFPLEtBQUtVLFdBQUwsRUFBUDtBQUNEOztBQUVELFVBQUksS0FBS1osS0FBTCxDQUFXRyxLQUFmLEVBQXNCO0FBQ3BCLGVBQU8sS0FBS0gsS0FBTCxDQUFXRyxLQUFsQjtBQUNEOztBQUVELGFBQU8sSUFBUDtBQUNEOzs7K0JBRVU7QUFBQSx5QkFDcUMsS0FBS0gsS0FEMUM7QUFBQSxVQUNEUyxLQURDLGdCQUNEQSxLQURDO0FBQUEsVUFDTUksTUFETixnQkFDTUEsTUFETjtBQUFBLFVBQ2NYLElBRGQsZ0JBQ2NBLElBRGQ7QUFBQSxVQUNvQkUsS0FEcEIsZ0JBQ29CQSxLQURwQjtBQUFBLFVBQzJCRCxLQUQzQixnQkFDMkJBLEtBRDNCO0FBRVQsVUFBTVcsVUFBVSxHQUFHWixJQUFJLElBQUlFLEtBQVIsSUFBaUJELEtBQXBDO0FBQ0EsYUFBT00sS0FBSyxJQUFJLDJCQUFlSyxVQUFmLEVBQTJCRCxNQUEzQixDQUFoQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UmFuZG9tQ29sb3IsIGRlZmF1bHRJbml0aWFscyB9IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElWYWx1ZVNvdXJjZSB7XG4gIGNvbG9yPzogc3RyaW5nXG4gIGNvbG9ycz86IHN0cmluZ1tdXG4gIG5hbWU/OiBzdHJpbmdcbiAgdmFsdWU/OiBzdHJpbmcgfCBudWxsXG4gIC8vIHZhbHVlPzogc3RyaW5nXG4gIGVtYWlsPzogc3RyaW5nXG4gIG1heEluaXRpYWxzPzogbnVtYmVyXG4gIGluaXRpYWxzPzogc3RyaW5nIHwgYW55XG59XG5cbmV4cG9ydCBjbGFzcyBWYWx1ZVNvdXJjZSB7XG4gIHByaXZhdGUgcHJvcHM6IElWYWx1ZVNvdXJjZVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJVmFsdWVTb3VyY2UpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHNcbiAgfVxuXG4gIGlzQ29tcGF0aWJsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gISEodGhpcy5wcm9wcy5uYW1lIHx8IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy5lbWFpbClcbiAgfVxuXG4gIGdldEluaXRpYWxzKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgaW5pdGlhbHMgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbHNcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaW5pdGlhbHMobmFtZSwgdGhpcy5wcm9wcylcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdEluaXRpYWxzKG5hbWUgfHwgJycsIHRoaXMucHJvcHMpXG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5uYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJbml0aWFscygpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGdldENvbG9yKCkge1xuICAgIGNvbnN0IHsgY29sb3IsIGNvbG9ycywgbmFtZSwgZW1haWwsIHZhbHVlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgY29sb3JWYWx1ZSA9IG5hbWUgfHwgZW1haWwgfHwgdmFsdWVcbiAgICByZXR1cm4gY29sb3IgfHwgZ2V0UmFuZG9tQ29sb3IoY29sb3JWYWx1ZSwgY29sb3JzKVxuICB9XG5cbiAgZ2V0ID0gKHNldFN0YXRlOiBhbnkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKVxuXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHNldFN0YXRlKG51bGwpXG4gICAgfVxuXG4gICAgc2V0U3RhdGUoe1xuICAgICAgc291cmNlTmFtZTogJ3RleHQnLFxuICAgICAgdmFsdWUsXG4gICAgICBjb2xvcjogdGhpcy5nZXRDb2xvcigpXG4gICAgfSlcbiAgfVxufVxuIl19