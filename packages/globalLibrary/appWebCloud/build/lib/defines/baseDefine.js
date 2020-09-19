"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseDefine {
    constructor(functionName) {
        // this.request = request;
        // this.response = response;
        this.functionName = functionName;
    }
    getFunctionName() {
        return this.functionName;
    }
    // tslint:disable-next-line:variable-name
    handler(_request) { }
}
exports.BaseDefine = BaseDefine;
