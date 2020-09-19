"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse_app_1 = require("../modules/parse-app");
const baseDefine_1 = require("./baseDefine");
class PhotoListUrlsUtils {
    static generatePhotoListQueries(request) {
        const photoRelations = request.params.photoRelations;
        const promises = photoRelations.map((item) => {
            if (!!item.id) {
                const object = parse_app_1.ParseApp.getInstanceWithoutData(item.photoType, item.id);
                return parse_app_1.ParseApp.getQueryInstance('photo')
                    .equalTo('photoType', item.photoType)
                    .equalTo(item.photoType, object)
                    .limit(1)
                    .find({
                    useMasterKey: true
                });
            }
        });
        for (let i = 0; i < photoRelations.length; i++) {
            const relation = photoRelations[i];
            const object = parse_app_1.ParseApp.getInstanceWithoutData(relation.photoType, relation.id);
            promises.push(parse_app_1.ParseApp.getQueryInstance('photo')
                .equalTo('photoType', relation.photoType)
                .equalTo(relation.photoType, object)
                .limit(1)
                .find({
                useMasterKey: true
            }));
        }
        return promises;
    }
    static generatePhotoListQueriesxxx(request) {
        const photoRelations = request.params.photoRelations;
        const promises = [];
        for (let i = 0; i < photoRelations.length; i++) {
            const relation = photoRelations[i];
            const object = parse_app_1.ParseApp.getInstanceWithoutData(relation.photoType, relation.id);
            promises.push(parse_app_1.ParseApp.getQueryInstance('photo')
                .equalTo('photoType', relation.photoType)
                .equalTo(relation.photoType, object)
                .limit(1)
                .find({
                useMasterKey: true
            }));
        }
        return promises;
    }
    static generatePhotoListResults(request, results) {
        const photoRelations = request.params.photoRelations;
        const returnData = {};
        for (let i = 0; i < photoRelations.length; i++) {
            const relation = photoRelations[i];
            const array = results[i];
            returnData[relation.id] = array.length > 0 ? array[0].get('thumbnailUrl') : '';
        }
        return returnData;
    }
}
class PhotoListUrls extends baseDefine_1.BaseDefine {
    async handler(request) {
        return await Promise.all(PhotoListUrlsUtils.generatePhotoListQueries(request)).then((results) => {
            return PhotoListUrlsUtils.generatePhotoListResults(request, results);
        });
    }
}
exports.PhotoListUrls = PhotoListUrls;
