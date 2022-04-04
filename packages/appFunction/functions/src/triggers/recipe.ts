import * as functions from "firebase-functions";
import { IFBRecipe } from 'ieattatypes/types/index'
import { db, admin } from '../utils/admin'
import { FBCollections } from '../utils/constant'
import { FirebaseFields } from '../utils/firebase_fields'

export class RecipeTrigger {
    private static instance: RecipeTrigger;

    /**
     * The Singleton's constructor should always be private to prrecipe direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): RecipeTrigger {
        if (!RecipeTrigger.instance) {
            RecipeTrigger.instance = new RecipeTrigger();
        }

        return RecipeTrigger.instance;
    }

    // ================
    // Path
    // ================
    public readonly PATH_DELETED: string = '/recipes/{recipeId}';

    // ================
    // Deleted
    // ================
    public deleted = async (snapshot: functions.firestore.QueryDocumentSnapshot, context: functions.EventContext) => {

        // **********************
        // Delete recipes
        // **********************

        const { recipeId } = context.params;
        const batch = db.batch();
        // Grab the current value of what was written to the Realtime Database.
        const original = snapshot.data() as IFBRecipe;
        console.log('recipes: [onDelete], original=', original);

        try {
            // Photos
            let data = await db.collection(FBCollections.Photos)
                .where(FirebaseFields.RECIPE_ID, '==', recipeId)
                .get();
            data.forEach((doc) => {
                batch.delete(db.doc(`/${FBCollections.Photos}/${doc.id}`));
            });

            // Reviews
            data = await db.collection(FBCollections.Reviews)
                .where(FirebaseFields.RECIPE_ID, '==', recipeId)
                .get();
            data.forEach((doc) => {
                batch.delete(db.doc(`/${FBCollections.Reviews}/${doc.id}`));
            });

            return await batch.commit();
        } catch (err) {
            return console.error(err);
        }

    }


}