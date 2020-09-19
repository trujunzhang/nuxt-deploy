"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AxiosUtils = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _axios = _interopRequireDefault(require("axios"));

// Without '* as'
var AxiosUtils = /*#__PURE__*/function () {
  function AxiosUtils() {
    (0, _classCallCheck2["default"])(this, AxiosUtils);
  }

  (0, _createClass2["default"])(AxiosUtils, null, [{
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(url, data, config) {
        var pushPromise, _ref, _ref2, res;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pushPromise = _axios["default"].post(url, data, config); // Wait for both requests to resolve

                _context.next = 3;
                return Promise.all([pushPromise]);

              case 3:
                _ref = _context.sent;
                _ref2 = (0, _slicedToArray2["default"])(_ref, 1);
                res = _ref2[0];
                return _context.abrupt("return", res);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function post(_x, _x2, _x3) {
        return _post.apply(this, arguments);
      }

      return post;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(url, config) {
        var getPromise, _ref3, _ref4, res;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                getPromise = _axios["default"].get(url, config); // Wait for both requests to resolve

                _context2.next = 3;
                return Promise.all([getPromise]);

              case 3:
                _ref3 = _context2.sent;
                _ref4 = (0, _slicedToArray2["default"])(_ref3, 1);
                res = _ref4[0];
                return _context2.abrupt("return", res);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function get(_x4, _x5) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }]);
  return AxiosUtils;
}();

exports.AxiosUtils = AxiosUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9iYXNpY1V0aWxzL2F4aW9zVXRpbHMudHMiXSwibmFtZXMiOlsiQXhpb3NVdGlscyIsInVybCIsImRhdGEiLCJjb25maWciLCJwdXNoUHJvbWlzZSIsImF4aW9zIiwicG9zdCIsIlByb21pc2UiLCJhbGwiLCJyZXMiLCJnZXRQcm9taXNlIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQWdFO0lBRW5EQSxVOzs7Ozs7OztpSEFDZ0JDLEcsRUFBYUMsSSxFQUFZQyxNOzs7Ozs7O0FBQzVDQyxnQkFBQUEsVyxHQUErQkMsa0JBQU1DLElBQU4sQ0FBV0wsR0FBWCxFQUFnQkMsSUFBaEIsRUFBc0JDLE1BQXRCLEMsRUFFckM7Ozt1QkFDb0JJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLENBQUNKLFdBQUQsQ0FBWixDOzs7OztBQUFiSyxnQkFBQUEsRztpREFFQUEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpSEFHaUJSLEcsRUFBYUUsTTs7Ozs7OztBQUMvQk8sZ0JBQUFBLFUsR0FBOEJMLGtCQUFNTSxHQUFOLENBQVVWLEdBQVYsRUFBZUUsTUFBZixDLEVBRXBDOzs7dUJBQ29CSSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUFDRSxVQUFELENBQVosQzs7Ozs7QUFBYkQsZ0JBQUFBLEc7a0RBRUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXF1ZXN0Q29uZmlnLCBBeGlvc1Byb21pc2UgfSBmcm9tICdheGlvcycgLy8gV2l0aG91dCAnKiBhcydcblxuZXhwb3J0IGNsYXNzIEF4aW9zVXRpbHMge1xuICBzdGF0aWMgYXN5bmMgcG9zdDxUID0gYW55Pih1cmw6IHN0cmluZywgZGF0YT86IGFueSwgY29uZmlnPzogQXhpb3NSZXF1ZXN0Q29uZmlnKSB7XG4gICAgY29uc3QgcHVzaFByb21pc2U6IEF4aW9zUHJvbWlzZTxUPiA9IGF4aW9zLnBvc3QodXJsLCBkYXRhLCBjb25maWcpXG5cbiAgICAvLyBXYWl0IGZvciBib3RoIHJlcXVlc3RzIHRvIHJlc29sdmVcbiAgICBjb25zdCBbcmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtwdXNoUHJvbWlzZV0pXG5cbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0PFQgPSBhbnk+KHVybDogc3RyaW5nLCBjb25maWc/OiBBeGlvc1JlcXVlc3RDb25maWcpIHtcbiAgICBjb25zdCBnZXRQcm9taXNlOiBBeGlvc1Byb21pc2U8VD4gPSBheGlvcy5nZXQodXJsLCBjb25maWcpXG5cbiAgICAvLyBXYWl0IGZvciBib3RoIHJlcXVlc3RzIHRvIHJlc29sdmVcbiAgICBjb25zdCBbcmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtnZXRQcm9taXNlXSlcblxuICAgIHJldHVybiByZXNcbiAgfVxufVxuIl19