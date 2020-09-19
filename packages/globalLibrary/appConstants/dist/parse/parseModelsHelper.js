"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParseModelsHelper = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ParseModelsHelper = /*#__PURE__*/function () {
  function ParseModelsHelper() {
    (0, _classCallCheck2["default"])(this, ParseModelsHelper);
  }

  (0, _createClass2["default"])(ParseModelsHelper, null, [{
    key: "getUniqueId",
    value: function getUniqueId(map) {
      var id = map.id;
      var uniqueId = map.get('uniqueId') || id;

      if (!!uniqueId && uniqueId === '') {
        uniqueId = id;
      }

      return uniqueId;
    }
  }, {
    key: "getSyncPostedAt",
    value: function getSyncPostedAt(map) {
      var updatedAt = map.get('updatedAt');
      var syncPostedAt = map.get('syncPostedAt');

      if (syncPostedAt === undefined) {
        return updatedAt;
      }

      if (!!syncPostedAt) {
        return syncPostedAt;
      }

      return updatedAt;
    }
  }]);
  return ParseModelsHelper;
}();

exports.ParseModelsHelper = ParseModelsHelper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZS9wYXJzZU1vZGVsc0hlbHBlci50cyJdLCJuYW1lcyI6WyJQYXJzZU1vZGVsc0hlbHBlciIsIm1hcCIsImlkIiwidW5pcXVlSWQiLCJnZXQiLCJ1cGRhdGVkQXQiLCJzeW5jUG9zdGVkQXQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBYUEsaUI7Ozs7Ozs7Z0NBQ1FDLEcsRUFBbUI7QUFDcEMsVUFBTUMsRUFBRSxHQUFHRCxHQUFHLENBQUNDLEVBQWY7QUFDQSxVQUFJQyxRQUFRLEdBQUdGLEdBQUcsQ0FBQ0csR0FBSixDQUFRLFVBQVIsS0FBdUJGLEVBQXRDOztBQUNBLFVBQUksQ0FBQyxDQUFDQyxRQUFGLElBQWNBLFFBQVEsS0FBSyxFQUEvQixFQUFtQztBQUNqQ0EsUUFBQUEsUUFBUSxHQUFHRCxFQUFYO0FBQ0Q7O0FBQ0QsYUFBT0MsUUFBUDtBQUNEOzs7b0NBRXNCRixHLEVBQW1CO0FBQ3hDLFVBQU1JLFNBQVMsR0FBR0osR0FBRyxDQUFDRyxHQUFKLENBQVEsV0FBUixDQUFsQjtBQUNBLFVBQU1FLFlBQVksR0FBR0wsR0FBRyxDQUFDRyxHQUFKLENBQVEsY0FBUixDQUFyQjs7QUFDQSxVQUFJRSxZQUFZLEtBQUtDLFNBQXJCLEVBQWdDO0FBQzlCLGVBQU9GLFNBQVA7QUFDRDs7QUFDRCxVQUFJLENBQUMsQ0FBQ0MsWUFBTixFQUFvQjtBQUNsQixlQUFPQSxZQUFQO0FBQ0Q7O0FBQ0QsYUFBT0QsU0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBhcnNlTW9kZWxzSGVscGVyIHtcbiAgc3RhdGljIGdldFVuaXF1ZUlkKG1hcDogSVBhcnNlT2JqZWN0KSB7XG4gICAgY29uc3QgaWQgPSBtYXAuaWRcbiAgICBsZXQgdW5pcXVlSWQgPSBtYXAuZ2V0KCd1bmlxdWVJZCcpIHx8IGlkXG4gICAgaWYgKCEhdW5pcXVlSWQgJiYgdW5pcXVlSWQgPT09ICcnKSB7XG4gICAgICB1bmlxdWVJZCA9IGlkXG4gICAgfVxuICAgIHJldHVybiB1bmlxdWVJZFxuICB9XG5cbiAgc3RhdGljIGdldFN5bmNQb3N0ZWRBdChtYXA6IElQYXJzZU9iamVjdCkge1xuICAgIGNvbnN0IHVwZGF0ZWRBdCA9IG1hcC5nZXQoJ3VwZGF0ZWRBdCcpXG4gICAgY29uc3Qgc3luY1Bvc3RlZEF0ID0gbWFwLmdldCgnc3luY1Bvc3RlZEF0JylcbiAgICBpZiAoc3luY1Bvc3RlZEF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1cGRhdGVkQXRcbiAgICB9XG4gICAgaWYgKCEhc3luY1Bvc3RlZEF0KSB7XG4gICAgICByZXR1cm4gc3luY1Bvc3RlZEF0XG4gICAgfVxuICAgIHJldHVybiB1cGRhdGVkQXRcbiAgfVxufVxuIl19