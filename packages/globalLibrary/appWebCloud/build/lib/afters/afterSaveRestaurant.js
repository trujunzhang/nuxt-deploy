"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseAfter_1 = require("./baseAfter");
const types_1 = require("@app/types");
function checkEmptyLocation(location) {
    const { latitude: lat, longitude: lng } = location;
    return (types_1.StatusConstants.emptyLocation.latitude === lat &&
        types_1.StatusConstants.emptyLocation.longitude === lng);
}
class AfterSaveRestaurant extends baseAfter_1.BaseAfter {
    async handler(request) {
        const restaurant = request.object;
        const restaurantId = restaurant.id;
        const object = await new Parse.Query('Restaurant').get(restaurantId);
        if (!!object.get('address')) {
            console.log('(3.4) after query restaurant, @Exist[address]:', object.get('address'));
            return;
        }
        const location = object.get('geoLocation');
        const { latitude: lat, longitude: lng } = location;
        if (checkEmptyLocation(location)) {
            console.log('(3.5) after query restaurant, @Empty[location]:', object.get('geoLocation'));
            return;
        }
        const params = {
            lat,
            lng
        };
        const result = await Parse.Cloud.run('getAddressFromLocation', params);
        object.set('address', result.address);
        object.set('street_number', result.street_number);
        object.set('route', result.route);
        object.set('locality', result.locality);
        object.set('sublocality', result.sublocality);
        object.set('country', result.country);
        object.set('postal_code', result.postal_code);
        object.set('administrative_area', result.administrative_area);
        return object.save();
    }
}
exports.AfterSaveRestaurant = AfterSaveRestaurant;
