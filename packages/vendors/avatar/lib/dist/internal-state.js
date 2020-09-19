"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var InternalState = /*#__PURE__*/function () {
  function InternalState() {
    (0, _classCallCheck2["default"])(this, InternalState);
    this.sourcePointer = void 0;
    this.active = void 0;
    this.fetch = void 0;
    this.sourcePointer = 0;
    this.active = true;
    this.fetch = null;
  }

  (0, _createClass2["default"])(InternalState, [{
    key: "isActive",
    value: function isActive() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // Internal state has been reset => we received new props
      if (state.internal !== this) {
        return false;
      }

      if (!this.fetch) {
        return false;
      }

      if (this.active !== true) {
        return false;
      }

      return true;
    }
  }]);
  return InternalState;
}();

exports["default"] = InternalState;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnRlcm5hbC1zdGF0ZS50cyJdLCJuYW1lcyI6WyJJbnRlcm5hbFN0YXRlIiwic291cmNlUG9pbnRlciIsImFjdGl2ZSIsImZldGNoIiwic3RhdGUiLCJpbnRlcm5hbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQU1xQkEsYTtBQUtuQiwyQkFBYztBQUFBO0FBQUEsU0FKTkMsYUFJTTtBQUFBLFNBSE5DLE1BR007QUFBQSxTQUZOQyxLQUVNO0FBQ1osU0FBS0YsYUFBTCxHQUFxQixDQUFyQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDRDs7OzsrQkFFeUI7QUFBQSxVQUFqQkMsS0FBaUIsdUVBQUosRUFBSTs7QUFDeEI7QUFDQSxVQUFJQSxLQUFLLENBQUNDLFFBQU4sS0FBbUIsSUFBdkIsRUFBNkI7QUFDM0IsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDLEtBQUtGLEtBQVYsRUFBaUI7QUFDZixlQUFPLEtBQVA7QUFDRDs7QUFFRCxVQUFJLEtBQUtELE1BQUwsS0FBZ0IsSUFBcEIsRUFBMEI7QUFDeEIsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsYUFBTyxJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElJbnRlcm5hbFN0YXRlIHtcbiAgLy8gdGhpcy5zb3VyY2VQb2ludGVyID0gMDtcbiAgLy8gdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAvLyB0aGlzLmZldGNoID0gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJuYWxTdGF0ZSB7XG4gIHByaXZhdGUgc291cmNlUG9pbnRlcjogbnVtYmVyXG4gIHByaXZhdGUgYWN0aXZlOiBib29sZWFuXG4gIHByaXZhdGUgZmV0Y2g6IG51bGxcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNvdXJjZVBvaW50ZXIgPSAwXG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlXG4gICAgdGhpcy5mZXRjaCA9IG51bGxcbiAgfVxuXG4gIGlzQWN0aXZlKHN0YXRlOiBhbnkgPSB7fSkge1xuICAgIC8vIEludGVybmFsIHN0YXRlIGhhcyBiZWVuIHJlc2V0ID0+IHdlIHJlY2VpdmVkIG5ldyBwcm9wc1xuICAgIGlmIChzdGF0ZS5pbnRlcm5hbCAhPT0gdGhpcykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmZldGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3RpdmUgIT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbiJdfQ==