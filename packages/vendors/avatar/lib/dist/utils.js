"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchJson = fetchJson;
exports.fetchJSONP = fetchJSONP;
exports.getRandomColor = getRandomColor;
exports.parseSize = parseSize;
exports.defaultInitials = defaultInitials;
exports.defaultColors = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function fetchJson(url, successCb, errorCb) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200) {
        var _data = JSON.parse(request.responseText); // console.log('fetch json:', JSON.stringify(data))


        successCb(_data);
      } else {
        // console.log('fetch json(error):', request.status)
        errorCb(request.status);
      }
    }
  };

  request.open('GET', url, true);
  request.send();
}

function fetchJSONP(url, successCb, errorCb) {
  var callbackName = 'jsonp_cb_' + Math.round(100000 * Math.random());
  var script = document.createElement('script');
  script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
  document.body.appendChild(script);

  script.onerror = function () {
    errorCb();
  };

  window[callbackName] = function (data) {
    delete window[callbackName];
    document.body.removeChild(script);
    successCb(data);
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy50cyJdLCJuYW1lcyI6WyJmZXRjaEpzb24iLCJ1cmwiLCJzdWNjZXNzQ2IiLCJlcnJvckNiIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJvcGVuIiwic2VuZCIsImZldGNoSlNPTlAiLCJjYWxsYmFja05hbWUiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJpbmRleE9mIiwiYm9keSIsImFwcGVuZENoaWxkIiwib25lcnJvciIsIndpbmRvdyIsInJlbW92ZUNoaWxkIiwiZGVmYXVsdENvbG9ycyIsInJlU2l6ZSIsIl9zdHJpbmdBc2NpaVBSTkciLCJ2YWx1ZSIsIm0iLCJzb3VyY2UiLCJBcnJheSIsImZyb20iLCJjaGFyQ29kZXMiLCJtYXAiLCJsZXR0ZXIiLCJjaGFyQ29kZUF0IiwibGVuIiwibGVuZ3RoIiwiYSIsImMiLCJyZWR1Y2UiLCJjdXJyZW50IiwibmV4dCIsImkiLCJnZXRSYW5kb21Db2xvciIsImNvbG9ycyIsImNvbG9ySW5kZXgiLCJwYXJzZVNpemUiLCJzaXplIiwiZml4ZWRTaXplIiwicmVnTWF0Y2hSZXN1bHQiLCJleGVjIiwidW5pdCIsInJlc3VsdCIsIk51bWJlciIsInN0ciIsImRlZmF1bHRJbml0aWFscyIsIm5hbWUiLCJtYXhJbml0aWFscyIsInNwbGl0IiwicGFydCIsInN1YnN0cmluZyIsInRvVXBwZXJDYXNlIiwiZmlsdGVyIiwidiIsInNsaWNlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLFNBQVNBLFNBQVQsQ0FDTEMsR0FESyxFQUVMQyxTQUZLLEVBR0xDLE9BSEssRUFJTDtBQUNBLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxjQUFKLEVBQWhCOztB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REksQ0FDRSxJQURGLEVBRUoxQixHQUZJLENBRUEsVUFBQzJCLElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUNDLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCQyxXQUFyQixFQUFWO0FBQUEsR0FGQSxFQUdKQyxNQUhJLENBR0csVUFBQ0MsQ0FBRDtBQUFBLFdBQU8sQ0FBQyxDQUFDQSxDQUFUO0FBQUEsR0FISCxFQUlKQyxLQUpJLENBSUUsQ0FKRixFQUlLUCxXQUpMLEVBS0pRLElBTEksQ0FLQyxFQUxELENBQVA7QUFNRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmZXRjaEpzb24oXG4gIHVybDogc3RyaW5nLFxuICBzdWNjZXNzQ2I6IChkYXRhOiBhbnkpID0+IGFueSxcbiAgZXJyb3JDYjogKHN0YXR1czogYW55KSA9PiBhbnlcbikge1xuICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmZXRjaCBqc29uOicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICBzdWNjZXNzQ2IoZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmZXRjaCBqc29uKGVycm9yKTonLCByZXF1ZXN0LnN0YXR1cylcbiAgICAgICAgZXJyb3JDYihyZXF1ZXN0LnN0YXR1cylcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpXG4gIHJlcXVlc3Quc2VuZCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEpTT05QKHVybDogc3RyaW5nLCBzdWNjZXNzQ2I6IChkYXRhOiBhbnkpID0+IGFueSwgZXJyb3JDYjogKCkgPT4gYW55KSB7XG4gIGNvbnN0IGNhbGxiYWNrTmFtZSA9ICdqc29ucF9jYl8nICsgTWF0aC5yb3VuZCgxMDAwMDAgKiBNYXRoLnJhbmRvbSgpKVxuXG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gIHNjcmlwdC5zcmMgPSB1cmwgKyAodXJsLmluZGV4T2YoJz8nKSA+PSAwID8gJyYnIDogJz8nKSArICdjYWxsYmFjaz0nICsgY2FsbGJhY2tOYW1lXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXG4gIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgIGVycm9yQ2IoKVxuICB9XG4gIDsod2luZG93IGFzIGFueSlbY2FsbGJhY2tOYW1lXSA9IChkYXRhOiBhbnkpID0+IHtcbiAgICBkZWxldGUgKHdpbmRvdyBhcyBhbnkpW2NhbGxiYWNrTmFtZV1cbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcmlwdClcbiAgICBzdWNjZXNzQ2IoZGF0YSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbG9ycyA9IFsnI2Q3M2QzMicsICcjN2UzNzk0JywgJyM0Mjg1ZjQnLCAnIzY3YWUzZicsICcjZDYxYTdmJywgJyNmZjQwODAnXVxuXG4vLyBodHRwczovL3JlZ2V4MTAxLmNvbS9yL1lFc1BFUi8xXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbGVuZ3RoXG5jb25zdCByZVNpemUgPSAvXihbLStdPyg/OlxcZCsoPzpcXC5cXGQrKT98XFwuXFxkKykpKFthLXpdezIsNH18JSk/JC9cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGluZWFyX2NvbmdydWVudGlhbF9nZW5lcmF0b3JcbmZ1bmN0aW9uIF9zdHJpbmdBc2NpaVBSTkcodmFsdWU6IGFueSwgbTogYW55KSB7XG4gIC8vIFhuKzEgPSAoYSAqIFhuICsgYykgJSBtXG4gIC8vIDAgPCBhIDwgbVxuICAvLyAwIDw9IGMgPCBtXG4gIC8vIDAgPD0gWDAgPCBtXG5cbiAgLy8gY29uc3QgY2hhckNvZGVzID0gWzEsIDIsIDMsIDRdIC8vIFsuLi52YWx1ZV0ubWFwKGxldHRlciA9PiBsZXR0ZXIuY2hhckNvZGVBdCgwKSlcbiAgLy8gY29uc3Qgc291cmNlID0gWy4uLnZhbHVlXVxuICBjb25zdCBzb3VyY2U6IHN0cmluZ1tdID0gQXJyYXkuZnJvbSh2YWx1ZSlcbiAgY29uc3QgY2hhckNvZGVzID0gc291cmNlLm1hcCgobGV0dGVyKSA9PiBsZXR0ZXIuY2hhckNvZGVBdCgwKSlcbiAgY29uc3QgbGVuID0gY2hhckNvZGVzLmxlbmd0aFxuXG4gIGNvbnN0IGEgPSAobGVuICUgKG0gLSAxKSkgKyAxXG4gIGNvbnN0IGMgPSBjaGFyQ29kZXMucmVkdWNlKChjdXJyZW50LCBuZXh0KSA9PiBjdXJyZW50ICsgbmV4dCkgJSBtXG5cbiAgbGV0IHJhbmRvbSA9IGNoYXJDb2Rlc1swXSAlIG1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHJhbmRvbSA9IChhICogcmFuZG9tICsgYykgJSBtXG4gIH1cblxuICByZXR1cm4gcmFuZG9tXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21Db2xvcih2YWx1ZTogYW55LCBjb2xvcnMgPSBkZWZhdWx0Q29sb3JzKSB7XG4gIC8vIGlmIG5vIHZhbHVlIGlzIHBhc3NlZCwgYWx3YXlzIHJldHVybiB0cmFuc3BhcmVudCBjb2xvciBvdGhlcndpc2VcbiAgLy8gYSByZXJlbmRlciB3b3VsZCBzaG93IGEgbmV3IGNvbG9yIHdoaWNoIHdvdWxkIHdpbGxcbiAgLy8gZ2l2ZSBzdHJhbmdlIGVmZmVjdHMgd2hlbiBhbiBpbnRlcmZhY2UgaXMgbG9hZGluZ1xuICAvLyBhbmQgZ2V0cyByZXJlbmRlcmVkIGEgZmV3IGNvbnNlcXVlbnQgdGltZXNcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiAndHJhbnNwYXJlbnQnXG4gIH1cblxuICAvLyB2YWx1ZSBiYXNlZCByYW5kb20gY29sb3IgaW5kZXhcbiAgLy8gdGhlIHJlYXNvbiB3ZSBkb24ndCBqdXN0IHVzZSBhIHJhbmRvbSBudW1iZXIgaXMgdG8gbWFrZSBzdXJlIHRoYXRcbiAgLy8gYSBjZXJ0YWluIHZhbHVlIHdpbGwgYWx3YXlzIGdldCB0aGUgc2FtZSBjb2xvciBhc3NpZ25lZCBnaXZlblxuICAvLyBhIGZpeGVkIHNldCBvZiBjb2xvcnNcbiAgY29uc3QgY29sb3JJbmRleCA9IF9zdHJpbmdBc2NpaVBSTkcodmFsdWUsIGNvbG9ycy5sZW5ndGgpXG4gIHJldHVybiBjb2xvcnNbY29sb3JJbmRleF1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUGFyc2VTaXplUmVzdWx0IHtcbiAgdmFsdWU6IG51bWJlciAvLyB7NDB9XG4gIHN0cjogc3RyaW5nIC8vIFwiNDBweFwiXG4gIHVuaXQ6IHN0cmluZyAvLyBcInB4XCJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2l6ZShzaXplOiBhbnkpIHtcbiAgY29uc3QgZml4ZWRTaXplID0gJycgKyBzaXplXG5cbiAgY29uc3QgcmVnTWF0Y2hSZXN1bHQ6IGFueSB8IG51bGwgPSByZVNpemUuZXhlYyhmaXhlZFNpemUpXG4gIGNvbnN0IFssIHZhbHVlID0gMCwgdW5pdCA9ICdweCddID0gcmVnTWF0Y2hSZXN1bHRcblxuICBjb25zdCByZXN1bHQ6IElQYXJzZVNpemVSZXN1bHQgPSB7XG4gICAgdmFsdWU6IE51bWJlcih2YWx1ZSBhcyBhbnkpLFxuICAgIHN0cjogYCR7dmFsdWV9JHt1bml0fWAsIC8vIFwiNDBweFwiXG4gICAgdW5pdFxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRJbml0aWFscyhuYW1lOiBzdHJpbmcsIHsgbWF4SW5pdGlhbHMgfTogYW55KSB7XG4gIHJldHVybiBuYW1lXG4gICAgLnNwbGl0KC9cXHMvKVxuICAgIC5tYXAoKHBhcnQpID0+IHBhcnQuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkpXG4gICAgLmZpbHRlcigodikgPT4gISF2KVxuICAgIC5zbGljZSgwLCBtYXhJbml0aWFscylcbiAgICAuam9pbignJylcbn1cbiJdfQ==