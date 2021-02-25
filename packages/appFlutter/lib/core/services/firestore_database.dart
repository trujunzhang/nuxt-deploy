import 'dart:async';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/services/firestore_path.dart';
import 'package:ieatta/core/services/firestore_service.dart';
import 'package:ieatta/core/utils/geohash_utils.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/appModels/models/Users.dart';
import 'package:meta/meta.dart';

import 'firestore_photo.dart';

/*
This is the main class access/call for any UI widgets that require to perform
any CRUD activities operation in Firestore database.
This class work hand-in-hand with FirestoreService and FirestorePath.

Notes:
For cases where you need to have a special method such as bulk update specifically
on a field, then is ok to use custom code and write it here. For example,
setAllTodoComplete is require to change all todos item to have the complete status
changed to true.
 */
class FirestoreDatabase {
  FirestoreDatabase();

  final _firestoreService = FirestoreService.instance;

  //Method to create/update restaurantModel
  Future<void> setRestaurant({@required ParseModelRestaurants model}) async {
    await _firestoreService.setData(
      path: FirestorePath.singleRestaurant(model.uniqueId),
      data: model.toMap(),
    );
  }

  //Method to create/update restaurantModel
  Future<void> setReview({@required ParseModelReviews model}) async {
    await _firestoreService.setData(
      path: FirestorePath.review(model.uniqueId),
      data: model.toMap(),
    );
  }

  //Method to create/update photoModel
  Future<void> setNewPhoto(
      {@required String imagePath, @required ParseModelPhotos model}) async {
    // Step1: Save photo to Firebase collection.
    await _firestoreService.setData(
      path: FirestorePath.photo(model.uniqueId),
      data: model.toMap(),
    );
    // Step2: Save photo's file to Cloudinary.
    await FirestorePhoto().savePhoto(imagePath: imagePath, model: model);
  }

  //Method to create/update photoModel
  Future<void> setPhoto(ParseModelPhotos model) async {
    await _firestoreService.setData(
      path: FirestorePath.photo(model.uniqueId),
      data: model.toMap(),
    );
  }

  //Method to create/update photoModel
  Future<void> updateUser(ParseModelUsers model) async {
    await _firestoreService.setData(
      path: FirestorePath.user(model.id),
      data: model.toMap(),
    );
  }

  //Method to retrieve photoModel object based on the given uniqueId
  Future<ParseModelPhotos> getPhoto({@required String uniqueId}) =>
      _firestoreService.getData(
        path: FirestorePath.photo(uniqueId),
        builder: (data, documentId) => ParseModelPhotos.fromJson(data),
      );

  //Method to retrieve userModel object based on the given userId
  Future<ParseModelUsers> getUser({@required String userId}) =>
      _firestoreService.getData(
        path: FirestorePath.user(userId),
        builder: (data, documentId) => ParseModelUsers.fromJson(data),
      );

  // ===========================================================
  // Stream: Single<Model>
  // ===========================================================

  //Method to retrieve single user stream
  Stream<ParseModelUsers> singleUserStream(String userId) =>
      _firestoreService.documentStream(
        path: FirestorePath.singleUser(userId),
        builder: (data, documentId) => ParseModelUsers.fromJson(data),
      );

  //Method to retrieve single restaurant stream
  Stream<ParseModelRestaurants> singleRestaurantStream(String restaurantId) =>
      _firestoreService.documentStream(
        path: FirestorePath.singleRestaurant(restaurantId),
        builder: (data, documentId) => ParseModelRestaurants.fromJson(data),
      );

  //Method to retrieve single event stream
  Stream<ParseModelEvents> singleEventStream(
          String restaurantId, String eventId) =>
      _firestoreService.documentStream(
        path: FirestorePath.singleEvent(restaurantId, eventId),
        builder: (data, documentId) => ParseModelEvents.fromJson(data),
      );

  //Method to retrieve single peopleInEvent stream
  Stream<ParseModelPeopleInEvent> singlePeopleInEventStream(
          String restaurantId, String eventId, String peopleInEventId) =>
      _firestoreService.documentStream(
        path: FirestorePath.singlePeopleInEvent(
            restaurantId, eventId, peopleInEventId),
        builder: (data, documentId) => ParseModelPeopleInEvent.fromJson(data),
      );

  // ===========================================================
  // Stream: List<Models>
  // ===========================================================

  //Method to retrieve all restaurants stream
  Stream<List<ParseModelRestaurants>> allRestaurantsStream() =>
      _firestoreService.collectionStream(
        path: FirestorePath.allRestaurants(),
        builder: (data, documentId) => ParseModelRestaurants.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve all users stream
  Stream<List<ParseModelUsers>> allUsersStream() =>
      _firestoreService.collectionStream(
        path: FirestorePath.allUsers(),
        builder: (data, documentId) => ParseModelUsers.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve recipe stream
  Stream<List<ParseModelRecipes>> recipesStream(String restaurantId) =>
      _firestoreService.collectionStream(
        path: FirestorePath.recipes(restaurantId),
        builder: (data, documentId) => ParseModelRecipes.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve event stream
  Stream<List<ParseModelEvents>> eventsStream(String restaurantId) =>
      _firestoreService.collectionStream(
        path: FirestorePath.events(restaurantId),
        builder: (data, documentId) => ParseModelEvents.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve waiter stream
  Stream<List<ParseModelPhotos>> waitersStream(String restaurantId) =>
      _firestoreService.collectionStream(
        path: FirestorePath.waiters(restaurantId),
        builder: (data, documentId) => ParseModelPhotos.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve peopleInEvent stream
  Stream<List<ParseModelPeopleInEvent>> peopleInEventsStream(
          String restaurantId, String eventId) =>
      _firestoreService.collectionStream(
        path: FirestorePath.peopleInEvents(restaurantId, eventId),
        builder: (data, documentId) => ParseModelPeopleInEvent.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve photo stream in the restaurant
  Stream<List<ParseModelPhotos>> photosInRestaurantStream(
          String restaurantId) =>
      _firestoreService.collectionStream(
        path: FirestorePath.photosInRestaurant(restaurantId),
        builder: (data, documentId) => ParseModelPhotos.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve photo stream in the recipe
  Stream<List<ParseModelPhotos>> photosInRecipeStream(
          String restaurantId, String recipeId) =>
      _firestoreService.collectionStream(
        path: FirestorePath.photosInRecipe(restaurantId, recipeId),
        builder: (data, documentId) => ParseModelPhotos.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve review stream in the restaurant
  Stream<List<ParseModelReviews>> reviewsInRestaurantStream(
          String restaurantId, int limit) =>
      _firestoreService.collectionStream(
        path: FirestorePath.reviewsInRestaurant(restaurantId),
        builder: (data, documentId) => ParseModelReviews.fromJson(data),
        queryBuilder: (Query query) {
          var nextQuery = query.orderBy('updatedAt', descending: true);
          return limit == -1 ? nextQuery : nextQuery.limit(limit);
        },
      );

  //Method to retrieve review stream in the event
  Stream<List<ParseModelReviews>> reviewsInEventStream(
          String restaurantId, String eventId) =>
      _firestoreService.collectionStream(
        path: FirestorePath.reviewsInEvent(restaurantId, eventId),
        builder: (data, documentId) => ParseModelReviews.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve review stream in the event
  Stream<List<ParseModelReviews>> reviewsInRecipeStream(
          String restaurantId, String recipeId) =>
      _firestoreService.collectionStream(
        path: FirestorePath.reviewsInRecipe(restaurantId, recipeId),
        builder: (data, documentId) => ParseModelReviews.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  // ===========================================================
  // Stream: QuerySnapshot
  // ===========================================================

  //Method to retrieve restaurant stream
  Stream<QuerySnapshot> restaurantsStream() => _firestoreService.snapshotStream(
      path: FBCollections.Restaurants,
      queryBuilder: (Query query) {
        return query.orderBy('updatedAt', descending: true);
      });

  //Method to retrieve todoModel object based on the given todoId
  Stream<QuerySnapshot> photoStream(
          {@required ParseModelRestaurants restaurant}) =>
      _firestoreService.snapshotStream(
          path: FBCollections.Photos,
          queryBuilder: (Query query) {
            return query
                .where("geoHash",
                    isEqualTo: getGeoHashForRestaurant(restaurant))
                // isGreaterThan: getGeoHashForRestaurant(restaurant))
                // .orderBy('geoHash')
                .orderBy('updatedAt', descending: true);
          });

  //Method to retrieve todoModel object based on the given todoId
  Stream<QuerySnapshot> reviewStream({@required String restaurantId}) =>
      _firestoreService.snapshotStream(
          path: FBCollections.Reviews,
          queryBuilder: (Query query) {
            return query
                .where("restaurantId", isEqualTo: restaurantId)
                .orderBy('updatedAt');
          });

  //Method to retrieve todoModel object based on the given todoId
  Stream<QuerySnapshot> userMenuStream({
    @required String userId,
    @required FBCollections path,
  }) =>
      _firestoreService.snapshotStream(
          path: path,
          queryBuilder: (Query query) {
            return query.where("creatorId", isEqualTo: userId);
            // .orderBy('updatedAt');
          });

//Method to mark all todoModel to be complete
// Future<void> setAllTodoComplete() async {
//   final batchUpdate = Firestore.instance.batch();
//
//   final querySnapshot = await Firestore.instance
//       .collection(FirestorePath.todos(uid))
//       .getDocuments();
//
//   for (DocumentSnapshot ds in querySnapshot.documents) {
//     batchUpdate.updateData(ds.reference, {'complete': true});
//   }
//   await batchUpdate.commit();
// }

// Future<void> deleteAllTodoWithComplete() async {
//   final batchDelete = Firestore.instance.batch();
//
//   final querySnapshot = await Firestore.instance
//       .collection(FirestorePath.todos(uid))
//       .where('complete', isEqualTo: true)
//       .getDocuments();
//
//   for (DocumentSnapshot ds in querySnapshot.documents) {
//     batchDelete.delete(ds.reference);
//   }
//   await batchDelete.commit();
// }
}
