import 'package:cloud_firestore/cloud_firestore.dart';

class CloudFirestoreApi {
  final String collection;
  final FirebaseFirestore firestore = FirebaseFirestore.instance;

  // collections is required
  CloudFirestoreApi({required this.collection});

  // STREAM request
  Stream<QuerySnapshot> getStreamCollection(Query queryBuilder(Query query)?) {
    Query query = firestore.collection(collection);
    if (queryBuilder != null) {
      query = queryBuilder(query);
    }

    final Stream<QuerySnapshot> snapshots = query.snapshots();
    return snapshots;
  }

  Stream<DocumentSnapshot> getStreamDocument(id) =>
      firestore.collection(collection).doc(id).snapshots();

  // GET request
  Future<QuerySnapshot> getCollection() =>
      firestore.collection(collection).get();

  Future<DocumentSnapshot> getDocument(id) =>
      firestore.collection(collection).doc(id).get();

  // Post request
  Future<void> postDocument(obj, {id}) async => id != null
      ? await firestore.collection(collection).doc(id).set(obj)
      : await firestore.collection(collection).doc().set(obj);

  // update
  Future<void> updateDocument(obj, id) async =>
      await firestore.collection(collection).doc(id).update(obj);

  // update
  Future<void> deleteDocument(id) async =>
      await firestore.collection(collection).doc(id).delete();

  Future<void> setData({
    required String path,
    required Map<String, dynamic> data,
    bool merge = false,
  }) async {
    final reference = FirebaseFirestore.instance.doc(path);

    try {
      await reference
          .set(data, SetOptions(merge: merge))
          .timeout(Duration(seconds: 5));
    } catch (e) {
      print(e);
    }

    // print('$path: $data');
  }

  // other Requests
  // Check If Document Exists
  Future<bool> checkIfDocExists(String docId) async {
    try {
      // Get reference to Firestore collection
      var collectionRef = firestore.collection(this.collection);
      var doc = await collectionRef.doc(docId).get();
      return doc.exists;
    } catch (e) {
      throw e;
    }
  }

  Future<bool> checkIfFieldExist(dynamic field) async {
    try {
      // Get reference to Firestore collection
      var collectionRef = firestore
          .collection(this.collection)
          .where(field["key"], isEqualTo: field["value"]);

      // get only one document from Firestore
      var doc = await collectionRef.limit(1).get();

      return doc.docs.isEmpty;
    } catch (e) {
      throw e;
    }
  }
}
