"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarClientView = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var React = _interopRequireWildcard(require("react"));

var DEFAULT_COLORS = ['#000', '#333', '#555', '#888', '#aaa', '#ddd'];
var DEFAULT_SIZES = {
  small: 34,
  medium: 50,
  large: 75,
  xlarge: 150
};

var AvatarClientView = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(AvatarClientView, _React$Component);

  function AvatarClientView(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AvatarClientView);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AvatarClientView).call(this, props));

    _this.scaleTextNode = function (node) {
      var _this$props = _this.props,
          unstyled = _this$props.unstyled,
          textSizeRatio = _this$props.textSizeRatio;

      if (!node || unstyled) {
        return;
      }

      var parent = node.parentNode;

      if (!parent) {
        return;
      }

      var textWidth = node.getBoundingClientRect().width;

      if (textWidth < 0) {
        return;
      }

      var containerWidth = parent.getBoundingClientRect().width;
      var ratio = containerWidth / textWidth; // Set font-size on parent span, otherwise the `table-cell` span
      // will cause alignment issues.

      node.parentNode.style.fontSize = "calc((100% * ".concat(ratio, ") / ").concat(textSizeRatio, ")");
    };

    return _this;
  }

  (0, _createClass2["default"])(AvatarClientView, [{
    key: "getImageSrc",
    value: function getImageSrc(imageSrc) {
      var clientStaticImageSource = this.props.clientStaticImageSource;

      if (!!clientStaticImageSource) {
        return clientStaticImageSource;
      }

      return {
        uri: imageSrc
      };
    }
  }, {
    key: "renderAsImage",
    value: function renderAsImage(styles, imageSrc, width) {
      var _this$props2 = this.props,
          internal = _this$props2.internal,
          avatarStyle = _this$props2.avatarStyle,
          renderClientImageView = _this$props2.renderClientImageView;
      var size = this.props.size;
      var round = this.props.round;
      var alt = this.props.name || this.props.value;

      if (!!renderClientImageView) {
        var renderClientImageViewProps = {
          styles: styles,
          round: round,
          width: width,
          avatarStyle: avatarStyle,
          imageSrc: this.getImageSrc(imageSrc),
          onError: internal && internal.fetch
        };
        return renderClientImageView(renderClientImageViewProps);
      }

      return null;
    }
  }, {
    key: "renderAsText",
    value: function renderAsText(styles, width) {
      var _this$props3 = this.props,
          className = _this$props3.className,
          titleStyle = _this$props3.titleStyle,
          value = _this$props3.value,
          round = _this$props3.round,
          unstyled = _this$props3.unstyled,
          renderClientTextView = _this$props3.renderClientTextView;

      if (!!renderClientTextView) {
        var renderClientTextViewProps = {
          styles: styles,
          round: round,
          width: width,
          titleContainerStyle: {
            backgroundColor: this.props.color
          },
          titleStyle: titleStyle,
          textValue: value || ''
        };
        return renderClientTextView(renderClientTextViewProps);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          containerStyle = _this$props4.containerStyle,
          clientStaticImageSource = _this$props4.clientStaticImageSource,
          onClick = _this$props4.onClick,
          renderClientContainerView = _this$props4.renderClientContainerView,
          src = _this$props4.src;
      var _ref = this.props,
          className = _ref.className,
          unstyled = _ref.unstyled,
          round = _ref.round;
      var sourceName = this.props.sourceName;
      var size = this.props.size;

      if (!size) {
        return null;
      }

      var iconDimension = typeof size === 'number' ? size : !!size ? DEFAULT_SIZES[size] : DEFAULT_SIZES.small;
      var height;
      var width = height = iconDimension;
      var titleSize = width / 2;
      var platformStyle = {}; // Platform.getType() === 'ios'
      //   ? {
      //       shadowColor: DEFAULT_COLORS[0],
      //       shadowOffset: { width: 1, height: 1 },
      //       shadowRadius: 2,
      //       shadowOpacity: 0.5
      //     }
      //   : {
      //       elevation: 1
      //     }

      var styles = {
        container: {
          backgroundColor: 'transparent',
          width: width,
          height: height
        },
        avatar: {
          width: width,
          height: height
        },
        overlayContainer: {
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.2)',
          alignSelf: 'stretch',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        title: {
          color: '#ffffff',
          fontSize: titleSize,
          backgroundColor: 'rgba(0,0,0,0)',
          textAlign: 'center'
        },
        editButton: Object.assign({
          position: 'absolute',
          bottom: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: DEFAULT_COLORS[4]
        }, platformStyle)
      };

      if (!!renderClientContainerView) {
        var renderClientContainerProps = {
          children: this.getChildren(styles, src, width),
          styles: styles,
          round: round,
          width: width,
          containerStyle: containerStyle
        };
        return renderClientContainerView(renderClientContainerProps);
      }

      return null;
    }
  }, {
    key: "getChildren",
    value: function getChildren(styles, src, width) {
      var clientStaticImageSource = this.props.clientStaticImageSource;

      if (!!clientStaticImageSource || !!src) {
        return this.renderAsImage(styles, src, width);
      }

      return this.renderAsText(styles, width);
    }
  }]);
  return AvatarClientView;
}(React.Component);

exports.AvatarClientView = AvatarClientView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdmF0YXIvYXZhdGFyQ2xpZW50Vmlldy50c3giXSwibmFtZXMiOlsiREVGQVVMVF9DT0xPUlMiLCJERUZBVUxUX1NJWkVTIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsInhsYXJnZSIsIkF2YXRhckNsaWVudFZpZXciLCJwcm9wcyIsInNjYWxlVGV4dE5vZGUiLCJub2RlIiwidW5zdHlsZWQiLCJ0ZXh0U2l6ZVJhdGlvIiwicGFyZW50IiwicGFyZW50Tm9kZSIsInRleHRXaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiY29udGFpbmVyV2lkdGgiLCJyYXRpbyIsInN0eWxlIiwiZm9udFNpemUiLCJpbWFnZVNyYyIsImNsaWVudFN0YXRpY0ltYWdlU291cmNlIiwidXJpIiwic3R5bGVzIiwiaW50ZXJuYWwiLCJhdmF0YXJTdHlsZSIsInJlbmRlckNsaWVudEltYWdlVmlldyIsInNpemUiLCJyb3VuZCIsImFsdCIsIm5hbWUiLCJ2YWx1ZSIsInJlbmRlckNsaWVudEltYWdlVmlld1Byb3BzIiwiZ2V0SW1hZ2VTcmMiLCJvbkVycm9yIiwiZmV0Y2giLCJjbGFzc05hbWUiLCJ0aXRsZVN0eWxlIiwicmVuZGVyQ2xpZW50VGV4dFZpZXciLCJyZW5kZXJDbGllbnRUZXh0Vmlld1Byb3BzIiwidGl0bGVDb250YWluZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwidGV4dFZhbHVlIiwiY29udGFpbmVyU3R5bGUiLCJvbkNsaWNrIiwicmVuZGVyQ2xpZW50Q29udGFpbmVyVmlldyIsInNyYyIsInNvdXJjZU5hbWUiLCJpY29uRGltZW5zaW9uIiwiaGVpZ2h0IiwidGl0bGVTaXplIiwicGxhdGZvcm1TdHlsZSIsImNvbnRhaW5lciIsImF2YXRhciIsIm92ZXJsYXlDb250YWluZXIiLCJmbGV4IiwiYWxpZ25JdGVtcyIsImFsaWduU2VsZiIsImp1c3RpZnlDb250ZW50IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0aXRsZSIsInRleHRBbGlnbiIsImVkaXRCdXR0b24iLCJyZW5kZXJDbGllbnRDb250YWluZXJQcm9wcyIsImNoaWxkcmVuIiwiZ2V0Q2hpbGRyZW4iLCJyZW5kZXJBc0ltYWdlIiwicmVuZGVyQXNUZXh0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLE1BQWpDLEVBQXlDLE1BQXpDLENBQXZCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxFQUFBQSxLQUFLLEVBQUUsRUFEYTtBQUVwQkMsRUFBQUEsTUFBTSxFQUFFLEVBRlk7QUFHcEJDLEVBQUFBLEtBQUssRUFBRSxFQUhhO0FBSXBCQyxFQUFBQSxNQUFNLEVBQUU7QUFKWSxDQUF0Qjs7SUFpQmFDLGdCOzs7QUFDWCw0QkFBWUMsS0FBWixFQUEyQztBQUFBOztBQUFBO0FBQ3pDLDRIQUFNQSxLQUFOOztBQUR5QyxVQXdEM0NDLGFBeEQyQyxHQXdEM0IsVUFBQ0MsSUFBRCxFQUFlO0FBQUEsd0JBQ08sTUFBS0YsS0FEWjtBQUFBLFVBQ3JCRyxRQURxQixlQUNyQkEsUUFEcUI7QUFBQSxVQUNYQyxhQURXLGVBQ1hBLGFBRFc7O0FBRzdCLFVBQUksQ0FBQ0YsSUFBRCxJQUFTQyxRQUFiLEVBQXVCO0FBQ3JCO0FBQ0Q7O0FBRUQsVUFBTUUsTUFBTSxHQUFHSCxJQUFJLENBQUNJLFVBQXBCOztBQUNBLFVBQUksQ0FBQ0QsTUFBTCxFQUFhO0FBQ1g7QUFDRDs7QUFDRCxVQUFNRSxTQUFTLEdBQUdMLElBQUksQ0FBQ00scUJBQUwsR0FBNkJDLEtBQS9DOztBQUNBLFVBQUlGLFNBQVMsR0FBRyxDQUFoQixFQUFtQjtBQUNqQjtBQUNEOztBQUVELFVBQU1HLGNBQWMsR0FBR0wsTUFBTSxDQUFDRyxxQkFBUCxHQUErQkMsS0FBdEQ7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RVc3QyxNLEVBQWF3QixHLEVBQVVoQyxLLEVBQWU7QUFBQSxVQUN4Q00sdUJBRHdDLEdBQ1osS0FBS2YsS0FETyxDQUN4Q2UsdUJBRHdDOztBQUVoRCxVQUFJLENBQUMsQ0FBQ0EsdUJBQUYsSUFBNkIsQ0FBQyxDQUFDMEIsR0FBbkMsRUFBd0M7QUFDdEMsZUFBTyxLQUFLd0IsYUFBTCxDQUFtQmhELE1BQW5CLEVBQTJCd0IsR0FBM0IsRUFBZ0NoQyxLQUFoQyxDQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFLeUQsWUFBTCxDQUFrQmpELE1BQWxCLEVBQTBCUixLQUExQixDQUFQO0FBQ0Q7OztFQWxMbUMwRCxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgREVGQVVMVF9DT0xPUlMgPSBbJyMwMDAnLCAnIzMzMycsICcjNTU1JywgJyM4ODgnLCAnI2FhYScsICcjZGRkJ11cbmNvbnN0IERFRkFVTFRfU0laRVMgPSB7XG4gIHNtYWxsOiAzNCxcbiAgbWVkaXVtOiA1MCxcbiAgbGFyZ2U6IDc1LFxuICB4bGFyZ2U6IDE1MFxufVxuXG5pbXBvcnQgeyBJQXZhdGFyUHJvcHMsIElBdmF0YXJTdGF0ZSwgQXZhdGFyUHJvcHNXaXRoRGVmYXVsdHMgfSBmcm9tICcuL2lBdmF0YXInXG5cbmltcG9ydCB7XG4gIElBdmF0YXJSZW5kZXJDbGllbnRDb250YWluZXJQcm9wcyxcbiAgSUF2YXRhclJlbmRlckNsaWVudFRleHRWaWV3UHJvcHMsXG4gIElBdmF0YXJSZW5kZXJDbGllbnRJbWFnZVZpZXdQcm9wc1xufSBmcm9tICcuL2lBdmF0YXJDbGllbnQnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUF2YXRhckNsaWVudFZpZXdQcm9wcyBleHRlbmRzIElBdmF0YXJQcm9wcywgSUF2YXRhclN0YXRlIHt9XG5cbmV4cG9ydCBjbGFzcyBBdmF0YXJDbGllbnRWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElBdmF0YXJDbGllbnRWaWV3UHJvcHMsIHt9PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJQXZhdGFyQ2xpZW50Vmlld1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBnZXRJbWFnZVNyYyhpbWFnZVNyYzogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBjbGllbnRTdGF0aWNJbWFnZVNvdXJjZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghIWNsaWVudFN0YXRpY0ltYWdlU291cmNlKSB7XG4gICAgICByZXR1cm4gY2xpZW50U3RhdGljSW1hZ2VTb3VyY2VcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHVyaTogaW1hZ2VTcmNcbiAgICB9XG4gIH1cblxuICByZW5kZXJBc0ltYWdlKHN0eWxlczogYW55LCBpbWFnZVNyYzogc3RyaW5nLCB3aWR0aDogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBpbnRlcm5hbCwgYXZhdGFyU3R5bGUsIHJlbmRlckNsaWVudEltYWdlVmlldyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLnByb3BzLnNpemVcbiAgICBjb25zdCByb3VuZCA9IHRoaXMucHJvcHMucm91bmRcbiAgICBjb25zdCBhbHQ6IGFueSA9IHRoaXMucHJvcHMubmFtZSB8fCB0aGlzLnByb3BzLnZhbHVlXG5cbiAgICBpZiAoISFyZW5kZXJDbGllbnRJbWFnZVZpZXcpIHtcbiAgICAgIGNvbnN0IHJlbmRlckNsaWVudEltYWdlVmlld1Byb3BzOiBJQXZhdGFyUmVuZGVyQ2xpZW50SW1hZ2VWaWV3UHJvcHMgPSB7XG4gICAgICAgIHN0eWxlcyxcbiAgICAgICAgcm91bmQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBhdmF0YXJTdHlsZSxcbiAgICAgICAgaW1hZ2VTcmM6IHRoaXMuZ2V0SW1hZ2VTcmMoaW1hZ2VTcmMpLFxuICAgICAgICBvbkVycm9yOiBpbnRlcm5hbCAmJiBpbnRlcm5hbC5mZXRjaFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVuZGVyQ2xpZW50SW1hZ2VWaWV3KHJlbmRlckNsaWVudEltYWdlVmlld1Byb3BzKVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZW5kZXJBc1RleHQoc3R5bGVzOiBhbnksIHdpZHRoOiBudW1iZXIpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgdGl0bGVTdHlsZSwgdmFsdWUsIHJvdW5kLCB1bnN0eWxlZCwgcmVuZGVyQ2xpZW50VGV4dFZpZXcgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoISFyZW5kZXJDbGllbnRUZXh0Vmlldykge1xuICAgICAgY29uc3QgcmVuZGVyQ2xpZW50VGV4dFZpZXdQcm9wczogSUF2YXRhclJlbmRlckNsaWVudFRleHRWaWV3UHJvcHMgPSB7XG4gICAgICAgIHN0eWxlcyxcbiAgICAgICAgcm91bmQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICB0aXRsZUNvbnRhaW5lclN0eWxlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLmNvbG9yXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlU3R5bGUsXG4gICAgICAgIHRleHRWYWx1ZTogdmFsdWUgfHwgJydcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlbmRlckNsaWVudFRleHRWaWV3KHJlbmRlckNsaWVudFRleHRWaWV3UHJvcHMpXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHNjYWxlVGV4dE5vZGUgPSAobm9kZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyB1bnN0eWxlZCwgdGV4dFNpemVSYXRpbyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKCFub2RlIHx8IHVuc3R5bGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudE5vZGVcbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHRleHRXaWR0aCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICBpZiAodGV4dFdpZHRoIDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICBjb25zdCByYXRpbyA9IGNvbnRhaW5lcldpZHRoIC8gdGV4dFdpZHRoXG5cbiAgICAvLyBTZXQgZm9udC1zaXplIG9uIHBhcmVudCBzcGFuLCBvdGhlcndpc2UgdGhlIGB0YWJsZS1jZWxsYCBzcGFuXG4gICAgLy8gd2lsbCBjYXVzZSBhbGlnbm1lbnQgaXNzdWVzLlxuICAgIG5vZGUucGFyZW50Tm9kZS5zdHlsZS5mb250U2l6ZSA9IGBjYWxjKCgxMDAlICogJHtyYXRpb30pIC8gJHt0ZXh0U2l6ZVJhdGlvfSlgXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29udGFpbmVyU3R5bGUsXG4gICAgICBjbGllbnRTdGF0aWNJbWFnZVNvdXJjZSxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICByZW5kZXJDbGllbnRDb250YWluZXJWaWV3LFxuICAgICAgc3JjXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgdW5zdHlsZWQsIHJvdW5kIH0gPSB0aGlzLnByb3BzIGFzIEF2YXRhclByb3BzV2l0aERlZmF1bHRzXG4gICAgY29uc3QgeyBzb3VyY2VOYW1lIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7IHNpemUgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICghc2l6ZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBpY29uRGltZW5zaW9uID1cbiAgICAgIHR5cGVvZiBzaXplID09PSAnbnVtYmVyJyA/IHNpemUgOiAhIXNpemUgPyBERUZBVUxUX1NJWkVTW3NpemVdIDogREVGQVVMVF9TSVpFUy5zbWFsbFxuXG4gICAgbGV0IGhlaWdodFxuICAgIGxldCB3aWR0aCA9IChoZWlnaHQgPSBpY29uRGltZW5zaW9uKVxuXG4gICAgbGV0IHRpdGxlU2l6ZSA9IHdpZHRoIC8gMlxuXG4gICAgY29uc3QgcGxhdGZvcm1TdHlsZSA9IHt9XG4gICAgLy8gUGxhdGZvcm0uZ2V0VHlwZSgpID09PSAnaW9zJ1xuICAgIC8vICAgPyB7XG4gICAgLy8gICAgICAgc2hhZG93Q29sb3I6IERFRkFVTFRfQ09MT1JTWzBdLFxuICAgIC8vICAgICAgIHNoYWRvd09mZnNldDogeyB3aWR0aDogMSwgaGVpZ2h0OiAxIH0sXG4gICAgLy8gICAgICAgc2hhZG93UmFkaXVzOiAyLFxuICAgIC8vICAgICAgIHNoYWRvd09wYWNpdHk6IDAuNVxuICAgIC8vICAgICB9XG4gICAgLy8gICA6IHtcbiAgICAvLyAgICAgICBlbGV2YXRpb246IDFcbiAgICAvLyAgICAgfVxuXG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgfSxcbiAgICAgIGF2YXRhcjoge1xuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9LFxuICAgICAgb3ZlcmxheUNvbnRhaW5lcjoge1xuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjIpJyxcbiAgICAgICAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMFxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGZvbnRTaXplOiB0aXRsZVNpemUsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICB9LFxuICAgICAgZWRpdEJ1dHRvbjoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBERUZBVUxUX0NPTE9SU1s0XSxcbiAgICAgICAgLi4ucGxhdGZvcm1TdHlsZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghIXJlbmRlckNsaWVudENvbnRhaW5lclZpZXcpIHtcbiAgICAgIGNvbnN0IHJlbmRlckNsaWVudENvbnRhaW5lclByb3BzOiBJQXZhdGFyUmVuZGVyQ2xpZW50Q29udGFpbmVyUHJvcHMgPSB7XG4gICAgICAgIGNoaWxkcmVuOiB0aGlzLmdldENoaWxkcmVuKHN0eWxlcywgc3JjLCB3aWR0aCksXG4gICAgICAgIHN0eWxlcyxcbiAgICAgICAgcm91bmQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBjb250YWluZXJTdHlsZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVuZGVyQ2xpZW50Q29udGFpbmVyVmlldyhyZW5kZXJDbGllbnRDb250YWluZXJQcm9wcylcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oc3R5bGVzOiBhbnksIHNyYzogYW55LCB3aWR0aDogbnVtYmVyKSB7XG4gICAgY29uc3QgeyBjbGllbnRTdGF0aWNJbWFnZVNvdXJjZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghIWNsaWVudFN0YXRpY0ltYWdlU291cmNlIHx8ICEhc3JjKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJBc0ltYWdlKHN0eWxlcywgc3JjLCB3aWR0aClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyQXNUZXh0KHN0eWxlcywgd2lkdGgpXG4gIH1cbn1cbiJdfQ==