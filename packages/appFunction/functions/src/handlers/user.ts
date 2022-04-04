import * as functions from "firebase-functions";
import { IFBUserStatistics } from 'ieattatypes/types/index'
import * as express from 'express';
import { FirebaseFields } from '../utils/firebase_fields'
import { FBCollections } from '../utils/constant'
import { db, admin } from '../utils/admin';

export class User {
    private static instance: User;

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
    public static getInstance(): User {
        if (!User.instance) {
            User.instance = new User();
        }

        return User.instance;
    }


    /**
     * counts(Restaurants/Photos/Reviews)
     */
    public userStatistics = async (data: any, context: functions.https.CallableContext) => {
        let userStatistics: IFBUserStatistics = {
            restaurants: 0,
            photos: 0,
            reviews: 0
        }
        try {
            const { userId } = data;

            // Restaurants
            let fbRestaurants = await db.collection(FBCollections.Restaurants)
                .where(FirebaseFields.CREATOR_ID, '==', userId)
                .get();

            let fbPhotos = await db.collection(FBCollections.Photos)
                .where(FirebaseFields.CREATOR_ID, '==', userId)
                .get();

            let fbReviews = await db.collection(FBCollections.Reviews)
                .where(FirebaseFields.CREATOR_ID, '==', userId)
                .get();

            userStatistics = {
                restaurants: fbRestaurants.size,
                photos: fbPhotos.size,
                reviews: fbReviews.size,
            }
        } catch (err) {
        }

        return userStatistics;
    };
}