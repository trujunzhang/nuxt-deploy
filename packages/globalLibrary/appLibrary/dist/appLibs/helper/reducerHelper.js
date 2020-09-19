"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReducerHelper = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Types = _interopRequireWildcard(require("@app/types"));

var ReducerHelper = /*#__PURE__*/function () {
  function ReducerHelper() {
    (0, _classCallCheck2["default"])(this, ReducerHelper);
  }

  (0, _createClass2["default"])(ReducerHelper, null, [{
    key: "getSignInParameter",
    // ===========================================================
    // ===========================================================
    //  *** Register ***
    // ===========================================================
    // ===========================================================
    value: function getSignInParameter(_ref) {
      var authModel = _ref.authModel;

      var _ReducerHelper$getAut = ReducerHelper.getAuthModelField({
        authModel: authModel
      }),
          usernameOrEmail = _ReducerHelper$getAut.usernameOrEmail,
          password = _ReducerHelper$getAut.password;

      return {
        usernameOrEmail: usernameOrEmail,
        password: password
      };
    }
  }, {
    key: "getSignUpParameter",
    value: function getSignUpParameter(_ref2, needEmailVerification) {
      var authModel = _ref2.authModel;

      var _ReducerHelper$getAut2 = ReducerHelper.getAuthModelField({
        authModel: authModel
      }),
          username = _ReducerHelper$getAut2.username,
          email = _ReducerHelper$getAut2.email,
          password = _ReducerHelper$getAut2.password;

      return {
        username: username,
        email: email,
        password: password,
        needEmailVerification: needEmailVerification
      };
    }
  }, {
    key: "getForgotPasswordParameter",
    value: function getForgotPasswordParameter(_ref3) {
      var authModel = _ref3.authModel;

      var _ReducerHelper$getAut3 = ReducerHelper.getAuthModelField({
        authModel: authModel
      }),
          email = _ReducerHelper$getAut3.email;

      return {
        email: email
      };
    } // ===========================================================
    // ===========================================================
    //  *** editModel ***
    // ===========================================================
    // ===========================================================

  }, {
    key: "getTableQuery",
    value: function getTableQuery(_ref4) {
      var editModel = _ref4.editModel;
      return editModel.form.tableQuery;
    }
  }, {
    key: "getTableDateSelectors",
    value: function getTableDateSelectors(_ref5) {
      var editModel = _ref5.editModel;
      return ReducerHelper.getTableQuery({
        editModel: editModel
      }).dateSelector || 'all';
    }
  }, {
    key: "getTableSearch",
    value: function getTableSearch(_ref6) {
      var editModel = _ref6.editModel;
      return ReducerHelper.getTableQuery({
        editModel: editModel
      }).tableSearch;
    }
  }, {
    key: "getTableStatus",
    value: function getTableStatus(_ref7) {
      var editModel = _ref7.editModel;
      return ReducerHelper.getTableQuery({
        editModel: editModel
      }).queryStatus;
    }
  }, {
    key: "getTableLoginType",
    value: function getTableLoginType(_ref8) {
      var editModel = _ref8.editModel;
      return ReducerHelper.getTableQuery({
        editModel: editModel
      }).loginType;
    }
  }, {
    key: "getTableSelectedRowId",
    value: function getTableSelectedRowId(_ref9) {
      var editModel = _ref9.editModel;
      return editModel.form.selectedTableSingleRowId;
    }
  }, {
    key: "isOrderDesc",
    value: function isOrderDesc(_ref10, columnTag) {
      var editModel = _ref10.editModel;
      var orderType = ReducerHelper.getTableQuery({
        editModel: editModel
      }).orderType;
      var orderBy = ReducerHelper.getTableQuery({
        editModel: editModel
      }).orderBy;
      var currentOrderType = 'desc';

      if (columnTag === orderBy) {
        currentOrderType = orderType;
      }

      return currentOrderType === 'desc';
    }
  }, {
    key: "getTablePaginationIndex",
    value: function getTablePaginationIndex(_ref11) {
      var editModel = _ref11.editModel;
      return ReducerHelper.getTableQuery({
        editModel: editModel
      }).paginationIndex;
    }
  }, {
    key: "getTableSelectAction",
    value: function getTableSelectAction(_ref12) {
      var editModel = _ref12.editModel;
      return editModel.form.tableSelectAction;
    }
  }, {
    key: "getCountPerPage",
    value: function getCountPerPage(_ref13) {
      var editModel = _ref13.editModel;
      return editModel.form.fields.countPerPage;
    }
  }, {
    key: "editModelDisabled",
    value: function editModelDisabled(_ref14) {
      var editModel = _ref14.editModel;
      return !editModel.form.isValid || editModel.form.isFetching;
    }
  }, {
    key: "checkDiffCountPerPage",
    value: function checkDiffCountPerPage(_ref15, _ref16) {
      var editModel = _ref15.editModel;
      var limit = _ref16.limit;
      return !!editModel && ReducerHelper.getCountPerPage({
        editModel: editModel
      }) !== limit;
    }
  }, {
    key: "getUniqueIdFromEditModel",
    value: function getUniqueIdFromEditModel(_ref17) {
      var editModel = _ref17.editModel;
      var originModel = editModel.form.originModel;
      return originModel.uniqueId;
    }
  }, {
    key: "getOriginModelFromEditModel",
    value: function getOriginModelFromEditModel(_ref18) {
      var editModel = _ref18.editModel;
      var originModel = editModel.form.originModel;
      return originModel;
    } // ===========================================================
    // ===========================================================
    //  *** auth Session ***
    // ===========================================================
    // ===========================================================

  }, {
    key: "hasWidgetWelcomeScreenHidden",
    value: function hasWidgetWelcomeScreenHidden(_ref19) {
      var authSession = _ref19.authSession;
      var mobileWidget = authSession.mobileWidget;
      return mobileWidget.showWelcome === false;
    }
  }, {
    key: "getAuthModelField",
    value: function getAuthModelField(_ref20) {
      var authModel = _ref20.authModel;
      return authModel.form.fields;
    }
  }, {
    key: "authModelDisabled",
    value: function authModelDisabled(_ref21) {
      var authModel = _ref21.authModel;
      return authModel.form.isFetching;
    }
  }, {
    key: "getSocialConnectedError",
    value: function getSocialConnectedError(_ref22) {
      var authModel = _ref22.authModel;
      return authModel.form.fields.socialConnectedError;
    }
  }, {
    key: "getAuthModelAlert",
    value: function getAuthModelAlert(_ref23) {
      var authModel = _ref23.authModel;
      return authModel.form.alert;
    }
  }, {
    key: "getLocation",
    value: function getLocation(_ref24) {
      var editModel = _ref24.editModel;
      var latitude = editModel.form.fields.latitude;
      var longitude = editModel.form.fields.longitude;
      var position = [latitude, longitude];
      return position;
    }
  }, {
    key: "isNewModelFormPage",
    value: function isNewModelFormPage(_ref25) {
      var editModel = _ref25.editModel;
      var editModelType = ReducerHelper.getEditModelType({
        editModel: editModel
      });
      return editModelType === Types.editModel.MODEL_FORM_TYPE_NEW;
    }
  }, {
    key: "getEditModelType",
    value: function getEditModelType(_ref26) {
      var editModel = _ref26.editModel;
      var editModelType = editModel.form.editModelType;
      return editModelType;
    }
  }, {
    key: "getNextRestaurantModel",
    value: function getNextRestaurantModel(_ref27) {
      var editModel = _ref27.editModel;
      var originalModel = editModel.form.originModel;
      var parseId = originalModel.id,
          uniqueId = originalModel.uniqueId;
      var displayName = editModel.form.fields.displayName;
      var latitude = editModel.form.fields.latitude;
      var longitude = editModel.form.fields.longitude;
      var address = editModel.form.fields.address;
      var street_number = editModel.form.fields.street_number;
      var route = editModel.form.fields.route;
      var locality = editModel.form.fields.locality;
      var sublocality = editModel.form.fields.sublocality;
      var country = editModel.form.fields.country;
      var postal_code = editModel.form.fields.postal_code;
      var administrative_area = editModel.form.fields.administrative_area;
      var nextModel = {
        parseId: parseId,
        uniqueId: uniqueId,
        displayName: displayName,
        latitude: latitude,
        longitude: longitude,
        address: address,
        street_number: street_number,
        route: route,
        locality: locality,
        sublocality: sublocality,
        country: country,
        postal_code: postal_code,
        administrative_area: administrative_area
      };
      return nextModel;
    }
  }]);
  return ReducerHelper;
}();

exports.ReducerHelper = ReducerHelper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHBMaWJzL2hlbHBlci9yZWR1Y2VySGVscGVyLnRzIl0sIm5hbWVzIjpbIlJlZHVjZXJIZWxwZXIiLCJhdXRoTW9kZWwiLCJnZXRBdXRoTW9kZWxGaWVsZCIsInVzZXJuYW1lT3JFbWFpbCIsInBhc3N3b3JkIiwibmVlZEVtYWlsVmVyaWZpY2F0aW9uIiwidXNlcm5hbWUiLCJlbWFpbCIsImVkaXRNb2RlbCIsImZvcm0iLCJ0YWJsZVF1ZXJ5IiwiZ2V0VGFibGVRdWVyeSIsImRhdGVTZWxlY3RvciIsInRhYmxlU2VhcmNoIiwicXVlcnlTdGF0dXMiLCJsb2dpblR5cGUiLCJzZWxlY3RlZFRhYmxlU2luZ2xlUm93SWQiLCJjb2x1bW5UYWciLCJvcmRlclR5cGUiLCJvcmRlckJ5IiwiY3VycmVudE9yZGVyVHlwZSIsInBhZ2luYXRpb25JbmRleCIsInRhYmxlU2VsZWN0QWN0aW9uIiwiZmllbGRzIiwiY291bnRQZXJQYWdlIiwiaXNWYWxpZCIsImlzRmV0Y2hpbmciLCJsaW1pdCIsImdldENvdW50UGVyUGFnZSIsIm9yaWdpbk1vZGVsIiwidW5pcXVlSWQiLCJhdXRoU2Vzc2lvbiIsIm1vYmlsZVdpZGdldCIsInNob3dXZWxjb21lIiwic29jaWFsQ29ubmVjdGVkRXJyb3IiLCJhbGVydCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwicG9zaXRpb24iLCJlZGl0TW9kZWxUeXBlIiwiZ2V0RWRpdE1vZGVsVHlwZSIsIlR5cGVzIiwiTU9ERUxfRk9STV9UWVBFX05FVyIsIm9yaWdpbmFsTW9kZWwiLCJwYXJzZUlkIiwiaWQiLCJkaXNwbGF5TmFtZSIsImFkZHJlc3MiLCJzdHJlZXRfbnVtYmVyIiwicm91dGUiLCJsb2NhbGl0eSIsInN1YmxvY2FsaXR5IiwiY291bnRyeSIsInBvc3RhbF9jb2RlIiwiYWRtaW5pc3RyYXRpdmVfYXJlYSIsIm5leHRNb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRWFBLGE7Ozs7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QUFHNUMsU0FBUyxDQUFDQyxJQUFWLENBQWVjLE1BQWYsQ0FBc0I2QixPQUF0QztBQUNBLFVBQU1DLFdBQVcsR0FBRzdDLFNBQVMsQ0FBQ0MsSUFBVixDQUFlYyxNQUFmLENBQXNCOEIsV0FBMUM7QUFDQSxVQUFNQyxtQkFBbUIsR0FBRzlDLFNBQVMsQ0FBQ0MsSUFBVixDQUFlYyxNQUFmLENBQXNCK0IsbUJBQWxEO0FBRUEsVUFBTUMsU0FBUyxHQUFHO0FBQ2hCWCxRQUFBQSxPQUFPLEVBQVBBLE9BRGdCO0FBRWhCZCxRQUFBQSxRQUFRLEVBQVJBLFFBRmdCO0FBR2hCZ0IsUUFBQUEsV0FBVyxFQUFYQSxXQUhnQjtBQUloQlYsUUFBQUEsUUFBUSxFQUFSQSxRQUpnQjtBQUtoQkMsUUFBQUEsU0FBUyxFQUFUQSxTQUxnQjtBQU1oQlUsUUFBQUEsT0FBTyxFQUFQQSxPQU5nQjtBQU9oQkMsUUFBQUEsYUFBYSxFQUFiQSxhQVBnQjtBQVFoQkMsUUFBQUEsS0FBSyxFQUFMQSxLQVJnQjtBQVNoQkMsUUFBQUEsUUFBUSxFQUFSQSxRQVRnQjtBQVVoQkMsUUFBQUEsV0FBVyxFQUFYQSxXQVZnQjtBQVdoQkMsUUFBQUEsT0FBTyxFQUFQQSxPQVhnQjtBQVloQkMsUUFBQUEsV0FBVyxFQUFYQSxXQVpnQjtBQWFoQkMsUUFBQUEsbUJBQW1CLEVBQW5CQTtBQWJnQixPQUFsQjtBQWVBLGFBQU9DLFNBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFR5cGVzIGZyb20gJ0BhcHAvdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBSZWR1Y2VySGVscGVyIHtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gICoqKiBSZWdpc3RlciAqKipcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc3RhdGljIGdldFNpZ25JblBhcmFtZXRlcih7IGF1dGhNb2RlbCB9KTogSVNpZ25JblBhcmFtZXRlciB7XG4gICAgY29uc3QgeyB1c2VybmFtZU9yRW1haWwsIHBhc3N3b3JkIH0gPSBSZWR1Y2VySGVscGVyLmdldEF1dGhNb2RlbEZpZWxkKHsgYXV0aE1vZGVsIH0pXG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJuYW1lT3JFbWFpbCxcbiAgICAgIHBhc3N3b3JkXG4gICAgfVxuICB9XG4gIHN0YXRpYyBnZXRTaWduVXBQYXJhbWV0ZXIoeyBhdXRoTW9kZWwgfSwgbmVlZEVtYWlsVmVyaWZpY2F0aW9uKTogSVNpZ25VcFBhcmFtZXRlciB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSBSZWR1Y2VySGVscGVyLmdldEF1dGhNb2RlbEZpZWxkKHsgYXV0aE1vZGVsIH0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgdXNlcm5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgbmVlZEVtYWlsVmVyaWZpY2F0aW9uXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldEZvcmdvdFBhc3N3b3JkUGFyYW1ldGVyKHsgYXV0aE1vZGVsIH0pOiBJRm9yZ290UGFzc3dvcmRQYXJhbWV0ZXIge1xuICAgIGNvbnN0IHsgZW1haWwgfSA9IFJlZHVjZXJIZWxwZXIuZ2V0QXV0aE1vZGVsRmllbGQoeyBhdXRoTW9kZWwgfSlcblxuICAgIHJldHVybiB7XG4gICAgICBlbWFpbFxuICAgIH1cbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyAgKioqIGVkaXRNb2RlbCAqKipcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc3RhdGljIGdldFRhYmxlUXVlcnkoeyBlZGl0TW9kZWwgfSk6IElFZGl0TW9kZWxRdWVyeVByb3BzIHtcbiAgICByZXR1cm4gZWRpdE1vZGVsLmZvcm0udGFibGVRdWVyeVxuICB9XG5cbiAgc3RhdGljIGdldFRhYmxlRGF0ZVNlbGVjdG9ycyh7IGVkaXRNb2RlbCB9KSB7XG4gICAgcmV0dXJuIFJlZHVjZXJIZWxwZXIuZ2V0VGFibGVRdWVyeSh7IGVkaXRNb2RlbCB9KS5kYXRlU2VsZWN0b3IgfHwgJ2FsbCdcbiAgfVxuXG4gIHN0YXRpYyBnZXRUYWJsZVNlYXJjaCh7IGVkaXRNb2RlbCB9KSB7XG4gICAgcmV0dXJuIFJlZHVjZXJIZWxwZXIuZ2V0VGFibGVRdWVyeSh7IGVkaXRNb2RlbCB9KS50YWJsZVNlYXJjaFxuICB9XG5cbiAgc3RhdGljIGdldFRhYmxlU3RhdHVzKHsgZWRpdE1vZGVsIH0pIHtcbiAgICByZXR1cm4gUmVkdWNlckhlbHBlci5nZXRUYWJsZVF1ZXJ5KHsgZWRpdE1vZGVsIH0pLnF1ZXJ5U3RhdHVzXG4gIH1cblxuICBzdGF0aWMgZ2V0VGFibGVMb2dpblR5cGUoeyBlZGl0TW9kZWwgfSkge1xuICAgIHJldHVybiBSZWR1Y2VySGVscGVyLmdldFRhYmxlUXVlcnkoeyBlZGl0TW9kZWwgfSkubG9naW5UeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0VGFibGVTZWxlY3RlZFJvd0lkKHsgZWRpdE1vZGVsIH0pIHtcbiAgICByZXR1cm4gZWRpdE1vZGVsLmZvcm0uc2VsZWN0ZWRUYWJsZVNpbmdsZVJvd0lkXG4gIH1cblxuICBzdGF0aWMgaXNPcmRlckRlc2MoeyBlZGl0TW9kZWwgfSwgY29sdW1uVGFnOiBzdHJpbmcpIHtcbiAgICBjb25zdCBvcmRlclR5cGUgPSBSZWR1Y2VySGVscGVyLmdldFRhYmxlUXVlcnkoeyBlZGl0TW9kZWwgfSkub3JkZXJUeXBlXG4gICAgY29uc3Qgb3JkZXJCeSA9IFJlZHVjZXJIZWxwZXIuZ2V0VGFibGVRdWVyeSh7IGVkaXRNb2RlbCB9KS5vcmRlckJ5XG4gICAgbGV0IGN1cnJlbnRPcmRlclR5cGUgPSAnZGVzYydcbiAgICBpZiAoY29sdW1uVGFnID09PSBvcmRlckJ5KSB7XG4gICAgICBjdXJyZW50T3JkZXJUeXBlID0gb3JkZXJUeXBlXG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50T3JkZXJUeXBlID09PSAnZGVzYydcbiAgfVxuXG4gIHN0YXRpYyBnZXRUYWJsZVBhZ2luYXRpb25JbmRleCh7IGVkaXRNb2RlbCB9KSB7XG4gICAgcmV0dXJuIFJlZHVjZXJIZWxwZXIuZ2V0VGFibGVRdWVyeSh7IGVkaXRNb2RlbCB9KS5wYWdpbmF0aW9uSW5kZXhcbiAgfVxuXG4gIHN0YXRpYyBnZXRUYWJsZVNlbGVjdEFjdGlvbih7IGVkaXRNb2RlbCB9KSB7XG4gICAgcmV0dXJuIGVkaXRNb2RlbC5mb3JtLnRhYmxlU2VsZWN0QWN0aW9uXG4gIH1cblxuICBzdGF0aWMgZ2V0Q291bnRQZXJQYWdlKHsgZWRpdE1vZGVsIH0pIHtcbiAgICByZXR1cm4gZWRpdE1vZGVsLmZvcm0uZmllbGRzLmNvdW50UGVyUGFnZVxuICB9XG5cbiAgc3RhdGljIGVkaXRNb2RlbERpc2FibGVkKHsgZWRpdE1vZGVsIH0pIHtcbiAgICByZXR1cm4gIWVkaXRNb2RlbC5mb3JtLmlzVmFsaWQgfHwgZWRpdE1vZGVsLmZvcm0uaXNGZXRjaGluZ1xuICB9XG5cbiAgc3RhdGljIGNoZWNrRGlmZkNvdW50UGVyUGFnZSh7IGVkaXRNb2RlbCB9LCB7IGxpbWl0IH0pIHtcbiAgICByZXR1cm4gISFlZGl0TW9kZWwgJiYgUmVkdWNlckhlbHBlci5nZXRDb3VudFBlclBhZ2UoeyBlZGl0TW9kZWwgfSkgIT09IGxpbWl0XG4gIH1cblxuICBzdGF0aWMgZ2V0VW5pcXVlSWRGcm9tRWRpdE1vZGVsKHsgZWRpdE1vZGVsIH0pOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgb3JpZ2luTW9kZWwgfSA9IGVkaXRNb2RlbC5mb3JtXG4gICAgcmV0dXJuIG9yaWdpbk1vZGVsLnVuaXF1ZUlkXG4gIH1cblxuICBzdGF0aWMgZ2V0T3JpZ2luTW9kZWxGcm9tRWRpdE1vZGVsKHsgZWRpdE1vZGVsIH0pOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgb3JpZ2luTW9kZWwgfSA9IGVkaXRNb2RlbC5mb3JtXG4gICAgcmV0dXJuIG9yaWdpbk1vZGVsXG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyAgKioqIGF1dGggU2Vzc2lvbiAqKipcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgc3RhdGljIGhhc1dpZGdldFdlbGNvbWVTY3JlZW5IaWRkZW4oeyBhdXRoU2Vzc2lvbiB9KSB7XG4gICAgY29uc3QgeyBtb2JpbGVXaWRnZXQgfSA9IGF1dGhTZXNzaW9uXG4gICAgcmV0dXJuIG1vYmlsZVdpZGdldC5zaG93V2VsY29tZSA9PT0gZmFsc2VcbiAgfVxuXG4gIHN0YXRpYyBnZXRBdXRoTW9kZWxGaWVsZCh7IGF1dGhNb2RlbCB9KSB7XG4gICAgcmV0dXJuIGF1dGhNb2RlbC5mb3JtLmZpZWxkc1xuICB9XG4gIHN0YXRpYyBhdXRoTW9kZWxEaXNhYmxlZCh7IGF1dGhNb2RlbCB9KSB7XG4gICAgcmV0dXJuIGF1dGhNb2RlbC5mb3JtLmlzRmV0Y2hpbmdcbiAgfVxuXG4gIHN0YXRpYyBnZXRTb2NpYWxDb25uZWN0ZWRFcnJvcih7IGF1dGhNb2RlbCB9KSB7XG4gICAgcmV0dXJuIGF1dGhNb2RlbC5mb3JtLmZpZWxkcy5zb2NpYWxDb25uZWN0ZWRFcnJvclxuICB9XG5cbiAgc3RhdGljIGdldEF1dGhNb2RlbEFsZXJ0KHsgYXV0aE1vZGVsIH0pIHtcbiAgICByZXR1cm4gYXV0aE1vZGVsLmZvcm0uYWxlcnRcbiAgfVxuICBzdGF0aWMgZ2V0TG9jYXRpb24oeyBlZGl0TW9kZWwgfSkge1xuICAgIGNvbnN0IGxhdGl0dWRlID0gZWRpdE1vZGVsLmZvcm0uZmllbGRzLmxhdGl0dWRlXG4gICAgY29uc3QgbG9uZ2l0dWRlID0gZWRpdE1vZGVsLmZvcm0uZmllbGRzLmxvbmdpdHVkZVxuICAgIGNvbnN0IHBvc2l0aW9uID0gW2xhdGl0dWRlLCBsb25naXR1ZGVdXG4gICAgcmV0dXJuIHBvc2l0aW9uXG4gIH1cblxuICBzdGF0aWMgaXNOZXdNb2RlbEZvcm1QYWdlKHsgZWRpdE1vZGVsIH0pIHtcbiAgICBjb25zdCBlZGl0TW9kZWxUeXBlID0gUmVkdWNlckhlbHBlci5nZXRFZGl0TW9kZWxUeXBlKHsgZWRpdE1vZGVsIH0pXG5cbiAgICByZXR1cm4gZWRpdE1vZGVsVHlwZSA9PT0gVHlwZXMuZWRpdE1vZGVsLk1PREVMX0ZPUk1fVFlQRV9ORVdcbiAgfVxuXG4gIHN0YXRpYyBnZXRFZGl0TW9kZWxUeXBlKHsgZWRpdE1vZGVsIH0pIHtcbiAgICBjb25zdCBlZGl0TW9kZWxUeXBlID0gZWRpdE1vZGVsLmZvcm0uZWRpdE1vZGVsVHlwZVxuICAgIHJldHVybiBlZGl0TW9kZWxUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0TmV4dFJlc3RhdXJhbnRNb2RlbCh7IGVkaXRNb2RlbCB9KSB7XG4gICAgY29uc3Qgb3JpZ2luYWxNb2RlbCA9IGVkaXRNb2RlbC5mb3JtLm9yaWdpbk1vZGVsXG4gICAgY29uc3QgeyBpZDogcGFyc2VJZCwgdW5pcXVlSWQgfSA9IG9yaWdpbmFsTW9kZWxcbiAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGVkaXRNb2RlbC5mb3JtLmZpZWxkcy5kaXNwbGF5TmFtZVxuICAgIGNvbnN0IGxhdGl0dWRlID0gZWRpdE1vZGVsLmZvcm0uZmllbGRzLmxhdGl0dWRlXG4gICAgY29uc3QgbG9uZ2l0dWRlID0gZWRpdE1vZGVsLmZvcm0uZmllbGRzLmxvbmdpdHVkZVxuICAgIGNvbnN0IGFkZHJlc3MgPSBlZGl0TW9kZWwuZm9ybS5maWVsZHMuYWRkcmVzc1xuICAgIGNvbnN0IHN0cmVldF9udW1iZXIgPSBlZGl0TW9kZWwuZm9ybS5maWVsZHMuc3RyZWV0X251bWJlclxuICAgIGNvbnN0IHJvdXRlID0gZWRpdE1vZGVsLmZvcm0uZmllbGRzLnJvdXRlXG4gICAgY29uc3QgbG9jYWxpdHkgPSBlZGl0TW9kZWwuZm9ybS5maWVsZHMubG9jYWxpdHlcbiAgICBjb25zdCBzdWJsb2NhbGl0eSA9IGVkaXRNb2RlbC5mb3JtLmZpZWxkcy5zdWJsb2NhbGl0eVxuICAgIGNvbnN0IGNvdW50cnkgPSBlZGl0TW9kZWwuZm9ybS5maWVsZHMuY291bnRyeVxuICAgIGNvbnN0IHBvc3RhbF9jb2RlID0gZWRpdE1vZGVsLmZvcm0uZmllbGRzLnBvc3RhbF9jb2RlXG4gICAgY29uc3QgYWRtaW5pc3RyYXRpdmVfYXJlYSA9IGVkaXRNb2RlbC5mb3JtLmZpZWxkcy5hZG1pbmlzdHJhdGl2ZV9hcmVhXG5cbiAgICBjb25zdCBuZXh0TW9kZWwgPSB7XG4gICAgICBwYXJzZUlkLFxuICAgICAgdW5pcXVlSWQsXG4gICAgICBkaXNwbGF5TmFtZSxcbiAgICAgIGxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlLFxuICAgICAgYWRkcmVzcyxcbiAgICAgIHN0cmVldF9udW1iZXIsXG4gICAgICByb3V0ZSxcbiAgICAgIGxvY2FsaXR5LFxuICAgICAgc3VibG9jYWxpdHksXG4gICAgICBjb3VudHJ5LFxuICAgICAgcG9zdGFsX2NvZGUsXG4gICAgICBhZG1pbmlzdHJhdGl2ZV9hcmVhXG4gICAgfVxuICAgIHJldHVybiBuZXh0TW9kZWxcbiAgfVxufVxuIl19