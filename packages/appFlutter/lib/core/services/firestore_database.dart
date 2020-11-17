import 'dart:async';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:ieatta/core/enums/fb_collections.dart';
import 'package:ieatta/core/services/firestore_path.dart';
import 'package:ieatta/core/services/firestore_service.dart';
import 'package:ieatta/core/utils/geohash_utils.dart';
import 'package:ieatta/src/appModels/models/Photos.dart';
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
  FirestoreDatabase({@required this.uid}) : assert(uid != null);
  final String uid;

  final _firestoreService = FirestoreService.instance;

  //Method to create/update restaurantModel
  Future<void> setRestaurant({@required ParseModelRestaurants model}) async {
    await _firestoreService.setData(
      path: FirestorePath.restaurant(model.uniqueId),
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
  Future<void> setPhoto(
      {@required String imagePath, @required ParseModelPhotos model}) async {
    // Step1: Save photo to Firebase collection.
    await _firestoreService.setData(
      path: FirestorePath.photo(model.uniqueId),
      data: model.toMap(),
    );
    // Step2: Save photo's file to Cloudinary.
    await FirestorePhoto().savePhoto(imagePath: imagePath, model: model);
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

  //Method to retrieve restaurant stream
  Stream<QuerySnapshot> restaurantStream() => _firestoreService.snapshotStream(
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
            return query
                .where("creatorId", isEqualTo: userId)
                .orderBy('updatedAt');
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
