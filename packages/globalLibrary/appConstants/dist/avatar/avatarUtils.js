"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarUtils = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _constants = require("../constants");

var _parseModelImageHelper = require("./parseModelImageHelper");

var Types = _interopRequireWildcard(require("../types"));

var AvatarUtils = /*#__PURE__*/function () {
  function AvatarUtils(object) {
    var avatarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    (0, _classCallCheck2["default"])(this, AvatarUtils);
    this.object = null;
    this.avatarType = void 0;
    this.object = object;
    this.avatarType = avatarType;
  }

  (0, _createClass2["default"])(AvatarUtils, [{
    key: "getAvatarProperties",
    value: function getAvatarProperties(avatarURISource) {
      if (!!avatarURISource) {
        return {
          src: avatarURISource.uri
        };
      }

      if (typeof this.object === 'undefined') {
        return {};
      } // step1:  when the 'avatarType' is null, accoring to user's loginType.


      if (typeof this.avatarType === 'undefined') {
        var userAvatarType = this.object.loginType;

        switch (userAvatarType) {
          case _constants.StatusConstants.USERS.TYPE_FACEBOOK:
            return {
              facebookId: this.object.facebook_id,
              name: this.object.displayName
            };

          case _constants.StatusConstants.USERS.TYPE_TWITTER:
            return {
              twitterHandle: this.object.twitterHandle,
              name: this.object.displayName
            };

          case _constants.StatusConstants.USERS.TYPE_EMAIL:
            return {
              email: this.object.email,
              name: this.object.displayName
            };
        }
      } // step2: Using for the connectionUser.


      var authData = this.object.authData;

      switch (this.avatarType) {
        case Types.userConnected.USER_CONNECT_VIA_FACEBOOK:
          {
            var _ref = authData || {
              facebook: null
            },
                facebook = _ref.facebook;

            if (!!facebook) {
              var facebookId = facebook.id;
              return {
                facebookId: facebookId
              };
            }

            break;
          }

        case Types.userConnected.USER_CONNECT_VIA_TWITTER:
          {
            var _ref2 = authData || {
              twitter: null
            },
                twitter = _ref2.twitter;

            if (!!twitter) {
              var twitterHandle = twitter.screen_name;
              return {
                twitterHandle: twitterHandle
              };
            }

            break;
          }

        case Types.userConnected.USER_CONNECT_VIA_NAME:
          {
            return {
              email: this.object.email,
              name: this.object.displayName
            };
          }
      } // step3: When users have already upload images as their avatar.


      var coverImage = _parseModelImageHelper.ParseModelImageHelper.getUserCoverUrl(this.object);

      if (coverImage !== '') {
        return {
          src: coverImage
        };
      } // step4: Above all, can not get user's avatar.
      // Using user's email as default


      return {
        email: this.object.email
      };
    }
  }]);
  return AvatarUtils;
}();

exports.AvatarUtils = AvatarUtils;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdmF0YXIvYXZhdGFyVXRpbHMudHMiXSwibmFtZXMiOlsiQXZhdGFyVXRpbHMiLCJvYmplY3QiLCJhdmF0YXJUeXBlIiwiYXZhdGFyVVJJU291cmNlIiwic3JjIiwidXJpIiwidXNlckF2YXRhclR5cGUiLCJsb2dpblR5cGUiLCJTdGF0dXNDb25zdGFudHMiLCJVU0VSUyIsIlRZUEVfRkFDRUJPT0siLCJmYWNlYm9va0lkIiwiZmFjZWJvb2tfaWQiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJUWVBFX1RXSVRURVIiLCJ0d2l0dGVySGFuZGxlIiwiVFlQRV9FTUFJTCIsImVtYWlsIiwiYXV0aERhdGEiLCJUeXBlcyIsInVzZXJDb25uZWN0ZWQiLCJVU0VSX0NPTk5FQ1RfVklBX0ZBQ0VCT09LIiwiZmFjZWJvb2siLCJpZCIsIlVTRVJfQ09OTkVDVF9WSUFfVFdJVFRFUiIsInR3aXR0ZXIiLCJzY3JlZW5fbmFtZSIsIlVTRVJfQ09OTkVDVF9WSUFfTkFNRSIsImNvdmVySW1hZ2UiLCJQYXJzZU1vZGVsSW1hZ2VIZWxwZXIiLCJnZXRVc2VyQ292ZXJVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUlBOztBQUVBOztJQUVhQSxXO0FBSVgsdUJBQVlDLE1BQVosRUFBMkQ7QUFBQSxRQUFsQ0MsVUFBa0MsdUVBQU4sSUFBTTtBQUFBO0FBQUEsU0FIbkRELE1BR21ELEdBSHJDLElBR3FDO0FBQUEsU0FGbkRDLFVBRW1EO0FBQ3pELFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7Ozs7d0NBRW1CQyxlLEVBQXdEO0FBQzFFLFVBQUksQ0FBQyxDQUFDQSxlQUFOLEVBQXVCO0FBQ3JCLGVBQU87QUFDTEMsVUFBQUEsR0FBRyxFQUFFRCxlQUFlLENBQUNFO0FBRGhCLFNBQVA7QUFHRDs7QUFFRCxVQUFJLE9BQU8sS0FBS0osTUFBWixLQUF1QixXQUEzQixFQUF3QztBQUN0QyxlQUFPLEVBQVA7QUFDRCxPQVR5RSxDQVcxRTs7O0FBQ0EsVUFBSSxPQUFPLEtBQUtDLFVBQVosS0FBMkIsV0FBL0IsRUFBNEM7QUFDMUMsWUFBTUksY0FBYyxHQUFHLEtBQUtMLE1BQUwsQ0FBWU0sU0FBbkM7O0FBQ0EsZ0JBQVFELGNBQVI7QUFDRSxlQUFLRSwyQkFBZ0JDLEtBQWhCLENBQXNCQyxhQUEzQjtBQUNFLG1CQUFPO0FBQ0xDLGNBQUFBLFVBQVUsRUFBRSxLQUFLVixNQUFMLENBQVlXLFdBRG5CO0FBRUxDLGNBQUFBLElBQUksRUFBRSxLQUFLWixNQUFMLENBQVlhO0FBRmIsYUFBUDs7QUFJRixlQUFLTiwyQkFBZ0JDLEtBQWhCLENBQXNCTSxZQUEzQjtBQUNFLG1CQUFPO0FBQ0xDLGNBQUFBLGFBQWEsRUFBRSxLQUFLZixNQUFMLENBQVllLGFBRHRCO0FBRUxILGNBQUFBLElBQUksRUFBRSxLQUFLWixNQUFMLENBQVlhO0FBRmIsYUFBUDs7QUFJRixlQUFLTiwyQkFBZ0JDLEtBQWhCLENBQXNCUSxVQUEzQjtBQUNFLG1CQUFPO0FBQ0xDLGNBQUFBLEtBQUssRUFBRSxLQUFLakIsTUFBTCxDQUFZaUIsS0FEZDtBQUVMTCxjQUFBQSxJQUFJLEVBQUUsS0FBS1osTUFBTCxDQUFZYTtBQUZiLGFBQVA7QUFaSjtBQWlCRCxPQS9CeUUsQ0FpQzFFOzs7QUFqQzBFLFVBa0NsRUssUUFsQ2tFLEdBa0NyRCxLQUFLbEIsTUFsQ2dELENBa0NsRWtCLFFBbENrRTs7QUFtQzFFLGNBQVEsS0FBS2pCLFVBQWI7QUFDRSxhQUFLa0IsS0FBSyxDQUFDQyxhQUFOLENBQW9CQyx5QkFBekI7QUFBb0Q7QUFBQSx1QkFDN0JILFFBQVEsSUFBSTtBQUFFSSxjQUFBQSxRQUFRLEVBQUU7QUFBWixhQURpQjtBQUFBLGdCQUMxQ0EsUUFEMEMsUUFDMUNBLFFBRDBDOztBQUVsRCxnQkFBSSxDQUFDLENBQUNBLFFBQU4sRUFBZ0I7QUFDZCxrQkFBTVosVUFBVSxHQUFHWSxRQUFRLENBQUNDLEVBQTVCO0FBQ0EscUJBQU87QUFDTGIsZ0JBQUFBLFVBQVUsRUFBVkE7QUFESyxlQUFQO0FBR0Q7O0FBQ0Q7QUFDRDs7QUFDRCxhQUFLUyxLQUFLLENBQUNDLGFBQU4sQ0FBb0JJLHdCQUF6QjtBQUFtRDtBQUFBLHdCQUM3Qk4sUUFBUSxJQUFJO0FBQUVPLGNBQUFBLE9BQU8sRUFBRTtBQUFYLGFBRGlCO0FBQUEsZ0JBQ3pDQSxPQUR5QyxTQUN6Q0EsT0FEeUM7O0FBRWpELGdCQUFJLENBQUMsQ0FBQ0EsT0FBTixFQUFlO0FBQ2Isa0JBQU1WLGFBQWEsR0FBR1UsT0FBTyxDQUFDQyxXQUE5QjtBQUNBLHFCQUFPO0FBQ0xYLGdCQUFBQSxhQUFhLEVBQWJBO0FBREssZUFBUDtBQUdEOztBQUNEO0FBQ0Q7O0FBRUQsYUFBS0ksS0FBSyxDQUFDQyxhQUFOLENBQW9CTyxxQkFBekI7QUFBZ0Q7QUFDOUMsbUJBQU87QUFDTFYsY0FBQUEsS0FBSyxFQUFFLEtBQUtqQixNQUFMLENBQVlpQixLQURkO0FBRUxMLGNBQUFBLElBQUksRUFBRSxLQUFLWixNQUFMLENBQVlhO0FBRmIsYUFBUDtBQUlEO0FBM0JILE9BbkMwRSxDQWlFMUU7OztBQUNBLFVBQU1lLFVBQVUsR0FBR0MsNkNBQXNCQyxlQUF0QixDQUFzQyxLQUFLOUIsTUFBM0MsQ0FBbkI7O0FBQ0EsVUFBSTRCLFVBQVUsS0FBSyxFQUFuQixFQUF1QjtBQUNyQixlQUFPO0FBQ0x6QixVQUFBQSxHQUFHLEVBQUV5QjtBQURBLFNBQVA7QUFHRCxPQXZFeUUsQ0F5RTFFO0FBQ0E7OztBQUNBLGFBQU87QUFDTFgsUUFBQUEsS0FBSyxFQUFFLEtBQUtqQixNQUFMLENBQVlpQjtBQURkLE9BQVA7QUFHRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXR1c0NvbnN0YW50cyB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuaW1wb3J0IHsgQXZhdGFyVVJJU291cmNlV2l0aE51bGwsIElBdmF0YXJQcm9wcyB9IGZyb20gJ0BhcHAvYXZhdGFyJ1xuXG5pbXBvcnQgeyBQYXJzZU1vZGVsSW1hZ2VIZWxwZXIgfSBmcm9tICcuL3BhcnNlTW9kZWxJbWFnZUhlbHBlcidcblxuaW1wb3J0ICogYXMgVHlwZXMgZnJvbSAnLi4vdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBBdmF0YXJVdGlscyB7XG4gIHByaXZhdGUgb2JqZWN0OiBhbnkgPSBudWxsXG4gIHByaXZhdGUgYXZhdGFyVHlwZTogc3RyaW5nIHwgbnVsbFxuXG4gIGNvbnN0cnVjdG9yKG9iamVjdDogYW55LCBhdmF0YXJUeXBlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0XG4gICAgdGhpcy5hdmF0YXJUeXBlID0gYXZhdGFyVHlwZVxuICB9XG5cbiAgZ2V0QXZhdGFyUHJvcGVydGllcyhhdmF0YXJVUklTb3VyY2U6IEF2YXRhclVSSVNvdXJjZVdpdGhOdWxsKTogSUF2YXRhclByb3BzIHtcbiAgICBpZiAoISFhdmF0YXJVUklTb3VyY2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNyYzogYXZhdGFyVVJJU291cmNlLnVyaVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5vYmplY3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICAvLyBzdGVwMTogIHdoZW4gdGhlICdhdmF0YXJUeXBlJyBpcyBudWxsLCBhY2NvcmluZyB0byB1c2VyJ3MgbG9naW5UeXBlLlxuICAgIGlmICh0eXBlb2YgdGhpcy5hdmF0YXJUeXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgdXNlckF2YXRhclR5cGUgPSB0aGlzLm9iamVjdC5sb2dpblR5cGVcbiAgICAgIHN3aXRjaCAodXNlckF2YXRhclR5cGUpIHtcbiAgICAgICAgY2FzZSBTdGF0dXNDb25zdGFudHMuVVNFUlMuVFlQRV9GQUNFQk9PSzpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmFjZWJvb2tJZDogdGhpcy5vYmplY3QuZmFjZWJvb2tfaWQsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm9iamVjdC5kaXNwbGF5TmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBTdGF0dXNDb25zdGFudHMuVVNFUlMuVFlQRV9UV0lUVEVSOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0d2l0dGVySGFuZGxlOiB0aGlzLm9iamVjdC50d2l0dGVySGFuZGxlLFxuICAgICAgICAgICAgbmFtZTogdGhpcy5vYmplY3QuZGlzcGxheU5hbWVcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgU3RhdHVzQ29uc3RhbnRzLlVTRVJTLlRZUEVfRU1BSUw6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLm9iamVjdC5lbWFpbCxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMub2JqZWN0LmRpc3BsYXlOYW1lXG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHN0ZXAyOiBVc2luZyBmb3IgdGhlIGNvbm5lY3Rpb25Vc2VyLlxuICAgIGNvbnN0IHsgYXV0aERhdGEgfSA9IHRoaXMub2JqZWN0XG4gICAgc3dpdGNoICh0aGlzLmF2YXRhclR5cGUpIHtcbiAgICAgIGNhc2UgVHlwZXMudXNlckNvbm5lY3RlZC5VU0VSX0NPTk5FQ1RfVklBX0ZBQ0VCT09LOiB7XG4gICAgICAgIGNvbnN0IHsgZmFjZWJvb2sgfSA9IGF1dGhEYXRhIHx8IHsgZmFjZWJvb2s6IG51bGwgfVxuICAgICAgICBpZiAoISFmYWNlYm9vaykge1xuICAgICAgICAgIGNvbnN0IGZhY2Vib29rSWQgPSBmYWNlYm9vay5pZFxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmYWNlYm9va0lkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlIFR5cGVzLnVzZXJDb25uZWN0ZWQuVVNFUl9DT05ORUNUX1ZJQV9UV0lUVEVSOiB7XG4gICAgICAgIGNvbnN0IHsgdHdpdHRlciB9ID0gYXV0aERhdGEgfHwgeyB0d2l0dGVyOiBudWxsIH1cbiAgICAgICAgaWYgKCEhdHdpdHRlcikge1xuICAgICAgICAgIGNvbnN0IHR3aXR0ZXJIYW5kbGUgPSB0d2l0dGVyLnNjcmVlbl9uYW1lXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR3aXR0ZXJIYW5kbGVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgY2FzZSBUeXBlcy51c2VyQ29ubmVjdGVkLlVTRVJfQ09OTkVDVF9WSUFfTkFNRToge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVtYWlsOiB0aGlzLm9iamVjdC5lbWFpbCxcbiAgICAgICAgICBuYW1lOiB0aGlzLm9iamVjdC5kaXNwbGF5TmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RlcDM6IFdoZW4gdXNlcnMgaGF2ZSBhbHJlYWR5IHVwbG9hZCBpbWFnZXMgYXMgdGhlaXIgYXZhdGFyLlxuICAgIGNvbnN0IGNvdmVySW1hZ2UgPSBQYXJzZU1vZGVsSW1hZ2VIZWxwZXIuZ2V0VXNlckNvdmVyVXJsKHRoaXMub2JqZWN0KVxuICAgIGlmIChjb3ZlckltYWdlICE9PSAnJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3JjOiBjb3ZlckltYWdlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RlcDQ6IEFib3ZlIGFsbCwgY2FuIG5vdCBnZXQgdXNlcidzIGF2YXRhci5cbiAgICAvLyBVc2luZyB1c2VyJ3MgZW1haWwgYXMgZGVmYXVsdFxuICAgIHJldHVybiB7XG4gICAgICBlbWFpbDogdGhpcy5vYmplY3QuZW1haWxcbiAgICB9XG4gIH1cbn1cbiJdfQ==