"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topHeaderType = exports.listInUser = exports.rightIconType = exports.pagesAction = exports.pagesRefresh = void 0;
// ===========================================================
// ===========================================================
//  *** Pages ***
// ===========================================================
// ===========================================================
var pagesRefresh = {
  PAGES_REFRESH_NONE: 'PAGES_REFRESH_NONE',
  PAGES_REFRESH_EDIT_MODEL: 'PAGES_REFRESH_EDIT_MODEL',
  PAGES_REFRESH_FOR_EVENT: 'PAGES_REFRESH_FOR_EVENT',
  PAGES_REFRESH_FOR_RECIPE: 'PAGES_REFRESH_FOR_RECIPE',
  PAGES_REFRESH_FOR_REVIEW: 'PAGES_REFRESH_FOR_REVIEW'
};
exports.pagesRefresh = pagesRefresh;
var pagesAction = {
  PAGES_REFRESH_NOTIFY: 'PAGES_REFRESH_NOTIFY'
}; // ===========================================================
// ===========================================================
//  *** Right Icon Types***
// ===========================================================
// ===========================================================

exports.pagesAction = pagesAction;
var rightIconType = {
  RIGHT_ICON_NONE: 'RIGHT_ICON_NONE',
  RIGHT_ICON_CHECKED: 'RIGHT_ICON_CHECKED',
  RIGHT_ICON_ADD: 'RIGHT_ICON_ADD',
  RIGHT_ICON_DETAILED: 'RIGHT_ICON_DETAILED'
}; // ===========================================================
// ===========================================================
//  *** List in Users***
// ===========================================================
// ===========================================================

exports.rightIconType = rightIconType;
var listInUser = {
  LIST_IN_USER_FOR_EVENTS: 'LIST_IN_USER_FOR_EVENTS',
  LIST_IN_USER_FOR_RECIPES: 'LIST_IN_USER_FOR_RECIPES',
  LIST_IN_USER_FOR_REVIEWS: 'LIST_IN_USER_FOR_REVIEWS'
};
exports.listInUser = listInUser;
var topHeaderType = {
  TOOLBAR_NORMAL: 'TOOLBAR_NORMAL',
  TOOLBAR_HIDDEN: 'TOOLBAR_HIDDEN',
  TOOLBAR_SEARCH_POSTS: 'TOOLBAR_SEARCH_POSTS',
  TOOLBAR_POSTS_LIST: 'TOOLBAR_POSTS_LIST'
};
exports.topHeaderType = topHeaderType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9tb2JpbGUudHMiXSwibmFtZXMiOlsicGFnZXNSZWZyZXNoIiwiUEFHRVNfUkVGUkVTSF9OT05FIiwiUEFHRVNfUkVGUkVTSF9FRElUX01PREVMIiwiUEFHRVNfUkVGUkVTSF9GT1JfRVZFTlQiLCJQQUdFU19SRUZSRVNIX0ZPUl9SRUNJUEUiLCJQQUdFU19SRUZSRVNIX0ZPUl9SRVZJRVciLCJwYWdlc0FjdGlvbiIsIlBBR0VTX1JFRlJFU0hfTk9USUZZIiwicmlnaHRJY29uVHlwZSIsIlJJR0hUX0lDT05fTk9ORSIsIlJJR0hUX0lDT05fQ0hFQ0tFRCIsIlJJR0hUX0lDT05fQUREIiwiUklHSFRfSUNPTl9ERVRBSUxFRCIsImxpc3RJblVzZXIiLCJMSVNUX0lOX1VTRVJfRk9SX0VWRU5UUyIsIkxJU1RfSU5fVVNFUl9GT1JfUkVDSVBFUyIsIkxJU1RfSU5fVVNFUl9GT1JfUkVWSUVXUyIsInRvcEhlYWRlclR5cGUiLCJUT09MQkFSX05PUk1BTCIsIlRPT0xCQVJfSElEREVOIiwiVE9PTEJBUl9TRUFSQ0hfUE9TVFMiLCJUT09MQkFSX1BPU1RTX0xJU1QiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLEVBQUFBLGtCQUFrQixFQUFFLG9CQURNO0FBRTFCQyxFQUFBQSx3QkFBd0IsRUFBRSwwQkFGQTtBQUcxQkMsRUFBQUEsdUJBQXVCLEVBQUUseUJBSEM7QUFJMUJDLEVBQUFBLHdCQUF3QixFQUFFLDBCQUpBO0FBSzFCQyxFQUFBQSx3QkFBd0IsRUFBRTtBQUxBLENBQXJCOztBQVFBLElBQU1DLFdBQVcsR0FBRztBQUN6QkMsRUFBQUEsb0JBQW9CLEVBQUU7QUFERyxDQUFwQixDLENBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRU8sSUFBTUMsYUFBYSxHQUFHO0FBQzNCQyxFQUFBQSxlQUFlLEVBQUUsaUJBRFU7QUFFM0JDLEVBQUFBLGtCQUFrQixFQUFFLG9CQUZPO0FBRzNCQyxFQUFBQSxjQUFjLEVBQUUsZ0JBSFc7QUFJM0JDLEVBQUFBLG1CQUFtQixFQUFFO0FBSk0sQ0FBdEIsQyxDQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVPLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsRUFBQUEsdUJBQXVCLEVBQUUseUJBREQ7QUFFeEJDLEVBQUFBLHdCQUF3QixFQUFFLDBCQUZGO0FBR3hCQyxFQUFBQSx3QkFBd0IsRUFBRTtBQUhGLENBQW5COztBQU1BLElBQU1DLGFBQWEsR0FBRztBQUMzQkMsRUFBQUEsY0FBYyxFQUFFLGdCQURXO0FBRTNCQyxFQUFBQSxjQUFjLEVBQUUsZ0JBRlc7QUFHM0JDLEVBQUFBLG9CQUFvQixFQUFFLHNCQUhLO0FBSTNCQyxFQUFBQSxrQkFBa0IsRUFBRTtBQUpPLENBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgKioqIFBhZ2VzICoqKlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBwYWdlc1JlZnJlc2ggPSB7XG4gIFBBR0VTX1JFRlJFU0hfTk9ORTogJ1BBR0VTX1JFRlJFU0hfTk9ORScsXG4gIFBBR0VTX1JFRlJFU0hfRURJVF9NT0RFTDogJ1BBR0VTX1JFRlJFU0hfRURJVF9NT0RFTCcsXG4gIFBBR0VTX1JFRlJFU0hfRk9SX0VWRU5UOiAnUEFHRVNfUkVGUkVTSF9GT1JfRVZFTlQnLFxuICBQQUdFU19SRUZSRVNIX0ZPUl9SRUNJUEU6ICdQQUdFU19SRUZSRVNIX0ZPUl9SRUNJUEUnLFxuICBQQUdFU19SRUZSRVNIX0ZPUl9SRVZJRVc6ICdQQUdFU19SRUZSRVNIX0ZPUl9SRVZJRVcnXG59XG5cbmV4cG9ydCBjb25zdCBwYWdlc0FjdGlvbiA9IHtcbiAgUEFHRVNfUkVGUkVTSF9OT1RJRlk6ICdQQUdFU19SRUZSRVNIX05PVElGWSdcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgKioqIFJpZ2h0IEljb24gVHlwZXMqKipcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY29uc3QgcmlnaHRJY29uVHlwZSA9IHtcbiAgUklHSFRfSUNPTl9OT05FOiAnUklHSFRfSUNPTl9OT05FJyxcbiAgUklHSFRfSUNPTl9DSEVDS0VEOiAnUklHSFRfSUNPTl9DSEVDS0VEJyxcbiAgUklHSFRfSUNPTl9BREQ6ICdSSUdIVF9JQ09OX0FERCcsXG4gIFJJR0hUX0lDT05fREVUQUlMRUQ6ICdSSUdIVF9JQ09OX0RFVEFJTEVEJ1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICAqKiogTGlzdCBpbiBVc2VycyoqKlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBsaXN0SW5Vc2VyID0ge1xuICBMSVNUX0lOX1VTRVJfRk9SX0VWRU5UUzogJ0xJU1RfSU5fVVNFUl9GT1JfRVZFTlRTJyxcbiAgTElTVF9JTl9VU0VSX0ZPUl9SRUNJUEVTOiAnTElTVF9JTl9VU0VSX0ZPUl9SRUNJUEVTJyxcbiAgTElTVF9JTl9VU0VSX0ZPUl9SRVZJRVdTOiAnTElTVF9JTl9VU0VSX0ZPUl9SRVZJRVdTJ1xufVxuXG5leHBvcnQgY29uc3QgdG9wSGVhZGVyVHlwZSA9IHtcbiAgVE9PTEJBUl9OT1JNQUw6ICdUT09MQkFSX05PUk1BTCcsXG4gIFRPT0xCQVJfSElEREVOOiAnVE9PTEJBUl9ISURERU4nLFxuICBUT09MQkFSX1NFQVJDSF9QT1NUUzogJ1RPT0xCQVJfU0VBUkNIX1BPU1RTJyxcbiAgVE9PTEJBUl9QT1NUU19MSVNUOiAnVE9PTEJBUl9QT1NUU19MSVNUJ1xufVxuIl19