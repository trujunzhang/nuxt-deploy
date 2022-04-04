import 'package:cloud_firestore/cloud_firestore.dart';
import '../../data/const/firebase.field.dart';
import 'package:app_models/app_models.dart';

import '../provider/cloud_firestore.provider.dart';
import 'base.repository.dart';

class PeopleInEventsRepository extends BaseRepository {
  final CloudFirestoreApi apiClient;

  PeopleInEventsRepository({required this.apiClient})
      : assert(apiClient != null),
        super(apiClient: apiClient);

  static getInstance() {
    return PeopleInEventsRepository(
        apiClient: CloudFirestoreApi(
            collection: fbCollectionToString(FBCollections.PeopleInEvent)));
  }

  Future<List<ParseModelPeopleInEvent>> getAll() async {
    final result = await apiClient.getCollection();
    return result.docs
        .map((json) => ParseModelPeopleInEvent.fromJson(
            json.data() as Map<String, dynamic>))
        .toList();
  }

  Stream<List<ParseModelPeopleInEvent>> getStreamAll() {
    return apiClient.getStreamCollection((Query query) {
      return query.orderBy(FirebaseFields.UPDATED_AT, descending: true);
    }).map((query) => query.docs
        .map((e) =>
            ParseModelPeopleInEvent.fromJson(e.data() as Map<String, dynamic>))
        .toList());
  }

  Future<ParseModelPeopleInEvent> getId(id) async {
    final json = await apiClient.getDocument(id);
    return ParseModelPeopleInEvent.fromJson(
        json.data() as Map<String, dynamic>);
  }

  Future<void> add(ParseModelPeopleInEvent obj) {
    return apiClient.postDocument(obj.toJson());
  }
}
