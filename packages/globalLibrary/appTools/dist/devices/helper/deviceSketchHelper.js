"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeviceSketchHelper = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _lodashUtils = require("../../basicUtils/lodashUtils");

var IphonesResource = _interopRequireWildcard(require("../resources/apple/iPhone"));

/**
 *
 * Popular Screen Resolutions: Designing for All
 *   https://mediag.com/blog/popular-screen-resolutions-designing-for-all/
 *
 */
var DeviceSketchHelper = /*#__PURE__*/function () {
  function DeviceSketchHelper() {
    (0, _classCallCheck2["default"])(this, DeviceSketchHelper);
  }

  (0, _createClass2["default"])(DeviceSketchHelper, null, [{
    key: "getCurrentDevicePageStyle",
    value: function getCurrentDevicePageStyle() {
      var deviceInfo = _lodashUtils.LodashUtils.find(IphonesResource.res.devices, {
        tag: 'iPhoneXS'
      });

      var viewport = deviceInfo.size.Viewport; // const pixelSize = deviceInfo.size.PixelSize

      return {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: viewport.width,
        height: viewport.height // backgroundColor: 'blue'

      };
    }
  }]);
  return DeviceSketchHelper;
}();

exports.DeviceSketchHelper = DeviceSketchHelper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZXZpY2VzL2hlbHBlci9kZXZpY2VTa2V0Y2hIZWxwZXIudHMiXSwibmFtZXMiOlsiRGV2aWNlU2tldGNoSGVscGVyIiwiZGV2aWNlSW5mbyIsIl8iLCJmaW5kIiwiSXBob25lc1Jlc291cmNlIiwicmVzIiwiZGV2aWNlcyIsInRhZyIsInZpZXdwb3J0Iiwic2l6ZSIsIlZpZXdwb3J0IiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBOzs7Ozs7SUFNYUEsa0I7Ozs7Ozs7Z0RBQ3dCO0FBQ2pDLFVBQU1DLFVBQVUsR0FBR0MseUJBQUVDLElBQUYsQ0FBT0MsZUFBZSxDQUFDQyxHQUFoQixDQUFvQkMsT0FBM0IsRUFBb0M7QUFBRUMsUUFBQUEsR0FBRyxFQUFFO0FBQVAsT0FBcEMsQ0FBbkI7O0FBQ0EsVUFBTUMsUUFBUSxHQUFHUCxVQUFVLENBQUNRLElBQVgsQ0FBZ0JDLFFBQWpDLENBRmlDLENBR2pDOztBQUNBLGFBQU87QUFDTEMsUUFBQUEsYUFBYSxFQUFFLEtBRFY7QUFFTEMsUUFBQUEsUUFBUSxFQUFFLE1BRkw7QUFHTEMsUUFBQUEsS0FBSyxFQUFFTCxRQUFRLENBQUNLLEtBSFg7QUFJTEMsUUFBQUEsTUFBTSxFQUFFTixRQUFRLENBQUNNLE1BSlosQ0FLTDs7QUFMSyxPQUFQO0FBT0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2Rhc2hVdGlscyBhcyBfIH0gZnJvbSAnLi4vLi4vYmFzaWNVdGlscy9sb2Rhc2hVdGlscydcblxuaW1wb3J0ICogYXMgSXBob25lc1Jlc291cmNlIGZyb20gJy4uL3Jlc291cmNlcy9hcHBsZS9pUGhvbmUnXG5cbi8qKlxuICpcbiAqIFBvcHVsYXIgU2NyZWVuIFJlc29sdXRpb25zOiBEZXNpZ25pbmcgZm9yIEFsbFxuICogICBodHRwczovL21lZGlhZy5jb20vYmxvZy9wb3B1bGFyLXNjcmVlbi1yZXNvbHV0aW9ucy1kZXNpZ25pbmctZm9yLWFsbC9cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBEZXZpY2VTa2V0Y2hIZWxwZXIge1xuICBzdGF0aWMgZ2V0Q3VycmVudERldmljZVBhZ2VTdHlsZSgpIHtcbiAgICBjb25zdCBkZXZpY2VJbmZvID0gXy5maW5kKElwaG9uZXNSZXNvdXJjZS5yZXMuZGV2aWNlcywgeyB0YWc6ICdpUGhvbmVYUycgfSlcbiAgICBjb25zdCB2aWV3cG9ydCA9IGRldmljZUluZm8uc2l6ZS5WaWV3cG9ydFxuICAgIC8vIGNvbnN0IHBpeGVsU2l6ZSA9IGRldmljZUluZm8uc2l6ZS5QaXhlbFNpemVcbiAgICByZXR1cm4ge1xuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgICAgd2lkdGg6IHZpZXdwb3J0LndpZHRoLFxuICAgICAgaGVpZ2h0OiB2aWV3cG9ydC5oZWlnaHRcbiAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJ2JsdWUnXG4gICAgfVxuICB9XG59XG4iXX0=