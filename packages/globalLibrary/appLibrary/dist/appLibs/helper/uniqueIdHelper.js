"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UniqueIdHelper = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Types = _interopRequireWildcard(require("@app/types"));

var uuidV1 = require('uuid/v1');

var UniqueIdHelper = /*#__PURE__*/function () {
  function UniqueIdHelper() {
    (0, _classCallCheck2["default"])(this, UniqueIdHelper);
  }

  (0, _createClass2["default"])(UniqueIdHelper, null, [{
    key: "getUUID",
    value: function getUUID() {
      return uuidV1();
    }
    /**
     * Get the object's uniqueId from it's parent.
     *
     * @param objectSchemaName
     * @param parentObject
     */

  }, {
    key: "getUniqueIdFromParentModel",
    value: function getUniqueIdFromParentModel(params) {
      var objectSchemaName = params.objectSchemaName,
          parentObject = params.parentObject;
      var fieldType = Types.AppConstants.realmTypes[objectSchemaName];

      if (!parentObject) {
        return '';
      }

      var relativeObject = parentObject[fieldType];

      if (!relativeObject) {
        return '';
      }

      var uniqueId = relativeObject.uniqueId || '';
      return uniqueId;
    }
  }, {
    key: "getUniqueIdForReview",
    value: function getUniqueIdForReview(params) {
      var objectSchemaName = params.objectSchemaName,
          localRealmModelObject = params.localRealmModelObject;
      var currentReviewType = Types.AppConstants.realmTypes[objectSchemaName];
      var reviewType = localRealmModelObject.reviewType,
          forObjectUniqueId = localRealmModelObject.forObjectUniqueId;

      if (currentReviewType === reviewType) {
        if (forObjectUniqueId !== undefined && forObjectUniqueId !== '') {
          return forObjectUniqueId;
        }
      }

      return '';
    }
  }, {
    key: "getUniqueIdByPhotoType",
    value: function getUniqueIdByPhotoType(parseModelPhoto, photoType) {
      var objectSchemaName = Types.AppConstants.realmObjects[photoType].objectSchemaName; // Sometime, if not found the photo's related model.
      // Create new 'uniqueId'.

      if (!parseModelPhoto[photoType]) {
        return UniqueIdHelper.getUUID();
      }

      switch (objectSchemaName) {
        case Types.model.PARSE_RESTAURANTS:
          return parseModelPhoto.restaurant.uniqueId;

        case Types.model.PARSE_RECIPES:
          return parseModelPhoto.recipe.uniqueId;

        case Types.model.PARSE_USERS:
          return parseModelPhoto.user.uniqueId;
      }

      return '';
    }
  }]);
  return UniqueIdHelper;
}();

exports.UniqueIdHelper = UniqueIdHelper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHBMaWJzL2hlbHBlci91bmlxdWVJZEhlbHBlci50cyJdLCJuYW1lcyI6WyJ1dWlkVjEiLCJyZXF1aXJlIiwiVW5pcXVlSWRIZWxwZXIiLCJwYXJhbXMiLCJvYmplY3RTY2hlbWFOYW1lIiwicGFyZW50T2JqZWN0IiwiZmllbGRUeXBlIiwiQXBwQ29uc3RhbnRzIiwicmVhbG1UeXBlcyIsInJlbGF0aXZlT2JqZWN0IiwidW5pcXVlSWQiLCJsb2NhbFJlYWxtTW9kZWxPYmplY3QiLCJjdXJyZW50UmV2aWV3VHlwZSIsInJldmlld1R5cGUiLCJmb3JPYmplY3RVbmlxdWVJZCIsInVuZGVmaW5lZCIsInBhcnNlTW9kZWxQaG90byIsInBob3RvVHlwZSIsInJlYWxtT2JqZWN0cyIsImdldFVVSUQiLCJUeXBlcyIsIm1vZGVsIiwiUEFSU0VfUkVTVEFVUkFOVFMiLCJyZXN0YXVyYW50IiwiUEFSU0VfUkVDSVBFUyIsInJlY2lwZSIsIlBBUlNFX1VTRVJTIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUF0Qjs7SUFFYUMsYzs7Ozs7Ozs4QkFDTTtBQUNmLGFBQU9GLE1BQU0sRUFBYjtBQUNEO0FBRUQ7Ozs7Ozs7OzsrQ0FNa0NHLE0sRUFBeUQ7QUFBQSxVQUNqRkMsZ0JBRGlGLEdBQzlDRCxNQUQ4QyxDQUNqRkMsZ0JBRGlGO0FBQUEsVUFDL0RDLFlBRCtELEdBQzlDRixNQUQ4QyxDQUMvREUsWUFEK0Q7QUFFekYsVUFBTUMsU0FBUyxHQUFHQyxtQkFBYUMsVUFBYixDQUF3QkosZ0JBQXhCLENBQWxCOztBQUNBLFVBQUksQ0FBQ0MsWUFBTCxFQUFtQjtBQUNqQixlQUFPLEVBQVA7QUFDRDs7QUFDRCxVQUFNSSxjQUFjLEdBQUdKLFlBQVksQ0FBQ0MsU0FBRCxDQUFuQzs7QUFDQSxVQUFJLENBQUNHLGNBQUwsRUFBcUI7QUFDbkIsZUFBTyxFQUFQO0FBQ0Q7O0FBQ0QsVUFBTUMsUUFBUSxHQUFHRCxjQUFjLENBQUNDLFFBQWYsSUFBMkIsRUFBNUM7QUFDQSxhQUFPQSxRQUFQO0FBQ0Q7Ozt5Q0FFMkJQLE0sRUFBbUQ7QUFBQSxVQUNyRUMsZ0JBRHFFLEdBQ3pCRCxNQUR5QixDQUNyRUMsZ0JBRHFFO0FBQUEsVUFDbkRPLHFCQURtRCxHQUN6QlIsTUFEeUIsQ0FDbkRRLHFCQURtRDtBQUc3RSxVQUFNQyxpQkFBaUIsR0FBR0wsbUJBQWFDLFVBQWIsQ0FBd0JKLGdCQUF4QixDQUExQjtBQUg2RSxVQUlyRVMsVUFKcUUsR0FJbkNGLHFCQUptQyxDQUlyRUUsVUFKcUU7QUFBQSxVQUl6REMsaUJBSnlELEdBSW5DSCxxQkFKbUMsQ0FJekRHLGlCQUp5RDs7QUFNN0UsVUFBSUYsaUJBQWlCLEtBQUtDLFVBQTFCLEVBQXNDO0FBQ3BDLFlBQUlDLGlCQUFpQixLQUFLQyxTQUF0QixJQUFtQ0QsaUJBQWlCLEtBQUssRUFBN0QsRUFBaUU7QUFDL0QsaUJBQU9BLGlCQUFQO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPLEVBQVA7QUFDRDs7OzJDQUdDRSxlLEVBQ0FDLFMsRUFDUTtBQUFBLFVBQ0FiLGdCQURBLEdBQ3FCRyxtQkFBYVcsWUFBYixDQUEwQkQsU0FBMUIsQ0FEckIsQ0FDQWIsZ0JBREEsRUFFUjtBQUNBOztBQUNBLFVBQUksQ0FBQ1ksZUFBZSxDQUFDQyxTQUFELENBQXBCLEVBQWlDO0FBQy9CLGVBQU9mLGNBQWMsQ0FBQ2lCLE9BQWYsRUFBUDtBQUNEOztBQUNELGNBQVFmLGdCQUFSO0FBQ0UsYUFBS2dCLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxpQkFBakI7QUFDRSxpQkFBUU4sZUFBZSxDQUFDTyxVQUFqQixDQUFvQ2IsUUFBM0M7O0FBQ0YsYUFBS1UsS0FBSyxDQUFDQyxLQUFOLENBQVlHLGFBQWpCO0FBQ0UsaUJBQVFSLGVBQWUsQ0FBQ1MsTUFBakIsQ0FBZ0NmLFFBQXZDOztBQUNGLGFBQUtVLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxXQUFqQjtBQUNFLGlCQUFRVixlQUFlLENBQUNXLElBQWpCLENBQThCakIsUUFBckM7QUFOSjs7QUFRQSxhQUFPLEVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcENvbnN0YW50cyB9IGZyb20gJ0BhcHAvdHlwZXMnXG5pbXBvcnQgKiBhcyBUeXBlcyBmcm9tICdAYXBwL3R5cGVzJ1xuXG5jb25zdCB1dWlkVjEgPSByZXF1aXJlKCd1dWlkL3YxJylcblxuZXhwb3J0IGNsYXNzIFVuaXF1ZUlkSGVscGVyIHtcbiAgc3RhdGljIGdldFVVSUQoKSB7XG4gICAgcmV0dXJuIHV1aWRWMSgpXG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvYmplY3QncyB1bmlxdWVJZCBmcm9tIGl0J3MgcGFyZW50LlxuICAgKlxuICAgKiBAcGFyYW0gb2JqZWN0U2NoZW1hTmFtZVxuICAgKiBAcGFyYW0gcGFyZW50T2JqZWN0XG4gICAqL1xuICBzdGF0aWMgZ2V0VW5pcXVlSWRGcm9tUGFyZW50TW9kZWwocGFyYW1zOiBJVW5pcXVlSWRIZWxwZXJHZXRVbmlxdWVJZEZyb21QYXJlbnRNb2RlbFBhcmFtcykge1xuICAgIGNvbnN0IHsgb2JqZWN0U2NoZW1hTmFtZSwgcGFyZW50T2JqZWN0IH0gPSBwYXJhbXNcbiAgICBjb25zdCBmaWVsZFR5cGUgPSBBcHBDb25zdGFudHMucmVhbG1UeXBlc1tvYmplY3RTY2hlbWFOYW1lXVxuICAgIGlmICghcGFyZW50T2JqZWN0KSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgY29uc3QgcmVsYXRpdmVPYmplY3QgPSBwYXJlbnRPYmplY3RbZmllbGRUeXBlXVxuICAgIGlmICghcmVsYXRpdmVPYmplY3QpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBjb25zdCB1bmlxdWVJZCA9IHJlbGF0aXZlT2JqZWN0LnVuaXF1ZUlkIHx8ICcnXG4gICAgcmV0dXJuIHVuaXF1ZUlkXG4gIH1cblxuICBzdGF0aWMgZ2V0VW5pcXVlSWRGb3JSZXZpZXcocGFyYW1zOiBJVW5pcXVlSWRIZWxwZXJHZXRVbmlxdWVJZEZvclJldmlld1BhcmFtcykge1xuICAgIGNvbnN0IHsgb2JqZWN0U2NoZW1hTmFtZSwgbG9jYWxSZWFsbU1vZGVsT2JqZWN0IH0gPSBwYXJhbXNcblxuICAgIGNvbnN0IGN1cnJlbnRSZXZpZXdUeXBlID0gQXBwQ29uc3RhbnRzLnJlYWxtVHlwZXNbb2JqZWN0U2NoZW1hTmFtZV1cbiAgICBjb25zdCB7IHJldmlld1R5cGUsIGZvck9iamVjdFVuaXF1ZUlkIH0gPSBsb2NhbFJlYWxtTW9kZWxPYmplY3RcblxuICAgIGlmIChjdXJyZW50UmV2aWV3VHlwZSA9PT0gcmV2aWV3VHlwZSkge1xuICAgICAgaWYgKGZvck9iamVjdFVuaXF1ZUlkICE9PSB1bmRlZmluZWQgJiYgZm9yT2JqZWN0VW5pcXVlSWQgIT09ICcnKSB7XG4gICAgICAgIHJldHVybiBmb3JPYmplY3RVbmlxdWVJZFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgc3RhdGljIGdldFVuaXF1ZUlkQnlQaG90b1R5cGUoXG4gICAgcGFyc2VNb2RlbFBob3RvOiBJUGFyc2VNb2RlbFBob3RvcyB8IElSZWFsbU1vZGVsUGhvdG9zLFxuICAgIHBob3RvVHlwZTogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgeyBvYmplY3RTY2hlbWFOYW1lIH0gPSBBcHBDb25zdGFudHMucmVhbG1PYmplY3RzW3Bob3RvVHlwZV1cbiAgICAvLyBTb21ldGltZSwgaWYgbm90IGZvdW5kIHRoZSBwaG90bydzIHJlbGF0ZWQgbW9kZWwuXG4gICAgLy8gQ3JlYXRlIG5ldyAndW5pcXVlSWQnLlxuICAgIGlmICghcGFyc2VNb2RlbFBob3RvW3Bob3RvVHlwZV0pIHtcbiAgICAgIHJldHVybiBVbmlxdWVJZEhlbHBlci5nZXRVVUlEKClcbiAgICB9XG4gICAgc3dpdGNoIChvYmplY3RTY2hlbWFOYW1lKSB7XG4gICAgICBjYXNlIFR5cGVzLm1vZGVsLlBBUlNFX1JFU1RBVVJBTlRTOlxuICAgICAgICByZXR1cm4gKHBhcnNlTW9kZWxQaG90by5yZXN0YXVyYW50IGFzIGFueSkudW5pcXVlSWRcbiAgICAgIGNhc2UgVHlwZXMubW9kZWwuUEFSU0VfUkVDSVBFUzpcbiAgICAgICAgcmV0dXJuIChwYXJzZU1vZGVsUGhvdG8ucmVjaXBlIGFzIGFueSkudW5pcXVlSWRcbiAgICAgIGNhc2UgVHlwZXMubW9kZWwuUEFSU0VfVVNFUlM6XG4gICAgICAgIHJldHVybiAocGFyc2VNb2RlbFBob3RvLnVzZXIgYXMgYW55KS51bmlxdWVJZFxuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfVxufVxuIl19