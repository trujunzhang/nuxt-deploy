"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startI18n = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _i18nextBrowserLanguagedetector = _interopRequireDefault(require("i18next-browser-languagedetector"));

/**
 * Initialize a i18next instance.
 * @function startI18n
 * @param {object} files - Translation files.
 * @param {string} lang - Active language.
 */
var startI18n = function startI18n(files, lang) {
  return _i18next["default"].use(_i18nextBrowserLanguagedetector["default"]).init({
    lng: lang,
    // active language http://i18next.com/translate/
    fallbackLng: 'pt',
    resources: files,
    ns: ['common'],
    defaultNS: 'common',
    debug: false
  });
};

exports.startI18n = startI18n;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pMTgvc3RhcnRJMThuLnRzIl0sIm5hbWVzIjpbInN0YXJ0STE4biIsImZpbGVzIiwibGFuZyIsImkxOG4iLCJ1c2UiLCJMYW5ndWFnZURldGVjdG9yIiwiaW5pdCIsImxuZyIsImZhbGxiYWNrTG5nIiwicmVzb3VyY2VzIiwibnMiLCJkZWZhdWx0TlMiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7OztBQU1PLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBYUMsSUFBYjtBQUFBLFNBQ3ZCQyxvQkFBS0MsR0FBTCxDQUFTQywwQ0FBVCxFQUEyQkMsSUFBM0IsQ0FBZ0M7QUFDOUJDLElBQUFBLEdBQUcsRUFBRUwsSUFEeUI7QUFDbkI7QUFDWE0sSUFBQUEsV0FBVyxFQUFFLElBRmlCO0FBRzlCQyxJQUFBQSxTQUFTLEVBQUVSLEtBSG1CO0FBSTlCUyxJQUFBQSxFQUFFLEVBQUUsQ0FBQyxRQUFELENBSjBCO0FBSzlCQyxJQUFBQSxTQUFTLEVBQUUsUUFMbUI7QUFNOUJDLElBQUFBLEtBQUssRUFBRTtBQU51QixHQUFoQyxDQUR1QjtBQUFBLENBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCdcbmltcG9ydCBMYW5ndWFnZURldGVjdG9yIGZyb20gJ2kxOG5leHQtYnJvd3Nlci1sYW5ndWFnZWRldGVjdG9yJ1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBpMThuZXh0IGluc3RhbmNlLlxuICogQGZ1bmN0aW9uIHN0YXJ0STE4blxuICogQHBhcmFtIHtvYmplY3R9IGZpbGVzIC0gVHJhbnNsYXRpb24gZmlsZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFuZyAtIEFjdGl2ZSBsYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHN0YXJ0STE4biA9IChmaWxlczogYW55LCBsYW5nOiBzdHJpbmcpID0+XG4gIGkxOG4udXNlKExhbmd1YWdlRGV0ZWN0b3IpLmluaXQoe1xuICAgIGxuZzogbGFuZywgLy8gYWN0aXZlIGxhbmd1YWdlIGh0dHA6Ly9pMThuZXh0LmNvbS90cmFuc2xhdGUvXG4gICAgZmFsbGJhY2tMbmc6ICdwdCcsXG4gICAgcmVzb3VyY2VzOiBmaWxlcyxcbiAgICBuczogWydjb21tb24nXSxcbiAgICBkZWZhdWx0TlM6ICdjb21tb24nLFxuICAgIGRlYnVnOiBmYWxzZVxuICB9KVxuIl19