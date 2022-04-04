import { Client, Status, LatLngArray } from "@googlemaps/google-maps-services-js";
const axios = require('axios')

const GOOGLE_API_KEY = 'AIzaSyAkRjWt1cG5-3M6sYR_2cMP-jy7qqxNVpE'

/**
 * App console:
 *    https://console.cloud.google.com/google/maps-apis/api-list?project=ieatta-sec
 * 
 * A Practical Approach to Cloud Functions for Firebase: Direct Calls
 * https://medium.com/firebase-developers/a-practical-approach-to-cloud-functions-for-firebase-direct-calls-f38ec7f5981c
 *
 * You must enable Billing on the Google Cloud Project at https://console.cloud.google.com/project/_/billing/enable 
 * Learn more at https://developers.google.com/maps/gmp-get-started
 */
export const getAddressByAxios = (lat: number, lng: number) => {
    const locations = [{ lat, lng }];

    console.log('restaurants:onUpdate, [[[newValue]]]=', JSON.stringify(locations));

    axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + GOOGLE_API_KEY)
        .then(apiResponse => {
            // response.send(apiResponse.data.results[0].formatted_address);
            // console.log('Request google map successfully')
            // console.log(apiResponse.data.results[0].formatted_addres)
            console.log('=======================')
            console.log('Api response: ')
            console.log('=======================')
            console.log(apiResponse)
        })
        .catch(error => {
            console.log('=======================')
            console.log('Error: ')
            console.log('=======================')
            console.log(error);
        });
}

/**
 * https://github.com/googlemaps/google-maps-services-js
 */
const client = new Client({});

export const getAddress = (lat, lng) => {
    const latlng: LatLngArray = [lat, lng];

    console.log('restaurants:onUpdate, [[[newValue]]]=', JSON.stringify(latlng));

    client
        .reverseGeocode({
            params: {
                latlng,
                key: GOOGLE_API_KEY
            },
            timeout: 5000 // milliseconds
        })
        .then(r => {
            if (r.data.status === Status.OK) {
                console.log('=======================')
                console.log('Api response [OK]: ')
                console.log('=======================')
                // console.log('[[[newValue]]]=', r.data.results[0].elevation);
            } else {
                console.log('[[[newValue]]]=', r.data.error_message);
            }
        })
        .catch(e => {
            // console.log('[[[newValue]]]=catch, ', JSON.stringify(e));

            console.log('=======================')
            console.log('Error: ')
            console.log('=======================')
            console.log(e);
        });
}




