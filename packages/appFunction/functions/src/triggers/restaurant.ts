import * as functions from "firebase-functions";
import { IFBRestaurant } from 'ieattatypes/types/index'
import { db, admin } from '../utils/admin'
import { FBCollections } from '../utils/constant'
import { FirebaseFields } from '../utils/firebase_fields'
import { getAddress } from '../utils/google_geocoding'


export class RestaurantTrigger {
    private static instance: RestaurantTrigger;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): RestaurantTrigger {
        if (!RestaurantTrigger.instance) {
            RestaurantTrigger.instance = new RestaurantTrigger();
        }

        return RestaurantTrigger.instance;
    }

    // ================
    // Path
    // ================
    public readonly PATH_CREATED: string = '/restaurants/{restaurantId}';
    public readonly PATH_DELETED: string = '/restaurants/{restaurantId}';

    // ================
    // Created
    // ================
    public created = async (snapshot: functions.firestore.QueryDocumentSnapshot, context: functions.EventContext) => {

        // Grab the current value of what was written to the Realtime Database.
        const { restaurantId } = context.params;
        const original = snapshot.data() as IFBRestaurant;
        console.log('restaurants: [onCreate], original=', original);
        const { latitude, longitude } = original
        // getAddress(latitude, longitude);

        const nextModel = Object.assign(original, {
            'address': "test"
        });
        try {
            return await db.doc(`${FBCollections.Restaurants}/${restaurantId}`)
                .set(nextModel);
        } catch (err) {
            return console.error(err);
        }
    }


    // ================
    // Deleted
    // ================
    public deleted = async (snapshot: functions.firestore.QueryDocumentSnapshot, context: functions.EventContext) => {

        // **********************
        // Delete events
        // **********************

        const { restaurantId } = context.params;
        const batch = db.batch();
        // Grab the current value of what was written to the Realtime Database.
        const original = snapshot.data() as IFBRestaurant;
        console.log('restaurants: [onDelete], original=', original);

        try {
            // Photos
            let data = await db.collection(FBCollections.Photos)
                .where(FirebaseFields.RESTAURANT_ID, '==', restaurantId)
                .get();
            data.forEach((doc) => {
                batch.delete(db.doc(`/${FBCollections.Photos}/${doc.id}`));
            });

            // Recipes
            data = await db.collection(FBCollections.Recipes)
                .where(FirebaseFields.RESTAURANT_ID, '==', restaurantId)
                .get();
            data.forEach((doc) => {
                batch.delete(db.doc(`/${FBCollections.Recipes}/${doc.id}`));
            });

            // Reviews
            data = await db.collection(FBCollections.Reviews)
                .where(FirebaseFields.RESTAURANT_ID, '==', restaurantId)
                .get();
            data.forEach((doc) => {
                batch.delete(db.doc(`/${FBCollections.Reviews}/${doc.id}`));
            });

            // Events
            data = await db.collection(FBCollections.Events)
                .where(FirebaseFields.RESTAURANT_ID, '==', restaurantId)
                .get();
            data.forEach((doc) => {
                batch.delete(db.doc(`/${FBCollections.Events}/${doc.id}`));
            });

            return await batch.commit();
        } catch (err) {
            return console.error(err);
        }

    }


}