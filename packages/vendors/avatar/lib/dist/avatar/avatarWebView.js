"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AvatarWebView = void 0;

var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var React = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var AvatarWebView = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(AvatarWebView, _React$Component);

  function AvatarWebView(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AvatarWebView);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AvatarWebView).call(this, props));

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

  (0, _createClass2["default"])(AvatarWebView, [{
    key: "renderAsImage",
    value: function renderAsImage(imageSrc) {
      var _this$props2 = this.props,
          internal = _this$props2.internal,
          renderWebImageView = _this$props2.renderWebImageView,
          imageClassName = _this$props2.imageClassName;
      var size = this.props.size;
      var round = this.props.round;
      var alt = this.props.name || this.props.value;
      var imageStyle = this.props.unstyled ? null : {
        maxWidth: '100%',
        width: size,
        height: size,
        borderRadius: round ? 500 : 0
      };

      if (!!renderWebImageView) {
        var renderWebImageViewProps = {
          imageClassName: imageClassName,
          imageStyle: imageStyle,
          imageSrc: imageSrc,
          alt: alt,
          onError: internal && internal.fetch
        };
        return renderWebImageView(renderWebImageViewProps);
      }

      return null;
    }
  }, {
    key: "renderAsText",
    value: function renderAsText() {
      var _ref = this.props,
          className = _ref.className,
          round = _ref.round,
          unstyled = _ref.unstyled,
          renderWebTextView = _ref.renderWebTextView,
          textClassName = _ref.textClassName;
      var size = (0, _utils.parseSize)(this.props.size);
      var initialsStyle = unstyled ? null : {
        width: size.str,
        height: size.str,
        lineHeight: 'initial',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: this.props.fgColor,
        background: this.props.color,
        borderRadius: round === true ? '100%' : round
      };
      var tableStyle = unstyled ? null : {
        display: 'table',
        width: '100%',
        height: '100%'
      };
      var spanStyle = unstyled ? null : {
        display: 'table-cell',
        verticalAlign: 'middle'
      };

      if (!!renderWebTextView) {
        var renderWebTextViewProps = {
          className: className,
          textClassName: textClassName,
          initialsStyle: initialsStyle,
          tableStyle: tableStyle,
          spanStyle: spanStyle,
          scaleTextNode: this.scaleTextNode,
          spanKey: this.props.value || 'avatarKey',
          textValue: this.props.value
        };
        return renderWebTextView(renderWebTextViewProps);
      }

      return null; // return (
      //   <div className={className + ' sb-avatartext'} style={initialsStyle}>
      //     <div style={tableStyle}>
      //       <span style={spanStyle}>
      //         <span ref={this.scaleTextNode} key={this.props.value || 'avatarKey'}>
      //           {this.props.value}
      //         </span>
      //       </span>
      //     </div>
      //   </div>
      // )
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          style = _this$props3.style,
          sourceName = _this$props3.sourceName,
          renderWebContainerView = _this$props3.renderWebContainerView,
          src = _this$props3.src;
      var _ref2 = this.props,
          className = _ref2.className,
          unstyled = _ref2.unstyled,
          round = _ref2.round;
      (0, _objectDestructuringEmpty2["default"])(this.props);
      var size = (0, _utils.parseSize)(this.props.size);
      var hostStyle = unstyled ? null : Object.assign({
        display: 'inline-block',
        verticalAlign: 'middle',
        width: size.str,
        height: size.str,
        borderRadius: round === true ? '100%' : round,
        fontFamily: 'Helvetica, Arial, sans-serif'
      }, style);
      var classNames = [className, 'sb-avatar'];

      if (sourceName) {
        var source = sourceName.toLowerCase().replace(/[^a-z0-9-]+/g, '-') // only allow alphanumeric
        .replace(/^-+|-+$/g, ''); // trim `-`

        classNames.push('sb-avatar--' + source);
      }

      if (!!renderWebContainerView) {
        var renderWebProps = {
          children: !!src ? this.renderAsImage(src) : this.renderAsText(),
          hostStyle: hostStyle,
          classNames: classNames.join(' ')
        };
        return renderWebContainerView(renderWebProps);
      }

      return null; // return (
      //   <div className={classNames.join(' ')} onClick={this.props.onClick} style={hostStyle}>
      //     {src ? this.renderAsImage(src) : this.renderAsText()}
      //   </div>
      // )
    }
  }]);
  return AvatarWebView;
}(React.Component);

exports.AvatarWebView = AvatarWebView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdmF0YXIvYXZhdGFyV2ViVmlldy50c3giXSwibmFtZXMiOlsiQXZhdGFyV2ViVmlldyIsInByb3BzIiwic2NhbGVUZXh0Tm9kZSIsIm5vZGUiLCJ1bnN0eWxlZCIsInRleHRTaXplUmF0aW8iLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwidGV4dFdpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJjb250YWluZXJXaWR0aCIsInJhdGlvIiwic3R5bGUiLCJmb250U2l6ZSIsImltYWdlU3JjIiwiaW50ZXJuYWwiLCJyZW5kZXJXZWJJbWFnZVZpZXciLCJpbWFnZUNsYXNzTmFtZSIsInNpemUiLCJyb3VuZCIsImFsdCIsIm5hbWUiLCJ2YWx1ZSIsImltYWdlU3R5bGUiLCJtYXhXaWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInJlbmRlcldlYkltYWdlVmlld1Byb3BzIiwib25FcnJvciIsImZldGNoIiwiY2xhc3NOYW1lIiwicmVuZGVyV2ViVGV4dFZpZXciLCJ0ZXh0Q2xhc3NOYW1lIiwiaW5pdGlhbHNTdHlsZSIsInN0ciIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0VHJhbnNmb3JtIiwiY29sb3IiLCJmZ0NvbG9yIiwiYmFja2dyb3VuZCIsInRhYmxlU3R5bGUiLCJkaXNwbGF5Iiwic3BhblN0eWxlIiwidmVydGljYWxBbGlnbiIsInJlbmRlcldlYlRleHRWaWV3UHJvcHMiLCJzcGFuS2V5IiwidGV4dFZhbHVlIiwic291cmNlTmFtZSIsInJlbmRlcldlYkNvbnRhaW5lclZpZXciLCJzcmMiLCJob3N0U3R5bGUiLCJmb250RmFtaWx5IiwiY2xhc3NOYW1lcyIsInNvdXJjZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInB1c2giLCJyZW5kZXJXZWJQcm9wcyIsImNoaWxkcmVuIiwicmVuZGVyQXNJbWFnZSIsInJlbmRlckFzVGV4dCIsImpvaW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5n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QjtBQUZqQixTQUdaQSxPQUhZLENBR0osVUFISSxFQUdRLEVBSFIsQ0FBZixDQURjLENBSWE7O0FBQzNCSCxRQUFBQSxVQUFVLENBQUNJLElBQVgsQ0FBZ0IsZ0JBQWdCSCxNQUFoQztBQUNEOztBQUVELFVBQUksQ0FBQyxDQUFDTCxzQkFBTixFQUE4QjtBQUM1QixZQUFNUyxjQUE4QyxHQUFHO0FBQ3JEQyxVQUFBQSxRQUFRLEVBQUUsQ0FBQyxDQUFDVCxHQUFGLEdBQVEsS0FBS1UsYUFBTCxDQUFtQlYsR0FBbkIsQ0FBUixHQUFrQyxLQUFLVyxZQUFMLEVBRFM7QUFFckRWLFVBQUFBLFNBQVMsRUFBVEEsU0FGcUQ7QUFHckRFLFVBQUFBLFVBQVUsRUFBRUEsVUFBVSxDQUFDUyxJQUFYLENBQWdCLEdBQWhCO0FBSHlDLFNBQXZEO0FBTUEsZUFBT2Isc0JBQXNCLENBQUNTLGNBQUQsQ0FBN0I7QUFDRDs7QUFFRCxhQUFPLElBQVAsQ0F0Q08sQ0F3Q1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7RUF0S2dDSyxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgcGFyc2VTaXplLCBJUGFyc2VTaXplUmVzdWx0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmltcG9ydCB7IElBdmF0YXJQcm9wcywgSUF2YXRhclN0YXRlLCBBdmF0YXJQcm9wc1dpdGhEZWZhdWx0cyB9IGZyb20gJy4vaUF2YXRhcidcblxuaW1wb3J0IHtcbiAgSUF2YXRhclJlbmRlcldlYkltYWdlVmlld1Byb3BzLFxuICBJQXZhdGFyUmVuZGVyV2ViQ29udGFpbmVyUHJvcHMsXG4gIElBdmF0YXJSZW5kZXJXZWJUZXh0Vmlld1Byb3BzXG59IGZyb20gJy4vaUF2YXRhcldlYidcblxuZXhwb3J0IGludGVyZmFjZSBJQXZhdGFyUmVuZGVyV2ViUHJvcHMgZXh0ZW5kcyBJQXZhdGFyUHJvcHMge1xuICBpbWFnZVNyYz86IHN0cmluZyB8IG51bGxcbiAgaW5pdGlhbHNTdHlsZTogYW55XG4gIHRhYmxlU3R5bGU6IGFueVxuICBzcGFuU3R5bGU6IGFueVxufVxuXG5pbnRlcmZhY2UgSUF2YXRhcldlYlZpZXdQcm9wcyBleHRlbmRzIElBdmF0YXJQcm9wcywgSUF2YXRhclN0YXRlIHt9XG5cbmV4cG9ydCBjbGFzcyBBdmF0YXJXZWJWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElBdmF0YXJXZWJWaWV3UHJvcHMsIHt9PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBJQXZhdGFyV2ViVmlld1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBzY2FsZVRleHROb2RlID0gKG5vZGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgdW5zdHlsZWQsIHRleHRTaXplUmF0aW8gfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICghbm9kZSB8fCB1bnN0eWxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCB0ZXh0V2lkdGggPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgaWYgKHRleHRXaWR0aCA8IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgY29uc3QgcmF0aW8gPSBjb250YWluZXJXaWR0aCAvIHRleHRXaWR0aFxuXG4gICAgLy8gU2V0IGZvbnQtc2l6ZSBvbiBwYXJlbnQgc3Bhbiwgb3RoZXJ3aXNlIHRoZSBgdGFibGUtY2VsbGAgc3BhblxuICAgIC8vIHdpbGwgY2F1c2UgYWxpZ25tZW50IGlzc3Vlcy5cbiAgICBub2RlLnBhcmVudE5vZGUuc3R5bGUuZm9udFNpemUgPSBgY2FsYygoMTAwJSAqICR7cmF0aW99KSAvICR7dGV4dFNpemVSYXRpb30pYFxuICB9XG5cbiAgcmVuZGVyQXNJbWFnZShpbWFnZVNyYzogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBpbnRlcm5hbCwgcmVuZGVyV2ViSW1hZ2VWaWV3LCBpbWFnZUNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHNpemUgPSB0aGlzLnByb3BzLnNpemVcbiAgICBjb25zdCByb3VuZCA9IHRoaXMucHJvcHMucm91bmRcbiAgICBjb25zdCBhbHQ6IGFueSA9IHRoaXMucHJvcHMubmFtZSB8fCB0aGlzLnByb3BzLnZhbHVlXG4gICAgY29uc3QgaW1hZ2VTdHlsZTogYW55ID0gdGhpcy5wcm9wcy51bnN0eWxlZFxuICAgICAgPyBudWxsXG4gICAgICA6IHtcbiAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IHJvdW5kID8gNTAwIDogMFxuICAgICAgICB9XG5cbiAgICBpZiAoISFyZW5kZXJXZWJJbWFnZVZpZXcpIHtcbiAgICAgIGNvbnN0IHJlbmRlcldlYkltYWdlVmlld1Byb3BzOiBJQXZhdGFyUmVuZGVyV2ViSW1hZ2VWaWV3UHJvcHMgPSB7XG4gICAgICAgIGltYWdlQ2xhc3NOYW1lLFxuICAgICAgICBpbWFnZVN0eWxlLFxuICAgICAgICBpbWFnZVNyYyxcbiAgICAgICAgYWx0LFxuICAgICAgICBvbkVycm9yOiBpbnRlcm5hbCAmJiBpbnRlcm5hbC5mZXRjaFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVuZGVyV2ViSW1hZ2VWaWV3KHJlbmRlcldlYkltYWdlVmlld1Byb3BzKVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZW5kZXJBc1RleHQoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHJvdW5kLCB1bnN0eWxlZCwgcmVuZGVyV2ViVGV4dFZpZXcsIHRleHRDbGFzc05hbWUgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBdmF0YXJQcm9wc1dpdGhEZWZhdWx0c1xuICAgIGNvbnN0IHNpemU6IElQYXJzZVNpemVSZXN1bHQgPSBwYXJzZVNpemUodGhpcy5wcm9wcy5zaXplKVxuXG4gICAgY29uc3QgaW5pdGlhbHNTdHlsZTogYW55ID0gdW5zdHlsZWRcbiAgICAgID8gbnVsbFxuICAgICAgOiB7XG4gICAgICAgICAgd2lkdGg6IHNpemUuc3RyLFxuICAgICAgICAgIGhlaWdodDogc2l6ZS5zdHIsXG4gICAgICAgICAgbGluZUhlaWdodDogJ2luaXRpYWwnLFxuICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgICAgY29sb3I6IHRoaXMucHJvcHMuZmdDb2xvcixcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLnByb3BzLmNvbG9yLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogcm91bmQgPT09IHRydWUgPyAnMTAwJScgOiByb3VuZFxuICAgICAgICB9XG5cbiAgICBjb25zdCB0YWJsZVN0eWxlOiBhbnkgPSB1bnN0eWxlZFxuICAgICAgPyBudWxsXG4gICAgICA6IHtcbiAgICAgICAgICBkaXNwbGF5OiAndGFibGUnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgICAgfVxuXG4gICAgY29uc3Qgc3BhblN0eWxlOiBhbnkgPSB1bnN0eWxlZFxuICAgICAgPyBudWxsXG4gICAgICA6IHtcbiAgICAgICAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXG4gICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgICAgICAgfVxuXG4gICAgaWYgKCEhcmVuZGVyV2ViVGV4dFZpZXcpIHtcbiAgICAgIGNvbnN0IHJlbmRlcldlYlRleHRWaWV3UHJvcHM6IElBdmF0YXJSZW5kZXJXZWJUZXh0Vmlld1Byb3BzID0ge1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHRleHRDbGFzc05hbWUsXG4gICAgICAgIGluaXRpYWxzU3R5bGUsXG4gICAgICAgIHRhYmxlU3R5bGUsXG4gICAgICAgIHNwYW5TdHlsZSxcbiAgICAgICAgc2NhbGVUZXh0Tm9kZTogdGhpcy5zY2FsZVRleHROb2RlLFxuICAgICAgICBzcGFuS2V5OiB0aGlzLnByb3BzLnZhbHVlIHx8ICdhdmF0YXJLZXknLFxuICAgICAgICB0ZXh0VmFsdWU6IHRoaXMucHJvcHMudmFsdWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlbmRlcldlYlRleHRWaWV3KHJlbmRlcldlYlRleHRWaWV3UHJvcHMpXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcblxuICAgIC8vIHJldHVybiAoXG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lICsgJyBzYi1hdmF0YXJ0ZXh0J30gc3R5bGU9e2luaXRpYWxzU3R5bGV9PlxuICAgIC8vICAgICA8ZGl2IHN0eWxlPXt0YWJsZVN0eWxlfT5cbiAgICAvLyAgICAgICA8c3BhbiBzdHlsZT17c3BhblN0eWxlfT5cbiAgICAvLyAgICAgICAgIDxzcGFuIHJlZj17dGhpcy5zY2FsZVRleHROb2RlfSBrZXk9e3RoaXMucHJvcHMudmFsdWUgfHwgJ2F2YXRhcktleSd9PlxuICAgIC8vICAgICAgICAgICB7dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAvLyAgICAgICAgIDwvc3Bhbj5cbiAgICAvLyAgICAgICA8L3NwYW4+XG4gICAgLy8gICAgIDwvZGl2PlxuICAgIC8vICAgPC9kaXY+XG4gICAgLy8gKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3R5bGUsIHNvdXJjZU5hbWUsIHJlbmRlcldlYkNvbnRhaW5lclZpZXcsIHNyYyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCB1bnN0eWxlZCwgcm91bmQgfSA9IHRoaXMucHJvcHMgYXMgQXZhdGFyUHJvcHNXaXRoRGVmYXVsdHNcbiAgICBjb25zdCB7fSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzaXplOiBJUGFyc2VTaXplUmVzdWx0ID0gcGFyc2VTaXplKHRoaXMucHJvcHMuc2l6ZSlcblxuICAgIGNvbnN0IGhvc3RTdHlsZSA9IHVuc3R5bGVkXG4gICAgICA/IG51bGxcbiAgICAgIDoge1xuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICAgIHdpZHRoOiBzaXplLnN0cixcbiAgICAgICAgICBoZWlnaHQ6IHNpemUuc3RyLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogcm91bmQgPT09IHRydWUgPyAnMTAwJScgOiByb3VuZCxcbiAgICAgICAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZicsXG4gICAgICAgICAgLi4uc3R5bGVcbiAgICAgICAgfVxuXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtjbGFzc05hbWUsICdzYi1hdmF0YXInXVxuXG4gICAgaWYgKHNvdXJjZU5hbWUpIHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZU5hbWVcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UoL1teYS16MC05LV0rL2csICctJykgLy8gb25seSBhbGxvdyBhbHBoYW51bWVyaWNcbiAgICAgICAgLnJlcGxhY2UoL14tK3wtKyQvZywgJycpIC8vIHRyaW0gYC1gXG4gICAgICBjbGFzc05hbWVzLnB1c2goJ3NiLWF2YXRhci0tJyArIHNvdXJjZSlcbiAgICB9XG5cbiAgICBpZiAoISFyZW5kZXJXZWJDb250YWluZXJWaWV3KSB7XG4gICAgICBjb25zdCByZW5kZXJXZWJQcm9wczogSUF2YXRhclJlbmRlcldlYkNvbnRhaW5lclByb3BzID0ge1xuICAgICAgICBjaGlsZHJlbjogISFzcmMgPyB0aGlzLnJlbmRlckFzSW1hZ2Uoc3JjKSA6IHRoaXMucmVuZGVyQXNUZXh0KCksXG4gICAgICAgIGhvc3RTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lczogY2xhc3NOYW1lcy5qb2luKCcgJylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlbmRlcldlYkNvbnRhaW5lclZpZXcocmVuZGVyV2ViUHJvcHMpXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcblxuICAgIC8vIHJldHVybiAoXG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9IG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30gc3R5bGU9e2hvc3RTdHlsZX0+XG4gICAgLy8gICAgIHtzcmMgPyB0aGlzLnJlbmRlckFzSW1hZ2Uoc3JjKSA6IHRoaXMucmVuZGVyQXNUZXh0KCl9XG4gICAgLy8gICA8L2Rpdj5cbiAgICAvLyApXG4gIH1cbn1cbiJdfQ==