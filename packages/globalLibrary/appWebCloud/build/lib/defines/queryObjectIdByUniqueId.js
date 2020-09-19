"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseDefine_1 = require("./baseDefine");
class QueryObjectIdByUniqueIdUtils {
    static generateGetObjectIdByUniqueIdQuery(request) {
        const modelType = request.params.modelType;
        const forObjectUniqueId = request.params.forObjectUniqueId;
        let currentQuery = null;
        switch (modelType) {
            case 'restaurant':
                currentQuery = new Parse.Query('Restaurant').equalTo('uniqueId', forObjectUniqueId);
                break;
            case 'recipe':
                currentQuery = new Parse.Query('Recipe').equalTo('uniqueId', forObjectUniqueId);
                break;
            case 'user':
                currentQuery = new Parse.Query('User').equalTo('uniqueId', forObjectUniqueId);
                break;
        }
        return currentQuery.first();
    }
    // tslint:disable-next-line:variable-name
    static generateGetObjectIdByUniqueIdResult(_request, object) {
        if (!!object) {
            return object.id;
        }
        return '';
    }
}
class QueryObjectIdByUniqueId extends baseDefine_1.BaseDefine {
    async handler(request) {
        return await QueryObjectIdByUniqueIdUtils.generateGetObjectIdByUniqueIdQuery(request).then((object) => {
            return QueryObjectIdByUniqueIdUtils.generateGetObjectIdByUniqueIdResult(request, object);
        });
    }
}
exports.QueryObjectIdByUniqueId = QueryObjectIdByUniqueId;
