import * as functions from "firebase-functions";
import { IFBEvent } from 'ieattatypes/types/index'
import { db, admin } from '../utils/admin'
import { FBCollections } from '../utils/constant'
import { FirebaseFields } from '../utils/firebase_fields'

export class EventTrigger {
    private static instance: EventTrigger;

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
    public static getInstance(): EventTrigger {
        if (!EventTrigger.instance) {
            EventTrigger.instance = new EventTrigger();
        }

        return EventTrigger.instance;
    }

    // ================
    // Path
    // ================
    public readonly PATH_DELETED: string = '/events/{eventId}';

    // ================
    // Deleted
    // ================
    public deleted = async (snapshot: functions.firestore.QueryDocumentSnapshot, context: functions.EventContext) => {

        // **********************
        // Delete events
        // **********************

        const { eventId } = context.params;
        const batch = db.batch();
        // Grab the current value of what was written to the Realtime Database.
        const original = snapshot.data() as IFBEvent;
        console.log('events: [onDelete], original=', original);

        try {
            // Reviews
            let data = await db.collection(FBCollections.Reviews)
                .where(FirebaseFields.EVENT_ID, '==', eventId)
                .get();
            data.forEach((doc) => {
                batch.delete(db.doc(`/${FBCollections.Reviews}/${doc.id}`));
            });

            // People in Events
            data = await db.collection(FBCollections.PeopleInEvent)
                .where(FirebaseFields.EVENT_ID, '==', eventId)
                .get();
            data.forEach((doc) => {
                batch.delete(db.doc(`/${FBCollections.PeopleInEvent}/${doc.id}`));
            });

            return await batch.commit();
        } catch (err) {
            return console.error(err);
        }

    }


}