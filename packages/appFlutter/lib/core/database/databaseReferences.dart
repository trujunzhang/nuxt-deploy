import 'package:cloud_firestore/cloud_firestore.dart';

class DatabaseReferences {
  CollectionReference restaurants, // Restaurants
      photos, // Photos
      users;

  Firestore firestore;

  DatabaseReferences() {
    firestore = Firestore.instance;
    restaurants = firestore.collection('restaurants');
    photos = firestore.collection('photos');
    users = firestore.collection('users');
  }
}
