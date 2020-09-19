"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSwipeHelper = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

// Swipe Helper.
// =================
var ListSwipeHelper = /*#__PURE__*/function () {
  function ListSwipeHelper(params) {
    (0, _classCallCheck2["default"])(this, ListSwipeHelper);
    this._rows = void 0;
    this.openCellId = void 0;
    this.currentScrollEnabled = void 0;
    this.onScrollEnableChangedDict = {};
    var onScrollEnableChanged = params.onScrollEnableChanged;
    this._rows = {};
    this.currentScrollEnabled = true;
    this.openCellId = null;

    if (!!onScrollEnableChanged) {
      this.onScrollEnableChangedDict['main'] = onScrollEnableChanged;
    }
  }

  (0, _createClass2["default"])(ListSwipeHelper, [{
    key: "addOnScrollEnableChangedListener",
    value: function addOnScrollEnableChangedListener(key, onScrollEnableChanged) {
      this.onScrollEnableChangedDict[key] = onScrollEnableChanged;
    }
  }, {
    key: "swipedIdIsOpenCellId",
    value: function swipedIdIsOpenCellId(swipedCellIdentifier) {
      if (this.openCellId && this.openCellId !== swipedCellIdentifier) {
        return true;
      }

      return false;
    }
  }, {
    key: "onRowOpen",
    value: function onRowOpen(cellIdentifier) {
      if (this.openCellId && this.openCellId !== cellIdentifier) {
        this.safeCloseOpenRow();
      }

      this.openCellId = cellIdentifier;
    }
  }, {
    key: "onRowCloseOrPressOrScroll",
    value: function onRowCloseOrPressOrScroll(closeOnRowPress) {
      if (this.openCellId) {
        if (closeOnRowPress) {
          this.safeCloseOpenRow();
          this.openCellId = null;
        }
      }
    }
  }, {
    key: "safeCloseOpenRow",
    value: function safeCloseOpenRow() {
      // if the openCellId is stale due to deleting a row this could be undefined
      if (this._rows[this.openCellId]._root) {
        this._rows[this.openCellId]._root.closeRow();
      }
    }
  }, {
    key: "closeRow",
    value: function closeRow(id) {
      if (this.openCellId) {
        this.safeCloseOpenRow();
        this.openCellId = null;
      }
    }
  }, {
    key: "setScrollEnabled",
    value: function setScrollEnabled(enable) {
      var _this = this;

      this.currentScrollEnabled = enable;
      var keys = Object.keys(this.onScrollEnableChangedDict);
      keys.map(function (key) {
        _this.onScrollEnableChangedDict[key](enable);
      });
    }
  }, {
    key: "pushRowIds",
    value: function pushRowIds(cellIdentifier, rowRef) {
      this._rows[cellIdentifier] = rowRef;
    }
  }, {
    key: "scrollEnabled",
    get: function get() {
      return this.currentScrollEnabled;
    }
  }, {
    key: "rows",
    get: function get() {
      return this._rows;
    }
  }]);
  return ListSwipeHelper;
}();

exports.ListSwipeHelper = ListSwipeHelper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3VXRpbHMvbGlzdFN3aXBlSGVscGVyLnRzIl0sIm5hbWVzIjpbIkxpc3RTd2lwZUhlbHBlciIsInBhcmFtcyIsIl9yb3dzIiwib3BlbkNlbGxJZCIsImN1cnJlbnRTY3JvbGxFbmFibGVkIiwib25TY3JvbGxFbmFibGVDaGFuZ2VkRGljdCIsIm9uU2Nyb2xsRW5hYmxlQ2hhbmdlZCIsImtleSIsInN3aXBlZENlbGxJZGVudGlmaWVyIiwiY2VsbElkZW50aWZpZXIiLCJzYWZlQ2xvc2VPcGVuUm93IiwiY2xvc2VPblJvd1ByZXNzIiwiX3Jvb3QiLCJjbG9zZVJvdyIsImlkIiwiZW5hYmxlIiwia2V5cyIsIk9iamVjdCIsIm1hcCIsInJvd1JlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7SUFXYUEsZTtBQU1YLDJCQUFZQyxNQUFaLEVBQTRDO0FBQUE7QUFBQSxTQUxwQ0MsS0FLb0M7QUFBQSxTQUpwQ0MsVUFJb0M7QUFBQSxTQUhwQ0Msb0JBR29DO0FBQUEsU0FGcENDLHlCQUVvQyxHQUYyQyxFQUUzQztBQUFBLFFBQ2xDQyxxQkFEa0MsR0FDUkwsTUFEUSxDQUNsQ0sscUJBRGtDO0FBRTFDLFNBQUtKLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0Usb0JBQUwsR0FBNEIsSUFBNUI7QUFDQSxTQUFLRCxVQUFMLEdBQWtCLElBQWxCOztBQUNBLFFBQUksQ0FBQyxDQUFDRyxxQkFBTixFQUE2QjtBQUMzQixXQUFLRCx5QkFBTCxDQUErQixNQUEvQixJQUF5Q0MscUJBQXpDO0FBQ0Q7QUFDRjs7OztxREFHQ0MsRyxFQUNBRCxxQixFQUNBO0FBQ0EsV0FBS0QseUJBQUwsQ0FBK0JFLEdBQS9CLElBQXNDRCxxQkFBdEM7QUFDRDs7O3lDQUVvQkUsb0IsRUFBc0I7QUFDekMsVUFBSSxLQUFLTCxVQUFMLElBQW1CLEtBQUtBLFVBQUwsS0FBb0JLLG9CQUEzQyxFQUFpRTtBQUMvRCxlQUFPLElBQVA7QUFDRDs7QUFDRCxhQUFPLEtBQVA7QUFDRDs7OzhCQUVTQyxjLEVBQWdCO0FBQ3hCLFVBQUksS0FBS04sVUFBTCxJQUFtQixLQUFLQSxVQUFMLEtBQW9CTSxjQUEzQyxFQUEyRDtBQUN6RCxhQUFLQyxnQkFBTDtBQUNEOztBQUNELFdBQUtQLFVBQUwsR0FBa0JNLGNBQWxCO0FBQ0Q7Ozs4Q0FFeUJFLGUsRUFBMEI7QUFDbEQsVUFBSSxLQUFLUixVQUFULEVBQXFCO0FBQ25CLFlBQUlRLGVBQUosRUFBcUI7QUFDbkIsZUFBS0QsZ0JBQUw7QUFDQSxlQUFLUCxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7QUFDRjtBQUNGOzs7dUNBVWtCO0FBQ2pCO0FBQ0EsVUFBSSxLQUFLRCxLQUFMLENBQVcsS0FBS0MsVUFBaEIsRUFBNEJTLEtBQWhDLEVBQXVDO0FBQ3JDLGFBQUtWLEtBQUwsQ0FBVyxLQUFLQyxVQUFoQixFQUE0QlMsS0FBNUIsQ0FBa0NDLFFBQWxDO0FBQ0Q7QUFDRjs7OzZCQUVRQyxFLEVBQUk7QUFDWCxVQUFJLEtBQUtYLFVBQVQsRUFBcUI7QUFDbkIsYUFBS08sZ0JBQUw7QUFDQSxhQUFLUCxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7QUFDRjs7O3FDQUVnQlksTSxFQUFRO0FBQUE7O0FBQ3ZCLFdBQUtYLG9CQUFMLEdBQTRCVyxNQUE1QjtBQUNBLFVBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVksS0FBS1gseUJBQWpCLENBQWI7QUFDQVcsTUFBQUEsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ1gsR0FBRCxFQUFTO0FBQ2hCLFFBQUEsS0FBSSxDQUFDRix5QkFBTCxDQUErQkUsR0FBL0IsRUFBb0NRLE1BQXBDO0FBQ0QsT0FGRDtBQUdEOzs7K0JBRVVOLGMsRUFBZ0JVLE0sRUFBUTtBQUNqQyxXQUFLakIsS0FBTCxDQUFXTyxjQUFYLElBQTZCVSxNQUE3QjtBQUNEOzs7d0JBaENtQjtBQUNsQixhQUFPLEtBQUtmLG9CQUFaO0FBQ0Q7Ozt3QkFFVTtBQUNULGFBQU8sS0FBS0YsS0FBWjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3dpcGUgSGVscGVyLlxuLy8gPT09PT09PT09PT09PT09PT1cbmV4cG9ydCB0eXBlIElMaXN0U3dpcGVIZWxwZXJPblNjcm9sbEVuYWJsZUNoYW5nZWQgPSAoZW5hYmxlOiBhbnkpID0+IGFueVxuXG5leHBvcnQgaW50ZXJmYWNlIElMaXN0U3dpcGVIZWxwZXJQYXJhbXMge1xuICBvblNjcm9sbEVuYWJsZUNoYW5nZWQ/OiBJTGlzdFN3aXBlSGVscGVyT25TY3JvbGxFbmFibGVDaGFuZ2VkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUV2ZW50RGljdDxUPiB7XG4gIFtLZXk6IHN0cmluZ106IFRcbn1cblxuZXhwb3J0IGNsYXNzIExpc3RTd2lwZUhlbHBlciB7XG4gIHByaXZhdGUgX3Jvd3M6IGFueVxuICBwcml2YXRlIG9wZW5DZWxsSWQ6IGFueVxuICBwcml2YXRlIGN1cnJlbnRTY3JvbGxFbmFibGVkOiBib29sZWFuXG4gIHByaXZhdGUgb25TY3JvbGxFbmFibGVDaGFuZ2VkRGljdDogSUV2ZW50RGljdDxJTGlzdFN3aXBlSGVscGVyT25TY3JvbGxFbmFibGVDaGFuZ2VkPiA9IHt9XG5cbiAgY29uc3RydWN0b3IocGFyYW1zOiBJTGlzdFN3aXBlSGVscGVyUGFyYW1zKSB7XG4gICAgY29uc3QgeyBvblNjcm9sbEVuYWJsZUNoYW5nZWQgfSA9IHBhcmFtc1xuICAgIHRoaXMuX3Jvd3MgPSB7fVxuICAgIHRoaXMuY3VycmVudFNjcm9sbEVuYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5vcGVuQ2VsbElkID0gbnVsbFxuICAgIGlmICghIW9uU2Nyb2xsRW5hYmxlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5vblNjcm9sbEVuYWJsZUNoYW5nZWREaWN0WydtYWluJ10gPSBvblNjcm9sbEVuYWJsZUNoYW5nZWRcbiAgICB9XG4gIH1cblxuICBhZGRPblNjcm9sbEVuYWJsZUNoYW5nZWRMaXN0ZW5lcihcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvblNjcm9sbEVuYWJsZUNoYW5nZWQ6IElMaXN0U3dpcGVIZWxwZXJPblNjcm9sbEVuYWJsZUNoYW5nZWRcbiAgKSB7XG4gICAgdGhpcy5vblNjcm9sbEVuYWJsZUNoYW5nZWREaWN0W2tleV0gPSBvblNjcm9sbEVuYWJsZUNoYW5nZWRcbiAgfVxuXG4gIHN3aXBlZElkSXNPcGVuQ2VsbElkKHN3aXBlZENlbGxJZGVudGlmaWVyKSB7XG4gICAgaWYgKHRoaXMub3BlbkNlbGxJZCAmJiB0aGlzLm9wZW5DZWxsSWQgIT09IHN3aXBlZENlbGxJZGVudGlmaWVyKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIG9uUm93T3BlbihjZWxsSWRlbnRpZmllcikge1xuICAgIGlmICh0aGlzLm9wZW5DZWxsSWQgJiYgdGhpcy5vcGVuQ2VsbElkICE9PSBjZWxsSWRlbnRpZmllcikge1xuICAgICAgdGhpcy5zYWZlQ2xvc2VPcGVuUm93KClcbiAgICB9XG4gICAgdGhpcy5vcGVuQ2VsbElkID0gY2VsbElkZW50aWZpZXJcbiAgfVxuXG4gIG9uUm93Q2xvc2VPclByZXNzT3JTY3JvbGwoY2xvc2VPblJvd1ByZXNzOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMub3BlbkNlbGxJZCkge1xuICAgICAgaWYgKGNsb3NlT25Sb3dQcmVzcykge1xuICAgICAgICB0aGlzLnNhZmVDbG9zZU9wZW5Sb3coKVxuICAgICAgICB0aGlzLm9wZW5DZWxsSWQgPSBudWxsXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IHNjcm9sbEVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFNjcm9sbEVuYWJsZWRcbiAgfVxuXG4gIGdldCByb3dzKCkge1xuICAgIHJldHVybiB0aGlzLl9yb3dzXG4gIH1cblxuICBzYWZlQ2xvc2VPcGVuUm93KCkge1xuICAgIC8vIGlmIHRoZSBvcGVuQ2VsbElkIGlzIHN0YWxlIGR1ZSB0byBkZWxldGluZyBhIHJvdyB0aGlzIGNvdWxkIGJlIHVuZGVmaW5lZFxuICAgIGlmICh0aGlzLl9yb3dzW3RoaXMub3BlbkNlbGxJZF0uX3Jvb3QpIHtcbiAgICAgIHRoaXMuX3Jvd3NbdGhpcy5vcGVuQ2VsbElkXS5fcm9vdC5jbG9zZVJvdygpXG4gICAgfVxuICB9XG5cbiAgY2xvc2VSb3coaWQpIHtcbiAgICBpZiAodGhpcy5vcGVuQ2VsbElkKSB7XG4gICAgICB0aGlzLnNhZmVDbG9zZU9wZW5Sb3coKVxuICAgICAgdGhpcy5vcGVuQ2VsbElkID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHNldFNjcm9sbEVuYWJsZWQoZW5hYmxlKSB7XG4gICAgdGhpcy5jdXJyZW50U2Nyb2xsRW5hYmxlZCA9IGVuYWJsZVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm9uU2Nyb2xsRW5hYmxlQ2hhbmdlZERpY3QpXG4gICAga2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgdGhpcy5vblNjcm9sbEVuYWJsZUNoYW5nZWREaWN0W2tleV0oZW5hYmxlKVxuICAgIH0pXG4gIH1cblxuICBwdXNoUm93SWRzKGNlbGxJZGVudGlmaWVyLCByb3dSZWYpIHtcbiAgICB0aGlzLl9yb3dzW2NlbGxJZGVudGlmaWVyXSA9IHJvd1JlZlxuICB9XG59XG4iXX0=