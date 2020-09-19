"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchJSONP = fetchJSONP;
exports.getRandomColor = getRandomColor;
exports.parseSize = parseSize;
exports.defaultInitials = defaultInitials;
exports.defaultColors = exports.fetchJson = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var fetchJson = function fetchJson(url, successCb, errorCb) {
  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     successCb(data)
  //   })
  //   .catch(() => {
  //     errorCb('404')
  //     // This is where you run code if the server returns any errors
  //   })
  errorCb('404');
};

exports.fetchJson = fetchJson;

function fetchJSONP(url, successCb, errorCb) {
  errorCb(); // const callbackName = 'jsonp_cb_' + Math.round(100000 * Math.random())
  // const script = document.createElement('script')
  // script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName
  // document.body.appendChild(script)
  // script.onerror = () => {
  //     errorCb()
  // }
  //     ; (window as any)[callbackName] = (data: any) => {
  //         delete (window as any)[callbackName]
  //         document.body.removeChild(script)
  //         successCb(data)
  //     }
}

var defaultColors = ['#d73d32', '#7e3794', '#4285f4', '#67ae3f', '#d61a7f', '#ff4080']; // https://regex101.com/r/YEsPER/1
// https://developer.mozilla.org/en-US/docs/Web/CSS/length

exports.defaultColors = defaultColors;
var reSize = /^([-+]?(?:\d+(?:\.\d+)?|\.\d+))([a-z]{2,4}|%)?$/; // https://en.wikipedia.org/wiki/Linear_congruential_generator

function _stringAsciiPRNG(value, m) {
  // Xn+1 = (a * Xn + c) % m
  // 0 < a < m
  // 0 <= c < m
  // 0 <= X0 < m
  // const charCodes = [1, 2, 3, 4] // [...value].map(letter => letter.charCodeAt(0))
  // const source = [...value]
  var source = Array.from(value);
  var charCodes = source.map(function (letter) {
    return letter.charCodeAt(0);
  });
  var len = charCodes.length;
  var a = len % (m - 1) + 1;
  var c = charCodes.reduce(function (current, next) {
    return current + next;
  }) % m;
  var random = charCodes[0] % m;

  for (var i = 0; i < len; i++) {
    random = (a * random + c) % m;
  }

  return random;
}

function getRandomColor(value) {
  var colors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultColors;

  // if no value is passed, always return transparent color otherwise
  // a rerender would show a new color which would will
  // give strange effects when an interface is loading
  // and gets rerendered a few consequent times
  if (!value) {
    return 'transparent';
  } // value based random color index
  // the reason we don't just use a random number is to make sure that
  // a certain value will always get the same color assigned given
  // a fixed set of colors


  var colorIndex = _stringAsciiPRNG(value, colors.length);

  return colors[colorIndex];
}

function parseSize(size) {
  var fixedSize = '' + size;
  var regMatchResult = reSize.exec(fixedSize);

  var _regMatchResult = (0, _slicedToArray2["default"])(regMatchResult, 3),
      _regMatchResult$ = _regMatchResult[1],
      value = _regMatchResult$ === void 0 ? 0 : _regMatchResult$,
      _regMatchResult$2 = _regMatchResult[2],
      unit = _regMatchResult$2 === void 0 ? 'px' : _regMatchResult$2;

  var result = {
    value: Number(value),
    str: "".concat(value).concat(unit),
    // "40px"
    unit: unit
  };
  return result;
}

function defaultInitials(name, _ref) {
  var maxInitials = _ref.maxInitials;
  return name.split(/\s/).map(function (part) {
    return part.substring(0, 1).toUpperCase();
  }).filter(function (v) {
    return !!v;
  }).slice(0, maxInitials).join('');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5za2V0Y2gudHMiXSwibmFtZXMiOlsiZmV0Y2hKc29uIiwidXJsIiwic3VjY2Vzc0NiIiwiZXJyb3JDYiIsImZldGNoSlNPTlAiLCJkZWZhdWx0Q29sb3JzIiwicmVTaXplIiwiX3N0cmluZ0FzY2lpUFJORyIsInZhbHVlIiwibSIsInNvdXJjZSIsIkFycmF5IiwiZnJvbSIsImNoYXJDb2RlcyIsIm1hcCIsImxldHRlciIsImNoYXJDb2RlQXQiLCJsZW4iLCJsZW5ndGgiLCJhIiwiYyIsInJlZHVjZSIsImN1cnJlbnQiLCJuZXh0IiwicmFuZG9tIiwiaSIsImdldFJhbmRvbUNvbG9yIiwiY29sb3JzIiwiY29sb3JJbmRleCIsInBhcnNlU2l6ZSIsInNpemUiLCJmaXhlZFNpemUiLCJyZWdNYXRjaFJlc3VsdCIsImV4ZWMiLCJ1bml0IiwicmVzdWx0IiwiTnVtYmVyIiwic3RyIiwiZGVmYXVsdEluaXRpYWxzIiwibmFtZSIsIm1heEluaXRpYWxzIiwic3BsaXQiLCJwYXJ0Iiwic3Vic3RyaW5nIiwidG9VcHBlckNhc2UiLCJmaWx0ZXIiLCJ2Iiwic2xpY2UiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUN2QkMsR0FEdUIsRUFFdkJDLFNBRnVCLEVBR3ZCQyxPQUh1QixFQUlwQjtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFBQSxPQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsQ0FoQk07Ozs7QUFrQkEsU0FBU0MsVUFBVCxDQUFvQkgsR0FBcEIsRUFBaUNDLFNBQWpDLEVBQWdFQyxPQUFoRSxFQUFvRjtBQUN6RkEsRUFBQUEsT0FBTyxHQURrRixDQUd6RjtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFFTSxJQUFNRSxhQUFhLEdBQUcsQ0FB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LFdBSkwsRUFLSlEsSUFMSSxDQUtDLEVBTEQsQ0FBUDtBQU1EIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZldGNoSnNvbiA9IChcbiAgdXJsOiBzdHJpbmcsXG4gIHN1Y2Nlc3NDYjogKGRhdGE6IGFueSkgPT4gYW55LFxuICBlcnJvckNiOiAoc3RhdHVzOiBhbnkpID0+IGFueVxuKSA9PiB7XG4gIC8vIGZldGNoKHVybClcbiAgLy8gICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XG4gIC8vICAgICBzdWNjZXNzQ2IoZGF0YSlcbiAgLy8gICB9KVxuICAvLyAgIC5jYXRjaCgoKSA9PiB7XG4gIC8vICAgICBlcnJvckNiKCc0MDQnKVxuICAvLyAgICAgLy8gVGhpcyBpcyB3aGVyZSB5b3UgcnVuIGNvZGUgaWYgdGhlIHNlcnZlciByZXR1cm5zIGFueSBlcnJvcnNcbiAgLy8gICB9KVxuXG4gIGVycm9yQ2IoJzQwNCcpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEpTT05QKHVybDogc3RyaW5nLCBzdWNjZXNzQ2I6IChkYXRhOiBhbnkpID0+IGFueSwgZXJyb3JDYjogKCkgPT4gYW55KSB7XG4gIGVycm9yQ2IoKVxuXG4gIC8vIGNvbnN0IGNhbGxiYWNrTmFtZSA9ICdqc29ucF9jYl8nICsgTWF0aC5yb3VuZCgxMDAwMDAgKiBNYXRoLnJhbmRvbSgpKVxuXG4gIC8vIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gIC8vIHNjcmlwdC5zcmMgPSB1cmwgKyAodXJsLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nKSArICdjYWxsYmFjaz0nICsgY2FsbGJhY2tOYW1lXG4gIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXG4gIC8vIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAvLyAgICAgZXJyb3JDYigpXG4gIC8vIH1cbiAgLy8gICAgIDsgKHdpbmRvdyBhcyBhbnkpW2NhbGxiYWNrTmFtZV0gPSAoZGF0YTogYW55KSA9PiB7XG4gIC8vICAgICAgICAgZGVsZXRlICh3aW5kb3cgYXMgYW55KVtjYWxsYmFja05hbWVdXG4gIC8vICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JpcHQpXG4gIC8vICAgICAgICAgc3VjY2Vzc0NiKGRhdGEpXG4gIC8vICAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29sb3JzID0gWycjZDczZDMyJywgJyM3ZTM3OTQnLCAnIzQyODVmNCcsICcjNjdhZTNmJywgJyNkNjFhN2YnLCAnI2ZmNDA4MCddXG5cbi8vIGh0dHBzOi8vcmVnZXgxMDEuY29tL3IvWUVzUEVSLzFcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9sZW5ndGhcbmNvbnN0IHJlU2l6ZSA9IC9eKFstK10/KD86XFxkKyg/OlxcLlxcZCspP3xcXC5cXGQrKSkoW2Etel17Miw0fXwlKT8kL1xuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaW5lYXJfY29uZ3J1ZW50aWFsX2dlbmVyYXRvclxuZnVuY3Rpb24gX3N0cmluZ0FzY2lpUFJORyh2YWx1ZTogYW55LCBtOiBhbnkpIHtcbiAgLy8gWG4rMSA9IChhICogWG4gKyBjKSAlIG1cbiAgLy8gMCA8IGEgPCBtXG4gIC8vIDAgPD0gYyA8IG1cbiAgLy8gMCA8PSBYMCA8IG1cblxuICAvLyBjb25zdCBjaGFyQ29kZXMgPSBbMSwgMiwgMywgNF0gLy8gWy4uLnZhbHVlXS5tYXAobGV0dGVyID0+IGxldHRlci5jaGFyQ29kZUF0KDApKVxuICAvLyBjb25zdCBzb3VyY2UgPSBbLi4udmFsdWVdXG4gIGNvbnN0IHNvdXJjZTogc3RyaW5nW10gPSBBcnJheS5mcm9tKHZhbHVlKVxuICBjb25zdCBjaGFyQ29kZXMgPSBzb3VyY2UubWFwKChsZXR0ZXIpID0+IGxldHRlci5jaGFyQ29kZUF0KDApKVxuICBjb25zdCBsZW4gPSBjaGFyQ29kZXMubGVuZ3RoXG5cbiAgY29uc3QgYSA9IChsZW4gJSAobSAtIDEpKSArIDFcbiAgY29uc3QgYyA9IGNoYXJDb2Rlcy5yZWR1Y2UoKGN1cnJlbnQsIG5leHQpID0+IGN1cnJlbnQgKyBuZXh0KSAlIG1cblxuICBsZXQgcmFuZG9tID0gY2hhckNvZGVzWzBdICUgbVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgcmFuZG9tID0gKGEgKiByYW5kb20gKyBjKSAlIG1cbiAgfVxuXG4gIHJldHVybiByYW5kb21cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKHZhbHVlOiBhbnksIGNvbG9ycyA9IGRlZmF1bHRDb2xvcnMpIHtcbiAgLy8gaWYgbm8gdmFsdWUgaXMgcGFzc2VkLCBhbHdheXMgcmV0dXJuIHRyYW5zcGFyZW50IGNvbG9yIG90aGVyd2lzZVxuICAvLyBhIHJlcmVuZGVyIHdvdWxkIHNob3cgYSBuZXcgY29sb3Igd2hpY2ggd291bGQgd2lsbFxuICAvLyBnaXZlIHN0cmFuZ2UgZWZmZWN0cyB3aGVuIGFuIGludGVyZmFjZSBpcyBsb2FkaW5nXG4gIC8vIGFuZCBnZXRzIHJlcmVuZGVyZWQgYSBmZXcgY29uc2VxdWVudCB0aW1lc1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuICd0cmFuc3BhcmVudCdcbiAgfVxuXG4gIC8vIHZhbHVlIGJhc2VkIHJhbmRvbSBjb2xvciBpbmRleFxuICAvLyB0aGUgcmVhc29uIHdlIGRvbid0IGp1c3QgdXNlIGEgcmFuZG9tIG51bWJlciBpcyB0byBtYWtlIHN1cmUgdGhhdFxuICAvLyBhIGNlcnRhaW4gdmFsdWUgd2lsbCBhbHdheXMgZ2V0IHRoZSBzYW1lIGNvbG9yIGFzc2lnbmVkIGdpdmVuXG4gIC8vIGEgZml4ZWQgc2V0IG9mIGNvbG9yc1xuICBjb25zdCBjb2xvckluZGV4ID0gX3N0cmluZ0FzY2lpUFJORyh2YWx1ZSwgY29sb3JzLmxlbmd0aClcbiAgcmV0dXJuIGNvbG9yc1tjb2xvckluZGV4XVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZVNpemVSZXN1bHQge1xuICB2YWx1ZTogbnVtYmVyIC8vIHs0MH1cbiAgc3RyOiBzdHJpbmcgLy8gXCI0MHB4XCJcbiAgdW5pdDogc3RyaW5nIC8vIFwicHhcIlxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTaXplKHNpemU6IGFueSkge1xuICBjb25zdCBmaXhlZFNpemUgPSAnJyArIHNpemVcblxuICBjb25zdCByZWdNYXRjaFJlc3VsdDogYW55IHwgbnVsbCA9IHJlU2l6ZS5leGVjKGZpeGVkU2l6ZSlcbiAgY29uc3QgWywgdmFsdWUgPSAwLCB1bml0ID0gJ3B4J10gPSByZWdNYXRjaFJlc3VsdFxuXG4gIGNvbnN0IHJlc3VsdDogSVBhcnNlU2l6ZVJlc3VsdCA9IHtcbiAgICB2YWx1ZTogTnVtYmVyKHZhbHVlIGFzIGFueSksXG4gICAgc3RyOiBgJHt2YWx1ZX0ke3VuaXR9YCwgLy8gXCI0MHB4XCJcbiAgICB1bml0XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEluaXRpYWxzKG5hbWU6IHN0cmluZywgeyBtYXhJbml0aWFscyB9OiBhbnkpIHtcbiAgcmV0dXJuIG5hbWVcbiAgICAuc3BsaXQoL1xccy8pXG4gICAgLm1hcCgocGFydCkgPT4gcGFydC5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSlcbiAgICAuZmlsdGVyKCh2KSA9PiAhIXYpXG4gICAgLnNsaWNlKDAsIG1heEluaXRpYWxzKVxuICAgIC5qb2luKCcnKVxufVxuIl19