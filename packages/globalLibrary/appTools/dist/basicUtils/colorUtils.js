"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

// import { Color } from 'color'
var Color = require('color');

var ColorHelper = /*#__PURE__*/function () {
  function ColorHelper(obj, model) {
    (0, _classCallCheck2["default"])(this, ColorHelper);
    this.obj = void 0;
    this.model = void 0;
    this.instance = void 0;
    this.obj = obj;
    this.model = model;
    this.instance = Color(obj, model);
  }

  (0, _createClass2["default"])(ColorHelper, [{
    key: "darken",
    value: function darken(ratio) {
      this.instance.darken(ratio);
      return this;
    }
  }, {
    key: "hex",
    value: function hex(val) {
      return this.instance.hex(val);
    }
  }]);
  return ColorHelper;
}();

var ColorUtils = function ColorUtils(obj, model) {
  return Color(obj, model); // return new ColorHelper(obj, model)
};

exports.ColorUtils = ColorUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpY1V0aWxzL2NvbG9yVXRpbHMudHMiXSwibmFtZXMiOlsiQ29sb3IiLCJyZXF1aXJlIiwiQ29sb3JIZWxwZXIiLCJvYmoiLCJtb2RlbCIsImluc3RhbmNlIiwicmF0aW8iLCJkYXJrZW4iLCJ2YWwiLCJoZXgiLCJDb2xvclV0aWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxPQUFELENBQXJCOztJQUVNQyxXO0FBSUosdUJBQVlDLEdBQVosRUFBc0JDLEtBQXRCLEVBQW1DO0FBQUE7QUFBQSxTQUgzQkQsR0FHMkI7QUFBQSxTQUYzQkMsS0FFMkI7QUFBQSxTQUQzQkMsUUFDMkI7QUFDakMsU0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBRUEsU0FBS0MsUUFBTCxHQUFnQkwsS0FBSyxDQUFDRyxHQUFELEVBQU1DLEtBQU4sQ0FBckI7QUFDRDs7OzsyQkFFTUUsSyxFQUFlO0FBQ3BCLFdBQUtELFFBQUwsQ0FBY0UsTUFBZCxDQUFxQkQsS0FBckI7QUFFQSxhQUFPLElBQVA7QUFDRDs7O3dCQUVHRSxHLEVBQVc7QUFDYixhQUFPLEtBQUtILFFBQUwsQ0FBY0ksR0FBZCxDQUFrQkQsR0FBbEIsQ0FBUDtBQUNEOzs7OztBQUdJLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNQLEdBQUQsRUFBV0MsS0FBWCxFQUEyQjtBQUNuRCxTQUFPSixLQUFLLENBQUNHLEdBQUQsRUFBTUMsS0FBTixDQUFaLENBRG1ELENBRW5EO0FBQ0QsQ0FITSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IENvbG9yIH0gZnJvbSAnY29sb3InXG5jb25zdCBDb2xvciA9IHJlcXVpcmUoJ2NvbG9yJylcblxuY2xhc3MgQ29sb3JIZWxwZXIge1xuICBwcml2YXRlIG9iajogYW55XG4gIHByaXZhdGUgbW9kZWw6IGFueVxuICBwcml2YXRlIGluc3RhbmNlOiBhbnlcbiAgY29uc3RydWN0b3Iob2JqOiBhbnksIG1vZGVsPzogYW55KSB7XG4gICAgdGhpcy5vYmogPSBvYmpcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcblxuICAgIHRoaXMuaW5zdGFuY2UgPSBDb2xvcihvYmosIG1vZGVsKVxuICB9XG5cbiAgZGFya2VuKHJhdGlvOiBudW1iZXIpIHtcbiAgICB0aGlzLmluc3RhbmNlLmRhcmtlbihyYXRpbylcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBoZXgodmFsPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UuaGV4KHZhbClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ29sb3JVdGlscyA9IChvYmo6IGFueSwgbW9kZWw/OiBhbnkpID0+IHtcbiAgcmV0dXJuIENvbG9yKG9iaiwgbW9kZWwpXG4gIC8vIHJldHVybiBuZXcgQ29sb3JIZWxwZXIob2JqLCBtb2RlbClcbn1cbiJdfQ==