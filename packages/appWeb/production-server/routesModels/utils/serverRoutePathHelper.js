"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverRoutePathConstants_1 = require("./serverRoutePathConstants");
class ServerRoutePathHelper {
    static getRoutePageName(pageType) {
        const pageName = serverRoutePathConstants_1.routePageMap[pageType];
        return pageName.pathname;
    }
    static getRoutePattern(pageType) {
        const pageName = serverRoutePathConstants_1.routePageMap[pageType];
        return pageName.pattern;
    }
    static checkSamePathname(pageName, fixedPageName) {
        const same = serverRoutePathConstants_1.routePageMap[pageName].pathname === fixedPageName;
        if (same === true) {
            const x = 0;
        }
        return same;
    }
    /**
     *
     * @param pageName - also can be named 'pathname'.
     */
    static getRoutePageType(pageName) {
        const fixedPageName = pageName.replace('/', '');
        const pageType = Object.keys(serverRoutePathConstants_1.routePageMap).find((k) => {
            return ServerRoutePathHelper.checkSamePathname(k, fixedPageName);
        });
        if (pageType === undefined) {
            throw new Error(`Not found page type from pathName! ${pageName}`);
        }
        return pageType;
    }
}
exports.ServerRoutePathHelper = ServerRoutePathHelper;
