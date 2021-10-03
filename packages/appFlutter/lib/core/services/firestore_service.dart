import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:ieatta/core/enums/fb_collections.dart';

/*
This class represent all possible CRUD operation for FirebaseFirestore.
It contains all generic implementation needed based on the provided document
path and documentID,since most of the time in FirebaseFirestore design, we will have
documentID and path for any document and collections.
 */
class FirestoreService {
  FirestoreService._();

  static final instance = FirestoreService._();

  Future<void> setData({
    required String path,
    required Map<String, dynamic> data,
    bool merge = false,
  }) async {
    final reference = FirebaseFirestore.instance.doc(path);

    try {
      await reference.set(data, SetOptions(merge: merge)).timeout(Duration(seconds: 5));
    } catch (e) {
      print(e);
    }

    print('$path: $data');
  }

  Future<bool> checkData({
    required String path,
  }) async {
    final DocumentReference reference = FirebaseFirestore.instance.doc(path);
    final Stream<DocumentSnapshot> snapshots = reference.snapshots();

    var first = await snapshots.first;
    return first.exists;
  }

  Future<T> getData<T>({
    required String path,
    required T builder(Map<String, dynamic> data, String documentID),
  }) async {
    final DocumentReference reference = FirebaseFirestore.instance.doc(path);
    final Stream<DocumentSnapshot> snapshots = reference.snapshots();

    T item = await snapshots.map((snapshot) => builder(snapshot.data() as Map<String, dynamic>, snapshot.id)).first;

    return item;
//    return snapshots
//        .map((snapshot) => builder(snapshot.data, snapshot.documentID));
  }

  Future<void> bulkSet({
    required FBCollections path,
    required List<Map<String, dynamic>> datas,
    bool merge = false,
  }) async {
//    final reference = FirebaseFirestore.instance.document(path);
//    final batchSet = FirebaseFirestore.instance.batch();

    print('$path: $datas');
  }

  Future<void> deleteData({required String path}) async {
    final reference = FirebaseFirestore.instance.doc(path);
    print('delete: $path');
    await reference.delete();
  }

  Stream<List<T>> collectionStream<T>({
    required String path,
    required T builder(Map<String, dynamic> data, String documentID),
    Query queryBuilder(Query query)?,
    int sort(T lhs, T rhs)?,
  }) {
    Query query = FirebaseFirestore.instance.collection(path);
    if (queryBuilder != null) {
      query = queryBuilder(query);
    }
    final Stream<QuerySnapshot> snapshots = query.snapshots();
    return snapshots.map((snapshot) {
      final result = snapshot.docs
          .map((snapshot) => builder(snapshot.data() as Map<String, dynamic>, snapshot.id))
          .where((value) => value != null)
          .toList();
      if (sort != null) {
        result.sort(sort);
      }
      return result;
    });
  }

  Stream<QuerySnapshot> snapshotStream<DocumentSnapshot>({
    required FBCollections path,
    Query queryBuilder(Query query)?,
  }) {
    Query query = FirebaseFirestore.instance.collection(fbCollectionToString(path));
    if (queryBuilder != null) {
      query = queryBuilder(query);
    }
    final Stream<QuerySnapshot> snapshots = query.snapshots();
    return snapshots;
  }

  Stream<QuerySnapshot> snapshotPathStream<DocumentSnapshot>({
    required String path,
    Query queryBuilder(Query query)?,
  }) {
    Query query = FirebaseFirestore.instance.collection(path);
    if (queryBuilder != null) {
      query = queryBuilder(query);
    }
    final Stream<QuerySnapshot> snapshots = query.snapshots();
    return snapshots;
  }

  Stream<T> documentStream<T>({
    required String path,
    required T builder(Map<String, dynamic> data, String documentID),
  }) {
    final DocumentReference reference = FirebaseFirestore.instance.doc(path);
    final Stream<DocumentSnapshot> snapshots = reference.snapshots();
    return snapshots.map((snapshot) => builder(snapshot.data() as Map<String, dynamic>, snapshot.id));
  }
}
