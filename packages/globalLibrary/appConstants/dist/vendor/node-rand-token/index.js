"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RandToken = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var numeric = '0123456789';
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';

var RandToken = /*#__PURE__*/function () {
  (0, _createClass2["default"])(RandToken, null, [{
    key: "suid",
    // NOTE: This is explicitly in sortable order:
    value: function suid(length, epoch, prefixLength) {
      epoch = epoch || RandToken.defaultEpoch;
      prefixLength = prefixLength || RandToken.defaultPrefixLength;
      return RandToken.suidPrefix(epoch, prefixLength) + RandToken.defaultGenerator.generate(length);
    }
  }]);

  function RandToken() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    (0, _classCallCheck2["default"])(this, RandToken);
    this.defaults = {
      chars: 'default',
      source: 'math'
    };
    this.options = void 0;
    this.options = this.buildGenerator(options);
  }

  (0, _createClass2["default"])(RandToken, [{
    key: "validateTokenChars",
    value: function validateTokenChars(tokenChars) {// assert(tokenChars)
      // assert(typeof tokenChars === 'string')
      // assert(tokenChars.length > 0)
      // assert(tokenChars.length < 256)
    }
  }, {
    key: "buildGenerator",
    value: function buildGenerator(options) {
      // assert(!options || typeof options === 'object')
      options = options || {};
      options.chars = options.chars || this.defaults.chars;
      options.source = options.source || this.defaults.source; // Allowed characters

      switch (options.chars) {
        case 'default':
          options.chars = RandToken.alphaNumeric;
          break;

        case 'a-z':
        case 'alpha':
          options.chars = alphaLower;
          break;

        case 'A-Z':
        case 'ALPHA':
          options.chars = RandToken.alphaUpper;
          break;

        case '0-9':
        case 'numeric':
          options.chars = numeric;
          break;

        case 'base32':
          options.chars = RandToken.alphaUpper + '234567';
          break;

        default: // use the characters as is

      }

      this.validateTokenChars(options.chars); // Source of randomness:

      switch (options.source) {
        case 'default':
        case 'crypto':
        case 'math':
          options.source = function (size) {
            var buf = new Buffer(size);

            for (var i = 0; i < size; i++) {
              buf.writeUInt8(Math.floor(256 * Math.random()), i);
            }

            return buf;
          };

          break;

        default:
          // assert(typeof options.source === 'function')
          break;
      }

      return options;
    }
  }, {
    key: "generate",
    value: function generate(size) {
      var chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!!chars) {
        this.validateTokenChars(chars);
      } else {
        chars = this.options.chars;
      }

      var ret = '';

      if (!!chars) {
        var max = Math.floor(256 / chars.length) * chars.length;

        while (ret.length < size) {
          var buf = this.options.source(size - ret.length);

          for (var i = 0; i < buf.length; i++) {
            var x = buf.readUInt8(i);

            if (x < max) {
              ret += chars[x % chars.length];
            }
          }
        }
      }

      return ret;
    }
  }], [{
    key: "suidPrefix",
    value: function suidPrefix(epoch, prefixLength) {
      var ret = this.base62(Date.now() - epoch);

      while (ret.length < prefixLength) {
        ret = '0' + ret;
      }

      return ret;
    }
  }, {
    key: "base62",
    value: function base62(n) {
      // assert(n >= 0)
      n = Math.floor(n);
      var ret = [];

      do {
        var index = n % 62;
        ret.push(RandToken.alphaNumeric[index]);
        n = Math.floor(n / 62);
      } while (n > 0);

      return ret.reverse().join('');
    }
  }]);
  return RandToken;
}();

exports.RandToken = RandToken;
RandToken.alphaUpper = alphaLower.toUpperCase();
RandToken.alphaNumeric = numeric + RandToken.alphaUpper + alphaLower;
RandToken.defaultGenerator = new RandToken();
RandToken.defaultEpoch = 946684800000;
RandToken.defaultPrefixLength = 8;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZW5kb3Ivbm9kZS1yYW5kLXRva2VuL2luZGV4LnRzIl0sIm5hbWVzIjpbIm51bWVyaWMiLCJhbHBoYUxvd2VyIiwiUmFuZFRva2VuIiwibGVuZ3RoIiwiZXBvY2giLCJwcmVmaXhMZW5ndGgiLCJkZWZhdWx0RXBvY2giLCJkZWZhdWx0UHJlZml4TGVuZ3RoIiwic3VpZFByZWZpeCIsImRlZmF1bHRHZW5lcmF0b3IiLCJnZW5lcmF0ZSIsIm9wdGlvbnMiLCJkZWZhdWx0cyIsImNoYXJzIiwic291cmNlIiwiYnVpbGRHZW5lcmF0b3IiLCJ0b2tlbkNoYXJzIiwiYWxwaGFOdW1lcmljIiwiYWxwaGFVcHBlciIsInZhbGlkYXRlVG9rZW5DaGFycyIsInNpemUiLCJidWYiLCJCdWZmZXIiLCJpIiwid3JpdGVVSW50OCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJldCIsIm1heCIsIngiLCJyZWFkVUludDgiLCJiYXNlNjIiLCJEYXRlIiwibm93IiwibiIsImluZGV4IiwicHVzaCIsInJldmVyc2UiLCJqb2luIiwidG9VcHBlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUcsWUFBaEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsNEJBQW5COztJQUVhQyxTOzs7QUFHWDt5QkFjWUMsTSxFQUFRQyxLLEVBQU9DLFksRUFBYztBQUN2Q0QsTUFBQUEsS0FBSyxHQUFHQSxLQUFLLElBQUlGLFNBQVMsQ0FBQ0ksWUFBM0I7QUFDQUQsTUFBQUEsWUFBWSxHQUFHQSxZQUFZLElBQUlILFNBQVMsQ0FBQ0ssbUJBQXpDO0FBQ0EsYUFBT0wsU0FBUyxDQUFDTSxVQUFWLENBQXFCSixLQUFyQixFQUE0QkMsWUFBNUIsSUFBNENILFNBQVMsQ0FBQ08sZ0JBQVYsQ0FBMkJDLFFBQTNCLENBQW9DUCxNQUFwQyxDQUFuRDtBQUNEOzs7QUFFRCx1QkFBNEI7QUFBQSxRQUFoQlEsT0FBZ0IsdUVBQU4sSUFBTTtBQUFBO0FBQUEsU0FqQnBCQyxRQWlCb0IsR0FqQlQ7QUFDakJDLE1BQUFBLEtBQUssRUFBRSxTQURVO0FBRWpCQyxNQUFBQSxNQUFNLEVBQUU7QUFGUyxLQWlCUztBQUFBLFNBYnBCSCxPQWFvQjtBQUMxQixTQUFLQSxPQUFMLEdBQWUsS0FBS0ksY0FBTCxDQUFvQkosT0FBcEIsQ0FBZjtBQUNEOzs7O3VDQVVrQkssVSxFQUFZLENBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7OzttQ0FjY0wsTyxFQUFTO0FBQ3RCO0FBQ0FBLE1BQUFBLE9BQU8sR0FBR0EsT0FBTyxJQUFJLEVBQXJCO0FBQ0FBLE1BQUFBLE9BQU8sQ0FBQ0UsS0FBUixHQUFnQkYsT0FBTyxDQUFDRSxLQUFSLElBQWlCLEtBQUtELFFBQUwsQ0FBY0MsS0FBL0M7QUFDQUYsTUFBQUEsT0FBTyxDQUFDRyxNQUFSLEdBQWlCSCxPQUFPLENBQUNHLE1BQVIsSUFBa0IsS0FBS0YsUUFBTCxDQUFjRSxNQUFqRCxDQUpzQixDQU10Qjs7QUFDQSxjQUFRSCxPQUFPLENBQUNFLEtBQWhCO0FBQ0UsYUFBSyxTQUFMO0FBQ0VGLFVBQUFBLE9BQU8sQ0FBQ0UsS0FBUixHQUFnQlgsU0FBUyxDQUFDZSxZQUExQjtBQUNBOztBQUNGLGFBQUssS0FBTDtBQUNBLGFBQUssT0FBTDtBQUNFTixVQUFBQSxPQUFPLENBQUNFLEtBQVIsR0FBZ0JaLFVBQWhCO0FBQ0E7O0FBQ0YsYUFBSyxLQUFMO0FBQ0EsYUFBSyxPQUFMO0FBQ0VVLFVBQUFBLE9BQU8sQ0FBQ0UsS0FBUixHQUFnQlgsU0FBUyxDQUFDZ0IsVUFBMUI7QUFDQTs7QUFDRixhQUFLLEtBQUw7QUFDQSxhQUFLLFNBQUw7QUFDRVAsVUFBQUEsT0FBTyxDQUFDRSxLQUFSLEdBQWdCYixPQUFoQjtBQUNBOztBQUNGLGFBQUssUUFBTDtBQUNFVyxVQUFBQSxPQUFPLENBQUNFLEtBQVIsR0FBZ0JYLFNBQVMsQ0FBQ2dCLFVBQVYsR0FBdUIsUUFBdkM7QUFDQTs7QUFDRixnQkFuQkYsQ0FvQkU7O0FBcEJGOztBQXNCQSxXQUFLQyxrQkFBTCxDQUF3QlIsT0FBTyxDQUFDRSxLQUFoQyxFQTdCc0IsQ0ErQnRCOztBQUNBLGNBQVFGLE9BQU8sQ0FBQ0csTUFBaEI7QUFDRSxhQUFLLFNBQUw7QUFDQSxhQUFLLFFBQUw7QUFDQSxhQUFLLE1BQUw7QUFDRUgsVUFBQUEsT0FBTyxDQUFDRyxNQUFSLEdBQWlCLFVBQUNNLElBQUQsRUFBVTtBQUN6QixnQkFBTUMsR0FBRyxHQUFHLElBQUlDLE1BQUosQ0FBV0YsSUFBWCxDQUFaOztBQUNBLGlCQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILElBQXBCLEVBQTBCRyxDQUFDLEVBQTNCLEVBQStCO0FBQzdCRixjQUFBQSxHQUFHLENBQUNHLFVBQUosQ0FBZUMsSUFBSSxDQUFDQyxLQUFMLENBQVcsTUFBTUQsSUFBSSxDQUFDRSxNQUFMLEVBQWpCLENBQWYsRUFBZ0RKLENBQWhEO0FBQ0Q7O0FBQ0QsbUJBQU9GLEdBQVA7QUFDRCxXQU5EOztBQU9BOztBQUNGO0FBQ0U7QUFDQTtBQWRKOztBQWlCQSxhQUFPVixPQUFQO0FBQ0Q7Ozs2QkFFUVMsSSxFQUEyQztBQUFBLFVBQTdCUCxLQUE2Qix1RUFBTixJQUFNOztBQUNsRCxVQUFJLENBQUMsQ0FBQ0EsS0FBTixFQUFhO0FBQ1gsYUFBS00sa0JBQUwsQ0FBd0JOLEtBQXhCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLFFBQUFBLEtBQUssR0FBRyxLQUFLRixPQUFMLENBQWFFLEtBQXJCO0FBQ0Q7O0FBQ0QsVUFBSWUsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsVUFBSSxDQUFDLENBQUNmLEtBQU4sRUFBYTtBQUNYLFlBQU1nQixHQUFHLEdBQUdKLElBQUksQ0FBQ0MsS0FBTCxDQUFXLE1BQU1iLEtBQUssQ0FBQ1YsTUFBdkIsSUFBaUNVLEtBQUssQ0FBQ1YsTUFBbkQ7O0FBQ0EsZUFBT3lCLEdBQUcsQ0FBQ3pCLE1BQUosR0FBYWlCLElBQXBCLEVBQTBCO0FBQ3hCLGNBQU1DLEdBQUcsR0FBRyxLQUFLVixPQUFMLENBQWFHLE1BQWIsQ0FBb0JNLElBQUksR0FBR1EsR0FBRyxDQUFDekIsTUFBL0IsQ0FBWjs7QUFDQSxlQUFLLElBQUlvQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixHQUFHLENBQUNsQixNQUF4QixFQUFnQ29CLENBQUMsRUFBakMsRUFBcUM7QUFDbkMsZ0JBQU1PLENBQUMsR0FBR1QsR0FBRyxDQUFDVSxTQUFKLENBQWNSLENBQWQsQ0FBVjs7QUFDQSxnQkFBSU8sQ0FBQyxHQUFHRCxHQUFSLEVBQWE7QUFDWEQsY0FBQUEsR0FBRyxJQUFJZixLQUFLLENBQUNpQixDQUFDLEdBQUdqQixLQUFLLENBQUNWLE1BQVgsQ0FBWjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUNELGFBQU95QixHQUFQO0FBQ0Q7OzsrQkFuR3lCeEIsSyxFQUFPQyxZLEVBQWM7QUFDN0MsVUFBSXVCLEdBQUcsR0FBRyxLQUFLSSxNQUFMLENBQVlDLElBQUksQ0FBQ0MsR0FBTCxLQUFhOUIsS0FBekIsQ0FBVjs7QUFDQSxhQUFPd0IsR0FBRyxDQUFDekIsTUFBSixHQUFhRSxZQUFwQixFQUFrQztBQUNoQ3VCLFFBQUFBLEdBQUcsR0FBRyxNQUFNQSxHQUFaO0FBQ0Q7O0FBQ0QsYUFBT0EsR0FBUDtBQUNEOzs7MkJBU3FCTyxDLEVBQUc7QUFDdkI7QUFDQUEsTUFBQUEsQ0FBQyxHQUFHVixJQUFJLENBQUNDLEtBQUwsQ0FBV1MsQ0FBWCxDQUFKO0FBQ0EsVUFBTVAsR0FBUSxHQUFHLEVBQWpCOztBQUNBLFNBQUc7QUFDRCxZQUFNUSxLQUFLLEdBQUdELENBQUMsR0FBRyxFQUFsQjtBQUNBUCxRQUFBQSxHQUFHLENBQUNTLElBQUosQ0FBU25DLFNBQVMsQ0FBQ2UsWUFBVixDQUF1Qm1CLEtBQXZCLENBQVQ7QUFDQUQsUUFBQUEsQ0FBQyxHQUFHVixJQUFJLENBQUNDLEtBQUwsQ0FBV1MsQ0FBQyxHQUFHLEVBQWYsQ0FBSjtBQUNELE9BSkQsUUFJU0EsQ0FBQyxHQUFHLENBSmI7O0FBS0EsYUFBT1AsR0FBRyxDQUFDVSxPQUFKLEdBQWNDLElBQWQsQ0FBbUIsRUFBbkIsQ0FBUDtBQUNEOzs7Ozs7QUFwRFVyQyxTLENBQ0lnQixVLEdBQWFqQixVQUFVLENBQUN1QyxXQUFYLEU7QUFEakJ0QyxTLENBSUllLFksR0FBZWpCLE9BQU8sR0FBR0UsU0FBUyxDQUFDZ0IsVUFBcEIsR0FBaUNqQixVO0FBSnBEQyxTLENBWUlPLGdCLEdBQW1CLElBQUlQLFNBQUosRTtBQVp2QkEsUyxDQWNJSSxZLEdBQWUsWTtBQWRuQkosUyxDQWVJSyxtQixHQUFzQixDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbnVtZXJpYyA9ICcwMTIzNDU2Nzg5J1xuY29uc3QgYWxwaGFMb3dlciA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eidcblxuZXhwb3J0IGNsYXNzIFJhbmRUb2tlbiB7XG4gIHByaXZhdGUgc3RhdGljIGFscGhhVXBwZXIgPSBhbHBoYUxvd2VyLnRvVXBwZXJDYXNlKClcblxuICAvLyBOT1RFOiBUaGlzIGlzIGV4cGxpY2l0bHkgaW4gc29ydGFibGUgb3JkZXI6XG4gIHByaXZhdGUgc3RhdGljIGFscGhhTnVtZXJpYyA9IG51bWVyaWMgKyBSYW5kVG9rZW4uYWxwaGFVcHBlciArIGFscGhhTG93ZXJcblxuICBwcml2YXRlIGRlZmF1bHRzID0ge1xuICAgIGNoYXJzOiAnZGVmYXVsdCcsXG4gICAgc291cmNlOiAnbWF0aCdcbiAgfVxuICBwcml2YXRlIG9wdGlvbnM6IGFueVxuXG4gIHByaXZhdGUgc3RhdGljIGRlZmF1bHRHZW5lcmF0b3IgPSBuZXcgUmFuZFRva2VuKClcblxuICBwcml2YXRlIHN0YXRpYyBkZWZhdWx0RXBvY2ggPSA5NDY2ODQ4MDAwMDBcbiAgcHJpdmF0ZSBzdGF0aWMgZGVmYXVsdFByZWZpeExlbmd0aCA9IDhcblxuICBzdGF0aWMgc3VpZChsZW5ndGgsIGVwb2NoLCBwcmVmaXhMZW5ndGgpIHtcbiAgICBlcG9jaCA9IGVwb2NoIHx8IFJhbmRUb2tlbi5kZWZhdWx0RXBvY2hcbiAgICBwcmVmaXhMZW5ndGggPSBwcmVmaXhMZW5ndGggfHwgUmFuZFRva2VuLmRlZmF1bHRQcmVmaXhMZW5ndGhcbiAgICByZXR1cm4gUmFuZFRva2VuLnN1aWRQcmVmaXgoZXBvY2gsIHByZWZpeExlbmd0aCkgKyBSYW5kVG9rZW4uZGVmYXVsdEdlbmVyYXRvci5nZW5lcmF0ZShsZW5ndGgpXG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0gbnVsbCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuYnVpbGRHZW5lcmF0b3Iob3B0aW9ucylcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHN1aWRQcmVmaXgoZXBvY2gsIHByZWZpeExlbmd0aCkge1xuICAgIGxldCByZXQgPSB0aGlzLmJhc2U2MihEYXRlLm5vdygpIC0gZXBvY2gpXG4gICAgd2hpbGUgKHJldC5sZW5ndGggPCBwcmVmaXhMZW5ndGgpIHtcbiAgICAgIHJldCA9ICcwJyArIHJldFxuICAgIH1cbiAgICByZXR1cm4gcmV0XG4gIH1cblxuICB2YWxpZGF0ZVRva2VuQ2hhcnModG9rZW5DaGFycykge1xuICAgIC8vIGFzc2VydCh0b2tlbkNoYXJzKVxuICAgIC8vIGFzc2VydCh0eXBlb2YgdG9rZW5DaGFycyA9PT0gJ3N0cmluZycpXG4gICAgLy8gYXNzZXJ0KHRva2VuQ2hhcnMubGVuZ3RoID4gMClcbiAgICAvLyBhc3NlcnQodG9rZW5DaGFycy5sZW5ndGggPCAyNTYpXG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBiYXNlNjIobikge1xuICAgIC8vIGFzc2VydChuID49IDApXG4gICAgbiA9IE1hdGguZmxvb3IobilcbiAgICBjb25zdCByZXQ6IGFueSA9IFtdXG4gICAgZG8ge1xuICAgICAgY29uc3QgaW5kZXggPSBuICUgNjJcbiAgICAgIHJldC5wdXNoKFJhbmRUb2tlbi5hbHBoYU51bWVyaWNbaW5kZXhdKVxuICAgICAgbiA9IE1hdGguZmxvb3IobiAvIDYyKVxuICAgIH0gd2hpbGUgKG4gPiAwKVxuICAgIHJldHVybiByZXQucmV2ZXJzZSgpLmpvaW4oJycpXG4gIH1cblxuICBidWlsZEdlbmVyYXRvcihvcHRpb25zKSB7XG4gICAgLy8gYXNzZXJ0KCFvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JylcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIG9wdGlvbnMuY2hhcnMgPSBvcHRpb25zLmNoYXJzIHx8IHRoaXMuZGVmYXVsdHMuY2hhcnNcbiAgICBvcHRpb25zLnNvdXJjZSA9IG9wdGlvbnMuc291cmNlIHx8IHRoaXMuZGVmYXVsdHMuc291cmNlXG5cbiAgICAvLyBBbGxvd2VkIGNoYXJhY3RlcnNcbiAgICBzd2l0Y2ggKG9wdGlvbnMuY2hhcnMpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICBvcHRpb25zLmNoYXJzID0gUmFuZFRva2VuLmFscGhhTnVtZXJpY1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYS16JzpcbiAgICAgIGNhc2UgJ2FscGhhJzpcbiAgICAgICAgb3B0aW9ucy5jaGFycyA9IGFscGhhTG93ZXJcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ0EtWic6XG4gICAgICBjYXNlICdBTFBIQSc6XG4gICAgICAgIG9wdGlvbnMuY2hhcnMgPSBSYW5kVG9rZW4uYWxwaGFVcHBlclxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnMC05JzpcbiAgICAgIGNhc2UgJ251bWVyaWMnOlxuICAgICAgICBvcHRpb25zLmNoYXJzID0gbnVtZXJpY1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYmFzZTMyJzpcbiAgICAgICAgb3B0aW9ucy5jaGFycyA9IFJhbmRUb2tlbi5hbHBoYVVwcGVyICsgJzIzNDU2NydcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyB1c2UgdGhlIGNoYXJhY3RlcnMgYXMgaXNcbiAgICB9XG4gICAgdGhpcy52YWxpZGF0ZVRva2VuQ2hhcnMob3B0aW9ucy5jaGFycylcblxuICAgIC8vIFNvdXJjZSBvZiByYW5kb21uZXNzOlxuICAgIHN3aXRjaCAob3B0aW9ucy5zb3VyY2UpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgY2FzZSAnY3J5cHRvJzpcbiAgICAgIGNhc2UgJ21hdGgnOlxuICAgICAgICBvcHRpb25zLnNvdXJjZSA9IChzaXplKSA9PiB7XG4gICAgICAgICAgY29uc3QgYnVmID0gbmV3IEJ1ZmZlcihzaXplKVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBidWYud3JpdGVVSW50OChNYXRoLmZsb29yKDI1NiAqIE1hdGgucmFuZG9tKCkpLCBpKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYnVmXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIGFzc2VydCh0eXBlb2Ygb3B0aW9ucy5zb3VyY2UgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxuXG4gIGdlbmVyYXRlKHNpemU6IG51bWJlciwgY2hhcnM6IHN0cmluZyB8IG51bGwgPSBudWxsKSB7XG4gICAgaWYgKCEhY2hhcnMpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVUb2tlbkNoYXJzKGNoYXJzKVxuICAgIH0gZWxzZSB7XG4gICAgICBjaGFycyA9IHRoaXMub3B0aW9ucy5jaGFyc1xuICAgIH1cbiAgICBsZXQgcmV0ID0gJydcbiAgICBpZiAoISFjaGFycykge1xuICAgICAgY29uc3QgbWF4ID0gTWF0aC5mbG9vcigyNTYgLyBjaGFycy5sZW5ndGgpICogY2hhcnMubGVuZ3RoXG4gICAgICB3aGlsZSAocmV0Lmxlbmd0aCA8IHNpemUpIHtcbiAgICAgICAgY29uc3QgYnVmID0gdGhpcy5vcHRpb25zLnNvdXJjZShzaXplIC0gcmV0Lmxlbmd0aClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB4ID0gYnVmLnJlYWRVSW50OChpKVxuICAgICAgICAgIGlmICh4IDwgbWF4KSB7XG4gICAgICAgICAgICByZXQgKz0gY2hhcnNbeCAlIGNoYXJzLmxlbmd0aF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldFxuICB9XG59XG4iXX0=