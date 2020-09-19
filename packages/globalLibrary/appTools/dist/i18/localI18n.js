"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocalI18n = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var getLocalI18n = function getLocalI18n(resources, languageDetectorCB) {
  var fallbackLng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';
  var callback = arguments.length > 3 ? arguments[3] : undefined;
  // creating a language detection plugin using expo
  // http://i18next.com/docs/ownplugin/#languagedetector
  var languageDetector = {
    type: 'languageDetector',
    async: true,
    // flags below detection to be async
    detect: languageDetectorCB,
    init: function init() {},
    cacheUserLanguage: function cacheUserLanguage() {}
  }; // const options: i18n.InitOptions = {
  //   fallbackLng,
  //   resources,
  //   // have a common namespace used around the full app
  //   ns: ['common'],
  //   defaultNS: 'common',
  //   debug: false,
  //   // cache: {
  //   //   enabled: true
  //   // },
  //   interpolation: {
  //     escapeValue: false // not needed for react as it does escape per default to prevent xss!
  //   }
  // }
  // // const cb: i18n.Callback = (error: any, t: i18n.TFunction) => {}
  // i18n
  //   .use(languageDetector)
  //   .use(reactI18nextModule)
  //   .init(options, callback)

  return _i18next["default"];
};

exports.getLocalI18n = getLocalI18n;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pMTgvbG9jYWxJMThuLnRzIl0sIm5hbWVzIjpbImdldExvY2FsSTE4biIsInJlc291cmNlcyIsImxhbmd1YWdlRGV0ZWN0b3JDQiIsImZhbGxiYWNrTG5nIiwiY2FsbGJhY2siLCJsYW5ndWFnZURldGVjdG9yIiwidHlwZSIsImFzeW5jIiwiZGV0ZWN0IiwiaW5pdCIsImNhY2hlVXNlckxhbmd1YWdlIiwiaTE4biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBT08sSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FDMUJDLFNBRDBCLEVBRTFCQyxrQkFGMEIsRUFLdkI7QUFBQSxNQUZIQyxXQUVHLHVFQUZtQixJQUVuQjtBQUFBLE1BREhDLFFBQ0c7QUFDSDtBQUNBO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUc7QUFDdkJDLElBQUFBLElBQUksRUFBRSxrQkFEaUI7QUFFdkJDLElBQUFBLEtBQUssRUFBRSxJQUZnQjtBQUVWO0FBQ2JDLElBQUFBLE1BQU0sRUFBRU4sa0JBSGU7QUFJdkJPLElBQUFBLElBQUksRUFBRSxnQkFBTSxDQUFFLENBSlM7QUFLdkJDLElBQUFBLGlCQUFpQixFQUFFLDZCQUFNLENBQUU7QUFMSixHQUF6QixDQUhHLENBV0g7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBT0MsbUJBQVA7QUFDRCxDQTNDTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpMThuIGZyb20gJ2kxOG5leHQnXG5cbi8vIGltcG9ydCB7IHJlYWN0STE4bmV4dE1vZHVsZSB9IGZyb20gJy4vaTE4J1xuXG5leHBvcnQgdHlwZSBMYW5ndWFnZURldGVjdG9yQ0JGdW5jID0gKGNhbGxiYWNrOiAoKSA9PiBhbnkpID0+IGFueVxuaW1wb3J0IHsgTG9jYWxJMThuQ2FsbGJhY2sgfSBmcm9tICcuL2kxOGJhc2UnXG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhbEkxOG4gPSAoXG4gIHJlc291cmNlczogYW55LFxuICBsYW5ndWFnZURldGVjdG9yQ0I6IExhbmd1YWdlRGV0ZWN0b3JDQkZ1bmMsXG4gIGZhbGxiYWNrTG5nOiBzdHJpbmcgPSAnZW4nLFxuICBjYWxsYmFjaz86IExvY2FsSTE4bkNhbGxiYWNrXG4pID0+IHtcbiAgLy8gY3JlYXRpbmcgYSBsYW5ndWFnZSBkZXRlY3Rpb24gcGx1Z2luIHVzaW5nIGV4cG9cbiAgLy8gaHR0cDovL2kxOG5leHQuY29tL2RvY3Mvb3ducGx1Z2luLyNsYW5ndWFnZWRldGVjdG9yXG4gIGNvbnN0IGxhbmd1YWdlRGV0ZWN0b3IgPSB7XG4gICAgdHlwZTogJ2xhbmd1YWdlRGV0ZWN0b3InLFxuICAgIGFzeW5jOiB0cnVlLCAvLyBmbGFncyBiZWxvdyBkZXRlY3Rpb24gdG8gYmUgYXN5bmNcbiAgICBkZXRlY3Q6IGxhbmd1YWdlRGV0ZWN0b3JDQixcbiAgICBpbml0OiAoKSA9PiB7fSxcbiAgICBjYWNoZVVzZXJMYW5ndWFnZTogKCkgPT4ge31cbiAgfVxuXG4gIC8vIGNvbnN0IG9wdGlvbnM6IGkxOG4uSW5pdE9wdGlvbnMgPSB7XG4gIC8vICAgZmFsbGJhY2tMbmcsXG4gIC8vICAgcmVzb3VyY2VzLFxuXG4gIC8vICAgLy8gaGF2ZSBhIGNvbW1vbiBuYW1lc3BhY2UgdXNlZCBhcm91bmQgdGhlIGZ1bGwgYXBwXG4gIC8vICAgbnM6IFsnY29tbW9uJ10sXG4gIC8vICAgZGVmYXVsdE5TOiAnY29tbW9uJyxcblxuICAvLyAgIGRlYnVnOiBmYWxzZSxcblxuICAvLyAgIC8vIGNhY2hlOiB7XG4gIC8vICAgLy8gICBlbmFibGVkOiB0cnVlXG4gIC8vICAgLy8gfSxcblxuICAvLyAgIGludGVycG9sYXRpb246IHtcbiAgLy8gICAgIGVzY2FwZVZhbHVlOiBmYWxzZSAvLyBub3QgbmVlZGVkIGZvciByZWFjdCBhcyBpdCBkb2VzIGVzY2FwZSBwZXIgZGVmYXVsdCB0byBwcmV2ZW50IHhzcyFcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyAvLyBjb25zdCBjYjogaTE4bi5DYWxsYmFjayA9IChlcnJvcjogYW55LCB0OiBpMThuLlRGdW5jdGlvbikgPT4ge31cblxuICAvLyBpMThuXG4gIC8vICAgLnVzZShsYW5ndWFnZURldGVjdG9yKVxuICAvLyAgIC51c2UocmVhY3RJMThuZXh0TW9kdWxlKVxuICAvLyAgIC5pbml0KG9wdGlvbnMsIGNhbGxiYWNrKVxuXG4gIHJldHVybiBpMThuXG59XG4iXX0=