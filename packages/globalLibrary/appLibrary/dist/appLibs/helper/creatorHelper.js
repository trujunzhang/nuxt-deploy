"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreatorHelper = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _users = require("../users");

var CreatorHelper = /*#__PURE__*/function () {
  function CreatorHelper() {
    (0, _classCallCheck2["default"])(this, CreatorHelper);
  }

  (0, _createClass2["default"])(CreatorHelper, null, [{
    key: "fixCreatorForParseModel",
    value: function fixCreatorForParseModel(parseModel) {
      var user = _users.Users.anonymousUser;

      if (!!parseModel && !!parseModel.creator) {
        return parseModel.creator;
      }

      return user;
    }
  }]);
  return CreatorHelper;
}();

exports.CreatorHelper = CreatorHelper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHBMaWJzL2hlbHBlci9jcmVhdG9ySGVscGVyLnRzIl0sIm5hbWVzIjpbIkNyZWF0b3JIZWxwZXIiLCJwYXJzZU1vZGVsIiwidXNlciIsIlVzZXJzIiwiYW5vbnltb3VzVXNlciIsImNyZWF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFYUEsYTs7Ozs7Ozs0Q0FDb0JDLFUsRUFBZ0M7QUFDN0QsVUFBSUMsSUFBc0IsR0FBR0MsYUFBTUMsYUFBbkM7O0FBQ0EsVUFBSSxDQUFDLENBQUNILFVBQUYsSUFBZ0IsQ0FBQyxDQUFDQSxVQUFVLENBQUNJLE9BQWpDLEVBQTBDO0FBQ3hDLGVBQU9KLFVBQVUsQ0FBQ0ksT0FBbEI7QUFDRDs7QUFDRCxhQUFPSCxJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VycyB9IGZyb20gJy4uL3VzZXJzJ1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRvckhlbHBlciB7XG4gIHN0YXRpYyBmaXhDcmVhdG9yRm9yUGFyc2VNb2RlbChwYXJzZU1vZGVsOiBJUGFyc2VDcmVhdG9yTW9kZWwpIHtcbiAgICBsZXQgdXNlcjogSVBhcnNlTW9kZWxVc2VycyA9IFVzZXJzLmFub255bW91c1VzZXJcbiAgICBpZiAoISFwYXJzZU1vZGVsICYmICEhcGFyc2VNb2RlbC5jcmVhdG9yKSB7XG4gICAgICByZXR1cm4gcGFyc2VNb2RlbC5jcmVhdG9yXG4gICAgfVxuICAgIHJldHVybiB1c2VyXG4gIH1cbn1cbiJdfQ==