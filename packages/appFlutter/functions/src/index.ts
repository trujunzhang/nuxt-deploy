import * as functions from 'firebase-functions';
import { IFBRestaurant, IFBPhoto } from 'ieattatypes'
import { getAddress } from './google_geocoding'
import { db, admin } from "./util/admin";
import { ParseModelPhotos } from "./appModels/Photos";


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// Take the text parameter passed to this HTTP endpoint and insert it into 
// Cloud Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    const writeResult = await admin.firestore().collection('messages').add({ original: original });
    // Send back a message that we've succesfully written the message
    res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

exports.onRestaurantCreated = functions.firestore.document('restaurants/{restauranId}')
    .onCreate((snapshot, context) => {
        // Grab the current value of what was written to the Realtime Database.
        const newRestaruant = snapshot.data() as IFBRestaurant;
        console.log('onRestaurantCreated: (newRestaruant)', JSON.stringify(newRestaruant))
        const { latitude, longitude } = newRestaruant
        getAddress(latitude, longitude);
        debugger
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
        const photo: IFBPhoto = snapshot.data() as IFBPhoto;
        console.log('photos:onCreate, [[[lastValue]]]=', JSON.stringify(photo));

        const photoRef = db.doc(`photos/${context.params.photoId}`);
        const photoSnap = await photoRef.get();
        const photoData: IFBPhoto = photoSnap.data() as IFBPhoto;

        return photoRef.update(
            ParseModelPhotos.updateStatus(photoData)
        );
    });