"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseAfter {
    constructor(parseClass) {
        // this.request = request;
        // this.response = response;
        this.parseClass = parseClass;
    }
    getParseClass() {
        return this.parseClass;
    }
    // tslint:disable-next-line:variable-name
    handler(_request) { }
}
exports.BaseAfter = BaseAfter;
