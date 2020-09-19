"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteParserUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _routeParser = _interopRequireDefault(require("route-parser"));

// No require '* as'.
var RouteParserUtils = /*#__PURE__*/function () {
  /**
   * Represents a route
   * @example
   * var route = new Route('/:foo/:bar');
   * @example
   * var route = new Route('/:foo/:bar');
   */
  function RouteParserUtils(spec) {
    (0, _classCallCheck2["default"])(this, RouteParserUtils);
    this.instance = void 0;
    this.instance = new _routeParser["default"](spec);
  }
  /**
   * Match a path against this route, returning the matched parameters if
   * it matches, false if not.
   * @example
   * var route = new Route('/this/is/my/route')
   * route.match('/this/is/my/route') // -> {}
   * @example
   * var route = new Route('/:one/:two')
   * route.match('/foo/bar') // -> {one: 'foo', two: 'bar'}
   */


  (0, _createClass2["default"])(RouteParserUtils, [{
    key: "match",
    value: function match(pathname) {
      var result = this.instance.match(pathname); // if (typeof result !== 'string') {
      // throw new Error(`Parse route url failed!, pathname: ${pathname}`)
      // }

      return result;
    }
    /**
     * Reverse a route specification to a path, returning false if it can't be
     * fulfilled
     * @example
     * var route = new Route('/:one/:two')
     * route.reverse({one: 'foo', two: 'bar'}) -> '/foo/bar'
     */

  }, {
    key: "reverse",
    value: function reverse(params) {
      var result = this.instance.reverse(params);

      if (typeof result !== 'string') {
        throw new Error("Parse route url failed!, pathname: ".concat(JSON.stringify(params)));
      }

      return result;
    }
  }]);
  return RouteParserUtils;
}();

exports.RouteParserUtils = RouteParserUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpY1V0aWxzL3JvdXRlUGFyc2VyVXRpbHMudHMiXSwibmFtZXMiOlsiUm91dGVQYXJzZXJVdGlscyIsInNwZWMiLCJpbnN0YW5jZSIsIlJvdXRlIiwicGF0aG5hbWUiLCJyZXN1bHQiLCJtYXRjaCIsInBhcmFtcyIsInJldmVyc2UiLCJFcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBaUM7SUFFcEJBLGdCO0FBR1g7Ozs7Ozs7QUFPQSw0QkFBWUMsSUFBWixFQUEwQjtBQUFBO0FBQUEsU0FUbEJDLFFBU2tCO0FBQ3hCLFNBQUtBLFFBQUwsR0FBZ0IsSUFBSUMsdUJBQUosQ0FBVUYsSUFBVixDQUFoQjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7OzBCQVVNRyxRLEVBQTBCO0FBQzlCLFVBQU1DLE1BQU0sR0FBRyxLQUFLSCxRQUFMLENBQWNJLEtBQWQsQ0FBb0JGLFFBQXBCLENBQWYsQ0FEOEIsQ0FFOUI7QUFDQTtBQUNBOztBQUNBLGFBQU9DLE1BQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7OzRCQU9RRSxNLEVBQXNDO0FBQzVDLFVBQU1GLE1BQU0sR0FBRyxLQUFLSCxRQUFMLENBQWNNLE9BQWQsQ0FBc0JELE1BQXRCLENBQWY7O0FBQ0EsVUFBSSxPQUFPRixNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzlCLGNBQU0sSUFBSUksS0FBSiw4Q0FBZ0RDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixNQUFmLENBQWhELEVBQU47QUFDRDs7QUFDRCxhQUFPRixNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGUgZnJvbSAncm91dGUtcGFyc2VyJyAvLyBObyByZXF1aXJlICcqIGFzJy5cblxuZXhwb3J0IGNsYXNzIFJvdXRlUGFyc2VyVXRpbHMge1xuICBwcml2YXRlIGluc3RhbmNlOiBhbnlcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIHJvdXRlXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciByb3V0ZSA9IG5ldyBSb3V0ZSgnLzpmb28vOmJhcicpO1xuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgcm91dGUgPSBuZXcgUm91dGUoJy86Zm9vLzpiYXInKTtcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNwZWM6IHN0cmluZykge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUm91dGUoc3BlYylcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRjaCBhIHBhdGggYWdhaW5zdCB0aGlzIHJvdXRlLCByZXR1cm5pbmcgdGhlIG1hdGNoZWQgcGFyYW1ldGVycyBpZlxuICAgKiBpdCBtYXRjaGVzLCBmYWxzZSBpZiBub3QuXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciByb3V0ZSA9IG5ldyBSb3V0ZSgnL3RoaXMvaXMvbXkvcm91dGUnKVxuICAgKiByb3V0ZS5tYXRjaCgnL3RoaXMvaXMvbXkvcm91dGUnKSAvLyAtPiB7fVxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgcm91dGUgPSBuZXcgUm91dGUoJy86b25lLzp0d28nKVxuICAgKiByb3V0ZS5tYXRjaCgnL2Zvby9iYXInKSAvLyAtPiB7b25lOiAnZm9vJywgdHdvOiAnYmFyJ31cbiAgICovXG4gIG1hdGNoKHBhdGhuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuaW5zdGFuY2UubWF0Y2gocGF0aG5hbWUpXG4gICAgLy8gaWYgKHR5cGVvZiByZXN1bHQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKGBQYXJzZSByb3V0ZSB1cmwgZmFpbGVkISwgcGF0aG5hbWU6ICR7cGF0aG5hbWV9YClcbiAgICAvLyB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLyoqXG4gICAqIFJldmVyc2UgYSByb3V0ZSBzcGVjaWZpY2F0aW9uIHRvIGEgcGF0aCwgcmV0dXJuaW5nIGZhbHNlIGlmIGl0IGNhbid0IGJlXG4gICAqIGZ1bGZpbGxlZFxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgcm91dGUgPSBuZXcgUm91dGUoJy86b25lLzp0d28nKVxuICAgKiByb3V0ZS5yZXZlcnNlKHtvbmU6ICdmb28nLCB0d286ICdiYXInfSkgLT4gJy9mb28vYmFyJ1xuICAgKi9cbiAgcmV2ZXJzZShwYXJhbXM6IHsgW2k6IHN0cmluZ106IGFueSB9KTogc3RyaW5nIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmluc3RhbmNlLnJldmVyc2UocGFyYW1zKVxuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQYXJzZSByb3V0ZSB1cmwgZmFpbGVkISwgcGF0aG5hbWU6ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1zKX1gKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cbiJdfQ==