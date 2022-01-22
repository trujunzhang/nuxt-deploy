import * as functions from "firebase-functions";
import { IFBRestaurant } from 'ieattatypes/types/index'
import { getAddress } from './google_geocoding'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


exports.onRestaurantCreated = functions.firestore.document('restaurants/{restauranId}')
    .onCreate((snapshot, context) => {

        // Grab the current value of what was written to the Realtime Database.
        const original = snapshot.data() as IFBRestaurant;
        console.log('restaurants:onCreate, original=', original);
        const { latitude, longitude } = original 
        getAddress(latitude, longitude);

});

