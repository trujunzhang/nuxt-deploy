import * as functions from 'firebase-functions';
import {IFBRestaurant, IFBPhoto} from 'ieattatypes'
import {getAddress} from './google_geocoding'
import {db} from "./util/admin";
import {ParseModelPhotos} from "./appModels/Photos";


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.onRestaurantCreated = functions.firestore.document('restaurants/{restauranId}')
    .onCreate((snapshot, context) => {
        // Grab the current value of what was written to the Realtime Database.
        const note = snapshot.data();
        // console.log('restaurants:onCreate, original=', original);
        // console.log('Uppercasing', context.params.pushId, original);
        // const uppercase = original.toUpperCase();

    });

exports.onRestaurantUpdated = functions.firestore.document('restaurants/{restauranId}')
    .onUpdate((change, context) => {
        // console.log('restaurants:onUpdate, change=', change);
        // Grab the current value of what was written to the Realtime Database.
        const newValue = change.after;

        const nextModel: IFBRestaurant = newValue.data() as IFBRestaurant;

        const isNew = nextModel.isNew;
        const latitude = nextModel.latitude;
        const longitude = nextModel.longitude;


        // console.log('restaurants:onUpdat[[[newValue]]]=', JSON.stringify(newValue));
        // console.log('restaurants:onUpdat[[[newValue]]]=', JSON.stringify(nextModel));
        // console.log('restaurants:onUpdat[[[newValue]]]=', JSON.stringify(nextModel.address));
        // console.log('restaurants:latitude, [[[newValue]]]=', JSON.stringify(latitude));
        getAddress(latitude, longitude);

        // const objectID = context.params.restauranId;
        // console.log('restaurants:onUpdate, [[[objectID]]]', objectID);

    });

exports.onPhotoCreated = functions.firestore.document('photos/{photoId}')
    .onCreate(async (snapshot, context) => {
        // Grab the current value of what was written to the Realtime Database.
        const photo:IFBPhoto  = snapshot.data() as IFBPhoto;
        console.log('photos:onCreate, [[[lastValue]]]=', JSON.stringify(photo));

        const photoRef = db.doc(`photos/${context.params.photoId}`);
        const photoSnap = await photoRef.get();
        const photoData:IFBPhoto = photoSnap.data() as IFBPhoto;

        return photoRef.update(
            ParseModelPhotos.updateStatus(photoData)
        );
    });