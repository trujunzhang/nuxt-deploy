import 'package:cloud_firestore/cloud_firestore.dart';
import '../../data/const/firebase.field.dart';
import '../../data/enum/fb_collections.dart';
import '../../data/model/index.dart';

import '../provider/cloud_firestore.provider.dart';
import 'base.repository.dart';

class UserRepository extends BaseRepository {
  final CloudFirestoreApi apiClient;

  UserRepository({required this.apiClient})
      : assert(apiClient != null),
        super(apiClient: apiClient);

  static getInstance() {
    return UserRepository(
        apiClient: CloudFirestoreApi(
            collection: fbCollectionToString(FBCollections.Users)));
  }

  Future<List<ParseModelUsers>> getAll() async {
    final result = await apiClient.getCollection();
    return result.docs
        .map((json) =>
            ParseModelUsers.fromJson(json.data() as Map<String, dynamic>))
        .toList();
  }

  Stream<List<ParseModelUsers>> getStreamAll() {
    return apiClient.getStreamCollection((Query query) {
      return query.orderBy(FirebaseFields.UPDATED_AT, descending: true);
    }).map((query) => query.docs
        .map((e) => ParseModelUsers.fromJson(e.data() as Map<String, dynamic>))
        .toList());
  }

  Future<ParseModelUsers> getId(id) async {
    final json = await apiClient.getDocument(id);
    return ParseModelUsers.fromJson(json.data() as Map<String, dynamic>);
  }

  Future<void> add(ParseModelUsers obj) {
    return apiClient.postDocument(obj.toMap(), id: obj.id);
  }
}
