import 'package:cloud_firestore/cloud_firestore.dart';
import '../../data/const/firebase.field.dart';
import '../../data/enum/fb_collections.dart';
import '../../data/model/index.dart';

import '../provider/cloud_firestore.provider.dart';
import 'base.repository.dart';

class EventRepository extends BaseRepository {
  final CloudFirestoreApi apiClient;

  EventRepository({required this.apiClient})
      : assert(apiClient != null),
        super(apiClient: apiClient);

  static getInstance() {
    return EventRepository(
        apiClient: CloudFirestoreApi(
            collection: fbCollectionToString(FBCollections.Events)));
  }

  Future<List<ParseModelEvents>> getAll() async {
    final result = await apiClient.getCollection();
    return result.docs
        .map((json) =>
            ParseModelEvents.fromJson(json.data() as Map<String, dynamic>))
        .toList();
  }

  Stream<List<ParseModelEvents>> getStreamAll() {
    return apiClient.getStreamCollection((Query query) {
      return query.orderBy(FirebaseFields.UPDATED_AT, descending: true);
    }).map((query) => query.docs
        .map((e) => ParseModelEvents.fromJson(e.data() as Map<String, dynamic>))
        .toList());
  }

  Future<ParseModelEvents> getId(id) async {
    final json = await apiClient.getDocument(id);
    return ParseModelEvents.fromJson(json.data() as Map<String, dynamic>);
  }

  Future<void> add(ParseModelEvents obj) {
    return apiClient.postDocument(obj.toMap());
  }
}
