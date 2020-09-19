"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var React = _interopRequireWildcard(require("react"));

var _internalState = _interopRequireDefault(require("../internal-state"));

var _avatarWebView = require("./avatarWebView");

var _avatarClientView = require("./avatarClientView");

var _sources = require("../sources");

var SOURCES = [_sources.FacebookSource, _sources.GoogleSource, _sources.TwitterSource, (0, _sources.createRedirectSource)('twitter', 'twitterHandle'), // AvatarRedirectSource('instagram', 'instagramId'),
_sources.VkontakteSource, _sources.SkypeSource, _sources.GravatarSource, _sources.SrcSource, _sources.ValueSource, _sources.IconSource]; // Collect propTypes for each individual source

var sourcePropTypes = SOURCES.reduce(function (r, s) {
  return Object.assign(r, s.propTypes);
}, {});

function matchSource(Source, props, cb) {
  var instance = new Source(props);

  if (!instance.isCompatible(props)) {
    return cb();
  }

  instance.get(function (state) {
    if (state) {
      cb(state);
    } else {
      cb();
    }
  });
}

var Avatar = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Avatar, _React$Component);

  function Avatar(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Avatar);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Avatar).call(this, props));

    _this.createFetcher = function (internal) {
      return function (errEvent) {
        if (!internal.isActive(_this.state)) {
          return;
        } // Mark img source as failed for future reference


        if (errEvent && errEvent.type === 'error') {}

        var pointer = internal.sourcePointer;

        if (SOURCES.length === pointer) {
          return;
        }

        var source = SOURCES[pointer];
        internal.sourcePointer++;
        matchSource(source, _this.props, function (nextState) {
          if (!nextState) {
            return setTimeout(internal.fetch, 0);
          }

          if (!internal.isActive(_this.state)) {
            return;
          } // Reset other values to prevent them from sticking (#51)


          var fixedNextState = Object.assign({
            src: null,
            value: null,
            color: null
          }, nextState);

          _this.setState(function (state) {
            // Internal state has been reset => we received new props
            return internal.isActive(state) ? fixedNextState : {};
          });
        });
      };
    };

    _this.fetch = function () {
      var internal = new _internalState["default"]();
      internal.fetch = _this.createFetcher(internal);

      _this.setState({
        internal: internal
      }, internal.fetch);
    };

    _this.state = {
      internal: null,
      // Src was added to state when the component loaded, this caused the
      // "next" (internal.fetch) handler to be called multiple times. Because of
      // this the initials source was skipped most times.
      src: null,
      value: null,
      color: props.color
    };
    return _this;
  }

  (0, _createClass2["default"])(Avatar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var clientStaticImageSource = this.props.clientStaticImageSource;

      if (!clientStaticImageSource) {
        this.fetch();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      var needsUpdate = false; // This seems redundant
      //
      // Props that need to be in `state` are
      // `value`, `src` and `color`

      for (var prop in sourcePropTypes) {
        needsUpdate = needsUpdate || newProps[prop] !== this.props[prop];
      }

      if (needsUpdate) {
        setTimeout(this.fetch, 0);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.internal) {
        this.state.internal.active = false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          renderClientContainerView = _this$props.renderClientContainerView,
          renderWebContainerView = _this$props.renderWebContainerView;
      var viewProperties = Object.assign({}, this.props, this.state); // console.log(' showForWeb:', showForWeb)

      if (!!renderClientContainerView) {
        return React.createElement(_avatarClientView.AvatarClientView, viewProperties);
      }

      if (!!renderWebContainerView) {
        return React.createElement(_avatarWebView.AvatarWebView, viewProperties);
      }

      return null;
    }
  }]);
  return Avatar;
}(React.Component);

exports.Avatar = Avatar;
Avatar.defaultProps = {
  className: '',
  fgColor: '#FFF',
  round: false,
  size: 100,
  textSizeRatio: 3,
  unstyled: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdmF0YXIvYXZhdGFyLnRzeCJdLCJuYW1lcyI6WyJTT1VSQ0VTIiwiRmFjZWJvb2tTb3VyY2UiLCJHb29nbGVTb3VyY2UiLCJUd2l0dGVyU291cmNlIiwiVmtvbnRha3RlU291cmNlIiwiU2t5cGVTb3VyY2UiLCJHcmF2YXRhclNvdXJjZSIsIlNyY1NvdXJjZSIsIlZhbHVlU291cmNlIiwiSWNvblNvdXJjZSIsInNvdXJjZVByb3BUeXBlcyIsInJlZHVjZSIsInIiLCJzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvcFR5cGVzIiwibWF0Y2hTb3VyY2UiLCJTb3VyY2UiLCJwcm9wcyIsImNiIiwiaW5zdGFuY2UiLCJpc0NvbXBhdGlibGUiLCJnZXQiLCJzdGF0ZSIsIkF2YXRhciIsImNyZWF0ZUZldGNoZXIiLCJpbnRlcm5hbCIsImVyckV2ZW50IiwiaXNBY3RpdmUiLCJ0eXBlIiwicG9pbnRlciIsInNvdXJjZVBvaW50ZXIiLCJsZW5ndGgiLCJzb3VyY2UiLCJuZXh0U3RhdGUiLCJzZXRUaW1lb3V0IiwiZmV0Y2giLCJmaXhlZE5leHRTdGF0ZSIsInNyYyIsInZhbHVlIiwiY29sb3IiLCJzZXRTdGF0ZSIsIkludGVybmFsU3RhdGUiLCJjbGllbnRTdGF0aWNJbWFnZVNvdXJjZSIsIm5ld1Byb3BzIiwibmVlZHNVcGRhdGUiLCJwcm9wIiwiYWN0aXZlIiwicmVuZGVyQ2xpZW50Q29udGFpbmVyVmlldyIsInJlbmRlcldlYkNvbnRhaW5lclZpZXciLCJ2aWV3UHJvcGVydGllcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lIiwiZmdDb2xvciIsInJvdW5kIiwic2l6ZSIsInRleHRTaXplUmF0aW8iLCJ1bnN0eWxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBYUEsSUFBTUEsT0FBTyxHQUFHLENBQ2RDLHVCQURjLEVBRWRDLHFC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UCxVQUFNQyxjQUFjLHFCQUNmLEtBQUtoQyxLQURVLEVBRWYsS0FBS0ssS0FGVSxDQUFwQixDQUhPLENBUVA7O0FBRUEsVUFBSSxDQUFDLENBQUN5Qix5QkFBTixFQUFpQztBQUMvQixlQUFPLG9CQUFDLGtDQUFELEVBQXNCRSxjQUF0QixDQUFQO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDLENBQUNELHNCQUFOLEVBQThCO0FBQzVCLGVBQU8sb0JBQUMsNEJBQUQsRUFBbUJDLGNBQW5CLENBQVA7QUFDRDs7QUFFRCxhQUFPLElBQVA7QUFDRDs7O0VBM0h5QkMsS0FBSyxDQUFDQyxTOzs7QUFBckI1QixNLENBQ0k2QixZLEdBQWlEO0FBQzlEQyxFQUFBQSxTQUFTLEVBQUUsRUFEbUQ7QUFFOURDLEVBQUFBLE9BQU8sRUFBRSxNQUZxRDtBQUc5REMsRUFBQUEsS0FBSyxFQUFFLEtBSHVEO0FBSTlEQyxFQUFBQSxJQUFJLEVBQUUsR0FKd0Q7QUFLOURDLEVBQUFBLGFBQWEsRUFBRSxDQUwrQztBQU05REMsRUFBQUEsUUFBUSxFQUFFO0FBTm9ELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEludGVybmFsU3RhdGUgZnJvbSAnLi4vaW50ZXJuYWwtc3RhdGUnXG5cbmltcG9ydCB7IEF2YXRhcldlYlZpZXcgfSBmcm9tICcuL2F2YXRhcldlYlZpZXcnXG5cbmltcG9ydCB7IEF2YXRhckNsaWVudFZpZXcgfSBmcm9tICcuL2F2YXRhckNsaWVudFZpZXcnXG5cbmltcG9ydCB7XG4gIEdyYXZhdGFyU291cmNlLFxuICBGYWNlYm9va1NvdXJjZSxcbiAgVmtvbnRha3RlU291cmNlLFxuICBUd2l0dGVyU291cmNlLFxuICBHb29nbGVTb3VyY2UsXG4gIFNreXBlU291cmNlLFxuICBWYWx1ZVNvdXJjZSxcbiAgU3JjU291cmNlLFxuICBJY29uU291cmNlLFxuICBjcmVhdGVSZWRpcmVjdFNvdXJjZSBhcyBBdmF0YXJSZWRpcmVjdFNvdXJjZVxufSBmcm9tICcuLi9zb3VyY2VzJ1xuXG5jb25zdCBTT1VSQ0VTID0gW1xuICBGYWNlYm9va1NvdXJjZSxcbiAgR29vZ2xlU291cmNlLFxuICBUd2l0dGVyU291cmNlLFxuICBBdmF0YXJSZWRpcmVjdFNvdXJjZSgndHdpdHRlcicsICd0d2l0dGVySGFuZGxlJyksXG4gIC8vIEF2YXRhclJlZGlyZWN0U291cmNlKCdpbnN0YWdyYW0nLCAnaW5zdGFncmFtSWQnKSxcbiAgVmtvbnRha3RlU291cmNlLFxuICBTa3lwZVNvdXJjZSxcbiAgR3JhdmF0YXJTb3VyY2UsXG4gIFNyY1NvdXJjZSxcbiAgVmFsdWVTb3VyY2UsXG4gIEljb25Tb3VyY2Vcbl1cblxuLy8gQ29sbGVjdCBwcm9wVHlwZXMgZm9yIGVhY2ggaW5kaXZpZHVhbCBzb3VyY2VcbmNvbnN0IHNvdXJjZVByb3BUeXBlcyA9IFNPVVJDRVMucmVkdWNlKChyOiBhbnksIHM6IGFueSkgPT4gT2JqZWN0LmFzc2lnbihyLCBzLnByb3BUeXBlcyksIHt9KVxuXG5mdW5jdGlvbiBtYXRjaFNvdXJjZShTb3VyY2U6IGFueSwgcHJvcHM6IGFueSwgY2I6IGFueSkge1xuICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTb3VyY2UocHJvcHMpXG5cbiAgaWYgKCFpbnN0YW5jZS5pc0NvbXBhdGlibGUocHJvcHMpKSB7XG4gICAgcmV0dXJuIGNiKClcbiAgfVxuXG4gIGluc3RhbmNlLmdldCgoc3RhdGU6IGFueSkgPT4ge1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgY2Ioc3RhdGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNiKClcbiAgICB9XG4gIH0pXG59XG5cbmltcG9ydCB7IElBdmF0YXJQcm9wcywgSUF2YXRhclN0YXRlLCBBdmF0YXJQcm9wc1dpdGhEZWZhdWx0cyB9IGZyb20gJy4vaUF2YXRhcidcblxuZXhwb3J0IGNsYXNzIEF2YXRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQXZhdGFyUHJvcHMsIElBdmF0YXJTdGF0ZT4ge1xuICBwcml2YXRlIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFBhcnRpYWw8QXZhdGFyUHJvcHNXaXRoRGVmYXVsdHM+ID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgZmdDb2xvcjogJyNGRkYnLFxuICAgIHJvdW5kOiBmYWxzZSxcbiAgICBzaXplOiAxMDAsXG4gICAgdGV4dFNpemVSYXRpbzogMyxcbiAgICB1bnN0eWxlZDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJQXZhdGFyUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnRlcm5hbDogbnVsbCxcbiAgICAgIC8vIFNyYyB3YXMgYWRkZWQgdG8gc3RhdGUgd2hlbiB0aGUgY29tcG9uZW50IGxvYWRlZCwgdGhpcyBjYXVzZWQgdGhlXG4gICAgICAvLyBcIm5leHRcIiAoaW50ZXJuYWwuZmV0Y2gpIGhhbmRsZXIgdG8gYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzLiBCZWNhdXNlIG9mXG4gICAgICAvLyB0aGlzIHRoZSBpbml0aWFscyBzb3VyY2Ugd2FzIHNraXBwZWQgbW9zdCB0aW1lcy5cbiAgICAgIHNyYzogbnVsbCxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29sb3I6IHByb3BzLmNvbG9yXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBjbGllbnRTdGF0aWNJbWFnZVNvdXJjZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghY2xpZW50U3RhdGljSW1hZ2VTb3VyY2UpIHtcbiAgICAgIHRoaXMuZmV0Y2goKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHM6IElBdmF0YXJQcm9wcykge1xuICAgIGxldCBuZWVkc1VwZGF0ZSA9IGZhbHNlXG5cbiAgICAvLyBUaGlzIHNlZW1zIHJlZHVuZGFudFxuICAgIC8vXG4gICAgLy8gUHJvcHMgdGhhdCBuZWVkIHRvIGJlIGluIGBzdGF0ZWAgYXJlXG4gICAgLy8gYHZhbHVlYCwgYHNyY2AgYW5kIGBjb2xvcmBcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gc291cmNlUHJvcFR5cGVzKSB7XG4gICAgICBuZWVkc1VwZGF0ZSA9IG5lZWRzVXBkYXRlIHx8IChuZXdQcm9wcyBhcyBhbnkpW3Byb3BdICE9PSAodGhpcy5wcm9wcyBhcyBhbnkpW3Byb3BdXG4gICAgfVxuXG4gICAgaWYgKG5lZWRzVXBkYXRlKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuZmV0Y2gsIDApXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaW50ZXJuYWwpIHtcbiAgICAgIHRoaXMuc3RhdGUuaW50ZXJuYWwuYWN0aXZlID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBjcmVhdGVGZXRjaGVyID0gKGludGVybmFsOiBhbnkpID0+IChlcnJFdmVudDogYW55KSA9PiB7XG4gICAgaWYgKCFpbnRlcm5hbC5pc0FjdGl2ZSh0aGlzLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFyayBpbWcgc291cmNlIGFzIGZhaWxlZCBmb3IgZnV0dXJlIHJlZmVyZW5jZVxuICAgIGlmIChlcnJFdmVudCAmJiBlcnJFdmVudC50eXBlID09PSAnZXJyb3InKSB7XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRlciA9IGludGVybmFsLnNvdXJjZVBvaW50ZXJcbiAgICBpZiAoU09VUkNFUy5sZW5ndGggPT09IHBvaW50ZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZTogYW55ID0gU09VUkNFU1twb2ludGVyXVxuXG4gICAgaW50ZXJuYWwuc291cmNlUG9pbnRlcisrXG5cbiAgICBtYXRjaFNvdXJjZShzb3VyY2UsIHRoaXMucHJvcHMsIChuZXh0U3RhdGU6IGFueSkgPT4ge1xuICAgICAgaWYgKCFuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoaW50ZXJuYWwuZmV0Y2gsIDApXG4gICAgICB9XG5cbiAgICAgIGlmICghaW50ZXJuYWwuaXNBY3RpdmUodGhpcy5zdGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFJlc2V0IG90aGVyIHZhbHVlcyB0byBwcmV2ZW50IHRoZW0gZnJvbSBzdGlja2luZyAoIzUxKVxuICAgICAgY29uc3QgZml4ZWROZXh0U3RhdGUgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiBudWxsLFxuICAgICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICAgIGNvbG9yOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIG5leHRTdGF0ZVxuICAgICAgKVxuXG4gICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAvLyBJbnRlcm5hbCBzdGF0ZSBoYXMgYmVlbiByZXNldCA9PiB3ZSByZWNlaXZlZCBuZXcgcHJvcHNcbiAgICAgICAgcmV0dXJuIGludGVybmFsLmlzQWN0aXZlKHN0YXRlKSA/IGZpeGVkTmV4dFN0YXRlIDoge31cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGZldGNoID0gKCkgPT4ge1xuICAgIGNvbnN0IGludGVybmFsOiBhbnkgPSBuZXcgSW50ZXJuYWxTdGF0ZSgpXG4gICAgaW50ZXJuYWwuZmV0Y2ggPSB0aGlzLmNyZWF0ZUZldGNoZXIoaW50ZXJuYWwpXG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW50ZXJuYWwgfSwgaW50ZXJuYWwuZmV0Y2gpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByZW5kZXJDbGllbnRDb250YWluZXJWaWV3LCByZW5kZXJXZWJDb250YWluZXJWaWV3IH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB2aWV3UHJvcGVydGllcyA9IHtcbiAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICAuLi50aGlzLnN0YXRlXG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coJyBzaG93Rm9yV2ViOicsIHNob3dGb3JXZWIpXG5cbiAgICBpZiAoISFyZW5kZXJDbGllbnRDb250YWluZXJWaWV3KSB7XG4gICAgICByZXR1cm4gPEF2YXRhckNsaWVudFZpZXcgey4uLnZpZXdQcm9wZXJ0aWVzfSAvPlxuICAgIH1cblxuICAgIGlmICghIXJlbmRlcldlYkNvbnRhaW5lclZpZXcpIHtcbiAgICAgIHJldHVybiA8QXZhdGFyV2ViVmlldyB7Li4udmlld1Byb3BlcnRpZXN9IC8+XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIl19