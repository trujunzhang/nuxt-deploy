import {Client, Status} from "@googlemaps/google-maps-services-js";

// const GOOGLE_API_KEY='AIzaSyAyAc4iPiWoC3Qs6u-XnKCV0e4PnFvUXMU'
const GOOGLE_API_KEY = 'AIzaSyBfacVlNHHb1paQzaILLivGrK5grcVkzyo'

/**
 * https://github.com/googlemaps/google-maps-services-js
 */
const client = new Client({});

export const getAddress = (lat, lng) => {
    const locations = [{lat, lng}];

    console.log('restaurants:onUpdate, [[[newValue]]]=', JSON.stringify(locations));

    client
        .elevation({
            params: {
                locations,
                key: GOOGLE_API_KEY
            },
            timeout: 1000 // milliseconds
        })
        .then(r => {
            if (r.data.status === Status.OK) {
                console.log('[[[newValue]]]=', r.data.results[0].elevation);
            } else {
                console.log('[[[newValue]]]=', r.data.error_message);
            }
        })
        .catch(e => {
            console.log('[[[newValue]]]=catch, ', JSON.stringify(e));
        });
}
