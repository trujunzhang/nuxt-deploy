"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDomain = parseDomain;

var _normalize = require("./normalize");

var knownTlds = require("./tld");

var urlParts = /^(https?:\/\/)?([^/]*@)?(.+?)(:\d{2,5})?([/?].*)?$/; // 1 = protocol, 2 = auth, 3 = domain, 4 = port, 5 = path

var dot = /\./g;

function matchTld(domain, options) {
  var tld = null; // for potentially unrecognized tlds, try matching against custom tlds

  if (options.customTlds) {
    // try matching against a built regexp of custom tlds
    tld = domain.match(options.customTlds);
  } // If no custom tlds, check if tld is supported


  if (tld === null) {
    tld = domain.match(options.privateTlds ? knownTlds : knownTlds.icann);

    if (tld === null) {
      return null;
    }
  }

  return tld[0];
}
/**
 * Removes all unnecessary parts of the domain (e.g. protocol, auth, port, path, query)
 * and parses the remaining domain. The returned object contains the properties 'subdomain', 'domain' and 'tld'.
 *
 * Since the top-level domain is handled differently by every country, this function only
 * supports all tlds listed in lib/build/tld.txt.
 *
 * If the given url is not valid or isn't supported by the tld.txt, this function returns null.
 *
 * @param {string} url
 * @param {Object} [options]
 * @param {Array<string>|RegExp} [options.customTlds]
 * @param {boolean} [options.privateTlds]
 * @returns {Object|null}
 */


function parseDomain() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var normalizedUrl = _normalize.Normalize.url(url);

  var tld = null;
  var urlSplit;
  var domain;

  if (normalizedUrl === null) {
    return null;
  }

  var normalizedOptions = _normalize.Normalize.options(options); // urlSplit can't be null because urlParts will always match at the third capture


  urlSplit = normalizedUrl.match(urlParts);
  domain = urlSplit[3]; // domain will now be something like sub.domain.example.com

  tld = matchTld(domain, normalizedOptions);

  if (tld === null) {
    return null;
  } // remove tld and split by dot


  urlSplit = domain.slice(0, -tld.length).split(dot);

  if (tld.charAt(0) === '.') {
    // removes the remaining dot, if present (added to handle localhost)
    tld = tld.slice(1);
  }

  domain = urlSplit.pop();
  var subdomain = urlSplit.join('.');
  return {
    tld: tld,
    domain: domain,
    subdomain: subdomain
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZW5kb3IvcGFyc2UtZG9tYWluL2luZGV4LnRzIl0sIm5hbWVzIjpbImtub3duVGxkcyIsInJlcXVpcmUiLCJ1cmxQYXJ0cyIsImRvdCIsIm1hdGNoVGxkIiwiZG9tYWluIiwib3B0aW9ucyIsInRsZCIsImN1c3RvbVRsZHMiLCJtYXRjaCIsInByaXZhdGVUbGRzIiwiaWNhbm4iLCJwYXJzZURvbWFpbiIsInVybCIsIm5vcm1hbGl6ZWRVcmwiLCJOb3JtYWxpemUiLCJ1cmxTcGxpdCIsIm5vcm1hbGl6ZWRPcHRpb25zIiwic2xpY2UiLCJsZW5ndGgiLCJzcGxpdCIsImNoYXJBdCIsInBvcCIsInN1YmRvbWFpbiIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sU0FBekI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLG9EQUFqQixDLENBQXNFOztBQUN0RSxJQUFNQyxHQUFHLEdBQUcsS0FBWjs7QUFFQSxTQUFTQyxRQUFULENBQWtCQyxNQUFsQixFQUErQkMsT0FBL0IsRUFBNkM7QUFDM0MsTUFBSUMsR0FBRyxHQUFHLElBQVYsQ0FEMkMsQ0FHM0M7O0FBQ0EsTUFBSUQsT0FBTyxDQUFDRSxVQUFaLEVBQXdCO0FBQ3RCO0FBQ0FELElBQUFBLEdBQUcsR0FBR0YsTUFBTSxDQUFDSSxLQUFQLENBQWFILE9BQU8sQ0FBQ0UsVUFBckIsQ0FBTjtBQUNELEdBUDBDLENBUzNDOzs7QUFDQSxNQUFJRCxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNoQkEsSUFBQUEsR0FBRyxHQUFHRixNQUFNLENBQUNJLEtBQVAsQ0FBYUgsT0FBTyxDQUFDSSxXQUFSLEdBQXNCVixTQUF0QixHQUFrQ0EsU0FBUyxDQUFDVyxLQUF6RCxDQUFOOztBQUNBLFFBQUlKLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2hCLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0EsR0FBRyxDQUFDLENBQUQsQ0FBVjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZU8sU0FBU0ssV0FBVCxHQUFnRjtBQUFBLE1BQTNEQyxHQUEyRCx1RUFBN0MsRUFBNkM7QUFBQSxNQUF6Q1AsT0FBeUMsdUVBQTFCLEVBQTBCOztBQUNyRixNQUFNUSxhQUFrQixHQUFHQyxxQkFBVUYsR0FBVixDQUFjQSxHQUFkLENBQTNCOztBQUNBLE1BQUlOLEdBQVEsR0FBRyxJQUFmO0FBQ0EsTUFBSVMsUUFBSjtBQUNBLE1BQUlYLE1BQUo7O0FBRUEsTUFBSVMsYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzFCLFdBQU8sSUFBUDtBQUNEOztBQUVELE1BQU1HLGlCQUFpQixHQUFHRixxQkFBVVQsT0FBVixDQUFrQkEsT0FBbEIsQ0FBMUIsQ0FWcUYsQ0FZckY7OztBQUNBVSxFQUFBQSxRQUFRLEdBQUdGLGFBQWEsQ0FBQ0wsS0FBZCxDQUFvQlAsUUFBcEIsQ0FBWDtBQUNBRyxFQUFBQSxNQUFNLEdBQUdXLFFBQVEsQ0FBQyxDQUFELENBQWpCLENBZHFGLENBY2hFOztBQUVyQlQsRUFBQUEsR0FBRyxHQUFHSCxRQUFRLENBQUNDLE1BQUQsRUFBU1ksaUJBQVQsQ0FBZDs7QUFDQSxNQUFJVixHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNoQixXQUFPLElBQVA7QUFDRCxHQW5Cb0YsQ0FxQnJGOzs7QUFDQVMsRUFBQUEsUUFBUSxHQUFHWCxNQUFNLENBQUNhLEtBQVAsQ0FBYSxDQUFiLEVBQWdCLENBQUNYLEdBQUcsQ0FBQ1ksTUFBckIsRUFBNkJDLEtBQTdCLENBQW1DakIsR0FBbkMsQ0FBWDs7QUFFQSxNQUFJSSxHQUFHLENBQUNjLE1BQUosQ0FBVyxDQUFYLE1BQWtCLEdBQXRCLEVBQTJCO0FBQ3pCO0FBQ0FkLElBQUFBLEdBQUcsR0FBR0EsR0FBRyxDQUFDVyxLQUFKLENBQVUsQ0FBVixDQUFOO0FBQ0Q7O0FBQ0RiLEVBQUFBLE1BQU0sR0FBR1csUUFBUSxDQUFDTSxHQUFULEVBQVQ7QUFDQSxNQUFNQyxTQUFTLEdBQUdQLFFBQVEsQ0FBQ1EsSUFBVCxDQUFjLEdBQWQsQ0FBbEI7QUFFQSxTQUFPO0FBQ0xqQixJQUFBQSxHQUFHLEVBQUhBLEdBREs7QUFFTEYsSUFBQUEsTUFBTSxFQUFOQSxNQUZLO0FBR0xrQixJQUFBQSxTQUFTLEVBQVRBO0FBSEssR0FBUDtBQUtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVBhcnNlRG9tYWluV2l0aE51bGwgfSBmcm9tICcuL2lQYXJzZURvbWFpbidcbmltcG9ydCB7IE5vcm1hbGl6ZSB9IGZyb20gJy4vbm9ybWFsaXplJ1xuXG5jb25zdCBrbm93blRsZHMgPSByZXF1aXJlKCcuL3RsZCcpXG5cbmNvbnN0IHVybFBhcnRzID0gL14oaHR0cHM/OlxcL1xcLyk/KFteL10qQCk/KC4rPykoOlxcZHsyLDV9KT8oWy8/XS4qKT8kLyAvLyAxID0gcHJvdG9jb2wsIDIgPSBhdXRoLCAzID0gZG9tYWluLCA0ID0gcG9ydCwgNSA9IHBhdGhcbmNvbnN0IGRvdCA9IC9cXC4vZ1xuXG5mdW5jdGlvbiBtYXRjaFRsZChkb21haW46IGFueSwgb3B0aW9uczogYW55KSB7XG4gIGxldCB0bGQgPSBudWxsXG5cbiAgLy8gZm9yIHBvdGVudGlhbGx5IHVucmVjb2duaXplZCB0bGRzLCB0cnkgbWF0Y2hpbmcgYWdhaW5zdCBjdXN0b20gdGxkc1xuICBpZiAob3B0aW9ucy5jdXN0b21UbGRzKSB7XG4gICAgLy8gdHJ5IG1hdGNoaW5nIGFnYWluc3QgYSBidWlsdCByZWdleHAgb2YgY3VzdG9tIHRsZHNcbiAgICB0bGQgPSBkb21haW4ubWF0Y2gob3B0aW9ucy5jdXN0b21UbGRzKVxuICB9XG5cbiAgLy8gSWYgbm8gY3VzdG9tIHRsZHMsIGNoZWNrIGlmIHRsZCBpcyBzdXBwb3J0ZWRcbiAgaWYgKHRsZCA9PT0gbnVsbCkge1xuICAgIHRsZCA9IGRvbWFpbi5tYXRjaChvcHRpb25zLnByaXZhdGVUbGRzID8ga25vd25UbGRzIDoga25vd25UbGRzLmljYW5uKVxuICAgIGlmICh0bGQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRsZFswXVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIHVubmVjZXNzYXJ5IHBhcnRzIG9mIHRoZSBkb21haW4gKGUuZy4gcHJvdG9jb2wsIGF1dGgsIHBvcnQsIHBhdGgsIHF1ZXJ5KVxuICogYW5kIHBhcnNlcyB0aGUgcmVtYWluaW5nIGRvbWFpbi4gVGhlIHJldHVybmVkIG9iamVjdCBjb250YWlucyB0aGUgcHJvcGVydGllcyAnc3ViZG9tYWluJywgJ2RvbWFpbicgYW5kICd0bGQnLlxuICpcbiAqIFNpbmNlIHRoZSB0b3AtbGV2ZWwgZG9tYWluIGlzIGhhbmRsZWQgZGlmZmVyZW50bHkgYnkgZXZlcnkgY291bnRyeSwgdGhpcyBmdW5jdGlvbiBvbmx5XG4gKiBzdXBwb3J0cyBhbGwgdGxkcyBsaXN0ZWQgaW4gbGliL2J1aWxkL3RsZC50eHQuXG4gKlxuICogSWYgdGhlIGdpdmVuIHVybCBpcyBub3QgdmFsaWQgb3IgaXNuJ3Qgc3VwcG9ydGVkIGJ5IHRoZSB0bGQudHh0LCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgbnVsbC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZz58UmVnRXhwfSBbb3B0aW9ucy5jdXN0b21UbGRzXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wcml2YXRlVGxkc11cbiAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRG9tYWluKHVybDogc3RyaW5nID0gJycsIG9wdGlvbnM6IGFueSA9IHt9KTogSVBhcnNlRG9tYWluV2l0aE51bGwge1xuICBjb25zdCBub3JtYWxpemVkVXJsOiBhbnkgPSBOb3JtYWxpemUudXJsKHVybClcbiAgbGV0IHRsZDogYW55ID0gbnVsbFxuICBsZXQgdXJsU3BsaXQ6IGFueVxuICBsZXQgZG9tYWluOiBhbnlcblxuICBpZiAobm9ybWFsaXplZFVybCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCBub3JtYWxpemVkT3B0aW9ucyA9IE5vcm1hbGl6ZS5vcHRpb25zKG9wdGlvbnMpXG5cbiAgLy8gdXJsU3BsaXQgY2FuJ3QgYmUgbnVsbCBiZWNhdXNlIHVybFBhcnRzIHdpbGwgYWx3YXlzIG1hdGNoIGF0IHRoZSB0aGlyZCBjYXB0dXJlXG4gIHVybFNwbGl0ID0gbm9ybWFsaXplZFVybC5tYXRjaCh1cmxQYXJ0cylcbiAgZG9tYWluID0gdXJsU3BsaXRbM10gLy8gZG9tYWluIHdpbGwgbm93IGJlIHNvbWV0aGluZyBsaWtlIHN1Yi5kb21haW4uZXhhbXBsZS5jb21cblxuICB0bGQgPSBtYXRjaFRsZChkb21haW4sIG5vcm1hbGl6ZWRPcHRpb25zKVxuICBpZiAodGxkID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIHJlbW92ZSB0bGQgYW5kIHNwbGl0IGJ5IGRvdFxuICB1cmxTcGxpdCA9IGRvbWFpbi5zbGljZSgwLCAtdGxkLmxlbmd0aCkuc3BsaXQoZG90KVxuXG4gIGlmICh0bGQuY2hhckF0KDApID09PSAnLicpIHtcbiAgICAvLyByZW1vdmVzIHRoZSByZW1haW5pbmcgZG90LCBpZiBwcmVzZW50IChhZGRlZCB0byBoYW5kbGUgbG9jYWxob3N0KVxuICAgIHRsZCA9IHRsZC5zbGljZSgxKVxuICB9XG4gIGRvbWFpbiA9IHVybFNwbGl0LnBvcCgpXG4gIGNvbnN0IHN1YmRvbWFpbiA9IHVybFNwbGl0LmpvaW4oJy4nKVxuXG4gIHJldHVybiB7XG4gICAgdGxkLFxuICAgIGRvbWFpbixcbiAgICBzdWJkb21haW5cbiAgfVxufVxuIl19