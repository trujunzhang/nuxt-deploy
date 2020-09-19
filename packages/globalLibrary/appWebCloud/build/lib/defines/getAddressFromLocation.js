"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseDefine_1 = require("./baseDefine");
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const googleMapsClient = require('@google/maps').createClient({
    key: GOOGLE_API_KEY,
    Promise: Promise
});
class GetAddressFromLocationUtils {
    static parse_address(response) {
        const results = response.results;
        const final = {
            // length(8)
            address: '',
            street_number: '',
            route: '',
            locality: '',
            sublocality: '',
            country: '',
            postal_code: '',
            administrative_area: ''
        };
        if (results.length === 0) {
            return final;
        }
        const item = results[0];
        const value = item.formatted_address;
        const component = item.address_components;
        // step1: get the whole address.
        final.address = value;
        // step2: get the detailed info.
        for (let i = 0; i < component.length; i++) {
            const data = component[i];
            const dataTypes = data.types.join('');
            if (dataTypes.indexOf('street_number') !== -1) {
                final.street_number = data.long_name;
            }
            else if (dataTypes.indexOf('route') !== -1) {
                final.route = data.long_name;
            }
            else if (dataTypes.indexOf('sublocality') !== -1) {
                final.sublocality = data.long_name;
            }
            else if (dataTypes.indexOf('locality') !== -1) {
                final.locality = data.long_name;
            }
            else if (dataTypes.indexOf('country') !== -1) {
                final.country = data.short_name;
            }
            else if (dataTypes.indexOf('postal_code') !== -1) {
                final.postal_code = data.short_name;
            }
            else if (dataTypes.indexOf('administrative_area_level_1') !== -1) {
                final.administrative_area = data.short_name;
            }
        }
        return final;
    }
}
exports.GetAddressFromLocationUtils = GetAddressFromLocationUtils;
class GetAddressFromLocation extends baseDefine_1.BaseDefine {
    async handler(request) {
        const params = request.params;
        const { lat, lng } = params;
        function expectOperaHouse(resp) {
            const nextGoogleReverseModel = GetAddressFromLocationUtils.parse_address(resp.json);
            return nextGoogleReverseModel;
        }
        const result = await googleMapsClient
            .reverseGeocode({
            latlng: [lat, lng]
        })
            .asPromise()
            .then(expectOperaHouse);
        // console.log(' Fetched google address: ', result)
        return result;
    }
}
exports.GetAddressFromLocation = GetAddressFromLocation;
