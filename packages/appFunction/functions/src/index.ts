import * as functions from "firebase-functions";
import * as express from 'express';
import { IFBRestaurant } from 'ieattatypes/types/index'
import { db, admin } from './utils/admin'
import { FBCollections } from './utils/constant'
import * as triggers from './triggers'
import * as handlers from './handlers'
import { getAddress } from './utils/google_geocoding'

// Sample Projects:
// https://github.com/hidjou/classsed-react-firebase-functions

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((req: functions.Request, resp: express.Response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  resp.send("Hello from Firebase!");
});

export const userStatistics = functions.https.onCall(
  handlers.User.getInstance().userStatistics
);

// ================
// Created
// ================
exports.onRestaurantCreated = functions.firestore.document(triggers.RestaurantTrigger.getInstance().PATH_CREATED)
  .onCreate(triggers.RestaurantTrigger.getInstance().created);

// ================
// Deleted
// ================
exports.onRestaurantDeleted = functions.firestore.document(triggers.RestaurantTrigger.getInstance().PATH_DELETED)
  .onDelete(triggers.RestaurantTrigger.getInstance().deleted);

exports.onEventDeleted = functions.firestore.document(triggers.EventTrigger.getInstance().PATH_DELETED)
  .onDelete(triggers.EventTrigger.getInstance().deleted);

exports.onRecipeDeleted = functions.firestore.document(triggers.RecipeTrigger.getInstance().PATH_DELETED)
  .onDelete(triggers.RecipeTrigger.getInstance().deleted);



