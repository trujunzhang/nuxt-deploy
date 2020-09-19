"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Recipes = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _tools = require("@app/tools");

var Recipes = /*#__PURE__*/function () {
  function Recipes() {
    (0, _classCallCheck2["default"])(this, Recipes);
  }

  (0, _createClass2["default"])(Recipes, null, [{
    key: "getUpdatedAtFormat",
    value: function getUpdatedAtFormat(recipe) {
      var start = recipe.updatedAt; // for example: "Saturday, 1 Jul, 12:00 am"

      var day = _tools.MomentUtils.toDateString(start, 'MM/DD/YYYY');

      return day;
    }
  }]);
  return Recipes;
}();

exports.Recipes = Recipes;
Recipes.config = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHBMaWJzL3JlY2lwZXMudHMiXSwibmFtZXMiOlsiUmVjaXBlcyIsInJlY2lwZSIsInN0YXJ0IiwidXBkYXRlZEF0IiwiZGF5IiwiTW9tZW50VXRpbHMiLCJ0b0RhdGVTdHJpbmciLCJjb25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFYUEsTzs7Ozs7Ozt1Q0FHZUMsTSxFQUFRO0FBQ2hDLFVBQU1DLEtBQUssR0FBR0QsTUFBTSxDQUFDRSxTQUFyQixDQURnQyxDQUVoQzs7QUFDQSxVQUFNQyxHQUFHLEdBQUdDLG1CQUFZQyxZQUFaLENBQXlCSixLQUF6QixFQUFnQyxZQUFoQyxDQUFaOztBQUNBLGFBQU9FLEdBQVA7QUFDRDs7Ozs7O0FBUlVKLE8sQ0FDSk8sTSxHQUFTLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb21lbnRVdGlscyB9IGZyb20gJ0BhcHAvdG9vbHMnXG5cbmV4cG9ydCBjbGFzcyBSZWNpcGVzIHtcbiAgc3RhdGljIGNvbmZpZyA9IHt9XG5cbiAgc3RhdGljIGdldFVwZGF0ZWRBdEZvcm1hdChyZWNpcGUpIHtcbiAgICBjb25zdCBzdGFydCA9IHJlY2lwZS51cGRhdGVkQXRcbiAgICAvLyBmb3IgZXhhbXBsZTogXCJTYXR1cmRheSwgMSBKdWwsIDEyOjAwIGFtXCJcbiAgICBjb25zdCBkYXkgPSBNb21lbnRVdGlscy50b0RhdGVTdHJpbmcoc3RhcnQsICdNTS9ERC9ZWVlZJylcbiAgICByZXR1cm4gZGF5XG4gIH1cbn1cbiJdfQ==