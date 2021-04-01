import 'package:cloud_firestore/cloud_firestore.dart';

class DatabaseReferences {
  CollectionReference restaurants, // Restaurants
      photos, // Photos
      users;

  FirebaseFirestore firestore;

  DatabaseReferences() {
    firestore = FirebaseFirestore.instance;
    restaurants = firestore.collection('restaurants');
    photos = firestore.collection('photos');
    users = firestore.collection('users');
  }
}
