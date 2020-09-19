"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PeopleInEvent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _tools = require("@app/tools");

var PeopleInEvent = /*#__PURE__*/function () {
  function PeopleInEvent() {
    (0, _classCallCheck2["default"])(this, PeopleInEvent);
  }

  (0, _createClass2["default"])(PeopleInEvent, null, [{
    key: "getRecipeIdsForQuery",
    value: function getRecipeIdsForQuery(peopleInEventModels) {
      var multipleArrays = _tools.UnderscoreUtils.getFieldArrayWithoutUndefined({
        list: peopleInEventModels,
        propertyName: 'recipes'
      });

      var arrays = _tools.UnderscoreUtils.reduceForArray({
        arrays: multipleArrays
      });

      var recipeIds = _tools.UnderscoreUtils.getFieldArrayWithoutUndefined({
        list: arrays,
        propertyName: 'id'
      });

      recipeIds = _tools.UnderscoreUtils.uniqueInArray({
        array: recipeIds
      });
      recipeIds = recipeIds.slice(0, 0 + PeopleInEvent.config.paginationCountPerPage);
      return recipeIds;
    }
  }, {
    key: "getOtherUsersAlsoOrderedRecipe",
    value: function getOtherUsersAlsoOrderedRecipe(terms, listTask, list) {
      var users = [];
      var userIds = [];
      list.map(function (item) {
        var user = item.user;

        if (userIds.indexOf(user.id) === -1) {
          users.push(user);
          userIds.push(user.id);
        }
      });
      return users;
    }
  }, {
    key: "getOrderedRecipeDict",
    value: function getOrderedRecipeDict(peopleInEventListTask) {
      var dict = {};
      peopleInEventListTask.results.map(function (item) {
        var user = item.user;
        dict[user.id] = {
          peopleInEvent: item,
          recipes: item.recipes
        };
      });
      return dict;
    }
  }, {
    key: "getOrderedRecipeCount",
    value: function getOrderedRecipeCount(user, peopleInEventListDict) {
      if (Object.keys(peopleInEventListDict).indexOf(user.id) === -1) {
        return 0;
      }

      return peopleInEventListDict[user.id].recipes.length;
    }
  }, {
    key: "getOrderedRecipeIds",
    value: function getOrderedRecipeIds(_ref) {
      var peopleInEventListDict = _ref.peopleInEventListDict,
          selectedUserId = _ref.selectedUserId;

      if (Object.keys(peopleInEventListDict).indexOf(selectedUserId) !== -1) {
        var orderedRecipes = peopleInEventListDict[selectedUserId].recipes;
        return _tools.UnderscoreUtils.getFieldArrayWithoutUndefined({
          list: orderedRecipes,
          propertyName: 'id'
        });
      }

      return [];
    }
    /**
     * Basically, the 'peopleInEvent' parse instance can be created and removed as the same instance.
     * For Example:
     *     1. Created a 'PeopleInEvent' parse object for some use in the event and flagged it as '1'.
     *     2. One day, the 'PeopleInEvent' parse object will be removed only flagged as '0'.
     *     3. Other day, some user also want to create it again, but the parse instance already exist,
     *        So do not need to create a new 'PeopleInEvent' parse object,
     *        Just query it using 'PeopleInEvent' uniqueId.
     * @param eventUniqueId - uniqueId of the event
     * @param userId - id of the user
     * @returns {string}
     */

  }, {
    key: "generateParseObjectUniqueId",
    value: function generateParseObjectUniqueId(eventUniqueId, userId) {
      return "".concat(eventUniqueId, "_").concat(userId);
    }
  }, {
    key: "hasOrdered",
    value: function hasOrdered(_ref2, recipe) {
      var orderedRecipeIds = _ref2.orderedRecipeIds;
      return orderedRecipeIds.indexOf(recipe.id) !== -1;
    }
  }]);
  return PeopleInEvent;
}();

exports.PeopleInEvent = PeopleInEvent;
PeopleInEvent.config = {
  paginationCountPerPage: 10
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHBMaWJzL3Blb3BsZUluRXZlbnQudHMiXSwibmFtZXMiOlsiUGVvcGxlSW5FdmVudCIsInBlb3BsZUluRXZlbnRNb2RlbHMiLCJtdWx0aXBsZUFycmF5cyIsIlVuZGVyc2NvcmVVdGlscyIsImdldEZpZWxkQXJyYXlXaXRob3V0VW5kZWZpbmVkIiwibGlzdCIsInByb3BlcnR5TmFtZSIsImFycmF5cyIsInJlZHVjZUZvckFycmF5IiwicmVjaXBlSWRzIiwidW5pcXVlSW5BcnJheSIsImFycmF5Iiwic2xpY2UiLCJjb25maWciLCJwYWdpbmF0aW9uQ291bnRQZXJQYWdlIiwidGVybXMiLCJsaXN0VGFzayIsInVzZXJzIiwidXNlcklkcyIsIm1hcCIsIml0ZW0iLCJ1c2VyIiwiaW5kZXhPZiIsImlkIiwicHVzaCIsInBlb3BsZUluRXZlbnRMaXN0VGFzayIsImRpY3QiLCJyZXN1bHRzIiwicGVvcGxlSW5FdmVudCIsInJlY2lwZXMiLCJwZW9wbGVJbkV2ZW50TGlzdERpY3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwic2VsZWN0ZWRVc2VySWQiLCJvcmRlcmVkUmVjaXBlcyIsImV2ZW50VW5pcXVlSWQiLCJ1c2VySWQiLCJyZWNpcGUiLCJvcmRlcmVkUmVjaXBlSWRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRWFBLGE7Ozs7Ozs7eUNBS2lCQyxtQixFQUFxQjtBQUMvQyxVQUFNQyxjQUFjLEdBQUdDLHVCQUFnQkMsNkJBQWhCLENBQThDO0FBQ25FQyxRQUFBQSxJQUFJLEVBQUVKLG1CQUQ2RDtBQUVuRUssUUFBQUEsWUFBWSxFQUFFO0FBRnFELE9BQTlDLENBQXZCOztBQUlBLFVBQU1DLE1BQU0sR0FBR0osdUJBQWdCSyxjQUFoQixDQUErQjtBQUM1Q0QsUUFBQUEsTUFBTSxFQUFFTDtBQURvQyxPQUEvQixDQUFmOztBQUdBLFVBQUlPLFNBQVMsR0FBR04sdUJBQWdCQyw2QkFBaEIsQ0FBOEM7QUFDNURDLFFB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LEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbmRlcnNjb3JlVXRpbHMgfSBmcm9tICdAYXBwL3Rvb2xzJ1xuXG5leHBvcnQgY2xhc3MgUGVvcGxlSW5FdmVudCB7XG4gIHN0YXRpYyBjb25maWcgPSB7XG4gICAgcGFnaW5hdGlvbkNvdW50UGVyUGFnZTogMTBcbiAgfVxuXG4gIHN0YXRpYyBnZXRSZWNpcGVJZHNGb3JRdWVyeShwZW9wbGVJbkV2ZW50TW9kZWxzKSB7XG4gICAgY29uc3QgbXVsdGlwbGVBcnJheXMgPSBVbmRlcnNjb3JlVXRpbHMuZ2V0RmllbGRBcnJheVdpdGhvdXRVbmRlZmluZWQoe1xuICAgICAgbGlzdDogcGVvcGxlSW5FdmVudE1vZGVscyxcbiAgICAgIHByb3BlcnR5TmFtZTogJ3JlY2lwZXMnXG4gICAgfSlcbiAgICBjb25zdCBhcnJheXMgPSBVbmRlcnNjb3JlVXRpbHMucmVkdWNlRm9yQXJyYXkoe1xuICAgICAgYXJyYXlzOiBtdWx0aXBsZUFycmF5c1xuICAgIH0pXG4gICAgbGV0IHJlY2lwZUlkcyA9IFVuZGVyc2NvcmVVdGlscy5nZXRGaWVsZEFycmF5V2l0aG91dFVuZGVmaW5lZCh7XG4gICAgICBsaXN0OiBhcnJheXMsXG4gICAgICBwcm9wZXJ0eU5hbWU6ICdpZCdcbiAgICB9KVxuICAgIHJlY2lwZUlkcyA9IFVuZGVyc2NvcmVVdGlscy51bmlxdWVJbkFycmF5KHtcbiAgICAgIGFycmF5OiByZWNpcGVJZHNcbiAgICB9KVxuICAgIHJlY2lwZUlkcyA9IHJlY2lwZUlkcy5zbGljZSgwLCAwICsgUGVvcGxlSW5FdmVudC5jb25maWcucGFnaW5hdGlvbkNvdW50UGVyUGFnZSlcbiAgICByZXR1cm4gcmVjaXBlSWRzXG4gIH1cblxuICBzdGF0aWMgZ2V0T3RoZXJVc2Vyc0Fsc29PcmRlcmVkUmVjaXBlKHRlcm1zLCBsaXN0VGFzaywgbGlzdCkge1xuICAgIGNvbnN0IHVzZXJzOiBhbnkgPSBbXVxuICAgIGNvbnN0IHVzZXJJZHM6IGFueSA9IFtdXG4gICAgbGlzdC5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgY29uc3QgdXNlcjogYW55ID0gaXRlbS51c2VyXG4gICAgICBpZiAodXNlcklkcy5pbmRleE9mKHVzZXIuaWQpID09PSAtMSkge1xuICAgICAgICB1c2Vycy5wdXNoKHVzZXIpXG4gICAgICAgIHVzZXJJZHMucHVzaCh1c2VyLmlkKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHVzZXJzXG4gIH1cblxuICBzdGF0aWMgZ2V0T3JkZXJlZFJlY2lwZURpY3QocGVvcGxlSW5FdmVudExpc3RUYXNrKTogSVBlb3BsZUluRXZlbnRMaXN0RGljdCB7XG4gICAgY29uc3QgZGljdDogSVBlb3BsZUluRXZlbnRMaXN0RGljdCA9IHt9XG4gICAgcGVvcGxlSW5FdmVudExpc3RUYXNrLnJlc3VsdHMubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBpdGVtLnVzZXJcbiAgICAgIGRpY3RbdXNlci5pZF0gPSB7XG4gICAgICAgIHBlb3BsZUluRXZlbnQ6IGl0ZW0sXG4gICAgICAgIHJlY2lwZXM6IGl0ZW0ucmVjaXBlc1xuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGRpY3RcbiAgfVxuXG4gIHN0YXRpYyBnZXRPcmRlcmVkUmVjaXBlQ291bnQodXNlciwgcGVvcGxlSW5FdmVudExpc3REaWN0OiBJUGVvcGxlSW5FdmVudExpc3REaWN0KSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHBlb3BsZUluRXZlbnRMaXN0RGljdCkuaW5kZXhPZih1c2VyLmlkKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICAgIHJldHVybiBwZW9wbGVJbkV2ZW50TGlzdERpY3RbdXNlci5pZF0ucmVjaXBlcy5sZW5ndGhcbiAgfVxuXG4gIHN0YXRpYyBnZXRPcmRlcmVkUmVjaXBlSWRzKHsgcGVvcGxlSW5FdmVudExpc3REaWN0LCBzZWxlY3RlZFVzZXJJZCB9KTogc3RyaW5nW10ge1xuICAgIGlmIChPYmplY3Qua2V5cyhwZW9wbGVJbkV2ZW50TGlzdERpY3QpLmluZGV4T2Yoc2VsZWN0ZWRVc2VySWQpICE9PSAtMSkge1xuICAgICAgY29uc3Qgb3JkZXJlZFJlY2lwZXMgPSBwZW9wbGVJbkV2ZW50TGlzdERpY3Rbc2VsZWN0ZWRVc2VySWRdLnJlY2lwZXNcbiAgICAgIHJldHVybiBVbmRlcnNjb3JlVXRpbHMuZ2V0RmllbGRBcnJheVdpdGhvdXRVbmRlZmluZWQoe1xuICAgICAgICBsaXN0OiBvcmRlcmVkUmVjaXBlcyxcbiAgICAgICAgcHJvcGVydHlOYW1lOiAnaWQnXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gW11cbiAgfVxuXG4gIC8qKlxuICAgKiBCYXNpY2FsbHksIHRoZSAncGVvcGxlSW5FdmVudCcgcGFyc2UgaW5zdGFuY2UgY2FuIGJlIGNyZWF0ZWQgYW5kIHJlbW92ZWQgYXMgdGhlIHNhbWUgaW5zdGFuY2UuXG4gICAqIEZvciBFeGFtcGxlOlxuICAgKiAgICAgMS4gQ3JlYXRlZCBhICdQZW9wbGVJbkV2ZW50JyBwYXJzZSBvYmplY3QgZm9yIHNvbWUgdXNlIGluIHRoZSBldmVudCBhbmQgZmxhZ2dlZCBpdCBhcyAnMScuXG4gICAqICAgICAyLiBPbmUgZGF5LCB0aGUgJ1Blb3BsZUluRXZlbnQnIHBhcnNlIG9iamVjdCB3aWxsIGJlIHJlbW92ZWQgb25seSBmbGFnZ2VkIGFzICcwJy5cbiAgICogICAgIDMuIE90aGVyIGRheSwgc29tZSB1c2VyIGFsc28gd2FudCB0byBjcmVhdGUgaXQgYWdhaW4sIGJ1dCB0aGUgcGFyc2UgaW5zdGFuY2UgYWxyZWFkeSBleGlzdCxcbiAgICogICAgICAgIFNvIGRvIG5vdCBuZWVkIHRvIGNyZWF0ZSBhIG5ldyAnUGVvcGxlSW5FdmVudCcgcGFyc2Ugb2JqZWN0LFxuICAgKiAgICAgICAgSnVzdCBxdWVyeSBpdCB1c2luZyAnUGVvcGxlSW5FdmVudCcgdW5pcXVlSWQuXG4gICAqIEBwYXJhbSBldmVudFVuaXF1ZUlkIC0gdW5pcXVlSWQgb2YgdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB1c2VySWQgLSBpZCBvZiB0aGUgdXNlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdlbmVyYXRlUGFyc2VPYmplY3RVbmlxdWVJZChldmVudFVuaXF1ZUlkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGAke2V2ZW50VW5pcXVlSWR9XyR7dXNlcklkfWBcbiAgfVxuXG4gIHN0YXRpYyBoYXNPcmRlcmVkKHsgb3JkZXJlZFJlY2lwZUlkcyB9LCByZWNpcGU6IElQYXJzZU1vZGVsUmVjaXBlcykge1xuICAgIHJldHVybiBvcmRlcmVkUmVjaXBlSWRzLmluZGV4T2YocmVjaXBlLmlkKSAhPT0gLTFcbiAgfVxufVxuIl19