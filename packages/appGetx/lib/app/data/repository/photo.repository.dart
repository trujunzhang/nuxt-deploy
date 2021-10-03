import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:ieatta/app/data/const/firebase.field.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/data/provider/firestore_photo.dart';
import 'package:ieatta/app/helpers/firestore_path.dart';

import '../provider/cloud_firestore.provider.dart';
import 'base.repository.dart';

class PhotoRepository extends BaseRepository {
  final CloudFirestoreApi apiClient;

  PhotoRepository({required this.apiClient})
      : assert(apiClient != null),
        super(apiClient: apiClient);

  static getInstance() {
    return PhotoRepository(
        apiClient: CloudFirestoreApi(
            collection: fbCollectionToString(FBCollections.Photos)));
  }

  Future<List<ParseModelPhotos>> getAll() async {
    final result = await apiClient.getCollection();
    return result.docs
        .map((json) =>
            ParseModelPhotos.fromJson(json.data() as Map<String, dynamic>))
        .toList();
  }

  Stream<List<ParseModelPhotos>> getStreamAll() {
    return apiClient.getStreamCollection((Query query) {
      return query.orderBy(FirebaseFields.CREATED_AT, descending: true);
    }).map((query) => query.docs
        .map((e) => ParseModelPhotos.fromJson(e.data() as Map<String, dynamic>))
        .toList());
  }

  Future<ParseModelPhotos> getId(id) async {
    final json = await apiClient.getDocument(id);
    return ParseModelPhotos.fromJson(json.data() as Map<String, dynamic>);
  }

  Future<void> add(ParseModelPhotos obj) {
    return apiClient.postDocument(obj.toMap());
  }

  Future<void> setNewPhoto(
      {required String imagePath, required ParseModelPhotos model}) async {
    // Step1: Save photo to Firebase collection.
    await setData(
      path: FirestorePath.singlePhoto(model.uniqueId),
      data: model.toMap(),
    );
    // Step2: Save photo's file to Cloudinary.
    await FirestorePhoto().savePhoto(imagePath: imagePath, model: model);
  }
}
