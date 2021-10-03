import 'dart:async';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/services/firestore_service.dart';
import 'package:ieatta/src/appModels/models/Events.dart';
import 'package:ieatta/src/appModels/models/PeopleInEvent.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
import 'package:ieatta/src/appModels/models/Recipes.dart';
import 'package:ieatta/src/appModels/models/Restaurants.dart';
import 'package:ieatta/src/appModels/models/Reviews.dart';
import 'package:ieatta/src/appModels/models/Users.dart';

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
class FirestoreList {
  FirestoreList._();

  static final instance = FirestoreList._();

  final _firestoreService = FirestoreService.instance;

  // ===========================================================
  // Stream: List<Models>
  // ===========================================================

  //Method to retrieve all restaurants stream
  Stream<List<ParseModelRestaurants>> allRestaurantsStream() => _firestoreService.collectionStream(
        path: fbCollectionToString(FBCollections.Restaurants),
        builder: (data, documentId) => ParseModelRestaurants.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve all events stream
  Stream<List<ParseModelEvents>> allEventsStream() => _firestoreService.collectionStream(
        path: fbCollectionToString(FBCollections.Events),
        builder: (data, documentId) => ParseModelEvents.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve all peopleInEvents stream
  Stream<List<ParseModelPeopleInEvent>> allPeopleInEventsStream() => _firestoreService.collectionStream(
        path: fbCollectionToString(FBCollections.PeopleInEvent),
        builder: (data, documentId) => ParseModelPeopleInEvent.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve all photos stream
  Stream<List<ParseModelPhotos>> allPhotosStream() => _firestoreService.collectionStream(
        path: fbCollectionToString(FBCollections.Photos),
        builder: (data, documentId) => ParseModelPhotos.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve all recipes stream
  Stream<List<ParseModelRecipes>> allRecipesStream() => _firestoreService.collectionStream(
        path: fbCollectionToString(FBCollections.Recipes),
        builder: (data, documentId) => ParseModelRecipes.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve all users stream
  Stream<List<ParseModelUsers>> allUsersStream() => _firestoreService.collectionStream(
        path: fbCollectionToString(FBCollections.Users),
        builder: (data, documentId) => ParseModelUsers.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );

  //Method to retrieve all reviews stream
  Stream<List<ParseModelReviews>> allReviewsStream() => _firestoreService.collectionStream(
        path: fbCollectionToString(FBCollections.Reviews),
        builder: (data, documentId) => ParseModelReviews.fromJson(data),
        queryBuilder: (Query query) {
          return query.orderBy('updatedAt', descending: true);
        },
      );
}
