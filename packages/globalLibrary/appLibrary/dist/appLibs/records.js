"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Records = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

// import { ParseObjects } from '@appModels/index'
var Records = /*#__PURE__*/function () {
  function Records() {
    (0, _classCallCheck2["default"])(this, Records);
  }

  (0, _createClass2["default"])(Records, null, [{
    key: "toFirstUpperString",
    value: function toFirstUpperString(name) {
      return name.charAt(0).toUpperCase() + name.slice(1);
    } // static setParseObjectFieldWithoutDataBySchema(
    //   objectSchemaName: string,
    //   instance,
    //   parseInstanceId: string
    // ) {
    //   const instanceWithoutData = ParseObjects.getInstanceWithoutData(
    //     objectSchemaName,
    //     parseInstanceId
    //   )
    //   const parseType = AppConstants.realmTypes[objectSchemaName]
    //   instance.set(parseType, instanceWithoutData)
    // }

  }]);
  return Records;
}();

exports.Records = Records;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHBMaWJzL3JlY29yZHMudHMiXSwibmFtZXMiOlsiUmVjb3JkcyIsIm5hbWUiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7SUFJYUEsTzs7Ozs7Ozt1Q0FDZUMsSSxFQUFNO0FBQzlCLGFBQU9BLElBQUksQ0FBQ0MsTUFBTCxDQUFZLENBQVosRUFBZUMsV0FBZixLQUErQkYsSUFBSSxDQUFDRyxLQUFMLENBQVcsQ0FBWCxDQUF0QztBQUNELEssQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUeXBlcyBmcm9tICdAYXBwL3R5cGVzJ1xuXG4vLyBpbXBvcnQgeyBQYXJzZU9iamVjdHMgfSBmcm9tICdAYXBwTW9kZWxzL2luZGV4J1xuXG5pbXBvcnQgeyBBcHBDb25zdGFudHMgfSBmcm9tICdAYXBwL3R5cGVzJ1xuXG5leHBvcnQgY2xhc3MgUmVjb3JkcyB7XG4gIHN0YXRpYyB0b0ZpcnN0VXBwZXJTdHJpbmcobmFtZSkge1xuICAgIHJldHVybiBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKVxuICB9XG5cbiAgLy8gc3RhdGljIHNldFBhcnNlT2JqZWN0RmllbGRXaXRob3V0RGF0YUJ5U2NoZW1hKFxuICAvLyAgIG9iamVjdFNjaGVtYU5hbWU6IHN0cmluZyxcbiAgLy8gICBpbnN0YW5jZSxcbiAgLy8gICBwYXJzZUluc3RhbmNlSWQ6IHN0cmluZ1xuICAvLyApIHtcbiAgLy8gICBjb25zdCBpbnN0YW5jZVdpdGhvdXREYXRhID0gUGFyc2VPYmplY3RzLmdldEluc3RhbmNlV2l0aG91dERhdGEoXG4gIC8vICAgICBvYmplY3RTY2hlbWFOYW1lLFxuICAvLyAgICAgcGFyc2VJbnN0YW5jZUlkXG4gIC8vICAgKVxuICAvLyAgIGNvbnN0IHBhcnNlVHlwZSA9IEFwcENvbnN0YW50cy5yZWFsbVR5cGVzW29iamVjdFNjaGVtYU5hbWVdXG4gIC8vICAgaW5zdGFuY2Uuc2V0KHBhcnNlVHlwZSwgaW5zdGFuY2VXaXRob3V0RGF0YSlcbiAgLy8gfVxufVxuIl19