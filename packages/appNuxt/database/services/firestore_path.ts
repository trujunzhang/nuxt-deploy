/*
This class defines all the possible read/write locations from the Firestore database.
In future, any new path can be added here.
This class work together with FirestoreService and FirestoreDatabase.
 */

import { CollectionReference, DocumentData } from 'firebase/firebase-storage-compat'
import firebase from 'firebase/compat'
import { FBCollections, PhotoType, ReviewType } from '~/database/constant'

export class FirestorePath {
  private fireStore: firebase.firestore.Firestore

  constructor (fireStore: firebase.firestore.Firestore) {
    this.fireStore = fireStore
  }


  // static String todo(String uid, String todoId) => 'users/$uid/todos/$todoId';

  // // Users
  // static String allUsers() => 'users';
  getUsersList (): CollectionReference<DocumentData> {
    const ref: CollectionReference<DocumentData> = this.fireStore.collection(FBCollections.Users)
    return ref
  }

  //
  // static String singleUser(String userId) => 'users/$userId';
  //
  // // Restaurants
  // static String singleRestaurant(String restaurantId) => 'restaurants/$restaurantId';
  //
  // Recipes
  getRecipesList (restaurantId: string): CollectionReference<DocumentData> {
    let ref: CollectionReference<DocumentData> = this.fireStore.collection(FBCollections.Recipes)
    ref = ref.where('restaurantId', '==', restaurantId)
    return ref
  }

  // Events
  getEventsList (restaurantId: string): CollectionReference<DocumentData> {
    let ref: CollectionReference<DocumentData> = this.fireStore.collection(FBCollections.Events)
    ref = ref.where('restaurantId', '==', restaurantId)
    return ref
  }

  // static String singleEvent(String restaurantId,String eventId) => 'restaurants/$restaurantId/events/$eventId';
  //
  // PeopleInEvents
  getPeopleInEventsList (eventId: string): CollectionReference<DocumentData> {
    let ref: CollectionReference<DocumentData> = this.fireStore.collection(FBCollections.PeopleInEvent)
    ref = ref.where('eventId', '==', eventId)
    return ref
  }

  // Photos
  getPhotosList (relatedId: string, photoType: string): CollectionReference<DocumentData> {
    let ref: CollectionReference<DocumentData> = this.fireStore.collection(FBCollections.Photos)

    ref = ref.where('photoType', '==', photoType)

    switch (photoType) {
      case PhotoType.Restaurant: {
        ref = ref.where('restaurantId', '==', relatedId)
        break
      }
      case PhotoType.Recipe: {
        ref = ref.where('recipeId', '==', relatedId)
        break
      }
      case PhotoType.Waiter: {
        ref = ref.where('restaurantId', '==', relatedId)
        break
      }
      case PhotoType.User: {
        ref = ref.where('userId', '==', relatedId)
        break
      }
    }
    return ref
  }

  // static String photosInRecipe(String restaurantId,String recipeId) =>
  //     'restaurants/$restaurantId/recipes/$recipeId/photos';

  // Reviews
  getReviewsList (relatedId: string, reviewType: string): CollectionReference<DocumentData> {
    let ref: CollectionReference<DocumentData> = this.fireStore.collection(FBCollections.Reviews)

    ref = ref.where('reviewType', '==', reviewType)

    switch (reviewType) {
      case ReviewType.Restaurant: {
        ref = ref.where('restaurantId', '==', relatedId)
        break
      }
      case ReviewType.Event: {
        ref = ref.where('eventId', '==', relatedId)
        break
      }
      case ReviewType.Recipe: {
        ref = ref.where('recipeId', '==', relatedId)
        break
      }
    }
    return ref
  }

  //
  // static String reviewsInEvent(String restaurantId, String eventId) =>
  //     'restaurants/$restaurantId/events/$eventId/reviews';
  //
  // static String reviewsInRecipe(String restaurantId, String recipeId) =>
  //     'restaurants/$restaurantId/recipes/$recipeId/reviews';
  //
  // static String review(String uniqueId) => 'reviews/$uniqueId';
  //
  // static String photo(String uniqueId) => 'photos/$uniqueId';
  //
  // static String user(String id) => 'users/$id';
  //
  // static String todos(String uid) => 'users/$uid/todos';
}
