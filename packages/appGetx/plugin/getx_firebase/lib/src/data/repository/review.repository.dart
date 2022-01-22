import 'package:cloud_firestore/cloud_firestore.dart';
import '../../data/const/firebase.field.dart';
import '../../data/enum/fb_collections.dart';
import '../../data/model/index.dart';

import '../provider/cloud_firestore.provider.dart';
import 'base.repository.dart';

class ReviewRepository extends BaseRepository {
  final CloudFirestoreApi apiClient;

  ReviewRepository({required this.apiClient})
      : assert(apiClient != null),
        super(apiClient: apiClient);

  static getInstance() {
    return ReviewRepository(
        apiClient: CloudFirestoreApi(
            collection: fbCollectionToString(FBCollections.Reviews)));
  }

  Future<List<ParseModelReviews>> getAll() async {
    final result = await apiClient.getCollection();
    return result.docs
        .map((json) =>
            ParseModelReviews.fromJson(json.data() as Map<String, dynamic>))
        .toList();
  }

  Stream<List<ParseModelReviews>> getStreamAll() {
    return apiClient.getStreamCollection((Query query) {
      return query.orderBy(FirebaseFields.UPDATED_AT, descending: true);
    }).map((query) => query.docs
        .map(
            (e) => ParseModelReviews.fromJson(e.data() as Map<String, dynamic>))
        .toList());
  }

  Future<ParseModelReviews> getId(id) async {
    final json = await apiClient.getDocument(id);
    return ParseModelReviews.fromJson(json.data() as Map<String, dynamic>);
  }

  Future<void> add(ParseModelReviews obj) {
    return apiClient.postDocument(obj.toMap());
  }
}
